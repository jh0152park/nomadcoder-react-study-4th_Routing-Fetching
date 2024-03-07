import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import { ContainerCenter } from "../../styles/common/Styles";
import Hamster from "../../resource/json/Hamster.json";
import { Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <>
            <Helmet>
                <title>Page Not Found</title>
            </Helmet>
            <VStack
                w="100%"
                h="100vh"
                bgColor="whitesmoke"
                justifyContent="center"
                color="black"
            >
                <Lottie
                    style={{ width: 300, height: 300 }}
                    animationData={Hamster}
                    loop={true}
                />
                <Heading mt="-40px">404</Heading>
                <Heading>Page Not Found</Heading>
                <Heading
                    _hover={{
                        cursor: "pointer",
                        transform: ["scale(1.2)"],
                        color: "#1BC3C3",
                    }}
                    transition="all 0.1s linear"
                    onClick={() => {
                        navigate("/");
                    }}
                    mb="150px"
                >
                    Click to Home
                </Heading>
            </VStack>
        </>
    );
}
