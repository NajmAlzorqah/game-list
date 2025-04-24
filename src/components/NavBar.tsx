import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar </Text>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
