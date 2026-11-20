import SearchBar from "./SearchBar.tsx";
import { CenterLayout, CenterPanel } from "../../styles/CommonStyle.ts";

function Movie() {
    return (
        <CenterLayout>
            <CenterPanel>
                    <h2>Movie Finder</h2>
                    <SearchBar keyword={""} />
            </CenterPanel>
        </CenterLayout>
    );
}

export default Movie;
