import React, { ChangeEventHandler } from "react";
import { CFormInput, CFormLabel } from "@coreui/react";
import "./index.less";
interface PropsType {
  type: string;
  label: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
export const LInput: React.FC<PropsType> = (props) => {
  return (
    <div className="LInput">
      <CFormLabel htmlFor={props.label + props.type}>{props.label}:</CFormLabel>
      <CFormInput
        type={props.type || "text"}
        id={props.label + props.type}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
      />
    </div>
  );
};
