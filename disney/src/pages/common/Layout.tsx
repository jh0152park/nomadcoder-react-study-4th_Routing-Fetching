import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Box } from "@chakra-ui/react";

export default function Layout() {
    return (
        <>
            <Header />
            <Box pt="200px" w="100%" px="50px" mb="50px">
                <Outlet />
            </Box>
        </>
    );
}
