import { Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { getCharacters } from "../api";
import { useQuery } from "react-query";

export default function Home() {
    const characters = useQuery(["characters"], getCharacters);

    if (characters.data) {
        console.log(characters.data);
    }

    return (
        <>
            <Helmet>
                <title>Disney Characters</title>
            </Helmet>
            <Text fontSize="50px" fontWeight="bold">
                Disney Characters
            </Text>
        </>
    );
}
