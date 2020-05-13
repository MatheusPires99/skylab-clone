import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import {
  Container,
  Content,
  Sidebar,
  UserInfo,
  Inventory,
  UtilsLinks,
  Extra,
} from "./styles";

const Loading: React.FC = () => {
  return (
    <SkeletonTheme
      color="rgba(135, 134, 139, 0.1)"
      highlightColor="rgba(135, 134, 139, 0.1)"
    >
      <Container>
        <Content>
          <Sidebar>
            <UserInfo>
              <Skeleton circle width={180} height={180} />
              <div className="title">
                <Skeleton width={116} height={28} />
              </div>
            </UserInfo>

            <Inventory>
              <div className="title">
                <Skeleton width={116} height={28} />
              </div>
              <Skeleton count={16} width={65} height={65} />
            </Inventory>

            <UtilsLinks>
              <div className="title">
                <Skeleton width={116} height={28} />
              </div>
              <Skeleton count={2} width={200} height={20} />
            </UtilsLinks>

            <Extra>
              <Skeleton count={2} width={135} height={130} />
            </Extra>
          </Sidebar>
        </Content>
      </Container>
    </SkeletonTheme>
  );
};

export default Loading;
