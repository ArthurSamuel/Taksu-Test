import { Container } from "./Card.styles";

interface ICard {
  children?: JSX.Element | JSX.Element[];
}

export default function Card({ children }: ICard) {
  return <Container>{children}</Container>;
}
