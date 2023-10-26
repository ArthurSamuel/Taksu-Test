import { useSelector } from "react-redux";
import { AuthState } from "../../store/User/store";
import { Container, Wrapper } from "./Home.styles";
import { LargeText, SmallText } from "../../components/typography/Typography";
import { Gutter } from "../../components/gutter/Gutter";
import TodoCard from "./__components/todoCard/TodoCard";
import ModalToDoCard from "./__components/modal/Modal";
import { useState } from "react";
import FloatButton from "./__components/floatButton/FloatButton";
import React from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  const user = useSelector((state: AuthState) => state.user.user);
  const dataTodoUserCallback = React.useCallback(() => {
    const data = user?.records.find((item) => item.key === user.activeUser);
    return data?.data;
  }, [user]);
  const [visible, setVisible] = useState(false);

  const handleGoBack = () => {
    navigate("/login");
  };

  return (
    <Container>
      <Wrapper>
        <Gutter vertical={8}>
          <SmallText onClick={handleGoBack} style={{ cursor: "pointer" }}>
            To Login Page
          </SmallText>
        </Gutter>
        <LargeText>Hi, {user?.activeUser}</LargeText>
        <Gutter vertical={15}>
          {dataTodoUserCallback()?.map((item, index) => {
            return (
              <TodoCard
                id={item.id}
                key={index}
                date={item.date}
                title={item.title}
                type={item.type}
              />
            );
          })}
        </Gutter>
        <ModalToDoCard visible={visible} onClose={() => setVisible(false)} />
        <FloatButton onClick={() => setVisible(true)} />
      </Wrapper>
    </Container>
  );
}
