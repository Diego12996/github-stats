import styled from "@emotion/styled";
import { typography } from "../../styles";

const Title = styled.h1 `
    ${typography.head.md};
    text-align: ${({align})=> align};
    text-transform: capitalize;
`;

function TitleHead({children = "title", align= "center"}) {
    return(
        <Title align= {align} >{children} </Title>
    )
}

export default TitleHead;