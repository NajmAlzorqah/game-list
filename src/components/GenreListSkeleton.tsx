import {
  Card,
  CardBody,
  Skeleton,
  SkeletonText,
  HStack,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <Card.Root my="5px" overflow="hidden" borderRadius={8}>
      <CardBody padding="10px">
        <HStack gap="10px" align="center">
          <Skeleton boxSize="32px" borderRadius="md" />
          <SkeletonText noOfLines={1} />
        </HStack>
      </CardBody>
    </Card.Root>
  );
};

export default GenreListSkeleton;
