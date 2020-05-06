import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { Container, Content } from "./styles";

const Loading: React.FC = () => {
  return (
    <Container>
      <SkeletonTheme color="#1D1C24" highlightColor="#19181F">
        <Content>
          <Skeleton circle height={48} width={48} />

          <Skeleton circle height={150} width={150} />

          <Skeleton height={16} width={220} />
          <Skeleton height={16} width={220} />
          <Skeleton height={16} width={220} />
        </Content>
        <Content>
          <Skeleton circle height={48} width={48} />

          <Skeleton circle height={150} width={150} />

          <Skeleton height={16} width={220} />
          <Skeleton height={16} width={220} />
          <Skeleton height={16} width={220} />
        </Content>
        <Content>
          <Skeleton circle height={48} width={48} />

          <Skeleton circle height={150} width={150} />

          <Skeleton height={16} width={220} />
          <Skeleton height={16} width={220} />
          <Skeleton height={16} width={220} />
        </Content>
      </SkeletonTheme>
    </Container>
  );
};

export default Loading;
