import { Flex, Image, Text } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

interface ListaCaracteriscaProps {
  icon: string;
  text: string;
}

export default function ListaCaracteristica({
  icon,
  text,
}: ListaCaracteriscaProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex direction={["row", "column"]} align="center" justify="center">
      {isMobile ? (
        <Image alt="icons" src={`/icons/${icon}.svg`} w="85px" mb="6" />
      ) : (
        <Text color="yellow.400" fontSize="4xl" mr="2">
          •
        </Text>
      )}
      <Text fontWeight="600" color="gray.700" fontSize={["md", "xl", "2xl"]}>
        {text}
      </Text>
    </Flex>
  );
}
