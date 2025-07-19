export default function CardAffirmation({ switchCard }: { switchCard: React.SetStateAction<any> }){
    return (
        <div className="cehw-affirm relative w-[40%]">
                <div className="kotak border-4 bg-primary border-third rounded-xl h-[380px] -rotate-[20deg] shadow-xl absolute top-20 -left-[180px] w-[360px]" onClick={switchCard}></div>
                <div className="kotak border-4 bg-primary border-third rounded-xl h-[440px] -rotate-12 shadow-xl absolute top-8 -left-[100px] z-[2] w-[360px]" onClick={switchCard}></div>
                <div className="kotak border-4 bg-primary border-third rounded-xl h-[500px] shadow-xl relative z-[3]" onClick={switchCard}></div>
                <div className="kotak border-4 bg-primary border-third rounded-xl h-[440px] rotate-12 shadow-xl absolute top-8 left-[100px] z-[2] w-[360px]" onClick={switchCard}></div>
                <div className="kotak border-4 bg-primary border-third rounded-xl h-[380px] rotate-[20deg] shadow-xl absolute top-20 left-[180px] w-[360px]" onClick={switchCard}></div>
        </div>
    )
}