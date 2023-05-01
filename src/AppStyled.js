import styled from "styled-components";

export const Wrapper = styled.div`
    flex-basis: 700px;
    margin: 20px;
    padding: 30px;
    background: ${({ theme }) => theme.color.silver};
    border-radius: 20px;
`;

export const Header = styled.h1`
    text-align: center;
    color: ${({ theme }) => theme.color.black};
`;