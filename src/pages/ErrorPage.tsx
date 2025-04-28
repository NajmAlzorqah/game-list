import NavBar from "@/components/NavBar";
import { Heading, Text, VStack } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <VStack display="flex" justifyContent="center" alignItems="center">
        <Heading>Oops!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occurred."}
        </Text>
      </VStack>
    </>
  );
};

export default ErrorPage;
