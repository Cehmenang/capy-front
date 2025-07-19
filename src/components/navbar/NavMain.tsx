import { useEffect, useState } from "react";
import NavList from "./NavList";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsMoonStarsFill } from "react-icons/bs";
import { HiSun } from "react-icons/hi";


export default function NavMain(){
    const [date, setDate] = useState<{ hour: string, minute: string } | null>(null)

    useEffect(()=>{
        setDate({
            hour: new Date().getHours() < 10 ? `0${new Date().getHours()}`: new Date().getHours().toLocaleString(),
            minute: new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}`: new Date().getMinutes().toLocaleString()
        })
    }, [])

    return (
        <div className="nav text-third mb-10 px-20">
            <div className="list flex justify-between">
                <div className="text-nav">
                    <p className="text-[72px] font-bold">Hi User!</p>
                    <p className="text-[30px] mt-[-18px]">Awali hari dengan Semangat Ya!</p>
                </div>
                {date && <div className="waktu flex items-center gap-x-6">
                    {parseInt(date.hour) >= 4 && parseInt(date.hour) < 19 && <HiSun size={65} className="text-yellow-400 p-1 bg-primary rounded-full shadow-lg"/>}
                    {parseInt(date.hour) >= 19 && <BsMoonStarsFill size={65} className="text-yellow-400 p-3 bg-primary rounded-full shadow-lg"/>}
                    {parseInt(date.hour) == 0 && parseInt(date.hour) < 4 && <BsMoonStarsFill size={65} className="text-yellow-400 p-3 bg-primary rounded-full shadow-lg"/>}
                    <p className="text-[60px] font-bold">{date.hour}:{date.minute}</p>
                </div>}
            </div>
        </div>
    )
}