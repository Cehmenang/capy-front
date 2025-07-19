import '../style/fonts.css';
import NavCard from "../components/navbar/NavCard";
import HomeHero from "../components/home/HomeHero";

export default function Home(){
    return (
        <div className="main flex flex-col gap-y-10 font-opensans">
            <HomeHero/>
            <NavCard/>
         </div>
    )
}