import { useState } from "react";
import Button from "../components/Button";
import IndividualInput from "../components/Input";
import LinkTo from "../components/LinkTo";
import TitleHead from "../components/Title";
import { useAuth } from "../context/auth-context";
import * as Style from "./styles";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { login, error } = useAuth();

  const { email, password } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(formData);
  }

  return (
    <Style.Container>
      <TitleHead>Welcome to Github Stats</TitleHead>
      <Style.Form onSubmit={handleSubmit}>
        <IndividualInput 
          label="Email"
          placeholder="example@gmail.com"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <IndividualInput 
          label="Password"
          placeholder="*******"
          type="password"
          value={password}
          onChange={handleChange}
        />
        {error && (<p style={{fontSize: "14px", color: "red"}}>{error}</p>)}
        <Button>Login</Button>
        <LinkTo to="/signup">Create account</LinkTo>
      </Style.Form>
    </Style.Container>
  );
}

export default LoginPage;