import { useState } from "react"
import { AnimatePresence, motion } from 'framer-motion'

export interface IStaff {
    name: string,
    title: string,
    image: string
}


export const StaffCarousel = ({ data }: { data: IStaff[] }) => {
    const [current, setCurrent] = useState(0)
    return (

        <div className="">
            <AnimatePresence>
                {
                    data.map((el, id) =>
                        <>
                            {(current === id) &&
                                <motion.p
                                    className="flex gap-2" key={el.name}
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 100, opacity: 0 }}
                                >
                                    <span className="text-bold">{el.name}:</span>
                                    <span className="">{el.title}</span>
                                </motion.p>}
                        </>

                    )
                }

            </AnimatePresence>
            <div className="mt-6 flex items-center gap-4 -translate-x-12 tablet-min:justify-center">
                <img src="/icons/arrow.png" alt="arrow"
                    className={`-scale-x-100 h-4 cursor-pointer ${current == 0 && "opacity-50"}`}
                    onClick={() => setCurrent(e => e == 0 ? 0 : e - 1)}
                />

                <div className="flex gap-2 ">
                    {data.map(el =>
                        <img src={el.image} key={el.image} alt={el.image} className="w-20 phone:w-14" />
                    )}
                </div>
                <img src="/icons/arrow.png"
                    alt="arrow"
                    className={`h-4 cursor-pointer ${current == data.length - 1 && "opacity-50"} phone:translate-x-10`}
                    onClick={() => setCurrent((e) => e + 1 > data.length - 1 ? e : e + 1)}
                />
            </div>

        </div>
    )
}
