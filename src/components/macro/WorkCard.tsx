import { motion, } from 'framer-motion'
import { useState } from 'react'


interface IWork {
    day: number,
    month: string,
    image: string,
    partner: string,
    type: "Exhibition",
    place: string,
}


export const WorkCard = ({ image, day, month, place, partner, type }: IWork) => {
    const [hov, setHov] = useState(false)


    return (
        <motion.div className="flex-1 cursor-pointer bg-blue relative phone:h-72"
            animate={{ flex: hov ? 2 : 1 }}
            onHoverStart={() => { setHov(true) }}
            onHoverEnd={() => { setHov(false) }}>
            <div className="">

            </div>
            <img src={image} alt={image} className="max-h-full w-full h-full" />
            <div className="bg-red text-white absolute top-3 left-4 flex-col flex text-center px-3 py-1">
                <span className="text-2xl font-bold">{day}</span>
                <span className="">{month}</span>
            </div>

            {partner &&
                <motion.div
                    className="absolute bg-white z-10 -bottom-14 left-1/4 py-4 px-6 shadow-2xl max-w-80"
                animate={{ y: hov ? 0 : 30, opacity: hov ? 1 : 0 }}
                >
                    <h2 className="text-blue text-xl font-bold mb-2">{partner}</h2>
                    <p className="text-sm " >
                        <span className="text-bold">{type}: </span>
                        <span className="">{place}</span>
                    </p>
                    <p>
                        <span className="text-blue">
                            Know More
                        </span>
                    </p>
                </motion.div>}
        </motion.div>

    )
}
