import { useState } from 'react'

// import Video from './Components/Videos';
// import AllVideos from "./Components/AllVideos"

const VIDEOS = [
    {
        id: 1,
        title: "How to learn React",
        url: "https://www.youtube.com/watch?v=SqcY0GlETPk&t=163s",
        cover: "https://i.ytimg.com/vi/SqcY0GlETPk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBvF7R7tYEZqgAYn6fM5A_QgI1e-A",
    },
    {
        id: 2,
        title: "How to learn css",
        url: "https://www.youtube.com/watch?v=tfzGsCxutWk",
        cover: "https://i.ytimg.com/vi/tfzGsCxutWk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCnsXU4B5l-aDNE9GBNxyTuDbQVEA",
    },
];
// novi standard const App = () =>
// stari nacin function App() {}
// radimo petnlju na VIDEOS.map( video)
const App = () => {
    return (
        <>
            { VIDEOS.map( video => {
                return <a href={ video.url} target='_blank'>
                    <img src={ video.cover } alt="" />
                    <h3>{ video.title }</h3>
                </a>
            }) }
            {/* <AllVideos /> */}
        </>
    );
}

export default App;

{/* { VIDEOS.map( video => {
    return <a href="" target='_blank'>
        <img src={ video.cover } alt="" />
        <h3>{ video.title }</h3>
    </a>
  }) } */}