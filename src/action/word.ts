import type { AxiosResponse } from "axios"
import axios from "axios"
import { API_URL } from "../libs/config"
import type { IWord } from "../libs/interface"

export async function onSubmitHandler(e: any, setWords: React.SetStateAction<IWord[] | any>){
        e.preventDefault()
        const input = new FormData(e.target).get('keyword') as FormDataEntryValue
        await getWords(input, setWords)
}

export async function getWords(input: FormDataEntryValue | string, setWords: React.SetStateAction<IWord[] | any>){
    const response = await axios.get(`${API_URL}/dictionary/search?keyword=${input}`) as AxiosResponse
    if(response.status == 200) return setWords(response.data)
}

export function speakHandler(word: string, setSpeak: React.SetStateAction<any>){
    const utter = new SpeechSynthesisUtterance(word)
    const voices = speechSynthesis.getVoices() as SpeechSynthesisVoice[]
    utter.voice = voices.find(v => (v.lang === 'zh-CN' || v.lang.startsWith('zh')) && v.name.includes('Mei')) as SpeechSynthesisVoice
    utter.onstart = ()=>setSpeak(word)
    utter.onend = ()=>setSpeak(null)
    return speechSynthesis.speak(utter);
}