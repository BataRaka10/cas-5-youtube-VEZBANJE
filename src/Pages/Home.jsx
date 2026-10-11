
// import AllVideos from "../Components/AllVideos";
import { useState } from "react";
import AllVideos from "../Components/AllVideos"
import SearchBar from "../Components/SearchBar";
import VIDEOS from "./../videos.json"

// domaci: - Napravimo state (u Home.jsx) koji se zove [videos, setVideos]
// -> inicijalna vrednost -> VIDEOS from "./../videos.json"
// prosledjivanje VIDEOS SearchBaru = <SearchBar videos={ videos }/>

const Home = () => {

    const [videos, setVideos] = useState(VIDEOS); // TO JE PRIKAZ SVIH VIDEO KLIPOVA

    const [filteredVideos, setFilteredVideos] = useState(VIDEOS); //  Ovo je deo koji se menja

    console.log(videos);

    return (
        <>
            <SearchBar videos={ videos }/>
            <AllVideos />
        </>
    )
}

// const Home = () => {
//     return (
//         <>
//             <h2>Glavna stranica</h2>
//             <AllVideos />
//         </>
//     )
// }

export default Home;


// const Home = () => {
//     return (
//         <>
//             <h1>Glavna stranica</h1>
//             <AllVideos />
//         </>
//     );
// };
