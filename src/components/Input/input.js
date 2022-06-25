import { Input, InputContainer, Label } from "./styles";

function IndividualInput({placeholder, type, label, required = true}) {
    const labelParsed = label.toLowerCase().replace(/ /g, "_");

    return (
        <InputContainer>
            <Label htmlFor={labelParsed}>{label}</Label>
            <Input 
              id={labelParsed}
              type={type}
              placeholder={placeholder}
              name={labelParsed}
              required={required}
            />
        </InputContainer>
    )
};

export default IndividualInput;