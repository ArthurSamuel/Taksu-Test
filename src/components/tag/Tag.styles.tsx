import styled from "styled-components";

interface IContainer {
  color?: string;
  backgroundcolor?: string;
}

export const Container = styled.div<IContainer>`
  width: 50px;
  height: 15px;
  padding: 5px;
  border-radius: 20px;
  background-color: ${(props) => props.backgroundcolor || "gray"};
  color: ${(props) => props.color || "white"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;
