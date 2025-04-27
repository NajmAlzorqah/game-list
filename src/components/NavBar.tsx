import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/GameListLogo.png";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" alt="Game List logo" />
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
