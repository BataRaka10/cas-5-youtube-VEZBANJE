
// import VIDEOS from "./../videos.json"

// zbog statea = {videos}
const SearchBar = ({videos}) => {
    // console.log(videos)

    return (
        <form>
            <label>
                Search:
                <input type="text" name="search" onInput={ (e) => SearchVideoByName(e.currentTarget.value)} />
            </label>
        </form>
    )
}

/**
 * vezba: kako kucamo tekst da on vec nalai video
 * How to learn react
 * How to learn css
 * 
 *  How to learn
 */


// how to learn react -> How To Learn reasct = leva i desna strano to lower case
// domaci: mala slova normalizacija


// zasto SearchVideoByName = zato sto nam ime funkcije govori sta je -> prosleiti (name) ne event(e)
// const SearchVideoByName = (name) => {
    // console.log(e.currentTarget.value);
    // console.log(VIDEOS);
//     VIDEOS.forEach( video => {

//         // domaci resenje:
//         name = name.toLowerCase();
//         video.title = video.title.toLowerCase();

//         let recenica = "Kako si"
//         let pretraga = "Kako si"
        // ako mi u recenici imamo if (recenica.includes(pretraga)
        // da li (kako si sadrzi(includes) slova ka)
        // "Kako si" - video.title
//         if (video.title.includes(name)) {
//             console.log(video.title)
//         }

        // console.log(video.title)
        //e.currentTarget.value -> ono sto sm o mi ukuccali isto kao === video.title

        // domaci: toLowerCace
        // if (name.toLowerCase() === video.title.toLowerCase()) {
        //     console.log("Nasli smo video")
        // }
//     });
// };

export default SearchBar;