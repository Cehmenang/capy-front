import { useEffect, useState } from "react";
import DateHeader from "./DateHeader";

export default function NavMain(){
    const [date, setDate] = useState<{ hour: string, minute: string } | null>(null)

    useEffect(()=>{
        setDate({
            hour: new Date().getHours() < 10 ? `0${new Date().getHours()}`: new Date().getHours().toLocaleString(),
            minute: new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}`: new Date().getMinutes().toLocaleString()
        })
    }, [])

    return (
        <div className="nav text-third px-10">
            <div className="list flex justify-between gap-x-4">
                <div className="text-nav">
                    <p className="text-[40px] font-extrabold">Hi User!</p>
                    <p className="text-[16px] mt-[-10px]">Awali hari dengan Semangat Ya!</p>
                </div>
                {date && <DateHeader date={date}/>}
            </div>
        </div>
    )
}