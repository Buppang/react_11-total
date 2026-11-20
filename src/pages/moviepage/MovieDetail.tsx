import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { API_KEY } from "./MovieSearch.tsx";

type Movie = {
    Poster: string;
    Title: string;
    Year: string;
    Genre: string;
    Director: string;
    Plot: string;
};

const Container = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const BackBtn = styled.button`
    display: block;
    margin-bottom: 20px;
    background: none;
    border: none;
    color: #ff5959;
    font-size: 16px;
    cursor: pointer;
    padding: 0;

    &:hover {
        text-decoration: underline;
    }
`;
const Plot = styled.p`
    line-height: 1.6;
    margin-top: 20px;
`;

function Detail() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`)
            .then(res => res.json())
            .then((json: Movie) => setMovie(json))
            .catch((err: unknown) => {
                if (err instanceof Error) {
                    console.log(err.message);
                } else {
                    console.log(err);
                }
            });
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <div>
                <div>
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
                <div>
                    <h2>{movie.Title}</h2>
                    <div>
                        YEAR: <span>{movie.Year}</span>
                    </div>
                    <div>
                        Genre: <span>{movie.Genre}</span>
                    </div>
                    <div>
                        Director: <span>{movie.Director}</span>
                    </div>
                    <hr />
                    <Plot>{movie.Plot}</Plot>
                </div>
            </div>
            <BackBtn
                onClick={() => {
                    navigate(-1);
                }}>
                &larr; Back to result
            </BackBtn>
        </Container>
    );
}

export default Detail;
