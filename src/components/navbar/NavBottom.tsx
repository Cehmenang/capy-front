import { useEffect, useRef } from "react";
import NavList from "./NavList";
import gsap from "gsap";

export default function NavBottom(){
    const nav = useRef<any>(null)

    useEffect(()=>{
        if(nav && nav.current && location.pathname == "/"){
            gsap.fromTo(nav.current,
                { opacity: 0, scale: 0.7 },
                { opacity: 1, scale: 1, duration: 1, ease: "back.inOut" }
        )
        }
    },[])

    return (
        <div className="nav-bottom w-full fixed bottom-[180px] z-[10]" ref={nav}>
            <div className="nav-list flex bg-primary border-4 border-third py-7 mx-[100px] rounded-xl items-center justify-between px-10 gap-x-6">
                <NavList/>
            </div>
        </div>
    )
}