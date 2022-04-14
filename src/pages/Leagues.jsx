import { useGetCompetitionsQuery } from '../store/footballAPI';
import { Link, useParams, useHistory, Route } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';

import Pagination from '../components/pagination/Pagination';
import { useDataSlice } from '../hooks/useDataSlice';
import { Search } from '../components/search/Search';
import { useGetAvaibleCompetitionsQuery } from '../hooks/useGetAvaibleCompetitionsQuery';

import './Leagues.css';
import '../App.css';
import '../components/bread-crumbs/breadCrumbs.css';

import { useLocation } from 'react-router-dom';

let pageSize = 9;

export const Leagues = () => {
  const { availableLeaguesData, isLoading, isError } = useGetAvaibleCompetitionsQuery();
  const { page: currentPage = 1 } = useParams();
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');
  const [activeSearchInput, setActiveSearchInput] = useState(false);
  const [activeSearchButton, setActiveSearchButton] = useState(false);

  const filteredLeaguesData = useMemo(() => {
    // console.log("avaiblelegues", data)
    if (availableLeaguesData.length) {
      // console.log("if true", data.competitions)
      return availableLeaguesData.filter(
        (competition) =>
          competition.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          competition.area.name.toLowerCase().includes(searchValue.toLowerCase()),
      );
    }

    return [];
  }, [availableLeaguesData, searchValue]);

  const location = useLocation();

  console.log('filteredLeaguesData', filteredLeaguesData);
  console.log('filteredLeaguesData', location.pathname);

  const currentLeaguesData = useDataSlice({
    arr: filteredLeaguesData,
    pageSize,
    currentPage,
  });

  console.log('currentLeaguesData', currentLeaguesData);
  console.log(currentPage);

  const onPageChangeHandler = (pageNumber) => {
    history.push(`/competitions/${pageNumber}`);
  };

  console.log('input value', searchValue);

  return (
    <div className="content">
      <Search
        value={searchValue}
        onInput={setSearchValue}
        activeSearchInput={activeSearchInput}
        setActiveSearchInput={setActiveSearchInput}
        setSearchValue={setSearchValue}
        activeSearchButton={activeSearchButton}
        setActiveSearchButton={setActiveSearchButton}
      />

      <div className="leagues-container">
        {isLoading && <div className="loading"></div>}
        {isError && <div className="error"></div>}
        {Boolean(currentLeaguesData.length) &&
          currentLeaguesData.map((competition) => (
            <div className="leagues-item" key={competition.id}>
              <Link to={`/competitions/${competition.id}/matches`}>
                <p> {competition.name} </p>
                <img className="crest" src={competition.area.ensignUrl} width="50" height="50"></img>
                <p> {competition.area.name} </p>
              </Link>
            </div>
          ))}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={Number(currentPage)}
        totalCount={filteredLeaguesData.length}
        pageSize={pageSize}
        onPageChange={onPageChangeHandler}
      />
    </div>
  );
};
