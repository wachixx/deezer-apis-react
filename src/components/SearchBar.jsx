import logo from "../assets/images/logo.svg";
import search from "../assets/images/search_icon.png"
import {Link} from 'react-router-dom';

const SearchBar = () => {
    return(
        <div className="search-bar">
            <div className="search-wrapper">
                <Link to="/"><img className="logo" src={logo} alt=""/></Link>
                <div className="search-input-wrapper">
                   <input type="text" className="searchField" name="search" placeholder="Search Artist"/>
                   <img className="searchIcon" src={search} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default SearchBar;