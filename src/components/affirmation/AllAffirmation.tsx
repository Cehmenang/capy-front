import { useEffect, useState } from "react";
import type { IAffirmation } from "../../libs/interface";
import ShowCurrent from "./ShowCurrent";
import NumberingPages from "./NumberingPages";
import { currentHandler } from "../../action/affirmation";

export default function AllAffirmation({ datas }: { datas: IAffirmation[] }){
    const existDatas = 5
    const totalPages = Math.round(datas.length / existDatas)
    const pages = [] as any[]

    const [ current, setCurrent ] = useState<IAffirmation[] | null>(null)
    const [ from, setFrom ] = useState<number>(0)

    useEffect(()=>{ currentHandler(setCurrent) }, [])

    for(let i : number = 0; i < totalPages; i++){
        pages.push(i+1)
    }

    return (
        <div className="numbering flex flex-col gap-y-20">
            <ShowCurrent current={current!} setCurrent={setCurrent} from={from}/>
            <NumberingPages pages={pages} existDatas={existDatas} setCurrent={setCurrent} setFrom={setFrom}/>
        </div>
    )
}