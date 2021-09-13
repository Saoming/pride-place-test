import { ChakraProvider } from "@chakra-ui/react"

function PrideTestApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default PrideTestApp