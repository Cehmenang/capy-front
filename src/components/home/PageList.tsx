import { navMenu } from "../../libs/menu";

export default function PageList({ cardList }: { cardList: React.Ref<any> }){
    const navs = navMenu.filter(nav=>nav.path !== "/")

    return (
        <div className="menu grid grid-cols-2 gap-x-2 gap-y-4 px-10" ref={cardList}>
            { 
                navs.map((nav, index)=>{
                    return (
                        <a href={nav.path} key={index} className="relative card">
                        <div className="flex flex-col items-center rounded-[20px] bg-second p-2 border-4 border-third relative z-[2]">
                            <img src={nav.hero} alt={nav.title} width={100}/>
                            {/* <FaHeart size={170} className="text-fourth"/> */}
                            <p className="text-[16px] font-semibold text-third px-8 py-1 rounded-md">{nav.title}</p>
                        </div>
                        <div className="layer h-[150px] w-[150px] bg-third absolute bottom-[-6px] z-[1] left-[7px] rounded-[20px]"></div>
                        </a>
                    )
            })}
        </div>
    )
}