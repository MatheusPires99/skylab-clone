import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { Container, Content } from "./styles";

const Loading: React.FC = () => {
  return (
    <Container>
      <SkeletonTheme
        color="rgba(135, 134, 139, 0.1)"
        highlightColor="rgba(135, 134, 139, 0.1)"
      >
        <Content>
          <Skeleton circle height={120} width={120} />
          <Skeleton height={24} width={180} />
          <Skeleton height={16} width={320} />
          <Skeleton height={16} width={100} />
        </Content>
        <Content>
          <Skeleton circle height={120} width={120} />
          <Skeleton height={24} width={180} />
          <Skeleton height={16} width={320} />
          <Skeleton height={16} width={100} />
        </Content>
        <Content>
          <Skeleton circle height={120} width={120} />
          <Skeleton height={24} width={180} />
          <Skeleton height={16} width={320} />
          <Skeleton height={16} width={100} />
        </Content>
        <Content>
          <Skeleton circle height={120} width={120} />
          <Skeleton height={24} width={180} />
          <Skeleton height={16} width={320} />
          <Skeleton height={16} width={100} />
        </Content>
      </SkeletonTheme>
    </Container>
  );
};

export default Loading;
