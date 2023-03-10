import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

export function Modal({ movieData, isLoading }) {
    return (
        <Dialog.Root>
            <Dialog.Trigger
                type='button'
                className='w-full flex items-center justify-center py-4 px-6 font-semibold border rounded-lg border-blue-800 hover:border-blue-500 hover:text-slate-600 transition-colors'
            >
                Veja mais
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='w-full h-full fixed inset-0 bg-black/80' />
                {isLoading ? <h1>Carregando...</h1> : (
                    <Dialog.Content className='absolute gap-4 w-full max-w-3xl p-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-slate-200'>
                        <img
                            src={`https://image.tmdb.org/t/p/original${movieData.backdrop_path}`}
                            alt={`Poster do filme ${movieData.title}`}
                            className="w-full"
                        />

                        <div>
                            <Dialog.Title className='flex justify-between items-center text-3xl font-bold leading-tight mt-4'>
                                <p>{movieData.title}</p>
                                <span className='px-1 border border-blue-900 text-blue-900 font-bold'>{movieData.vote_average?.toFixed(1)}</span>
                            </Dialog.Title>
                            <p className='font-bold text-blue-900'>
                                Duração: <span className='font-semibold text-black'>{movieData.runtime}min</span>
                            </p>

                            <Dialog.Description className='mt-6 mb-16 text-lg font-medium sm:my-6'>
                                {movieData.overview !== "" ? movieData.overview : "Ainda não há descrição para este filme :("}
                            </Dialog.Description>

                            <div className='fixed bottom-4 mt-4'>
                                <p className='flex flex-wrap items-center font-bold gap-4 text-blue-900'>
                                    Gêneros: {movieData.genres?.map(genre =>
                                        <span className='font-bold px-4 py-1 border text-black border-gray-800' key={genre.id}>{genre.name}</span>
                                    )}
                                </p>
                            </div>
                        </div>
                        <Dialog.Close className='h-8 w-8 inline-flex justify-center items-center absolute top-2 right-2 rounded-full text-blue-900 hover:bg-slate-400 transition-colors'>
                            <Cross2Icon className='w-full h-5' />
                        </Dialog.Close>
                    </Dialog.Content>
                )}
            </Dialog.Portal>
        </Dialog.Root>
    )
}