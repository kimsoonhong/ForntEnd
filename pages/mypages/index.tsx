import styled from "@emotion/styled";
import Sidebar from "../../src/components/unit/codecamp/mypages/sidebar/Sidebar.container";
import MyPoint from "../../src/components/unit/codecamp/mypages/myPoint/myPoint.container";
import MyProfile from "../../src/components/unit/codecamp/mypages/myProfile/myProfile.container";
import MyMarket from "../../src/components/unit/codecamp/mypages/myMarket/myMarket.container";
import { useContext, useState } from "react";
import { GlobalContext } from "../../pages/_app";

const Wrapper = styled.div`
  width: 1200px;
  margin: auto;
  /* background-color: blue; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function mypage() {
  const [page, setPage] = useState("myprofile");
  const { setIsLayout } = useContext(GlobalContext);
  setIsLayout(true);

  return (
    <Wrapper>
      <div>
        <Sidebar setPage={setPage} />
      </div>
      {page === "myprofile" && <MyProfile />}
      {page === "myMarket" && <MyMarket />}
      {page === "myPoint" && <MyPoint />}
    </Wrapper>
  );
}
