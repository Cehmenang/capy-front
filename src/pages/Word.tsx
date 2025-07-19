import { useEffect, useRef, useState } from "react"
import type { IWord } from "../libs/interface"
import ShowWords from "../components/words/ShowWords"
import SearchField from "../components/words/SearchField"
import gsap from "gsap"

export default function Word(){
    const [ words, setWords ] = useState<IWord[] | null>(null)
    const [ loading, setLoading ] = useState<boolean>(false)
    const wordsRef = useRef(null) as any
    
    useEffect(()=>{
        if(words && words.length > 0){
            gsap.fromTo(wordsRef.current!.querySelectorAll('.word-card'),
                { y:80, scale: 0.8, opacity: 0},
                { y:0, scale: 1, opacity: 100, duration: 1, ease: "back.inOut", stagger: 0.1}
            )
        }
    },[words])

    console.log(words)

    return (
        <div className="main-word px-20 flex flex-col gap-y-16">
            <div className="head-word grid grid-cols-[1fr_4fr] gap-x-10 border-4 border-third bg-fifth px-10 py-12 rounded-[30px] items-center gap-y-10">
                <div className="gambar-word bg-second w-[200px] h-[200px]"></div>
                <div className="head-word-content">
                    <h1 className="text-[30px] bg-fourth w-fit px-8 rounded-3xl text-primary py-[2px] font-semibold italic">Tuan Bara</h1>
                    <h1 className="text-[48px] font-semibold">
                        {(!words && !loading) && "Sini Aku Bantu Cari!"}
                        {(!loading && words && words.length == 0) && "Maaf yang kamu cari belum ada"}
                        {loading && "Sebentar Ya..."}
                        {(!loading && words && words.length > 0) && "Semoga membantu!"}
                    </h1>
                </div>
                <SearchField setWords={setWords} setLoading={setLoading}/>
            </div> 
            { words && words.length > 0 && <ShowWords words={words} wordsRef={wordsRef}/> }
        </div>
    )
}