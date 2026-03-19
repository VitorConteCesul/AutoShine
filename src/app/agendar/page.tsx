"use client"

import { Button, ButtonGroup, Heading, Steps, Text, useSteps, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu";

export default function Agendar() {

  const steps = useSteps({
    defaultStep: 0,
    count: items.length,
  })

  const router = useRouter();

  function handleGoToPrevStep() {
    if (steps.hasPrevStep) {
      steps.goToPrevStep()
    } else {
      router.push("/")
    }
  }

  return (
    <VStack as="main" gap={0}>
      <VStack as="section" w="100vw" align="start" pt={28} pb={16} px={6}>
        <Button onClick={handleGoToPrevStep} variant="ghost" rounded="lg" mb={6} >
          <LuArrowLeft />
          {steps.hasPrevStep ? "Voltar" : "Inicio"}
        </Button>

        <Heading as="h1" fontSize="4xl" >Agendar Serviços</Heading>

        {/* {!setSourceMapsEnabled.isCO} */}
        <Text>Passo {steps.value + 1} de {items.length}</Text>

        <Steps.RootProvider value={steps}>
          <Steps.List>
            {items.map((step, index) => (
              <Steps.Item key={index} index={index} title={step.title}>
                <Steps.Indicator />
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>
          {items.map((step, index) => (
            <Steps.Content key={index} index={index}>
              {step.description}
            </Steps.Content>
          ))}
          <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

          <ButtonGroup w="100%"size="sm" variant="outline">
            <Steps.NextTrigger asChild>
              <Button>Next</Button>
            </Steps.NextTrigger>
          </ButtonGroup>
        </Steps.RootProvider>
      </VStack>
    </VStack>
  )
}

const items = [
  {
    title: "Step 1",
    description: "Step 1 description",
  },
  {
    title: "Step 2",
    description: "Step 2 description",
  },
  {
    title: "Step 3",
    description: "Step 3 description",
  },
]