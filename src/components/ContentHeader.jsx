import * as Popover from '@radix-ui/react-popover';

import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
import { FilterMovies } from './FilterMovies';

export function ContentHeader({ filter, onFilterChange }) {

    return (
        <div>
            <div className="text-center">
                <h1
                    className="inline-block relative px-14 py-2 text-5xl font-black border border-black before:absolute before:w-2 before:h-[40%] before:right-full before:top-[30%] before:bg-black after:absolute after:w-2 after:h-[40%] after:left-full after:top-[30%] after:bg-black"
                >
                    CINEMA
                </h1>
            </div>

            <Popover.Root>
                <Popover.Trigger className='w-full mt-4'>
                    <div className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-blue-900 text-white shadow-sm hover:bg-blue-700 transition-colors" aria-label="Movies filter">
                        <MixerHorizontalIcon />
                    </div>
                </Popover.Trigger>
                <Popover.Anchor />
                <Popover.Portal>
                    <Popover.Content className='flex flex-col max-w-[620px] p-6 rounded-md bg-slate-100' sideOffset={5} >
                        <FilterMovies filter={filter} onFilterChange={onFilterChange} />
                        <Popover.Close className='h-6 w-6 inline-flex justify-center items-center absolute top-1 right-1 rounded-full text-blue-900 hover:bg-slate-400 transition-colors'>
                            <Cross2Icon />
                        </Popover.Close>
                        <Popover.Arrow  height={8} width={18} className='fill-slate-100' />
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
        </div>
    )
}