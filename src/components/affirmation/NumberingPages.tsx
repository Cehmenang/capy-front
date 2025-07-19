import { useState } from "react"
import { currentHandler } from "../../action/affirmation"

export default function NumberingPages({ pages, existDatas, setCurrent, setFrom }: { pages: number[], existDatas: number, setCurrent: React.SetStateAction<any>, setFrom: React.SetStateAction<any> }){

    const [ selectedNumber, setNumber ] = useState<number>(1)

    return (
        <div className="parent-number flex justify-center">
            { pages.map((page : number, index: number)=>{
                return <button className={`text-[60px] w-[100px] h-[100px] text-center leading-[100px] ${selectedNumber == page ? 'opacity-100' : 'opacity-30'}`} key={index} onClick={(e: any)=>{
                    const numbering = parseInt(e.target.innerHTML)
                    const from = ( numbering * existDatas - existDatas ) as number
                    setNumber(numbering)
                    setFrom(from)
                    return currentHandler(setCurrent, from)
                }}>{page}</button>
            }) }
        </div>
    )
        
    }