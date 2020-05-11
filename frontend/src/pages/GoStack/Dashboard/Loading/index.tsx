import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { Container, Content } from "./styles";

const Loading: React.FC = () => {
  return (
    <SkeletonTheme
      color="rgba(135, 134, 139, 0.1)"
      highlightColor="rgba(135, 134, 139, 0.1)"
    >
      <Container>
        <Content>
          <Skeleton circle height={180} width={180} />

          <Skeleton height={40} width={220} />

          <Skeleton height={16} width={300} />
          <Skeleton height={16} width={300} />
        </Content>
        <Content>
          <div>
            <Skeleton circle height={56} width={56} />

            <Skeleton height={32} width={80} />
          </div>

          <Skeleton height={16} />
          <Skeleton height={16} />
        </Content>
        <Content>
          <div>
            <Skeleton circle height={56} width={56} />

            <Skeleton height={32} width={80} />
          </div>

          <Skeleton height={16} />
          <Skeleton height={16} />
        </Content>
      </Container>
    </SkeletonTheme>
  );
};

export default Loading;
