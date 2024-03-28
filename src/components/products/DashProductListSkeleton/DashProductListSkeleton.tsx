import { FC } from "react";
import {
    Skeleton,
    Stack,
    SkeletonCircle,
    SkeletonText,
} from "@chakra-ui/react";

interface DashProductListSkeletonProps {}

const DashProductListSkeleton: FC<DashProductListSkeletonProps> = () => {
    return (
        <Stack>
            <Skeleton height="120px" />
            <Skeleton height="120px" />
            <Skeleton height="120px" />
            <Skeleton height="120px" />
            <Skeleton height="120px" />
        </Stack>
    );
};

export default DashProductListSkeleton;
