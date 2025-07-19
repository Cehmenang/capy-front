import CapyMain from "../../public/capymain.png"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../style/fonts.css';
import PageList from "../components/home/PageList";

gsap.registerPlugin(ScrollTrigger)

export default function Home(){
    const [ day, setDay ] = useState<number | null>(null)
    const circle = useRef(null)
    const capy = useRef(null)
    const cardList = useRef<any>(null)

    console.log(day)

  useEffect(()=>{
    gsap.to(circle.current, {
      scale: 1.3,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "circ.inOut"
    })

    gsap.fromTo(capy.current,
        { opacity: 0, y: 100, scale: 0.5 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.inOut" }
    )

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

    useEffect(()=>{
        setDay(new Date().getHours())
    },[])

    return (
        <div className="main flex flex-col gap-y-10 font-opensans">
            <div className="main-hero rounded-2xl flex flex-col justify-center items-center h-[1000px] relative mx-20">
                
                <div className="popup flex flex-col justify-center items-center relative z-10">

                <img src={CapyMain} alt="Laoshi Capybara" width={400} ref={capy}/>

                <div className="base-text relative">
                    <h1 className="text-[55px] font-bold tracking-tight bg-fifth px-20 py-2 top-[-130px] border-[5px] border-third rounded-full text-third relative z-[1]">Selamat Datang!</h1>
                    <h1 className="text-[55px] font-bold tracking-tight px-20 py-2 top-[-114px] border-[5px] border-third rounded-full text-third bg-third absolute">Selamat Datang!</h1>
                </div>

                </div>
                <p className="text-[300px] font-black absolute top-[-45px] text-fourth z-[2]">你好</p>

                <div className="bg-hero bg-gradient-to-t from-primary to-fifth h-[600px] w-[600px] absolute bottom-[280px] rounded-full z-[1] shadow-lg" ref={circle}></div>
            </div>
            <div className="list bg-fourth py-12 rounded-[80px] flex flex-col justify-center items-center">
                <div className="bar w-[200px] h-[14px] bg-primary rounded-full"></div>
                <div className="title text-[48px] font-bold tracking-tight text-primary mb-10 mt-6">Rencana Kegiatan</div>
                    <PageList cardList={cardList}/>
                </div>
            </div>
    )
}