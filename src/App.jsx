import { useState } from 'react'

// import AllVideos from './Components/AllVideos';
import AllVideos from './Components/AllVideos';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Video from './Components/Video';

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
// svaki route = jeste jedna putanja <Route path='/' element={<AllVideos />} />
// Kada dodje na glavnu straicu da ocita kompponentu = <Route path='/' element={<AllVideos />} />

// novi standard const App = () =>
// stari nacin function App() {}
// radimo petnlju na VIDEOS.map( video)


// VIDEOS.map( video ) -> za svaki video koji imamo radimo varijablu(id, title, url, cover)


const App = () => {
    return (
        <>
            < AllVideos />
            {/* < AllVideos /> */}
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

// const App = () => {} -> novi standard
{/* { VIDEOS.map( video => {
    return <a href="" target='_blank'>
        <img src={ video.cover } alt="" />
        <h3>{ video.title }</h3>
    </a>
  }) } */}

  // import AllVideos from "./Components/AllVideos"