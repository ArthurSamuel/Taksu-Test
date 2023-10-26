import styled from "styled-components";

interface IButton {
  width?: number;
  color?: "blue" | "transparent" | "green";
}

const getColor = (color?: "blue" | "transparent" | "green") => {
  switch (color) {
    case "blue":
      return "#5440d1";
    case "transparent":
      return "transparent";
    case "green":
      return "#39c36d";
    default:
      return "white";
  }
};

export const Button = styled.button<IButton>`
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => `${getColor(props.color)}`};
  color: white;
  cursor: pointer;
  width: ${(props) => `${props.width}px` || "100%"};
  border: 0px;
  font-weight: bold;
  font-size: 12px;
`;
