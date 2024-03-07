import { Skeleton } from "@chakra-ui/react";

interface ISkeleton {
    w: number | string;
    h: number | string;
}

export default function CardSkeleton({ w, h }: ISkeleton) {
    return <Skeleton w={`${w}px`} height={`${h}px`} borderRadius="10px" />;
}
