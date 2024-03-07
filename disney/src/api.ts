import axios from "axios";
import { QueryFunctionContext } from "react-query";

export interface ICharacters {
    data: ICharacter[];
}

export interface ICharacter {
    _id: number;
    name: string;
    films: string[];
    imageUrl: string;
    sourceUrl: string;
}

export interface ICharacterDetail {
    data: ICharacter;
}

export async function getCharacters() {
    return (
        await axios.get("https://api.disneyapi.dev/character?pageSize=4000")
    ).data;
}

export async function getCharacterDetail({ queryKey }: QueryFunctionContext) {
    // eslint-disable-next-line
    const [_, id] = queryKey;

    return (await axios.get(`https://api.disneyapi.dev/character/${id}`)).data;
}
