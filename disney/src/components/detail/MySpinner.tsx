import { Spinner } from "@chakra-ui/react";

export default function MySpinner() {
    return (
        <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            position="absolute"
            left={0}
            right={0}
            top={0}
            bottom={0}
            m="auto"
        />
    );
}
