import { Helmet } from "react-helmet";
import { ICharacter, ICharacters, getCharacters } from "../api";
import { useQuery } from "react-query";
import { Center, Grid } from "@chakra-ui/react";
import CardSkeleton from "../components/home/CardSkeleton";
import Card from "../components/card/Card";
import { useState } from "react";

export default function Home() {
    const characters = useQuery<ICharacters>(["characters"], getCharacters);
    const charactersWithFilm = characters.data?.data.filter(
        (char) => char.films.length > 5
    );

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
                        : charactersWithFilm
                        ? charactersWithFilm.map((char) => (
                              <Card
                                  w="350"
                                  h="495"
                                  id={char._id}
                                  key={char._id}
                                  name={char.name}
                                  image={char.imageUrl}
                              />
                          ))
                        : null}
                </Grid>
            </Center>
        </>
    );
}
