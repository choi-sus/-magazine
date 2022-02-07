import React from "react";
import styled from "styled-components";

import {Text, Grid} from "./index";

const Input = (props) => {
    const {label, placeholder, _onChange, type, multiLine, value, is_radio, _onClick, name, defaultChecked} = props;
    
    if(multiLine){
      return (
        <Grid>
          {label && <Text margin="0px">{label}</Text>}
          <ElTextarea value={value} placeholder={placeholder} onChange={_onChange} rows={10}></ElTextarea>
        </Grid>
      )
    }

    if(is_radio){
      return (
        <React.Fragment>
          <Grid>
            <ElRadio type="radio" onClick={_onClick} name={name} defaultChecked={defaultChecked}></ElRadio>
            <label>{label}</label>
          </Grid>
        </React.Fragment>
      )
    }
    
    return (
      <React.Fragment>
        <Grid>
          {label && <Text margin="0px">{label}</Text>}
          <ElInput type={type} placeholder={placeholder} onChange={_onChange} />
        </Grid>
      </React.Fragment>
    );
}

Input.defaultProps = {
    defaultChecked: false,
    name: "layout",
    is_radio: false,
    multiLine: false,
    label: false,
    is_radio_flex: false,
    placeholder: '텍스트를 입력해주세요.',
    type: "text",
    value: "",
    _onChange: () => {},
    _onClick: () => {},
}

const ElTextarea = styled.textarea`
    border: 1px solid #212121;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
`;

const ElInput = styled.input`
    border: 1px solid #212121;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
`;

const ElRadio = styled.input`
  
`;

export default Input;