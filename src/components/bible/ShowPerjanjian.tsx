import { useEffect, useRef, useState } from "react"
import type { IPassage } from "../../libs/interface"
import PerjanjianButton from "./PerjanjianButton"
import gsap from "gsap"

export default function ShowPerjanjian({ perjanjian }: { perjanjian: IPassage[] }){
    const [open, setOpen] = useState<IPassage | any>(false)
    const ayat = useRef<any>(null)

    useEffect(()=>{
        if(ayat.current){
            const elements = ayat.current.querySelectorAll('.ayat')
            gsap.fromTo(elements, {
                opacity: 0,
                scale: 0.5
            }, { 
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "power1.inOut",
            })
        }
    }, [open])

    if(open){
        let chapters = [] as any
        for(let i : number = 1; i <= open.chapter; i++){
            chapters.push(i)
        }
        if(chapters.length > 0) return (
            <div className="selected flex flex-col gap-y-10">
                <div className="head-selected flex justify-between">
                    <h1 className="text-[72px] text-primary font-bold tracking-tight">{open.name}</h1>
                    <button onClick={()=>setOpen(false)}>tutup</button>
                </div>
                <div className="chapters grid grid-cols-4 w-full gap-10" ref={ayat}>
                    {chapters.map((chapter: number, index: number)=>{
                        return (
                            <a className="text-[68px] font-semibold bg-third rounded-2xl border-4 border-third h-[180px] ayat" key={index} href={`/bible/passage/${open.abbr}/${open.chapter}`}>
                                <p className="bg-second text-center w-[96%] h-[96%] border-4 border-third leading-[160px] rounded-2xl font-bold">{chapter}</p>
                            </a>
                        )
                    })}
                </div>
            </div>
        )
    }

    return !open && perjanjian && perjanjian.map((nilai, index)=>{
            return <PerjanjianButton nilai={nilai} key={index} setOpen={setOpen}/>
    })
}