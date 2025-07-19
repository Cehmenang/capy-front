import type { IAffirmation } from "../../libs/interface"
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { currentHandler, favoriteHandler } from "../../action/affirmation";
import { useRef } from "react";

export default function ShowCurrent({ current, setCurrent, from }: { current: IAffirmation[], setCurrent: React.SetStateAction<any>, from: number }){

    const favorite = useRef<any>(null)

    if(current) return (
        <div className="currents flex flex-col gap-y-8">
            {current.map((c: IAffirmation, index: number)=>{
                return (
                <div className="current text-[48px] border-4 py-4 border-third bg-primary px-10 rounded-2xl grid grid-cols-[3fr_7fr_1fr] gap-x-4 items-center">
                    <div className="img w-[200px] h-[200px] bg-second rounded-2xl"></div>
                    <div className="text-current">
                        <h1 key={index} className="text-[42px]">{c.text}</h1>
                        <p className={`border-4 border-third bg-orange-300 rounded-xl px-8 py-1 text-[30px] inline italic ${c.favorite ? "opacity-100" : "opacity-0"} duration-200`} ref={favorite}>Favorite</p>
                    </div>
                    <button onClick={async()=>{
                        c.favorite ? await favoriteHandler(c.id, true) : await favoriteHandler(c.id)
                        from !== 0 ? currentHandler(setCurrent, from) : currentHandler(setCurrent)
                    }}>
                        { c.favorite ? <FaStar size={60} className="text-yellow-400"/> : <FaRegStar size={60} className="text-third opacity-20"/>}
                    </button>
                </div>
            )
            })}
        </div>
        
    )
}
