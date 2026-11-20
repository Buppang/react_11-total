import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar.tsx";
import MovieCard from "./MovieCard.tsx";

export const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

export type Movie = {
    imdbID: string;
    Poster: string;
    Title: string;
    Year: string;
    Genre: string;
    Director: string;
    Plot: string;
};

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 100px;
    justify-content: center;
`;

function Search() {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("keyword") ?? "";

    const [list, setList] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!keyword) return;

        setLoading(true);
        setList([]);
        setError("");

        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(keyword)}`)
            .then(res => res.json())
            .then(json => setList(json.Search ?? []))
            .catch((err: unknown) => {
                if (err instanceof Error) {
                    console.log(err.message);
                } else {
                    console.log(err);
                }
                setError("Error fetching keyword");
            })
            .finally(() => setLoading(false));
    }, [keyword]);

    return (
        <div>
            <h3>
                Result: {list.length} {keyword}{" "}
                {list.length > 1 ? <span>movies</span> : <span>movie</span>}
            </h3>
            <SearchBar keyword={keyword} />
            <List>
                {loading ? (
                    <div>Loading...</div>
                ) : list.length === 0 ? (
                    <div>{error}</div>
                ) : (
                    list.map(item => {
                        return <MovieCard key={item.imdbID} movie={item} />;
                    })
                )}
            </List>
        </div>
    );
}

export default Search;
