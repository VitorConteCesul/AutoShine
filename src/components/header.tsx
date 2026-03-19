
import { Button, Link as ChakraLink, HStack, Icon, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { LuCar } from "react-icons/lu";
import { ColorModeButton } from "./ui/color-mode";

export default function Header() {
  return (
    <HStack as="header" position="fixed" left={0} right={0} top={0} zIndex={50} bg="blackAlpha.800">
      <HStack as="nav" w="full" alignItems="center" justify="space-between" px={6} py={4}>

        <ChakraLink colorPalette="yellow" alignItems="center" gap={2} asChild>
          <NextLink href="/">

            <Icon w={7} h={7}>
              <LuCar />
            </Icon>

            <Text fontSize="xl" fontWeight="bold" >Auto Shine</Text>
          </NextLink>
        </ChakraLink>

        <HStack justify="center" gap={8}>
          <ChakraLink asChild>
            <NextLink href="/">
              Inicio
            </NextLink>
          </ChakraLink>
          <ChakraLink asChild>
            <a href='/#servicos'>Serviços</a>
          </ChakraLink>
          <ChakraLink asChild>
            <a href='/agendar'>
              Agendar
            </a>
          </ChakraLink>

          <ColorModeButton />

          <Button variant="outline" rounded="lg">Acessar</Button>

        </HStack>
      </HStack>
    </HStack>
  )
}