import { useState } from "react";
import { speakHandler } from "../../action/word"
import type { IWord } from "../../libs/interface"
import pinyinTone from 'pinyin-tone'
import { HiSpeakerWave } from "react-icons/hi2";

export default function ShowWords({ words, wordsRef }: { words: IWord[], wordsRef: React.Ref<any> }){

    const [ speak, setSpeak ] = useState<string | null>(null)

    function DefinitionsText({ defs }: { defs: string[] }){
        return <p className="text-[40px]">{defs.join(' ; ')}</p>
        // console.log(defs.length)

        // if(defs.length > 1) {
        //     return (
        //         <div className="map-defs flex gap-x-3">
        //             { defs.map((def, index)=>{
        //                 return <p key={index} className="text-[36px] border-2 border-third rounded-full px-3 py-1">{def}</p>
        //             })}
        //         </div>
        //     )
            
        // }
        // else return <p className="text-[36px]">{defs[0]}</p>
    }

    return (
        <div className="wrap-word flex flex-col gap-y-20 px-10" ref={wordsRef}>
            {
            words.map((word: IWord, index: number)=>{
                return (
                <div key={index} className="border-b-4 border-third grid grid-cols-[1fr_10fr] py-6 gap-x-3 word-card opacity-0">
                    <div className="gambar-word">
                        <div className="circle rounded-full bg-orange-400 text-[36px] w-[60px] h-[60px] leading-[60px] text-center text-primary font-bold relative top-3">{index+1}</div>
                    </div>
                    <div className="mandarin flex flex-col relative">
                        <p className="text-[40px] w-fit italic opacity-50">{pinyinTone(word.pinyin.toLocaleLowerCase())}</p>
                        <p className="text-[72px] inline w-fit font-semibold">{word.simplified}</p>
                        <div className="wrap-def w-full text-justify">
                            <DefinitionsText defs={word.definitions}/>
                        </div>
                        <button onClick={()=>speakHandler(word.simplified, setSpeak)} className={`absolute top-[8px] right-[6px] ${speak && speak == word.simplified ? "opacity-100" : "opacity-30"} transition-all`}><HiSpeakerWave size={72} className="p-3 rounded-full border-4 border-third"/></button>
                    </div> 
                </div>
                )
            })
            }
        </div>
        
    )
}