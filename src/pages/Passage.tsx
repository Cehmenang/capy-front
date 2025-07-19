import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router"
import { getChapterHandler } from "../action/bible"
import ShowVerse from "../components/Passage/ShowVerse"
import NavigateVerse from "../components/Passage/NavigateVerse"
import gsap from "gsap"

export default function Passage(){
    const {abbr, chapter} = useParams() as { abbr: string, chapter: string }
    const [ verse, setVerse ] = useState<any>(null)
    const media = useRef<any>(null)

    useEffect(()=>{
        getChapterHandler(abbr, parseInt(chapter), setVerse)
    }, [])

    useEffect(()=>{
        if(verse){
            gsap.fromTo(media.current,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 0.5, ease: "back.inOut" }
            )
        }
    }, [verse])

    if(verse){
        return (
            <div className="container px-20 flex flex-col gap-y-10" ref={media}>
                <ShowVerse verses={verse.data.verses}/>
                <NavigateVerse prev={parseInt(chapter) - 1} next={parseInt(chapter) + 1} title={verse.data.book.name}/>
            </div>
        )
    }
}