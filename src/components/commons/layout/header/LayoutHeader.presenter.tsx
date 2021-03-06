import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
  Menu1,
  Menu3,
  ModalWrapper,
  LiftWrapper,
  LiftWrapperImg,
  LiftWrapperUserName,
  LiftWrapperAmountText,
  RightWrapper,
  RightWrapperText,
  RightWrapperInput,
  RightWrapperButton,
  TopWapper,
} from "./LayoutHeader.styles";
import Button01 from "../../Buttons/Button-small-01";
import Head from "next/head";

import { useContext, useState, useEffect, ChangeEvent } from "react";
import { GlobalContext } from "../../../../../pages/_app";

import { Menu, Dropdown, Modal } from "antd";
import { DownOutlined } from "@ant-design/icons";

interface ILayoutHeaderUIProps {
  onClickLogin: () => void;
  onClickSignUp: () => void;
  data: any;
  onClickOpenPayment: () => void;
  isOpen: boolean;
  onClickPayment: () => void;
  onChangeAmount: (event: ChangeEvent<HTMLInputElement>) => void;
  onClose: () => void;
  onClickLogout: () => void;
  amount: number;
}

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  const [scrollY, setScrollY] = useState<number>(0);
  const listener = () => {
    setScrollY(window.pageYOffset);
  };
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  const afterAmount =
    Number(props.data?.fetchUserLoggedIn.userPoint.amount) +
    Number(props.amount);

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"
        ></script>
      </Head>

      {props.isOpen && (
        <div>
          <Modal visible={true} footer={null} closable={false}>
            <ModalWrapper>
              <LiftWrapper>
                <LiftWrapperImg></LiftWrapperImg>
                <LiftWrapperUserName>
                  {props.data?.fetchUserLoggedIn.name}
                </LiftWrapperUserName>
                <LiftWrapperAmountText>
                  ??????????????? : {props.data?.fetchUserLoggedIn.userPoint.amount}{" "}
                  p
                </LiftWrapperAmountText>
                <LiftWrapperAmountText>
                  ?????? ??? ????????? :{afterAmount} p
                </LiftWrapperAmountText>
              </LiftWrapper>
              <RightWrapper>
                <RightWrapperText>
                  ???????????? ???????????? ???????????? ???????????????.
                </RightWrapperText>

                <RightWrapperText style={{ paddingBottom: "60px" }}>
                  ???????????? ????????? ????????? ???????????????.
                </RightWrapperText>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <RightWrapperInput
                    type="number"
                    placeholder={"ex) 2000"}
                    onChange={props.onChangeAmount}
                  />
                  <Button01
                    onClick={props.onClickPayment}
                    buttonName="????????????"
                  />
                </div>
                <RightWrapperButton onClick={props.onClose}>
                  ????????????
                </RightWrapperButton>
              </RightWrapper>
            </ModalWrapper>
          </Modal>
        </div>
      )}
      <Wrapper id="wrapper" scrollY={scrollY}>
        <InnerWrapper>
          <InnerLogo>?????? ??? ???</InnerLogo>
          <TopWapper>
            <InnerButton onClick={props.onClickLogin}>
              {accessToken ? "" : "???????????????"}
            </InnerButton>
            <InnerButton>
              {accessToken ? (
                <Dropdown
                  overlay={
                    <Menu style={{ width: "260px" }}>
                      <Menu1 key="1">
                        <div>{props.data?.fetchUserLoggedIn.name}</div>
                        <div>
                          {props.data?.fetchUserLoggedIn.userPoint.amount} P
                        </div>
                      </Menu1>
                      <Menu3 key="2" onClick={props.onClickOpenPayment}>
                        ????????????
                      </Menu3>
                      <Menu3 key="3" onClick={props.onClickLogout}>
                        ????????????
                      </Menu3>
                    </Menu>
                  }
                >
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                    style={{
                      color: "black",
                      fontSize: "20px",
                    }}
                  >
                    {props.data?.fetchUserLoggedIn.name}??? ???????????????.{" "}
                    <DownOutlined
                      style={{ marginLeft: "8px", fontSize: "16px" }}
                    />
                  </a>
                </Dropdown>
              ) : (
                <InnerButton onClick={props.onClickSignUp}>
                  ??????????????????
                </InnerButton>
              )}
            </InnerButton>
          </TopWapper>
        </InnerWrapper>
      </Wrapper>
    </>
  );
}
