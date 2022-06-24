import { Input, InputContainer, Label } from "./styles";

function IndividualInput({placeholder, type,name }) {
    return (
        <InputContainer>
            <Label htmlFor={name}>{name}</Label>
            <Input id={name} type={type} placeholder= {placeholder}/>
        </InputContainer>
    )
};

export default IndividualInput;