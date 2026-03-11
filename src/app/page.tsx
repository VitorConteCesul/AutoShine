import { HStack, Link as ChakraLink, Image as ChakraImage, Text, Icon, Button, VStack, Heading, Flex, CardRoot, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import NextLink from "next/link"
import NextImage from "next/image"
import { LuArrowRight, LuCar, LuClock, LuShell, LuShield, LuSparkles, LuStar } from "react-icons/lu";
import { Tag } from '@/components/ui/tag';

import heroCar from "../../public/assets/hero-car.jpg"
import { ColorModeButton } from "@/components/ui/color-mode";
import { Card } from "@/components/home/card";

export default function Home() {
  return (
    <>
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
              <NextLink href="#servicos">
                Serviços
              </NextLink>
            </ChakraLink>
            <ChakraLink asChild>
              <NextLink href="/agendar">
                Agendar
              </NextLink>
            </ChakraLink>

            <ColorModeButton />

            <Button variant="outline" rounded="lg">Acessar</Button>

          </HStack>
        </HStack>
      </HStack>

      <VStack as="main" gap={0}>

        <VStack as="section" position="relative" w="100vw" h="100vh" align="start" justify="center" bgColor="blackAlpha.200">

          <Flex zIndex={1} position="absolute" w="100vw" h="100vh" bgColor="blackAlpha.300/90" />

          <ChakraImage position="absolute" w="100vw" h="100vh" zIndex={0} asChild>
            <NextImage src={heroCar} alt="AutoShine" />
          </ChakraImage>

          <VStack zIndex={2} maxW="2xl" align="start" position="relative" px={6} gap={6}>
            <Tag
              position="relative"
              startElement={<LuSparkles />}
              rounded="lg"
              px={4}
              py={2}
              fontWeight="medium"
            >Excelência em estética automotiva</Tag>

            <Heading
              as="h1"
              fontSize={{ lg: "7xl", md: "5xl" }}
              fontWeight="bold"
              lineHeight="shorter"
              letterSpacing="tight"
            >Seu carro merece o <Text as="span" color="yellow.400" >melhor</Text> cuidado</Heading>

            <Text
              maxW="lg"
              fontSize="lg"
              fontWeight="medium"
              mb={6}
            >
              Transformamos seu veiculo com servicos premium de estética automotiva.
              Agende online e garanta o brilho que seu carro merece.
            </Text>

            <HStack gap={4}>
              <Button rounded="lg" colorPalette="yellow">
                <LuClock />
                Agendar Agora
              </Button>

              <Button rounded="lg">
                Ver Serviços
                <LuArrowRight />
              </Button>
            </HStack>

          </VStack>
        </VStack>

        <VStack as="section" py={24} gap={16}>
          <VStack gap={4}>
            <Heading as="h2" fontSize="4xl" fontWeight="bold">Nossos Serviços</Heading>
            <Text maxW="xl" fontSize="lg" textAlign="center">Oferecemos os melhores serviços de estética automotiva para manter seu veiculo impecavel</Text>
          </VStack>

          <HStack>
            <Card
              icon={<LuSparkles color="black" />}
              title="Polimento Premium"
              description="Restauracao completa do brilho original da pintura com técnicas profissionais"
              textFooter="A partir de R$1.200,00"
            />

            <Card
              icon={<LuShield color="black" />}
              title="Vitrificação"
              description="Proteção cerâmica de longa duração que mantém seu carro impecavél por meses"
              textFooter="A partir de R$2.000,00"
            />

            <Card
              icon={<LuCar color="black" />}
              title="Lavagem Detalhada"
              description="Limpeza completa interna e externa com produtos de alta qualidade"
              textFooter="A partir de R$500,00"
            />

             <Card
              icon={<LuStar color="black" />}
              title="Higienização Interna"
              description="Limpeza profunda de bancos, carpetes e painés com ozônio "
              textFooter="A partir de R$500,00"
            />

          </HStack>

          <Button colorPalette="yellow" rounded="lg">
            Agendar serviço
            <LuArrowRight />
          </Button>

          

        </VStack>

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
      </VStack>
    </>
  );
}