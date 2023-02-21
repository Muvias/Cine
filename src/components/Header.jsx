
export function Header() {
    return (
        <div className="flex items-center gap-2 bg-black/90 text-white w-full">
            <span className="text-xl pl-2 text-blue-600 font-black">VPCine</span>
            <p className="text-xs sm:text-sm font-medium">- Este produto usa a API TMDB, mas não é endossado ou certificado pelo TMDB.</p>
        </div>
    )
}