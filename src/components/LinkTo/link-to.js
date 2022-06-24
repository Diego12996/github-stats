import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    color: #2D9CDB;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
    text-decoration: none;
`;

function LinkTo({ children,to}) {
    return (
        <StyledLink to={to}>{children}</StyledLink>
    )
}

export default LinkTo;