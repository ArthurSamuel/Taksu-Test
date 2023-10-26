import { Container } from "./Tag.styles";

interface ITag {
  backgroundcolor?: string;
  text: string;
  color?: string;
}

export default function Tag({ color, backgroundcolor, text }: ITag) {
  return (
    <Container backgroundcolor={backgroundcolor} color={color}>
      {text}
    </Container>
  );
}
