import { Dispatch, SetStateAction } from "react";

export interface IWorkspaceWriteProps {
  setIsCustomBoardOpen: Dispatch<SetStateAction<boolean>>;
}

export interface IWorkspaceWriteUIProps {
  onClickOpenBoardModal: () => void;
}
