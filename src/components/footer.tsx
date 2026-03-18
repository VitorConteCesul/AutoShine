import { Link as ChakraLink, Icon, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { LuCar } from "react-icons/lu";

export default function Footer() {
  return (
    <VStack as="footer">
      <ChakraLink colorPalette="yellow" alignItems="center" gap={2} asChild>
        <NextLink href="/">

          <Icon w={7} h={7}>
            <LuCar />
          </Icon>

          <Text fontSize="xl" fontWeight="bold" >Auto Shine</Text>
        </NextLink>
      </ChakraLink>

      <Text fontSize="sm">© 2026 AutoShine Estética Automotiva. Todos os direitos reservados.</Text>
    </VStack>
  )
}