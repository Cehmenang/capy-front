import { navMenu } from "../../libs/menu";

export default function PageList({ cardList }: { cardList: React.Ref<any> }){
    const navs = navMenu.filter(nav=>nav.path !== "/")

    return (
        <div className="menu grid grid-cols-2 gap-8 pb-20" ref={cardList}>
            { 
                navs.map((nav, index)=>{
                    return (
                        <a href={nav.path} key={index} className="relative card">
                        <div className="flex flex-col items-center rounded-[60px] bg-second p-6 border-4 border-third relative z-[2]">
                            <img src={nav.hero} alt={nav.title} width={220}/>
                            {/* <FaHeart size={170} className="text-fourth"/> */}
                            <p className="text-[36px] font-semibold text-third px-10 py-2 rounded-md">{nav.title}</p>
                        </div>
                        <div className="layer h-[340px] w-[340px] bg-third absolute bottom-[-23px] z-[1] left-[10px] rounded-[60px]"></div>
                        </a>
                    )
            })}
        </div>
    )
}