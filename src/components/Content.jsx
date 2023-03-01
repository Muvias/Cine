import axios from "axios";
import logoTMDB from "../assets/logoTMDB.svg"

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { Carousel } from 'react-responsive-carousel';
import { ContentHeader } from "./ContentHeader";
import { Modal } from "./Modal";
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
        <div className="max-w-4xl mx-auto mt-8">
            <ContentHeader filter={filter} onFilterChange={handleFilterChange} />

            <div className="flex w-full mt-6 justify-center">
                {isLoading ? <h1>Carregando...</h1> : (
                    <div className="max-w-[80%] sm:max-w-[65%] md:max-w-[50%]">
                        <h1 className="text-center mb-6 text-3xl font-extrabold">EM CARTAZ</h1>
                        <SliderFilter averageScore={averageScore} setAverageScore={setAverageScore} />

                        <Carousel infiniteLoop={true} emulateTouch={true} showStatus={false} autoPlay={true} interval={6000} showArrows={false} showIndicators={false} >
                            {data.filter(movie =>
                                filter.every(id => movie.genre_ids.includes(id)) && movie.vote_average >= averageScore
                            ).map(movie => (
                                <div
                                    key={movie.id}
                                    className="flex flex-col items-center sm:mx-7 gap-4"
                                >
                                    <img
                                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                        alt={`Poster do filme ${movie.title}`}
                                        className="relative max-w-xs"
                                    />
                                    <span className="absolute w-12 md:w-14 right-4 md:right-14 lg:right-20 bottom-[4.2rem]"><img src={logoTMDB} /></span>

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
            {!isLoading && (
                <p className="text-xs font-semibold text-center">Este produto usa a API TMDB, mas não é endossado ou certificado pelo TMDB.</p>
            )}
        </div>
    )
}