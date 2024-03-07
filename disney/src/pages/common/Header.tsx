import { Center, Image } from "@chakra-ui/react";
import { Night, Star } from "../../styles/common/star";

export default function Header() {
    return (
        <Center w="100%" h="200px" alignItems="flex-end">
            <Image
                src="/resources/images/disney_logo.png"
                w="150px"
                h="80px"
                objectFit="contain"
            />
            <Center position="absolute" top={0} left={"45%"}>
                <Night className="night">
                    {[...new Array(20)].map((_, i) => (
                        <Star key={i} className="shooting_star" />
                    ))}
                </Night>
            </Center>
        </Center>
    );
}
