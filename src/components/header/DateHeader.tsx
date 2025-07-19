import { BsMoonStarsFill } from "react-icons/bs";
import { HiSun } from "react-icons/hi";

export default function DateHeader({ date }: { date: { hour: string, minute: string } }){
    return (
        <div className="waktu flex items-center gap-x-2">
            {(parseInt(date.hour) > 0 && parseInt(date.hour) < 4) && <BsMoonStarsFill size={32} className="text-primary p-2 bg-sky-700 rounded-full shadow-lg mt-[4px]"/>}
            {parseInt(date.hour) >= 4 && parseInt(date.hour) < 19 && <HiSun size={65} className="text-yellow-400 p-1 bg-primary rounded-full shadow-lg"/>}
            {parseInt(date.hour) >= 19 && <BsMoonStarsFill size={65} className="text-yellow-400 p-3 bg-primary rounded-full shadow-lg"/>}
            {parseInt(date.hour) == 0 && parseInt(date.hour) < 4 && <BsMoonStarsFill size={65} className="text-yellow-400 p-3 bg-primary rounded-full shadow-lg"/>}
            <p className="text-[32px] font-extrabold">{date.hour}:{date.minute}</p>
        </div>
    )
}