import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { Container } from "./styles";

const Loading: React.FC = () => {
  return (
    <SkeletonTheme color="#202020" highlightColor="#333">
      <Container>
        <Skeleton height={85} width={85} />
        <Skeleton height={24} width={180} />
        <Skeleton height={24} width={320} />
        <Skeleton height={24} width={100} />
      </Container>
      <Container>
        <Skeleton height={85} width={85} />
        <Skeleton height={24} width={180} />
        <Skeleton height={24} width={320} />
        <Skeleton height={24} width={100} />
      </Container>
      <Container>
        <Skeleton height={85} width={85} />
        <Skeleton height={24} width={180} />
        <Skeleton height={24} width={320} />
        <Skeleton height={24} width={100} />
      </Container>
      <Container>
        <Skeleton height={85} width={85} />
        <Skeleton height={24} width={180} />
        <Skeleton height={24} width={320} />
        <Skeleton height={24} width={100} />
      </Container>
    </SkeletonTheme>
  );
};

export default Loading;
