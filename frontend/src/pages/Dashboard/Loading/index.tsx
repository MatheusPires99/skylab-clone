import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { Container, Content } from "./styles";

const Loading: React.FC = () => {
  return (
    <Container>
      <SkeletonTheme color="#202020" highlightColor="#333">
        <Content>
          <Skeleton circle height={48} width={48} />
          <Skeleton circle height={150} width={150} />
          <Skeleton height={24} width={180} />
          <Skeleton height={24} width={280} />
          <Skeleton height={24} width={180} />
        </Content>
        <Content>
          <Skeleton circle height={48} width={48} />
          <Skeleton circle height={150} width={150} />
          <Skeleton height={24} width={180} />
          <Skeleton height={24} width={280} />
          <Skeleton height={24} width={180} />
        </Content>
        <Content>
          <Skeleton circle height={48} width={48} />
          <Skeleton circle height={150} width={150} />
          <Skeleton height={24} width={180} />
          <Skeleton height={24} width={280} />
          <Skeleton height={24} width={180} />
        </Content>
      </SkeletonTheme>
    </Container>
  );
};

export default Loading;
