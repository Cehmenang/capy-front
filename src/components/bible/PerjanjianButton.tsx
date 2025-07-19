import type { IPassage } from "../../libs/interface";

export default function PerjanjianButton({ nilai, setOpen }: { nilai: IPassage, setOpen: React.SetStateAction<IPassage|any>}){
    return (
        <button className="text-[52px] bg-second border-4 border-third py-4 px-10 text-third font-semibold flex items-center gap-x-10 passage rounded-3xl" onClick={()=>{
            setOpen(nilai)
        }}>
            <p className="bg-fifth h-[180px] w-[180px] text-[40px] text-center leading-[180px] rounded-[60px] uppercase font-bold">{nilai.abbr}</p>
            <p>{nilai.name}</p>
        </button>
    )
}