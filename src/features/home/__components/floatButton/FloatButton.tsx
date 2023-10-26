import { Container } from "./FloatButton.styles";

interface IFloatButton {
  onClick(): void;
}

export default function FloatButton({ onClick }: IFloatButton) {
  return (
    <Container onClick={onClick}>
      <i style={{ fontSize: 40 }} className="bi bi-plus"></i>
    </Container>
  );
}
