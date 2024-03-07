import { Box, Center, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { CharacterName, CharacterImage } from "../global";
import { useRecoilValue } from "recoil";
import { Helmet } from "react-helmet";
import Card from "../components/card/Card";
import { useQuery } from "react-query";
import { ICharacterDetail, getCharacterDetail } from "../api";
import MySpinner from "../components/detail/MySpinner";
import { IoArrowBack } from "react-icons/io5";

export default function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const characterName = useRecoilValue(CharacterName);
    const characterImage = useRecoilValue(CharacterImage);
    const characterDetail = useQuery<ICharacterDetail>(
        ["character", id],
        getCharacterDetail
    );

    console.log(characterDetail);

    return (
        <>
            <Helmet>
                <title>{characterName || "Unknonw"}</title>
            </Helmet>
            <Center w="100%" h="100%">
                <VStack>
                    <Box w="100%" h="50px" alignItems="center" display="flex">
                        <Icon
                            w="30px"
                            h="30px"
                            as={IoArrowBack}
                            _hover={{
                                cursor: "pointer",
                                transform: ["scale(1.15)"],
                            }}
                            transition="all 0.1s linear"
                            onClick={() => navigate(-1)}
                        />
                    </Box>
                    <HStack spacing="100px">
                        <Card
                            id={+id!}
                            name={characterName}
                            image={characterImage}
                            w={440}
                            h={660}
                        />
                        <VStack
                            w="440px"
                            h="660px"
                            position="relative"
                            alignItems="flex-start"
                            overflowY="scroll"
                        >
                            {characterDetail.isLoading ? <MySpinner /> : null}
                            <Text fontSize="35px" fontWeight="bold" mb="20px">
                                {characterName}'s films
                            </Text>
                            {characterDetail.data?.data.films.map((film) => (
                                <Text
                                    fontSize="25px"
                                    fontWeight="bold"
                                    key={film}
                                >
                                    ᐧ {film}
                                </Text>
                            ))}
                        </VStack>
                    </HStack>
                </VStack>
            </Center>
        </>
    );
}
