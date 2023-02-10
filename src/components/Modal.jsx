import * as Dialog from '@radix-ui/react-dialog';

export function Modal({ movieData }) {
    return (
        <Dialog.Root>
            <Dialog.Trigger
                type='button'
                className='w-full flex items-center justify-center py-4 px-6 font-semibold gap-3  border rounded-lg border-green-500 hover:border-green-300 transition-colors'
            >
                Veja mais
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='w-full h-full fixed inset-0 bg-black/80' />
                <Dialog.Content className='absolute gap-4 w-full max-w-3xl p-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-slate-200'>
                    <img
                        src={`https://image.tmdb.org/t/p/original${movieData.backdrop_path}`}
                        alt={`Poster do filme ${movieData.title}`}
                        className="w-full"
                    />

                    <div>
                        <Dialog.Title className='text-3xl font-bold leading-tight mt-2'>
                            {movieData.title}
                        </Dialog.Title>

                        <Dialog.Description className='my-4 font-medium'>
                            {movieData.overview}
                        </Dialog.Description>

                        <div className='fixed bottom-4'>
                            <p className='font-semibold flex gap-4'>
                                Gêneros: {movieData.genres?.map(genre =>
                                    <span className='font-medium' key={genre.id}>{genre.name}</span>
                                )}
                            </p>
                        </div>
                    </div>
                    <Dialog.Close />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}