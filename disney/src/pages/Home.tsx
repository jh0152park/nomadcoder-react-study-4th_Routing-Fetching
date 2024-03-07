import { Helmet } from "react-helmet";
import { ICharacters, getCharacters } from "../api";
import { useQuery } from "react-query";
import { Center, Grid } from "@chakra-ui/react";
import CardSkeleton from "../components/home/CardSkeleton";

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
            <Center w="100%" px="50px" mt="50px">
                <Grid
                    templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)",
                    }}
                    gap={10}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((i) => (
                        <CardSkeleton w="440" h="620" />
                    ))}
                </Grid>
            </Center>
        </>
    );
}
