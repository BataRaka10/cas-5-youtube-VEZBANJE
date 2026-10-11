
import VIDEOS from "./../videos.json"

const SearchBar = () => {
    return (
        <form>
            <label>
                Search:
                <input type="text" name="search" onInput={ (e) => SearchVideoByName(e.currentTarget.value)} />
            </label>
        </form>
    )
}

// how to learn react -> How To Learn reasct = leva i desna strano to lower case
// domaci: mala slova normalizacija


// zasto SearchVideoByName = zato sto nam ime funkcije govori sta je -> prosleiti (name) ne event(e)
const SearchVideoByName = (name) => {
    // console.log(e.currentTarget.value);
    // console.log(VIDEOS);
    VIDEOS.forEach( video => {
        // console.log(video.title)
        //e.currentTarget.value -> ono sto sm o mi ukuccali isto kao === video.title

        // domaci: toLowerCace
        if (name.toLowerCase() === video.title.toLowerCase()) {
            console.log("Nasli smo video")
        }
    });
};

export default SearchBar;