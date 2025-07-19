import { useEffect, useRef } from "react";
import PageList from "../home/PageList";
import gsap from "gsap";

export default function NavCard(){
    const cardList = useRef<any>(null)

    useEffect(()=>{
        const elements = cardList.current.querySelectorAll('.card')
        gsap.fromTo(elements, {
            opacity: 0,
            y: 300,
            scale: 0.5
        }, { 
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.2,
            duration: 1,
            ease: "circ.inOut",
            delay: 0.5
        })
    }, [])
    
    return (
        <div className="list bg-fourth py-12 rounded-[40px] flex flex-col justify-center items-center">
            <div className="bar w-[100px] h-[8px] bg-primary rounded-full"></div>
            <div className="title text-[30px] font-bold tracking-tight text-primary mb-10 mt-6">Rencana Kegiatan</div>
            <PageList cardList={cardList}/>
        </div>
    )
}