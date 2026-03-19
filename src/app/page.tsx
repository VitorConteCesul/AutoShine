import { Tag } from '@/components/ui/tag';
import { Button, Image as ChakraImage, Link as ChakraLink, Flex, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { LuArrowRight, LuCar, LuClock, LuShield, LuSparkles, LuStar } from "react-icons/lu";

import { Card } from "@/components/home/card";
import { ColorModeButton } from "@/components/ui/color-mode";
import heroCar from "../../public/assets/hero-car.jpg";

export default function Home() {
  return (
    <>
      <VStack as="main" gap={0}>

        <VStack as="section" position="relative" w="100vw" h="100vh" align="start" justify="center" bgColor="blackAlpha.200">

          <Flex zIndex={1} position="absolute" w="100vw" h="100vh" bgColor="blackAlpha.500/90" />

          {/* asChild permite que voce use os "poderes" do image do chakra(ChakraImage) no componente do next(NextImage)  */}
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
              colorPalette="yellow"
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
              <Button rounded="lg" colorPalette="yellow" asChild>
                <a href="/agendar">
                  <LuClock />
                  Agendar Agora
                </a>
              </Button>

              <Button rounded="lg" asChild>
                <a href="#servicos">
                  Ver Serviços
                  <LuArrowRight />
                </a>
              </Button>
            </HStack>

          </VStack>
        </VStack>

        <VStack id='servicos' as="section" py={24} gap={16}>
          <VStack gap={4}>
            <Heading as="h2" fontSize="4xl" fontWeight="bold">Nossos Serviços</Heading>
            <Text maxW="xl" fontSize="lg" textAlign="center">Oferecemos os melhores serviços de estética automotiva para manter seu veiculo impecavel</Text>
          </VStack>

          <HStack gap={6}>
            <Card
              icon={<LuSparkles color="black" />}
              title="Polimento Premium"
              description="Restauracao completa do brilho original da pintura com técnicas profissionais"
              textFooter="A partir de R$1.200,00"
            />

            <Card
              icon={<LuShield color="black" />}
              title="Vitrificação"
              description="Protecão cerâmica de longa duracao que mantém seu carro impecável por meses."
              textFooter="A partir de R$2.500,00"
            />

            <Card
              icon={<LuCar color="black" />}
              title="Lavagem Detalhada"
              description="Limpeza completa interna e externa com produtos de alta qualidade."
              textFooter="A partir de R$800,00"
            />

            <Card
              icon={<LuStar color="black" />}
              title="Higienização Interna"
              description="Limpeza profunda de bancos, carpetes e painéis com ozônio."
              textFooter="A partir de R$800,00"
            />

          </HStack>

          <Button colorPalette="yellow" rounded="lg" asChild>
            <a href="/agendar">
              Agendar serviço
              <LuArrowRight />
            </a>
          </Button>

        </VStack>

      </VStack>
    </>
  );
}