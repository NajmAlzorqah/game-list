import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";
interface Props {
  width: number;
}
const GameCardSkeleton = ({ width }: Props) => {
  return (
    <Card.Root borderRadius={10} width={width + "px"} overflow="hidden">
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
