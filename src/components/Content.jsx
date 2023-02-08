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
    return (
        <div className="max-w-5xl mx-auto mt-16">
            <div className="text-center">
                <h1
                    className="inline-block relative px-14 py-2 text-4xl font-extrabold border border-black before:absolute before:w-2 before:h-[40%] before:right-full before:top-[30%] before:bg-black after:absolute after:w-2 after:h-[40%] after:left-full after:top-[30%] after:bg-black"
                >
                    CINEMA
                </h1>
            </div>

            <div className="mt-16 mb-8 text-center">
                <h1 className="text-4xl font-extrabold">PROGRAMAÇÃO</h1>
            </div>

            <div className="flex justify-center mt-16 pb-12 border-b-2 gap-4 text-4xl font-bold">
                {weekDays.map(day => (
                    <h1>
                        {day}
                    </h1>
                ))}
            </div>
        </div>
    )
}