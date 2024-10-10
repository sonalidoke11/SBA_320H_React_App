import {Link} from 'react-router-dom'

export default function Nav(){
    return(
        <div className="nav">
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/search">
            <div>Search</div>
          </Link>
          <Link to="/series">
            <div>Series</div>
          </Link>
          <Link to="/episodes">
            <div>Episodes</div>
          </Link> 
          <Link to="/movies">
            <div>Movies</div>
          </Link>
      </div>
    )
}