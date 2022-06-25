import styled from "@emotion/styled";
import Button from "../Button";
import IndividualInput from "../Input";
import LinkTo from "../LinkTo";

const Form = styled.form`
  max-width: 300px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

function LoginForm({ onSubmitForm }) {
  return (
    <Form onSubmit={onSubmitForm}>
      <IndividualInput
        label="Email"
        type="email"
        placeholder="example@mail.com"
      />
      <IndividualInput 
        label="Password"
        type="password"
        placeholder="******"
      />
      <Button>Login</Button>
      <LinkTo to="/signup">Create account</LinkTo>
    </Form>
  );
}

export default LoginForm;
