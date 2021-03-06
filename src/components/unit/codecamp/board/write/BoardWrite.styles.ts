import styled from "@emotion/styled";
import { breakPoints } from "../../../imgProject/src/commons/styles/media";

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  margin: auto;

  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 5px;
  }
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
  /* background-color: purple; */
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const Writer = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Password = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
  @media ${breakPoints.mobile} {
    padding: 0;
    @media ${breakPoints.mobile} {
      width: 100%;
    }
    width: 100%;
  }
`;

export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 0;
  }
`;

export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media ${breakPoints.mobile} {
    @media ${breakPoints.mobile} {
      width: 100%;
    }
  }
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: #2a652f;
  border: none;
  cursor: pointer;
  color: white;
  :hover {
    background-color: #142b12;
    border-color: white;
  }
`;

export const Address = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Youtube = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  @media ${breakPoints.mobile} {
    /* background-color: silver; */
    width: 100%;
  }
`;

export const ImgButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const UploadButton = styled.div`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;
  padding-top: 15px;
  position: relative;
`;

export const UploadImg = styled.img`
  width: 78px;
  height: 78px;

  opacity: 0.6;
  position: absolute;
  transform: translate(-40px, -15px);
`;

export const OptionWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
  @media ${breakPoints.mobile} {
    padding: 0;
  }
`;

export const CancelButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #bdbdbd;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: ${(props: any) => (props.active ? "#2a652f" : "")};
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  :hover {
    color: #2a653f;
    background-color: whitesmoke;
    font-weight: bold;
  }
`;
export const CancelBoutton = styled.button`
  width: 179px;
  height: 52px;
  background-color: ${(props: any) => (props.active ? "#2a652f" : "")};
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  :hover {
    color: #2a653f;
    background-color: whitesmoke;
    font-weight: bold;
  }
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

export const UploadClickbtn = styled.div`
  height: 78px;
  width: 78px;
  position: absolute;
  z-index: 0.7;
`;
