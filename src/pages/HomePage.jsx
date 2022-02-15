import ArtistCard from "../components/ArtistCard";

const HomePage = () => {
    return(
        <div className="home-containter">
            <h2>Popular Artists</h2>
            <div className="artist-wrapper">
                <ArtistCard/>
                <ArtistCard/>
                <ArtistCard/>
                <ArtistCard/>
                <ArtistCard/>
                <ArtistCard/>
            </div>
        </div>
    )
}

export default HomePage;