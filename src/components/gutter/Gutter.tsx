import styled from "styled-components";

interface IGutter {
  vertical?: number;
  horizontal?: number;
}

export const Gutter = styled.div<IGutter>`
  margin-block: ${(props) => `${props.vertical}px`};
  margin-left: ${(props) => `${props.horizontal}`};
  margin-right: ${(props) => `${props.horizontal}`};
`;
