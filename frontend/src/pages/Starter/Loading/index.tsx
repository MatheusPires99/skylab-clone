import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { Container, Content } from "./styles";

const Loading: React.FC = () => {
  return (
    <Container>
      <SkeletonTheme color="#1D1C24" highlightColor="#19181F">
        <Content>
          <Skeleton height={85} width={85} />
          <Skeleton height={24} width={180} />
          <Skeleton height={24} width={320} />
          <Skeleton height={24} width={100} />
        </Content>
        <Content>
          <Skeleton height={85} width={85} />
          <Skeleton height={24} width={180} />
          <Skeleton height={24} width={320} />
          <Skeleton height={24} width={100} />
        </Content>
        <Content>
          <Skeleton height={85} width={85} />
          <Skeleton height={24} width={180} />
          <Skeleton height={24} width={320} />
          <Skeleton height={24} width={100} />
        </Content>
        <Content>
          <Skeleton height={85} width={85} />
          <Skeleton height={24} width={180} />
          <Skeleton height={24} width={320} />
          <Skeleton height={24} width={100} />
        </Content>
      </SkeletonTheme>
    </Container>
  );
};

export default Loading;
