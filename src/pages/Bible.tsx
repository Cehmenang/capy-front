import { useEffect, useRef, useState } from "react"
import { getPassages } from "../action/bible"
import type { IPassage } from "../libs/interface"
import ShowPerjanjian from "../components/bible/ShowPerjanjian"
import CloseTab from "../components/bible/CloseTab"
import gsap from "gsap"


export default function Bible(){
    const [passages, setPassages] = useState<{ data: IPassage[] } | null>(null)
    const [perjanjianLama, setPerjanjianLama] = useState<IPassage[] | null>(null)
    const [perjanjianBaru, setPerjanjianBaru] = useState<IPassage[] | null>(null)
    const [showLama, setShowLama] = useState<boolean>(false)
    const [showBaru, setShowBaru] = useState<boolean>(false)
    const passage = useRef<any>(null)

    useEffect(()=>{
        if((showLama || showBaru) && passage.current){
            const elements = passage.current.querySelectorAll('.passage')
            gsap.fromTo(elements, {
                opacity: 0,
                y:200,
                scale: 0.95
            }, { 
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: 0.2,
                ease: "power1.inOut",
            })
        }

        else if(!showLama || !showBaru){
            const elements = passage.current.querySelectorAll('.passage')
            gsap.fromTo(elements, {
                opacity: 1,
                y:0,
                scale: 1
            }, { 
                opacity: 0,
                y: 200,
                scale: 0.95,
                duration: 0.4,
                ease: "power1.inOut",
            })
        }

    },[showLama, showBaru])


    useEffect(()=>{
      getPassages(setPassages)
    }, [])

    useEffect(()=>{
        if(passages && passages.data.length > 0){ 
            const batas = passages.data.findIndex((item:IPassage)=>item.no === 40)
            setPerjanjianLama(passages.data.slice(0, batas))
            setPerjanjianBaru(passages.data.slice(batas))
        }
    }, [passages])

    // function ShowPassages(){
    //     return passages!.data.map((passage: any, index: number)=>{
    //         return (
    //             <div className="passage" key={index}>
    //                 <button className="text-[50px]">{passage.name}</button>
    //             </div>
    //         )
    //     })
    // }

    // function ShowPerjanjian({ nilai, param }: { nilai: any, param: boolean }){
    //     return (
    //         <div className={`pasal text-[48px] fixed bg-third w-full left-0 ${param ? 'top-0' : 'top-[2000px]'} transition-all`}>
    //             <h1>TEST</h1>
    //             {/* { nilai && nilai.map((satuan: IPassage, index: number)=>{
    //             return (
    //                 <p>{satuan.name}</p>
    //             )
    //             })} */}
    //         </div>
    //     )
    // }

    return (
        <div className="main px-20">
            <div className="passage text-[40px] grid grid-cols-2 gap-x-8">
                <button className=" p-8 border-4 rounded-3xl border-third flex items-center bg-primary gap-x-5" onClick={()=>setShowLama(true)}>
                    <h1 className="text-[72px] bg-blue-500 rounded-xl py-4 px-6 font-bold text-primary">PL</h1>
                    <p className="">Perjanjian Lama</p>
                </button>

                <button className=" p-8 border-4 rounded-3xl border-third flex items-center bg-primary gap-x-5" onClick={()=>setShowBaru(true)}>
                    <h1 className="text-[72px] bg-red-500 rounded-xl py-4 px-6 font-bold text-primary">PB</h1>
                    <p className="">Perjanjian Baru</p>
                </button>
            </div>

            <div className={`pasal fixed w-full left-0 h-[100vh] bg-third ${showLama || showBaru ? 'top-0' : 'top-[2400px]'} duration-[0.6s] ease-in-out py-[200px] z-[2]`}>
                <CloseTab showLama={showLama} setShowLama={setShowLama} setShowBaru={setShowBaru}/>

                <div className="tab relative border-2 border-black h-[100vh] bg-fourth rounded-[100px] overflow-y-scroll">
                <div className="list grid grid-cols-1 px-[150px] gap-y-10 h-[80vh] my-[200px]" ref={passage}>
                    <ShowPerjanjian perjanjian={showLama ? perjanjianLama! : showBaru ? perjanjianBaru! : perjanjianBaru!}/>
                </div>
                </div>
                         
            </div>
        

            {/* <ShowPerjanjian nilai={perjanjianLama} param={showLama}/> */}
            {/* {showBaru && <ShowPerjanjian nilai={perjanjianBaru} param={showBaru}/>} */}
            {/* {passages && passages.data.length > 0 && <ShowPassages/>} */}
        </div>
    )
}