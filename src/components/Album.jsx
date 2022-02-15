import {Link} from 'react-router-dom';

const AlbumCard = () => {
    return(
        <div className="card" >
            <div className="card-image"> 
                <Link to="#"><img src="https://source.unsplash.com/user/c_v_r/250x250" alt="bruno"/></Link>
            </div>
            <div className="card-name">
                <h4><Link to="#">burna yoo boy</Link></h4>
                <p>2009</p>
            </div>
        </div> 
    )
}
export default AlbumCard;