import AlbumCard from "../components/Album";
import TopTracks from "../components/TopTracks";

const ArtistDetails = () => {
    return(
        <div className="home-containter">
            <div className="artist-container">

                <div className="left-colm">
                    <img src="https://source.unsplash.com/user/c_v_r/250x250" alt="bruno"/>
                    <div className="left-colm-details">
                        <h4>bruno mars </h4>
                        <p>fans:382k</p>
                    </div>
                </div>

                <div className="right-colm">
                    <TopTracks/>
                </div>

            </div>
            <h2>Albums</h2>
            <div className="artist-wrapper">
                <AlbumCard/>
                <AlbumCard/>
            </div>
        </div>
    )
}
export default ArtistDetails;