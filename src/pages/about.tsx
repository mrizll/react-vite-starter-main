import { Container, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxW="container.xl">
      <Heading>About Page</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque ipsum
        vero eos, facere quas nemo est? Fugiat at et omnis dolores dignissimos
        adipisci atque molestias suscipit, quidem facilis, dolorum voluptatem!
      </Text>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Home Page
      </Button>
    </Container>
  );
};

export default AboutPage;
