import styled from "@emotion/styled";
import { colors } from "../../styles";

const DefaultButton = styled.button `
    background-color: ${({isPrimary})=> isPrimary? "#2D9CDB" : colors.gray[400] };
    color: ${colors.white};
    padding: 8px 16px;
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    &:active {
        transform: scale(1.1);
        background-color: ${({isPrimary})=> isPrimary? " #2DB2DB" : colors.gray[300] };
    }
`;

function Button({children, isPrimary= true, }) {
    return (
       <DefaultButton isPrimary= {isPrimary}>{children}</DefaultButton>
    )
}

export default Button;