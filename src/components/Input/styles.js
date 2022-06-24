import styled from "@emotion/styled";
import { colors, typography } from "../../styles";

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
`; 

const Label = styled.label `
    ${typography.text.md};
    color: ${colors.gray[1]};
    text-transform: capitalize;

`;
const Input = styled.input `
    ouline: none;
    border: none;
    border-radius: 4px;
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
    background-color: ${colors.white};
    color:${colors.gray[1]};
    padding: 4px 8px;
    &::placeholder {
        color: #BDBDBD;
    }
    &:focus {
        border: 3px solid #2D9CDB;
        outline: none
    }
`;

export {
    Label,
    Input,
    InputContainer
};