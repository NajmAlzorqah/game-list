import { Menu, Portal } from "@ark-ui/react";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order by: Relevance
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {/* {data.map((platform) => (
                <Menu.Item
                  onClick={() => onSelectPlatform(platform)}
                  key={platform.id}
                  value={platform.name}
                >
                  {platform.name}
                </Menu.Item>
              ))} */}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
export default SortSelector;
