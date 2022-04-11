import { Link, Route } from 'react-router-dom';


export const Breadcrumbs = ({ match, ...rest }) => (
    <span>
        <Link to={match.url || ''} className={match.isExact ? 'breadcrumb active' : 'breadcrumb'}>
            {match.url.substr(match.url.lastIndexOf('/')+1, match.url.length)}
        </Link>
        <Route path={`${match.url}/:path`} component={Breadcrumbs} />
    </span>
  );