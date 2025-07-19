import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import HeadMain from "./components/header/HeadMain";
import Bible from "./pages/Bible";
import Passage from "./pages/Passage";
import Affirmation from "./pages/Affirmation";
import Word from "./pages/Word";
import NavBottom from "./components/navbar/NavBottom";
import axios from 'axios'

axios.defaults.withCredentials = true

export default function App(){

  return (
    <main className="bg-primary text-third">
      <main className="pt-[60px] pb-[180px]">
      <HeadMain/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/bible" element={<Bible/>}/>
          <Route path="/bible/passage/:abbr/:chapter" element={<Passage/>}/>
          <Route path="/affirmation" element={<Affirmation/>}/>
          <Route path="/word" element={<Word/>}/>
        </Routes>
      </BrowserRouter>
      <NavBottom/>
      </main>
      
    </main>
  )
}