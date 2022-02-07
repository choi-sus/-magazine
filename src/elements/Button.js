import React from "react";
import styled from "styled-components";

const Button = (props) => {

    const {text, _onClick, is_float, children, margin, width, padding, disabled, lineHeight} = props;

    if (is_float){
      return(
        <React.Fragment>
          <FloatButton onClick={_onClick}>{text? text : children}</FloatButton>
        </React.Fragment>
      )
    }

    const styles = {
      margin: margin,
      width: width,
      padding: padding,
      lineHeight: lineHeight
    }

    return (
      <React.Fragment>
        <ElButton {...styles} onClick={_onClick} disabled={disabled} lineHeight={lineHeight}>{text? text : children}</ElButton>
      </React.Fragment>
    );
}

Button.defaultProps = {
    text: false,
    children: null,
    is_float: false,
    _onClick: () => {},
    margin: false,
    width: "100%",
    padding: "12px 0px;",
    disabled: false,
    lineHeight: "20px"
}

const ElButton = styled.button`
    width: ${(props)=> props.width};
    // background-color: ${(props) => (props.disabled ? "#CFDDF1" : "#A4CBF0")};
    color: rgb(168, 105, 208);
    padding: ${(props)=> props.padding};
    box-sizing: border-box;
    ${(props)=> (props.margin ? `margin: ${props.margin};` : '')}
    ${(props)=> (props.disabled ? `background-color: #878787;` : `background-color: #fff;`)}
    font-family: 'Gaegu', cursive;
    font-size: 18px;
    line-height: ${(props)=> props.lineHeight};
    font-weight: 600;
    cursor: pointer;
    border: 2px solid rgb(168, 105, 208);
    border-radius: 25px;
    cursor: pointer;
    transition: background-color, color 0.5s ease-in;
    &:hover {
      color: #fff;
      background-color: rgb(168, 105, 208);
    }
`;

const FloatButton = styled.button`
  width: 70px;
  height: 70px;
  background-color: rgb(168, 105, 208);
  color: #ffffff;
  box-sizing: border-box;
  font-size: 33px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  text-align: center;
  border: none;
  border-radius: 50px;
  line-height: 70px;
  cursor: pointer;
`;

export default Button;