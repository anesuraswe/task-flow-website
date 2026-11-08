
import { Button, Heading, VStack, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
    return (
        <VStack
            minH="100vh"
            // justify="center"
            gap={4}
        >
            <NavBar/>
            <Hero/>
            <Features/>
            <Pricing/>
            <Testimonials/>
            <Footer/>
        </VStack>
    );
}

export default App;
