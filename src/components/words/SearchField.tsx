import type React from "react"
import { onSubmitHandler } from "../../action/word"
import { IoSearchSharp } from "react-icons/io5";
import type { IWord } from "../../libs/interface"

export default function SearchField({ setWords,  setLoading }: { setWords: React.SetStateAction<IWord[] | any >, setLoading: React.SetStateAction<any> }){
    return (
        <form onSubmit={async(e: any)=>{
            try{
                setLoading(true)
                return await onSubmitHandler(e, setWords)
            }finally { return setLoading(false) }
        }} className="flex rounded-3xl overflow-hidden border-2 border-gray-200 col-span-2">
            <input type="text" name="keyword" className="text-[48px] keyword w-full px-10 py-2 outline-none" placeholder="Kosakata..."/>
            <button className="p-4 bg-orange-400 text-[40px]"><IoSearchSharp size={50} className="text-primary"/></button>
        </form>
    )
}