import CapyWrite from "../../public/capywrite.png"
import { RiBookFill } from "react-icons/ri"
import { GoHomeFill } from "react-icons/go";
import { FaPaintBrush } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { FaBible } from "react-icons/fa";
import type { IconType } from "react-icons"

interface INavMenu { 
    title: string, path: string, hero: string, icon: IconType
}

export const navMenu: INavMenu[] = [
    { title: "Home", path: "/", hero: CapyWrite, icon: GoHomeFill},
    { title: "Word", path: "/word", hero: CapyWrite, icon: RiBookFill },
    { title: "Writing", path: "/writing", hero: CapyWrite, icon: FaPaintBrush },
    // { title: "Listening", path: "/listening", hero: CapyWrite, icon: RiBookFill },
    { title: "Affirmation", path: "/affirmation", hero: CapyWrite, icon: IoSparkles },
    // { title: "Grateful", path: "/grateful", icon: CapyWrite },
    { title: "Bible", path: "/bible", hero: CapyWrite, icon: FaBible },
]