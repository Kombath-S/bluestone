import { Padded } from "../micro/style"

export const TopBar = () => {
    return (
        <div className="flex bg-gray-400 text-white m-h-10 py-2">
            <Padded className="flex justify-between items-center tablet:flex-col tablet:items-start">

                <div className="left flex gap-2">
                    <a href="#" className="cursor-pointer">India</a>
                    <a href="#" className="cursor-pointer">Europe</a>
                    <a href="#" className="cursor-pointer">USA</a>
                </div>
                <div className="right flex gap-6 items-center  tablet:flex-col tablet:items-start">
                    <div className="flex gap-3 items-center">
                        <a href="#">
                            <span className="flex gap-0 items-center">
                                <img src="/public/icons/call-white.png" alt="phone" className="w-4 h-3" />
                                <span className="text-sm">+91 45102 45421 14215 11440</span>
                            </span>
                        </a>
                        <a href="#">
                            <span className="flex gap-1 items-center">
                                <img src="/public/icons/env-white.png" alt="email" className="w-4 h-3" />
                                <span className="text-sm">info@bluestoneworldwide.com</span>
                            </span>
                        </a>

                    </div>
                    <div className="flex gap-3 tablet:hidden">
                        <a href="#">
                            <img src="/public/icons/twitter-white.png" alt="twitter" className=" h-4" />
                        </a>
                        <a href="#">
                            <img src="/public/icons/facebook-white.png" alt="facebook" className="w-2 " />
                        </a>
                        <a href="#">
                            <img src="/public/icons/youtube-white.png" alt="youtube" className=" h-4" />
                        </a>

                    </div>

                </div>
            </Padded>
        </div>
    )
}
