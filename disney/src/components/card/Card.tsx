import { Box, Center, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { IMAGE_URL } from "../../data";

interface ICardProps {
    id: number;
    name: string;
    image: string;
    w: number | string;
    h: number | string;
}

export default function Card({ id, name, image, w, h }: ICardProps) {
    const [speed, setSpeed] = useState(0.1);
    const [yDeg, setYDeg] = useState(0);
    const [xDeg, setXDeg] = useState(0);
    const [brightnessPosition, setBrightnessPosition] = useState(100);
    const Image404 = "/resources/images/404Image.png";

    function onMouseLeave() {
        setYDeg(0);
        setXDeg(0);
        setSpeed(0.5);
    }

    function onMouseMove(e: React.MouseEvent) {
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;

        setSpeed(0.1);
        setXDeg(-(30 / (+h * 0.5)) * y + 30);
        setYDeg((20 / (+w * 0.5)) * x - 20);
        setBrightnessPosition(x / 7 + y / 7);
    }

    return (
        <Box
            w={`${w}px`}
            h={`${h}px`}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            transition={`all ${speed}s linear`}
            transform={[
                `rotateY(${yDeg}deg) rotateX(${xDeg}deg) perspective(350px)`,
            ]}
            _hover={{ cursor: "pointer" }}
            position="relative"
            border="10px solid #DDE6ED"
            borderRadius="10px"
            onClick={() => {
                console.log(`${id} / ${name}`);
                console.log(IMAGE_URL[name]);
            }}
        >
            <Box
                w="100%"
                h="100%"
                bg="linear-gradient(105deg, transparent 40%, rgba(255, 219, 112, 0.8) 45%, rgba(132, 50, 255, 0.6) 50%, transparent 54%)"
                backgroundSize="150% 150%"
                backgroundPosition={`${brightnessPosition}%`}
                position="absolute"
                filter="brightness(1.2) opacity(0.8)"
                mixBlendMode="color-dodge"
            />

            <Center
                w="100%"
                h="10%"
                bottom={0}
                bg="linear-gradient(75deg, transparent -30%, rgba(255, 219, 112, 1))"
                position="absolute"
            >
                <Text fontWeight="bold" fontSize="40px" color="black">
                    {name}
                </Text>
            </Center>

            <Image
                w="100%"
                h="100%"
                objectFit="cover"
                src={IMAGE_URL[name] || image || Image404}
            />
        </Box>
    );
}
