import { Center, HStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { CharacterName, CharacterImage } from "../global";
import { useRecoilValue } from "recoil";
import { Helmet } from "react-helmet";
import Card from "../components/card/Card";

export default function Detail() {
    const { id } = useParams();
    const characterName = useRecoilValue(CharacterName);
    const characterImage = useRecoilValue(CharacterImage);

    return (
        <>
            <Helmet>
                <title>{characterName || "Unknonw"}</title>
            </Helmet>
            <Center w="100%" h="100%" bgColor="pink">
                <HStack w="100%" h="100%">
                    <Card
                        id={+id!}
                        name={characterName}
                        image={characterImage}
                        w={440}
                        h={660}
                    />
                </HStack>
            </Center>
        </>
    );
}
