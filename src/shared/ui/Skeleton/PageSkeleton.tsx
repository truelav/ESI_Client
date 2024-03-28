import { FC } from "react";
import { Grid, GridItem, Skeleton, Stack } from "@chakra-ui/react";

interface PageSkeletonProps {}

const PageSkeleton: FC<PageSkeletonProps> = () => {
    return (
        <div className="site-wrapper">
            <div>
                <Skeleton height="100px" />
            </div>
            <div className="dashboard-wrapper">
                <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                    <GridItem colSpan={2}>
                        <Skeleton />
                    </GridItem>
                    <GridItem colSpan={10} className="dashboard-body-wrapper">
                        <Stack>
                            <Skeleton height="120px" />
                            <Skeleton height="120px" />
                            <Skeleton height="120px" />
                            <Skeleton height="120px" />
                            <Skeleton height="120px" />
                        </Stack>
                    </GridItem>
                </Grid>
            </div>
            <div>
                <Skeleton height="150px" />
            </div>
        </div>
    );
};

export default PageSkeleton;
