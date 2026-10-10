
// import VIDEOS from "./../videos.json"
// import VIDEOS from "./../videos.json" -> ./../ moramo da izadjemo iz Componentsfoldera = ./ trenutni folder -- ../ korak nazad
// import VIDEOS from "./../videos.json"


const GetAllVideos = () => {
    return (
        <>
            { VIDEOS.map( video => {
                return <a href={ video.url } target='_blank'>
                    <img src={ video.cover } alt="" />
                    <h3>{ video.title }</h3>
                </a>
            }) }
        </>
    )
};

export default GetAllVideos;





// const GetAllVideos = () => {
//     return (
//         <>
    
//         </>
//     )
// }

// export default GetAllVideos;

// const VIDEOS = [
//     {
//         id: 1,
//         title: "How to learn React",
//         url: "https://www.youtube.com/watch?v=SqcY0GlETPk&t=163s",
//         cover: "https://i.ytimg.com/vi/SqcY0GlETPk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBvF7R7tYEZqgAYn6fM5A_QgI1e-A",
//     },
//     {
//         id: 2,
//         title: "How to learn css",
//         url: "https://www.youtube.com/watch?v=tfzGsCxutWk",
//         cover: "https://i.ytimg.com/vi/tfzGsCxutWk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCnsXU4B5l-aDNE9GBNxyTuDbQVEA",
//     },
// ]
