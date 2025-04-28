import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/GameListLogo.png";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image
          src={logo}
          boxSize="60px"
          alt="Game List logo"
          objectFit="cover"
          borderRadius={5}
        />
      </Link>
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
