import { useState } from "react";
import Button from "../components/Button";
import IndividualInput from "../components/Input";
import TitleHead from "../components/Title";
import { useAuth } from "../context/auth-context";
import * as Style from "./styles";

function ProfilePage() {
  const { update, error, user } = useAuth();
  const [succes, setSucces] = useState(false);
  const [formData, setFormData] = useState({
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name
  })


  const { email,first_name, last_name } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value});
  }

  function handleSubmit(event) {
    event.preventDefault();
        setSucces(true)
        update(formData);
  }

  return (
    <Style.Container>
      <TitleHead> Profile </TitleHead>
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
          value={"******"}
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
          {error? 
            (<p style={{fontSize: "14px", color: "red"}}>{error}</p>) : 
           succes && (<p style={{fontSize: "14px", color: "green"}}>Update Succesfuly</p>) 
            }
          <Button>Update</Button>
        </Style.Form>
    </Style.Container>
  );
}

export default ProfilePage;