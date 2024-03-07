import App from "./App";
import ReactDOM from "react-dom/client";
import { reset } from "styled-reset";
import { ChakraProvider } from "@chakra-ui/react";
import { createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    background-color: #121212;
    color: whitesmoke;
    font-family: "Tangerine";
  }

  * {
    box-sizing: border-box;
  }
`;

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <RecoilRoot>
                    <App />
                </RecoilRoot>
            </ChakraProvider>
        </QueryClientProvider>
    </>
);
