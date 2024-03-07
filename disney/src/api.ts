import axios from "axios";

export interface ICharacters {
    id: number;
    name: string;
    imageUrl: string;
}

export async function getCharacters() {
    return (
        await axios.get("https://disney_api.nomadcoders.workers.dev/characters")
    ).data;
}
