import styled from "@emotion/styled";
import { ArrowLeftOutlined, DeleteOutlined } from "@ant-design/icons";
import breakPoints from "../../../commons/media/media";

interface backcolor {
  backColor: { backColor: any; color: string };
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 18px;
  overflow: hidden;
`;
export const BackImg = styled.div`
  position: fixed;
  opacity: 0.5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url(${(props) => props.color});
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props: backcolor) => props.backColor};
  @media ${breakPoints.tablet} {
    background-size: 60%;
  }
  @media ${breakPoints.web} {
    background-size: 50%;
  }
`;
export const InnerWrapper = styled.div`
  @media ${breakPoints.tablet} {
    width: 70%;
    margin: auto;
    border: 2px black solid;
    border-radius: 4px;
    padding: 20px 40px 40px 40px;
    transition: ease-in-out 500ms all;
  }
  @media ${breakPoints.web} {
    width: 1200px;
    margin: auto;
    border: 2px black solid;
    border-radius: 4px;
    padding: 40px;
    transition: ease-in-out 500ms all;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;
export const ArrowLeftIcon = styled(ArrowLeftOutlined)`
  font-size: 20px;
  :hover {
    cursor: pointer;
  }
  @media ${breakPoints.web} {
    font-size: 25px;
    transition: ease-in-out 500ms all;
  }
`;
export const DeleteIcon = styled(DeleteOutlined)`
  font-size: 20px;
  :hover {
    cursor: pointer;
  }
  @media ${breakPoints.web} {
    font-size: 25px;
    transition: ease-in-out 500ms all;
  }
`;
export const TitleWrapper = styled.div`
  width: 100%;
  height: 72px;
  position: relative;
  @media ${breakPoints.web} {
    margin-bottom: 20px;
    transition: ease-in-out 500ms all;

    margin-bottom: 50px;
    margin-top: 20px;
  }
`;
export const Text = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 6px;
  padding-top: 12px;
  line-height: 28px;
  font-family: "Oboksanghoe_B";
  @media ${breakPoints.web} {
    font-size: 25px;
    transition: ease-in-out 500ms all;
    margin-bottom: 10px;
  }
`;
export const DetailTitleInput = styled.input`
  width: 100%;
  height: 32px;
  padding: 0 44px 0 8px;
  overflow: auto;
  border: none;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  :focus {
    border: none;
    background-color: rgba(255, 255, 255, 0.7);
  }
  @media ${breakPoints.web} {
    font-size: 25px;
    height: 42px;
    line-height: 42px;
    padding: 0 16px;
    transition: ease-in-out 500ms all;
  }
`;
export const ConfirmTitleButton = styled.div`
  width: 50px;
  height: 32px;
  padding: 0 8px;
  right: 0;
  line-height: 32px;
  position: absolute;
  text-align: right;
  transform: translateY(-100%);
  color: #bdbdbd;
  :hover {
    cursor: pointer;
  }

  @media ${breakPoints.web} {
    width: 100px;
    font-size: 20px;
    height: 42px;
    line-height: 42px;
    transition: ease-in-out 500ms all;
    text-align: right;
  }
`;
export const DetailTitleDiv = styled.div`
  width: 100%;
  height: 32px;
  padding: 0 8px;
  line-height: 32px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  @media ${breakPoints.web} {
    font-size: 25px;
    height: 42px;
    line-height: 42px;
    padding: 0 16px;
    transition: ease-in-out 500ms all;
  }
`;
export const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
  @media ${breakPoints.web} {
  }
`;
export const DetailContentsTextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 4px 8px;
  border: none;
  resize: none;
  overflow: auto;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  :focus {
    background-color: rgba(255, 255, 255, 0.7);
  }
  @media ${breakPoints.web} {
    font-size: 25px;
    height: 220px;
    padding: 8px 16px;
    transition: ease-in-out 500ms all;
    ::placeholder {
      font-size: 25px;
    }
  }
`;
export const ConfirmContentButton = styled.div`
  width: 50px;
  height: 30px;
  padding: 0 8px;
  right: 0;
  bottom: 0;
  position: absolute;
  vertical-align: bottom;
  text-align: right;
  color: #bdbdbd;
  :hover {
    cursor: pointer;
  }
  @media ${breakPoints.web} {
    position: absolute;
    vertical-align: bottom;
    text-align: right;
    transition: ease-in-out 500ms all;
    font-size: 20px;
    width: 100px;
  }
`;
export const DetailContentsDiv = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 4px 8px;
  border: none;
  resize: none;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  word-break: break-all;
  @media ${breakPoints.web} {
    font-size: 25px;
    height: 220px;
    padding: 8px 16px;
    transition: ease-in-out 500ms all;
  }
`;
