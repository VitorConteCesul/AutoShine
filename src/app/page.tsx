import { HStack, Link as ChakraLink, Text, Icon, Button, VStack, Image as ChakraImage} from "@chakra-ui/react";
import NextLink from "next/link";
import { LuCar } from "react-icons/lu";

export default function Home() {
  return (
    <>
      <HStack as="header" justify={"space-between"} px={6} py={4}>

        <ChakraLink asChild alignItems="center" justify="space">
          <NextLink href="/">
            <Icon w={7} h={7}>
              <LuCar />
            </Icon>

            <Text fontSize="xl" fontWeight="bold">AutoShine</Text>
          </NextLink>
        </ChakraLink>

        <ChakraLink asChild>
          <NextLink href="/">
            Inicio
          </NextLink>
        </ChakraLink>

        <ChakraLink asChild>
          <NextLink href="/">
            Serviços
          </NextLink>
        </ChakraLink>

        <ChakraLink asChild>
          <NextLink href="/">
            Agendar
          </NextLink>
        </ChakraLink>

        <Button variant="outline" rounded="lg">Acessar</Button>
      </HStack>

      <VStack as="main" gap={0}>
        <VStack as="section">
          <ChakraImage w >
            <NextImage src={heroCar} alt "AutoShine" />
          </ChakraImage>
        </VStack>
      </VStack>
    </>
  );
}
