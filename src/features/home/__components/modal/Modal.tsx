import { Button } from "../../../../components/button/Button.styles";
import { Gutter } from "../../../../components/gutter/Gutter";
import { InputDate } from "../../../../components/input/Input";
import { InputFC } from "../../../../components/input/Input.styles";
import Modal from "../../../../components/modal/Modal";
import {
  ErrorText,
  MediumText,
  SmallText,
} from "../../../../components/typography/Typography";
import { ModalToDoButtonWraper, ModalToDoWrapper } from "./Modal.styles";
import { Formik } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { addTodoReducer } from "../../../../store/User/User";
import { isOverDue } from "../../../../utils/Date";
import { generateUniqueString } from "../../../../utils/Helper";

interface IModalToDoCard {
  visible: boolean;
  onClose(): void;
}

export default function ModalToDoCard({ visible, onClose }: IModalToDoCard) {
  const dispatch = useDispatch();

  if (!visible) return null;

  return (
    <Modal onClick={onClose}>
      <ModalToDoWrapper onClick={(e) => e.stopPropagation()}>
        <MediumText>New Todo</MediumText>
        <Gutter vertical={10}>
          <Gutter vertical={5}>
            <Formik
              initialValues={{ title: "", date: Date() }}
              validate={(values) => {
                const errors: any = {};
                if (!values.date) {
                  errors.date = "Date Required";
                }
                if (!values.title) {
                  errors.title = "Title Required";
                }
                return errors;
              }}
              onSubmit={(values) => {
                dispatch(
                  addTodoReducer({
                    title: values.title,
                    date: values.date,
                    type: isOverDue(values.date) ? "overdue" : "open",
                    id: generateUniqueString(),
                  })
                );
              }}
            >
              {({ values, errors, handleChange, handleSubmit, touched }) => (
                <form onSubmit={handleSubmit}>
                  <SmallText>Title</SmallText>
                  <Gutter vertical={8}>
                    <InputFC
                      name="title"
                      onChange={handleChange}
                      value={values.title}
                    />
                    <ErrorText> {touched.title && errors.title}</ErrorText>
                  </Gutter>
                  <SmallText>Due Date</SmallText>
                  <Gutter vertical={8}>
                    <InputDate
                      onChange={(e) => (values.date = e)}
                      name="date"
                    />
                    <ErrorText> {touched.date && errors.date}</ErrorText>
                  </Gutter>
                  <ModalToDoButtonWraper>
                    <Button color="blue" width={200} type="submit">
                      Save
                    </Button>
                    <Button color="transparent" onClick={onClose}>
                      Cancel
                    </Button>
                  </ModalToDoButtonWraper>
                </form>
              )}
            </Formik>
          </Gutter>
        </Gutter>
      </ModalToDoWrapper>
    </Modal>
  );
}
