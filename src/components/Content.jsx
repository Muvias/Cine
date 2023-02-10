import axios from "axios";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { Carousel } from 'react-responsive-carousel';
import { ContentHeader } from "./ContentHeader";
import { Modal } from "./modal";

const weekDays = [
    "DOM",
    "SEG",
    "TER",
    "QUA",
    "QUI",
    "SEX",
    "SAB"
];

export function Content() {
    const [active, setActive] = useState("DOM");
    const [movieId, setMovieId] = useState(505642);
    const [oneMovieData, setOneMovieData] = useState([]);

    async function getMoviesData() {
        return await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=9cd72d857790f9c47bf6782f62d8a48e&language=pt-BR&page=1")
            .then(res => res.data.results)
    };

    const { data, isLoading } = useQuery("dataMovies", getMoviesData, { staleTime: 10 * (60 * 1000), });

    useEffect(() => {
        async function getOneMovieData() {
            return await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9cd72d857790f9c47bf6782f62d8a48e&language=pt-BR`)
                .then(res => setOneMovieData(res.data))
        };

        getOneMovieData()
    }, [movieId])

    return (
        <div className="max-w-4xl mx-auto mt-16">
            <ContentHeader />

            <div className="flex justify-center mt-16 pb-12 border-b-2 gap-8 text-4xl font-black">
                {weekDays.map(day => (
                    <h1
                        key={day}
                        className={`cursor-pointer  ${active === day ? "text-blue-900" : "text-gray-400"}`}
                        onClick={() => setActive(day)}
                    >
                        {day}
                    </h1>
                ))}
            </div>

            <div className="flex w-full mt-6 justify-center">
                {isLoading ? <h1>Carregando...</h1> : (
                    <div className="max-w-[50%]">
                        <h1 className="text-center mb-8 text-3xl font-extrabold">EM CARTAZ</h1>
                        <Carousel infiniteLoop={true} emulateTouch={true} showStatus={false} interval={8000} >
                            {data.map(movie => (
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
                                        <Modal movieData={oneMovieData} />
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