import axios, { type AxiosResponse } from "axios";  
import { API_URL } from "../libs/config";

export async function getPassages(setPassages: any){
    const response = await axios.get(`${API_URL}/bible/passages`) as AxiosResponse
    return setPassages(response.data)
}

export async function getChapterHandler(abbr: string, chapter: number, setVerse: React.SetStateAction<any>){
    const response = await axios.get(`${API_URL}/bible/passage/${abbr}/${chapter}`) as AxiosResponse
    return setVerse(response.data)
}