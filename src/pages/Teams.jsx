import { useGetTeamsQuery } from '../store/footballAPI';
import { Link, useParams, useHistory, useRouteMatch } from 'react-router-dom';
import { useMemo, useState } from 'react';

import Pagination from '../components/pagination/Pagination';
import { useDataSlice } from '../hooks/useDataSlice';
import { Search } from '../components/search/Search';

import './Teams.css';
import '../App.css';

let pageSize = 9;

export const Teams = () => {
  const { data, isLoading, isError } = useGetTeamsQuery();
  const { page: currentPage = 1 } = useParams();
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');

  const filteredTeamsData = useMemo(() => {
    if (data) {
      // console.log("input value", searchValue)
      return data.teams.filter((team) => team.name.toLowerCase().includes(searchValue.toLowerCase()));
    }

    return [];
  }, [data, searchValue]);

  const currentDataTeams = useDataSlice({
    arr: filteredTeamsData,
    pageSize,
    currentPage,
  });

  const onPageChangeHandler = (pageNumber) => {
    history.push(`/teams/${pageNumber}`);
  };

  return (
    <div className="content">
      <Search value={searchValue} onInput={setSearchValue} />
      <div className="teams-container">
        {isLoading && <div className="loading">111</div>}
        {isError && <div className="error"></div>}
        {Boolean(currentDataTeams.length) &&
          currentDataTeams.map((team) => (
            <div className="teams-item" key={team.id}>
              <Link to={`/teams/${team.id}/matches`}>
                <img className="crest" src={team.crestUrl} width="50" height="50"></img>
                {team.name}
              </Link>
            </div>
          ))}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={Number(currentPage)}
        totalCount={filteredTeamsData.length}
        pageSize={pageSize}
        onPageChange={onPageChangeHandler}
      />
    </div>
  );
};
