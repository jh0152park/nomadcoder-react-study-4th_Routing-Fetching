import { Text, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { ICharacters, getCharacters } from "../api";
import { useQuery } from "react-query";

export default function Home() {
    // index 9
    const characters = useQuery<ICharacters[]>(["characters"], getCharacters);

    if (characters.data) {
        console.log(characters.data);
        characters.data.forEach((char, i) =>
            char.name.toLowerCase().includes("mouse")
                ? console.log(char.name, char.imageUrl, i)
                : null
        );
    }

    return (
        <>
            <Helmet>
                <title>Disney Characters</title>
            </Helmet>
            <VStack w="100%" mt="40px">
                <Text fontWeight="bold" fontSize="40px">
                    Disney Characters
                </Text>
            </VStack>
        </>
    );
}
