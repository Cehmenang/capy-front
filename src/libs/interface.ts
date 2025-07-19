export interface IPassage {
    no: number, abbr: string, name: string, chapter: number
}

export interface IVerse {
    verse: number, type: string, content: string
}

export interface IAffirmation {
    id: string, text: string, favorite: boolean, createdAt: string
}

export interface IWord {
    id: string, traditional: string, simplified: string, pinyin: string, definitions: string[]
}