import type { IVerse } from "../../libs/interface"

export default function ShowVerse({ verses }: { verses: any[] }){

    function VerseMap({ verses }: { verses: IVerse[] }){
        return verses.map((verse: IVerse, index: number)=>{
            return (
                <div className="paragraph" key={index}>
                    <p className={`text-[48px] text-justify leading-[100px] ${verse.type == "title" && "font-black italic tracking-tight flex items-center"}`}>
                        {verse.verse !== 0 && <span className="text-[40px]">{verse.verse}</span>} {verse.content}
                    </p>
                </div>
        )
        })
    }

    return (
        <div className="parent-verse flex flex-col gap-y-16 bg-primary rounded-t-[100px] py-20 px-16 text-third border-4 border-third">
            <VerseMap verses={verses}/>
        </div>
    )
}