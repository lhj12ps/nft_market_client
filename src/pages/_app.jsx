import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Store from "../store/useStore";
import Header from "../components/common/header";
// import { ChakraProvider,ColorModeScript } from '@chakra-ui/react'

const queryClient = new QueryClient();

const App = ({ Component, pageProps }) => {
  return (
    <Store>
      <QueryClientProvider client={queryClient}>
        <Header />
        {/* <ChakraProvider> */}
        <Component {...pageProps} />
        {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> 뭐지 이건*/}
        {/* </ChakraProvider> */}
      </QueryClientProvider>
    </Store>
  );
};

export default App;
