import axios from "axios";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { Carousel } from 'react-responsive-carousel';
import { ContentHeader } from "./ContentHeader";
import { Modal } from "./modal";
import { SliderFilter } from "./SliderFilter";


export function Content() {
    const [movieId, setMovieId] = useState(505642);
    const [oneMovieData, setOneMovieData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [filter, setFilter] = useState([]);
    const [averageScore, setAverageScore] = useState(0);

    async function getMoviesData() {
        return await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR&page=1`)
            .then(res => res.data.results)
    };

    const { data, isLoading } = useQuery("dataMovies", getMoviesData, { staleTime: 10 * (60 * 1000), });

    useEffect(() => {
        async function getOneMovieData() {
            setIsFetching(true);

            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`);
            setOneMovieData(response.data);

            setIsFetching(false);
        };

        getOneMovieData();
    }, [movieId])

    function handleFilterChange(filter) {
        setFilter(filter)
    };

    return (
        <div className="max-w-4xl mx-auto mt-16">
            <ContentHeader filter={filter} onFilterChange={handleFilterChange} />

            <div className="flex w-full mt-6 justify-center">
                {isLoading ? <h1>Carregando...</h1> : (
                    <div className="max-w-[50%]">
                        <h1 className="text-center mb-6 text-3xl font-extrabold">EM CARTAZ</h1>
                        <SliderFilter averageScore={averageScore} setAverageScore={setAverageScore} />

                        <Carousel infiniteLoop={true} emulateTouch={true} showStatus={false} autoPlay={true} interval={6000} showArrows={false}>
                            {data.filter(movie =>
                                filter.every(id => movie.genre_ids.includes(id)) && movie.vote_average >= averageScore
                            ).map(movie => (
                                <div
                                    key={movie.id}
                                    className="flex flex-col items-center mb-14 mx-7 gap-4"
                                >
                                    <img
                                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                        alt={`Poster do filme ${movie.title}`}
                                        className="max-w-xs"
                                    />

                                    <div
                                        className="w-[80%]"
                                        onClick={() => setMovieId(movie.id)}
                                    >
                                        <Modal movieData={oneMovieData} isLoading={isFetching} />
                                    </div>

                                </div>
                            ))}
                        </Carousel>
                    </div>
                )}
            </div>
        </div>
    )
}