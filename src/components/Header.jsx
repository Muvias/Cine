export function Header() {
    return (
        <div className="flex flex-col items-center gap-12">
            <div className="bg-black text-white w-full">
                <p className="text-sm text-end pr-2">Av. dos porcos, 0 - Jaguaré - Sâo Paulo - SP - CEP: 00000-000 | Tel: (00)99876-5432 | Whats</p>
            </div>

            <div className="text-center">
                <h1
                    className="inline-block relative px-14 py-2 text-4xl text font-extrabold border border-black before:absolute before:w-2 before:h-[40%] before:right-full before:top-[30%] before:bg-black after:absolute after:w-2 after:h-[40%] after:left-full after:top-[30%] after:bg-black"
                >
                    CINEMA
                </h1>
            </div>
        </div>
    )
}