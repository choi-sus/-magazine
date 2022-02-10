import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {is_cursor, is_hover, is_shadow, is_zIndex, height, is_fixed, border, is_flex, width, margin, padding, bg, children, center, _onClick } = props;

  const styles = {
      is_flex: is_flex,
      width: width,
      margin: margin,
      padding: padding,
      bg: bg,
      center: center,
      border: border,
      is_fixed: is_fixed,
      height: height,
      is_zIndex: is_zIndex,
      is_shadow: is_shadow,
      is_hover: is_hover,
      is_cursor: is_cursor,
  };
  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  center: false,
  _onClick: () => {},
  border: "none",
  is_fixed: false,
  height: "100%",
  is_zIndex: false,
  is_shadow: false,
  is_hover: false,
  is_cursor: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  border-bottom: ${(props) => props.border};
  height: ${(props) => props.height};
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) => props.is_flex ? `display: flex; align-items: center; justify-content: space-between; `: ""}
  ${(props)=> props.center ? `text-align: center;` : ""}
  ${(props)=> props.is_fixed ? `position: fixed;` : ""}
  ${(props)=> props.is_zIndex ? `z-index: 9999;` : ""}
  ${(props)=> props.is_shadow ? `box-shadow: 0 5px 5px grey;` : ""}
  // ${(props)=> props.is_hover ? `&:hover{transform: scale(1.03);}` : ""}
  &:hover{
    ${(props)=> props.is_hover}
  }
  transition: transform 0.3s ease-in;
  ${(props)=> props.is_cursor ? `cursor: pointer;` : ""}
  `;

export default Grid;
