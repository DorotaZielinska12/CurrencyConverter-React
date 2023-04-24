import styled from "styled-components";

export const StyledClock = styled.div`
    text-align: right;
    font-family: monospace;
    font-size: 18px;
    color: ${({ theme }) => theme.color.black};
`;