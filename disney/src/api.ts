import axios from "axios";
import { QueryFunctionContext } from "react-query";

export interface ICharacters {
    id: number;
    name: string;
    imageUrl: string;
}

export interface ICharacter {
    films: string[];
    id: number;
    imageUrl: string;
    name: string;
    sourceUrl: string;
}

export async function getCharacters() {
    return (
        await axios.get("https://disney_api.nomadcoders.workers.dev/characters")
    ).data;
}

export async function getCharacterDetail({ queryKey }: QueryFunctionContext) {
    const [_, id] = queryKey;

    return (
        await axios.get(
            ` https://disney_api.nomadcoders.workers.dev/characters/${id}`
        )
    ).data;
}
