import { navMenu } from "../../libs/menu";

export default function NavList(){

    return navMenu.map((nav, index)=>{
        const Icon = nav.icon
        return (
            <a href={nav.path} key={index} className={`relative card w-[170px] ${nav.path == location.pathname ? "opacity-100" : "opacity-25"}`}>
                <div className={`flex flex-col items-center justify-center p-2 z-[2] relative gap-y-1`}>
                    {/* <img src={nav.icon} alt={nav.title} width={300}/> */}
                    <Icon size={56}/>
                    {nav.path == location.pathname && <p className={`text-[28px] font-semibold rounded-md`}>{nav.title}</p>}
                    {nav.path == location.pathname && <span className="w-[35px] h-[35px] rounded-full bg-fifth absolute top-[-50px] border-third border-4"></span>}
                </div>
                {/* <div className="layer h-[340px] w-[340px] bg-third absolute bottom-[-23px] z-[1] left-[10px] rounded-[60px]"></div> */}
            </a>
        
        )
    })
}