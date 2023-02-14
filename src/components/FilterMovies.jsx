import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

const categories = [
    "2D",
    "3D",
    "DUBLADO",
    "LEGENDADO",
    "NACIONAL"
]

export function FilterMovies({ onFilterChange }) {
    return (
        <div className='flex flex-col mt-4'>
            {categories.map(categorie => {
                return (
                    <Checkbox.Root
                        key={categorie}
                        onCheckedChange={() => onFilterChange([18,28])}
                        className="flex items-center gap-3 mt-2 group disabled:cursor-not-allowed"
                    >
                        <div className='w-6 h-6 flex items-center justify-center rounded-lg bg-white group-hover:bg-blue-700 transition-colors'>
                            <Checkbox.Indicator className="text-blue-900">
                                <CheckIcon />
                            </Checkbox.Indicator>
                        </div>

                        <span
                            className='text-lg font-extrabold leading-tight text-zinc-400 group-data-[state=checked]:text-blue-900 group-hover:text-blue-800 transition-all'
                        >
                            {categorie}
                        </span>
                    </Checkbox.Root>
                )
            })}
        </div>

    )
}