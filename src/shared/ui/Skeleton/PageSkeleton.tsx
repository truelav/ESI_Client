import { FC } from "react";
import { Box, Container, Flex, Spinner, Text } from "@chakra-ui/react";

interface PageSkeletonProps {}

const PageSkeleton: FC<PageSkeletonProps> = () => {
    return (
        <Flex>
            <Container m="auto" h="100%">
                <Box>
                    <Text>Loading Page...</Text>
                </Box>
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                />
            </Container>
        </Flex>
    );
};

export default PageSkeleton;
