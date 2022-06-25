import Button from "../components/Button";
import IndividualInput from "../components/Input";
import LinkTo from "../components/LinkTo";
import TitleHead from "../components/Title";
import * as Style from "./styles";

function SignupPage() {
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
        <IndividualInput 
          label="First Name"
          placeholder="John"
          type="text"
        />
        <IndividualInput 
          label="Last Name"
          placeholder="Doe"
          type="text"
        />
        <Button>Create account</Button>
        <LinkTo to="/login">Login</LinkTo>
      </Style.Form>
    </Style.Container>
  );
};

export default SignupPage;
