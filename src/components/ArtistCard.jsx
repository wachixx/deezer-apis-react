import {Link} from 'react-router-dom';

const ArtistCard = () => {
    return(
        <div className="card" >
            <div className="card-image"> 
                <Link to="/artist/678"><img src="https://source.unsplash.com/user/c_v_r/250x250" alt="bruno"/></Link>
            </div>
            <div className="card-name">
                <h4><Link to="/artist/678">burna yoo boy</Link></h4>
                <p>15k fans</p>
            </div>
        </div> 
    )
}
export default ArtistCard;