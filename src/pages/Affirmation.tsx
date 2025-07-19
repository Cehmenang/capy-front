import axios, { type AxiosResponse } from "axios"
import { useEffect, useRef, useState } from "react"
import { API_URL } from "../libs/config"
import gsap from "gsap"
import type { IAffirmation } from "../libs/interface"
import AllAffirmation from "../components/affirmation/AllAffirmation"
import CardAffirmation from "../components/affirmation/CardAffirmation"
import CapyMain from "../../public/capywrite.png"

export default function Affirmation(){
    const [ daily, setDaily ] = useState<string | null>(null)
    const [ active, setActive ] = useState<boolean>(false)
    const [ card, setCard ] = useState<any>(false)
    const [ affirmations, setAffirmations ] = useState<IAffirmation[] | null>(null)
    const [ selected, setSelected ] = useState<IAffirmation | null>(null)
    const spawnRef = useRef<any>(null)
    const dailyRef = useRef<any>(null)
    const content= useRef<any>(null)

    useEffect(()=>{
        async function dailyAffirmation(){
            const response = await axios.get(`${API_URL}/affirmation`) as AxiosResponse
            return setDaily(response.data)
        }
        dailyAffirmation()
    }, [])

    useEffect(()=>{
        async function getAllAffirmations(){
            const response = await axios.get(`${API_URL}/affirmation/getAll`) as AxiosResponse
            return setAffirmations(response.data)
        }
        getAllAffirmations()
    }, [])

    useEffect(()=>{
        if(affirmations){
            gsap.fromTo(content.current,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1.5, ease: "expo.inOut" },
            )
        }
    }, [affirmations])


    useEffect(()=>{
        if(active){
            gsap.fromTo(dailyRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "back.inOut" }
            )
        }
    }, [active])

    function switchCard(e: any){
        if(card && card !== e.target){
            gsap.to(card,
                { backgroundColor: "#fff", y:0, duration: 0.5, ease: "back.inOut" },
            )
            gsap.to(e.target,
                { backgroundColor: "#feddab", y:-20, duration: 0.5, ease: "back.inOut" },
            )
        }
        else {
            gsap.to(e.target,
                { backgroundColor: "#feddab", y:-20, duration: 0.5, ease: "back.inOut" },
            )
            gsap.to(spawnRef.current,
                { opacity: 1, y: 80, duration: 0.8, ease: "back.inOut" },
            )
        }

        const select = affirmations && affirmations![Math.floor(Math.random() * affirmations!.length)] as IAffirmation
        setSelected(select)

        setCard(e.target)
    }
    
    return (
        <div className="affirmation px-20 flex flex-col items-center">
            {/* <div className="hero flex flex-col justify-center items-center bg-second rounded-t-[360px] py-[90px] w-[90%] relative">
                <div className="text-hero absolute z-[1] top-[120px]">

                <h1 className="text-[180px] font-black uppercase text-fourth">Today's</h1>
                <h1 className="text-[60px] font-black uppercase mt-[-50px]">Affirmation</h1>

                </div>

                <div className="hero-img relative z-[2] mt-[240px]">

                <img src={CapyAffirm} alt={CapyAffirm} width={800}/>
                { daily && <p className="text-[60px]">{daily}</p> }

                </div>
            </div>   */}

            {/* <button className={`p-4 bg-[#ebc08f] rounded-[60px] ${active ? "text-[200px] w-full h-auto delay-200" : "text-[54px] w-[240px] h-[240px] leading-[180px]"} duration-1000 relative overflow-hidden`} onClick={()=> active ? setActive(false) : setActive(true)}>
                <p className="font-black text-third">TODAY</p>

                {  daily && active && <div className="content-active pb-20 px-20 relative z-[2]" ref={dailyRef}>

                    <img src={CapyAffirm} alt={CapyAffirm} width={800}/>
                    <p className="text-[52px] font-bold">{daily}</p>
                    
                </div> }

                <button className="text-[50px] bg-third w-[70%] py-2 text-primary">Ganti</button>
            </button>   */}

            <div className={`head-affirm border-[6px] border-third bg-fourth rounded-3xl w-full relative h-[480px] flex items-center justify-center`}>
                {/* <div className="border-2 border-black h-[480px]"></div>
                <div className="head-text-affirm border-2 border-black">

                </div> */}
                <button className={`text-[80px] uppercase font-bold bg-fifth px-10 py-2 flex flex-col items-center ${active ? "w-full h-full rounded-2xl justify-start pt-8" : "w-[440px] h-[160px] rounded-3xl justify-center pt-0"} duration-500`} onClick={()=>active ? setActive(false) : setActive(true)}>
                    <p className="font-black text-[100px]">Today</p>
                    <p className="text-[48px] capitalize font-medium italic" ref={dailyRef}>{(active && daily ) && `"${daily}"`}</p>
                </button>

                <img className="capy-img w-[200px] border-[6px] border-third bg-second h-[200px] rounded-full absolute bottom-[-90px] left-[39%]" src={CapyMain} />

            </div>


                <p className="text-[68px] mt-[180px]">Affirmasi Random</p>

                <p className="text-[48px] mb-20 border-4 border-black rounded-3xl px-16 animate-bounce h-[160px] opacity-0 text-center mt-20" ref={spawnRef}>{ selected && selected.text }</p>

                <CardAffirmation switchCard={switchCard}/>


            <div className="all-affirmations mt-[120px] flex flex-col gap-y-10">
                <div className="header-all">
                    <p className="text-[68px]">Galeri <span className="italic font-bold tracking-tight">Affirmasi</span></p>
                    <p className="text-[32px] opacity-50 italic -mt-4 font-light">Lihat <span className="font-black">semua</span> affirmasi disini</p>
                </div>
                <div className="affirmation-content" ref={content}>
                    {affirmations && <AllAffirmation datas={affirmations}/>}
                </div>
            </div>
        </div>
    )
}