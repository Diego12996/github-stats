import Button from "../components/Button";
import IndividualInput from "../components/Input";
import LinkTo from "../components/LinkTo";
import TitleHead from "../components/Title";
import * as Style from "./styles";

function LoginPage() {
  return (
    <Style.Container>
      <TitleHead>Welcome to Github Stats</TitleHead>
      <Style.Form>
        <IndividualInput 
          label="Email"
          placeholder="example@gmail.com"
          type="email"
        />
        <IndividualInput 
          label="Password"
          placeholder="*******"
          type="password"
        />
        <Button>Login</Button>
        <LinkTo to="/signup">Create account</LinkTo>
      </Style.Form>
    </Style.Container>
  );
}

export default LoginPage;