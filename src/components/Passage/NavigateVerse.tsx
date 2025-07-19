import { useParams } from "react-router"
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function NavigateVerse({ prev, next, title }: { prev: number, next: number, title: string }){
    const { abbr } = useParams() as { abbr: string }

    return (
        <div className="nav flex justify-between items-center">

            <div className="btn-prev relative">
                <a href={`/bible/passage/${abbr}/${prev}`}>
                <FaChevronLeft size={120} className="border-[8px] rounded-full border-third bg-fourth p-4 relative z-[2]"/>
                </a>
                <FaChevronLeft size={120} className="border-[8px] rounded-full border-third bg-third text-primary p-4 absolute top-[5px] left-[5px] z-[1]"/>
            </div>
            
            <div className="current relative">
                <a href={`/bible`} className="text-[60px] px-20 py-2 rounded-3xl border-[8px] border-third tracking-tight italic relative z-[2] bg-fifth">{title}</a>
                <a href={`/bible`} className="text-[60px] px-20 py-2 rounded-3xl border-[8px] border-third tracking-tight italic absolute z-[1] top-[-8px] left-[8px] bg-third">{title}</a>
            </div>

            <div className="btn-next relative">
                <a href={`/bible/passage/${abbr}/${next}`}>
                <FaChevronRight size={120} className="border-[8px] rounded-full border-third bg-fourth p-4 relative z-[2]"/>
                </a>
                <FaChevronRight size={120} className="border-[8px] rounded-full border-third bg-third text-primary p-4 absolute top-[5px] left-[5px] z-[1]"/>
            </div>
        </div>
    )
}