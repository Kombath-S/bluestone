interface iknowMore {
    color: 'white' | 'blue'
}

export const KnowMore = ({ color }: iknowMore) => {
    return (
        <span className={` ${color == 'white'? 'text-white': "text-blue"} cursor-pointer flex items-center gap-2 active:scale-90`}>
            Know More
            <span className="">
                {(color == 'white') && <img src="/public/icons/arrow.png" alt="arrow" className="" />}
                {(color == 'blue') && <img src="/public/icons/arrow-blue.png" alt="arrow" className="h-3 w-4" />}
            </span>
        </span>
    )
}
