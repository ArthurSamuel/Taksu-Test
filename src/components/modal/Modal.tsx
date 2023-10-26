import { useState } from "react";
import { Container } from "./Modal.styles";

interface IModal {
  children: JSX.Element | JSX.Element[];
  onClick(): void;
}

export default function Modal({ children, onClick }: IModal) {
  const [visible, setVisible] = useState(false);

  if (visible) return null;

  return <Container onClick={onClick}>{children}</Container>;
}
