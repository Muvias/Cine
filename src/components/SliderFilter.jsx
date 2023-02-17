import * as Slider from '@radix-ui/react-slider';

export function SliderFilter({ averageScore, setAverageScore }) {

    function handleSliderChange(newValue) {
        setAverageScore(newValue)
    };

    return (
        <div className='flex gap-2 items-center justify-center mb-6'>
            <h1 className='font-semibold'>Aval. min.:</h1>
            <Slider.Root
                className="relative flex items-center w-36 h-5 select-none touch-none text-black"
                defaultValue={[0]}
                max={10}
                step={1}
                value={[averageScore]}
                onValueChange={handleSliderChange}
                aria-label="Média de Avaliação"
            >
                <Slider.Track className="relative flex-grow rounded-full h-1 bg-black/20">
                    <Slider.Range className="absolute rounded-full h-full bg-blue-900" />
                </Slider.Track>
                <Slider.Thumb className="flex items-center justify-center w-5 h-5 shadow-sm rounded-xl text-white font-sans bg-blue-900 hover:bg-blue-800 focus:outline-none focus:shadow-lg">
                    {averageScore}
                </Slider.Thumb>
            </Slider.Root>
        </div>
    )
}