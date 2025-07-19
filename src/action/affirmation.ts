import axios, { type AxiosResponse } from "axios";
import { API_URL } from "../libs/config";

export async function favoriteHandler(id: string, bool?: boolean){
    bool ? await axios.get(`${API_URL}/affirmation/${id}?bool=${bool}`) : await axios.get(`${API_URL}/affirmation/${id}`)
    
}

export async function currentHandler(setCurrent : React.SetStateAction<any> , from? : number){
    const response = await axios.get(`${API_URL}/affirmation/limit?from=${from}`) as AxiosResponse
    return setCurrent(response.data)
}