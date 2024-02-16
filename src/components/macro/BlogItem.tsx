import { KnowMore } from "../micro/KnowMore"

export interface IBlogItem {
    title: string,
    day: number,
    month: string,
    text: string,
    image: string
}

function croptext(text: string, max: number) {
    return text.length < max ? text : text.slice(0, max) + "..."
}

export const BlogItem = ({ data }: { data: IBlogItem }) => {
    const { title, day, month, image, text } = data
    return (
        <div className="w-60 screen-min:w-1/3 phone:w-full min-h-[400px] flex flex-col mb-12 shadow-md">
            <div className="">
                <img src={image} alt={image} className="" />
            </div>
            <div className="mt-6  flex-1 flex flex-col justify-between px-4">
                <div className="flex gap-8 mb-3">
                    <span className="flex flex-col">
                        <span className="font-semibold text-3xl text-blue-2 -mb-1">{day}</span>
                        <span>{month}</span>
                    </span>
                    <h4 className="text-xl font-bold ">{croptext(title, 57)}</h4>
                </div>
                <div className="text-sm text-gray-200 min-h-[100px]">{text}</div>
                <p className="mb-4">
                    <KnowMore color="blue" />
                </p>
            </div>
        </div>

    )
}
