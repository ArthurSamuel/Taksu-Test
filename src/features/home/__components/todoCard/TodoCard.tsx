import { useDispatch } from "react-redux";
import { Button } from "../../../../components/button/Button.styles";
import Card from "../../../../components/card/Card";
import { Gutter } from "../../../../components/gutter/Gutter";
import Tag from "../../../../components/tag/Tag";
import {
  MediumText,
  SmallText,
} from "../../../../components/typography/Typography";
import {
  ButtonContainer,
  Content,
  ContentContainer,
  DeleteIcon,
  TopContent,
} from "./TodoCard.styles";
import {
  deleteTodoReducer,
  updateTodoReducer,
} from "../../../../store/User/User";
import { formatDate } from "../../../../utils/Date";

interface ITodoCard {
  id: any;
  title: string;
  date: string;
  type: "open" | "done" | "overdue";
}

export default function TodoCard({ date, title, type, id }: ITodoCard) {
  const dispatch = useDispatch();
  const setTag = (type: "open" | "done" | "overdue") => {
    switch (type) {
      case "open":
        return { text: "OPEN", bgColor: "#c4c4c4", color: "black" };
      case "done":
        return { text: "DONE", bgColor: "#39c36d", color: "white" };
      case "overdue":
        return { text: "OVERDUE", bgColor: "#c33939", color: "white" };
    }
  };
  const tagConfig = setTag(type);

  const handleOnClickAdd = () => {
    dispatch(updateTodoReducer({ id, type: "done" }));
  };

  const handleOnClickDelete = () => {
    dispatch(deleteTodoReducer({ id }));
  };

  return (
    <Gutter vertical={10}>
      <Card>
        <TopContent>
          <Tag
            text={tagConfig.text}
            backgroundcolor={tagConfig.bgColor}
            color={tagConfig.color}
          />
          <DeleteIcon onClick={handleOnClickDelete}>
            <i style={{ color: "white" }} className="bi bi-trash"></i>
          </DeleteIcon>
        </TopContent>
        <ContentContainer>
          <Content>
            <Gutter vertical={8}>
              <MediumText>{title}</MediumText>
              <Gutter vertical={8}>
                <SmallText>Due date:</SmallText>
                <SmallText>{formatDate(date)}</SmallText>
              </Gutter>
            </Gutter>
          </Content>
          {type !== "done" && (
            <ButtonContainer>
              <Button color="blue" onClick={handleOnClickAdd}>
                DONE
              </Button>
            </ButtonContainer>
          )}
        </ContentContainer>
      </Card>
    </Gutter>
  );
}
