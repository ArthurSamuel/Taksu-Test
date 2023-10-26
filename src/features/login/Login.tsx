import { Button } from "../../components/button/Button.styles";
import { Gutter } from "../../components/gutter/Gutter";
import { ErrorText, SmallText } from "../../components/typography/Typography";
import { Container, Wrapper } from "./Login.styles";
import { Formik } from "formik";
import { InputFC } from "../../components/input/Input.styles";
import useAuth from "./hook/useAuth";

export default function Login() {
  const { login: handleLogin } = useAuth();

  return (
    <Container>
      <Wrapper>
        <SmallText>Name</SmallText>
        <Gutter vertical={10}>
          <Formik
            initialValues={{ user: "" }}
            validate={(values) => {
              const errors: any = {};
              if (!values.user) {
                errors.user = "User Required";
              }
              return errors;
            }}
            onSubmit={(values) => {
              handleLogin({ user: values.user });
            }}
          >
            {({ values, errors, handleChange, handleSubmit, touched }) => (
              <form onSubmit={handleSubmit}>
                <InputFC
                  name="user"
                  onChange={handleChange}
                  value={values.user}
                />
                <ErrorText> {touched.user && errors.user}</ErrorText>
                <Gutter vertical={15}>
                  <Button type="submit" width={50} color="green">
                    Next
                  </Button>
                </Gutter>
              </form>
            )}
          </Formik>
        </Gutter>
      </Wrapper>
    </Container>
  );
}
