import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import IndividualInput from "../components/Input";
import LinkTo from "../components/LinkTo";
import TitleHead from "../components/Title";
import { useAuth } from "../context/auth-context";
import * as Style from "./styles";


function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: ""
  })

  const navigate = useNavigate();

  const { signup, error } = useAuth();

  const { email, password, first_name, last_name } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/search");
    signup(formData);
  }

  return (
    <Style.Container>
      <TitleHead>Welcome to Github Stats</TitleHead>
      <Style.Form onSubmit={handleSubmit}>
        <IndividualInput 
          label="Email"
          placeholder="example@gmail.com"
          onChange={handleChange}
          type="email"
          value={email}
        />
        <IndividualInput 
          label="Password"
          placeholder="*******"
          onChange={handleChange}
          type="password"
          value={password}
        />
        <IndividualInput 
          label="First Name"
          placeholder="John"
          onChange={handleChange}
          type="text"
          value={first_name}
        />
        <IndividualInput 
          label="Last Name"
          placeholder="Doe"
          onChange={handleChange}
          type="text"
          value={last_name}
        />
        {error && (<p style={{fontSize: "14px", color: "red"}}>{error}</p>)}
        <Button>Create account</Button>
        <LinkTo to="/login">Login</LinkTo>
      </Style.Form>
    </Style.Container>
  );
};

export default SignupPage;
