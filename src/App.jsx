import { useState } from 'react'

// import AllVideos from './Components/AllVideos';

// import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
// import Home from './Pages/Home';
// import Video from './Components/Video';

const VIDEOS = [
    {
        id: 1,
        title: "How to learn React",
        url: "https://www.youtube.com/watch?v=SqcY0GlETPk&t=163s",
        cover: "https://i.ytimg.com/vi/SqcY0GlETPk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBvF7R7tYEZqgAYn6fM5A_QgI1e-A",
    },
    {
        id: 2,
        title: "How to learn CSS",
        url: "https://www.youtube.com/watch?v=tfzGsCxutWk",
        cover: "https://i.ytimg.com/vi/tfzGsCxutWk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCnsXU4B5l-aDNE9GBNxyTuDbQVEA",
    },
];

// path = http://localhost:5179
// path "/" => http://localhost:5179/
// path "about" = http://localhost:5179/about
// /video/:id => :id, 1, 5, 7, 10, ..
// /video/12, /video/1
// : wild card = kao korisnici sta god

// BrowserRouter = rutiranje u brauseru
// Routes = lista nekih putanja sa sajta
// path='/'  = putanja  "/" kroz element = koji ucvitava
// 
// svaki route = jeste jerdna putanja <Route path='/' element={<AllVideos />} />
// Kada dodje na glavnu straicu da ocita kompponentu = <Route path='/' element={<AllVideos />} />

// wild card ruta

// novi standard const App = () =>
// stari nacin function App() {}
// radimo petnlju na VIDEOS.map( video)

// VIDEOS.map( video ) -> za svaki video koji imamo radimo varijablu(id, title, url, cover)
const App = () => {
    return (
        <>
            { VIDEOS.map( video => {
                return <a href={ video.url } target='_blank'>
                    <img src={ video.cover } alt="" />
                    <h3>{ video.title }</h3>
                </a>
            } ) }
            {/* <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/video/:id' element={<Video />}></Route>
                </Routes>
            </BrowserRouter> */}
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

  // import AllVideos from "./Components/AllVideos"