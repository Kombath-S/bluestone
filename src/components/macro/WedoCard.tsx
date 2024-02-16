
interface Ido {
    image: string,
    text: string,
    more?: boolean
}

export const WedoCard = ({ image, text, more }: Ido) => {
    return (
        <div className="relative max-w-50 cursor-pointer"
        >
            <img src={image} alt={image} className="" />
            <div className="absolute w-full h-full top-0 overlayer"></div>
            <div className="absolute bottom-0 text-white font-bold mb-6 ml-6">
                <p className="text-lg max-w-64 ">{text}</p>
                {
                    more &&
                    <span className="mt-4 flex items-center gap-2">
                        Know More
                        <img src="/icons/arrow.png" alt="arrow" className="w-4 h-3" />
                    </span>
                }

            </div>
        </div>
    )
}
