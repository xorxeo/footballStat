import { Link } from 'react-router-dom';

export const Breadcrumbs = (props) => {
  const { crumbs, data } = props;
  console.log(data);

  return (
    <div className="bread-crumbs">
      {crumbs.map((crumb) => (
        <Link to={`${crumb.path}`} key={crumb.path}>
          <span className="bread-crumbs-item" key={crumb.name}>
            {`${crumb.name}>`}
          </span>
        </Link>
      ))}
    </div>
  );
};
