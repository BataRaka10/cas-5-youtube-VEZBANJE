import { useParams } from "react-router-dom";

// import VIDEOS from "./../videos.json"


// useParams() = izvlaci parametre iz adresa
// const { id } = hook

const Video = () => {

    const { id } = useParams();
    console.log(id);

    // const { id } = useParams();
    // console.log(id);
    // domaci
    // let videoFound = null;
    let videoFound = null;
1   
    // if (video.id == id) ako je id od nekog videa iz video.json isti kao id koji smo prosledili ovde /video/1

    // forEach petlja koja prolazi preko svih video klipova iz video.json
    VIDEOS.forEach(video => {
        if (video.id == id) {
            // console.log("VIDEO FOUND")
            videoFound = video
        } 
    })

    // console.log(videoFound)
    if (videoFound === null) {
        return <h1>This video does not exist</h1>
    }

    // VIDEOS.forEach(video => {
        // if (video.id == id)  {
            // console.log("Video found")
            // postavljamo vrednost da nam bude ista kao video = videoFound = video;

            // videoFound = video;
    //     }
    // });

    // console.log(videoFound);
    // if (videoFound === null) {
    //     return <h1>This Video does not exist</h1>
    // }

    return (
        <>
            <h3>{ videoFound.title }</h3>
            <h4>{ videoFound.url }</h4>
            <iframe src={ videoFound.url } ></iframe>
            {/* <h3>{ videoFound.title }</h3>
            <p>{ videoFound.url }</p>
            <iframe src={videoFound.url}> */}
                
            {/* </iframe> */}
            {/* <h2>Test</h2> */}
        </>
    )
}

export default Video;



// const Video = () => {
    

//     return (
//         <>
//             <h3>Test</h3>
//         </>
//     )
// };

// export default Video;