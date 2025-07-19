import { useEffect, useRef } from "react"
import CapyMain from "../../../public/capymain.png"
import gsap from "gsap"

export default function HomeHero(){
    const circle = useRef(null)
    const capy = useRef(null)

    useEffect(()=>{
        gsap.to(circle.current, {
            scale: 1.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "circ.inOut"
        })

        gsap.fromTo(capy.current,
            { opacity: 0, y: 100, scale: 0.5 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.inOut" }
        )
  }, [])

    return (
        <div className="main-hero rounded-2xl flex flex-col justify-center items-center h-[550px] relative overflow-hidden">
                
                <div className="popup flex flex-col justify-center items-center relative z-10 top-[70px]">

                <img src={CapyMain} alt="Laoshi Capybara" width={250} ref={capy}/>

                <div className="base-text relative top-[30px]">
                    <h1 className="text-[30px] font-bold tracking-tight bg-fifth px-12 py-2 top-[-130px] border-[3px] border-third rounded-full text-third relative z-[1]">Selamat Datang!</h1>
                    <h1 className="text-[26px] font-bold tracking-tight px-12 top-[-104px] left-[12px] border-[5px] border-third rounded-full text-third bg-third absolute">Selamat Datang!</h1>
                </div>

                </div>

                <p className="text-[150px] font-black absolute top-[52px] left-[12%] text-fourth z-[2] w-full">你好</p>

                <div className="bg-hero bg-gradient-to-t from-primary to-fifth h-[330px] w-[330px] absolute bottom-[120px] rounded-full z-[1] shadow-lg" ref={circle}></div>
            </div>
    )
}