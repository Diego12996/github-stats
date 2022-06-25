import { Input, InputContainer, Label } from "./styles";

function IndividualInput({placeholder, type, label, required = true, onChange, value}) {
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
              onChange={onChange}
              value={value}
            />
        </InputContainer>
    )
};

export default IndividualInput;