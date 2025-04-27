import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaQuestion, // Added as fallback
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import { Platform } from "@/hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  if (!platforms || platforms.length === 0) return null;

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => {
        if (!platform?.slug) return null;

        // Use fallback icon if slug not found
        const IconComponent = iconMap[platform.slug] || FaQuestion;

        return <Icon key={platform.id} as={IconComponent} color="gray.500" />;
      })}
    </HStack>
  );
};

export default PlatformIconList;
