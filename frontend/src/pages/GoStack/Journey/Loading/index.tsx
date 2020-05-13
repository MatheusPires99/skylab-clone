import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import {
  Container,
  Sidebar,
  UserInfo,
  Inventory,
  UtilsLinks,
  Extra,
  Journey,
  Nivel,
  Module,
  ModuleDetails,
  PercentageCompleted,
} from "./styles";

const Loading: React.FC = () => {
  return (
    <Container>
      <SkeletonTheme
        color="rgba(135, 134, 139, 0.1)"
        highlightColor="rgba(135, 134, 139, 0.1)"
      >
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

        <Journey>
          <Nivel>
            <Skeleton width={116} height={28} />

            <Module>
              <ModuleDetails>
                <Skeleton width={80} height={80} />

                <div>
                  <Skeleton width={116} height={28} />

                  <Skeleton count={3} width={525} height={24} />
                </div>
              </ModuleDetails>

              <PercentageCompleted>
                <Skeleton width={80} height={14} />

                <Skeleton width={525} height={4} />
              </PercentageCompleted>
            </Module>
            <Module>
              <ModuleDetails>
                <Skeleton width={80} height={80} />

                <div>
                  <Skeleton width={116} height={28} />

                  <Skeleton count={3} width={525} height={24} />
                </div>
              </ModuleDetails>

              <PercentageCompleted>
                <Skeleton width={80} height={14} />

                <Skeleton width={525} height={4} />
              </PercentageCompleted>
            </Module>
            <Module>
              <ModuleDetails>
                <Skeleton width={80} height={80} />

                <div>
                  <Skeleton width={116} height={28} />

                  <Skeleton count={3} width={525} height={24} />
                </div>
              </ModuleDetails>

              <PercentageCompleted>
                <Skeleton width={80} height={14} />

                <Skeleton width={525} height={4} />
              </PercentageCompleted>
            </Module>
          </Nivel>
        </Journey>
      </SkeletonTheme>
    </Container>
  );
};

export default Loading;
