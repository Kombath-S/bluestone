import { useEffect, useState } from "react"
import { AnimatePresence, motion } from 'framer-motion'

interface ICarousel {
    images: string[],
    auto?: boolean,
    duration?: number
}

const imgs = [
    "/public/img/hero.png",
    "/public/img/blog-1.png",
    "/public/img/blog-2.png",
    "/public/img/blog-3.png",
]

export const Carousel = ({
    images,
    auto,
    duration
}: ICarousel) => {
    images = imgs
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (auto) {
            setInterval(() => {
                setCurrent(current > images.length - 2 ? 0 : current + 1)
            }, duration || 6000)
        }
    })


    return (
        <div className="min-h-full">
            <AnimatePresence>


                {
                    images.map((el, id) => (
                        <>
                            {current == id &&
                                <motion.img
                                    src={el}
                                    alt={el}
                                    key={el}
                                    className="min-h-full  w-full"
                                    initial={{ opacity: 0, }}
                                    animate={{ opacity: 1, }}
                                    exit={{ opacity: 0, }}
                                    transition={{
                                        duration: 0.8,
                                        ease: "linear",
                                    }}
                                />}
                        </>
                    ))
                }
                <div id="dotsCont" className="flex gap-3 absolute bottom-6 right-1/2 translate-x-1/2">
                    {
                        images.map((_, id) => (
                            <>
                                {current == id ?
                                    <motion.span
                                        className=" h-4  border border-gray-100 rounded-full cursor-pointer"
                                        onClick={() => setCurrent(id)}
                                        initial={{ background: "blue", width: "16px" }}
                                        animate={{ background: "blue", width: "36px" }}
                                        exit={{ background: "white", width: "16px" }}
                                        transition={{
                                            duration: 0.,
                                            ease: "easeOut",
                                        }}
                                        key={id + _}
                                    >

                                    </motion.span> :
                                    <motion.span
                                        className="w-4 h-4 bg-white rounded-full cursor-pointer"
                                        onClick={() => setCurrent(id)}
                                        initial={{ background: "white", width: "16px" }}
                                        animate={{ background: "white", width: "16px" }}
                                        exit={{ background: "blue", width: "16px" }}
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeOut"
                                        }}
                                        key={_ + id}
                                    >

                                    </motion.span>
                                }


                            </>
                        ))
                    }
                </div>
            </AnimatePresence>
        </div>
    )
}
