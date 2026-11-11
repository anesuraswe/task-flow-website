import { HStack, Image, VStack } from "@chakra-ui/react"
import heroImg from '../assets/1-Task-Flow.webp'
import { Heading } from "lucide-react"
const Hero = () => {
  return (
    <HStack>
     <Image  src={heroImg} />
     <VStack>
      <Heading>Achieve More with Task Flow</Heading>
     </VStack>
    </HStack>
  )
}

export default Hero
