import { FaCircleChevronDown } from "react-icons/fa6";

export default function CloseTab({ showLama, setShowLama, setShowBaru }: { showLama: boolean, setShowLama: any, setShowBaru: any }){
    return (
        <button onClick={()=>showLama ? setShowLama(false) : setShowBaru(false)} className="absolute top-[120px] left-[43%] z-[3]">
            <FaCircleChevronDown size={160} className="text-primary rounded-full p-4 bg-fourth"/>
        </button>
    )
}