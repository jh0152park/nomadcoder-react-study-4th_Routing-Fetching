import { Helmet } from "react-helmet";
import { ICharacters, getCharacters } from "../api";
import { useQuery } from "react-query";
import { Center, Grid } from "@chakra-ui/react";
import CardSkeleton from "../components/home/CardSkeleton";
import Card from "../components/card/Card";

export default function Home() {
    const characters = useQuery<ICharacters[]>(["characters"], getCharacters);

    return (
        <>
            <Helmet>
                <title>Disney Characters</title>
            </Helmet>
            <Center>
                <Grid
                    templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)",
                    }}
                    gap={10}
                >
                    {characters.isLoading
                        ? [1, 2, 3, 4, 5, 6].map((i) => (
                              <CardSkeleton key={i} w="350" h="495" />
                          ))
                        : characters.data
                        ? characters.data
                              .slice(900, 1000)
                              .map((char) => (
                                  <Card
                                      key={char.id}
                                      w="350"
                                      h="495"
                                      image={char.imageUrl}
                                  />
                              ))
                        : null}
                </Grid>
            </Center>
        </>
    );
}
