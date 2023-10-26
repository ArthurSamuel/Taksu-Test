import { Container } from "./Tag.styles";

interface ITag {
  bgColor?: string;
  text: string;
  color?: string;
}

export default function Tag({ color, bgColor, text }: ITag) {
  return (
    <Container bgColor={bgColor} color={color}>
      {text}
    </Container>
  );
}
