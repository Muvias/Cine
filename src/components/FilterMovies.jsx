import axios from 'axios';
import * as Checkbox from '@radix-ui/react-checkbox';

import { CheckIcon } from '@radix-ui/react-icons';
import { useQuery } from 'react-query';

export function FilterMovies({ filter, onFilterChange }) {
    async function getAllGenreMovie() {
        return await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`)
            .then(res => res.data.genres)
    };

    const { data, isLoading } = useQuery("genreMovies", getAllGenreMovie, { staleTime: 10 * (60 * 1000), });

    function handleToggleFilter(categorieId) {
        let ids = [];

        if (filter.includes(categorieId)) {
            ids = filter.filter(id => id !== categorieId)
        } else {
            ids = [...filter, categorieId];
        }

        onFilterChange(ids);
    }

    return (
        <>
            {isLoading ? <h1>Carregando...</h1> : (
                <div className='flex flex-wrap justify-between gap-4'>
                    {data.map(categorie => {
                        return (
                            <Checkbox.Root
                                key={categorie.name}
                                checked={filter.includes(categorie.id)}
                                onCheckedChange={() => handleToggleFilter(categorie.id)}
                                className="flex items-center w-[30%] gap-3 mt-2 group disabled:cursor-not-allowed"
                            >
                                <div className='w-6 h-6 flex items-center justify-center rounded-lg bg-white group-hover:bg-blue-700 transition-colors'>
                                    <Checkbox.Indicator className="text-blue-900">
                                        <CheckIcon />
                                    </Checkbox.Indicator>
                                </div>

                                <span
                                    className='text-left text-lg font-extrabold leading-tight text-zinc-400 group-data-[state=checked]:text-blue-900 group-hover:text-blue-800 transition-all'
                                >
                                    {categorie.name}
                                </span>
                            </Checkbox.Root>
                        )
                    })}
                </div>
            )}
        </>
    )
}