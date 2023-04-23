import styled from "styled-components";

export const Wrapper = styled.form`
    display: block;
    margin-top: 0 auto;
`;

export const LabelText = styled.span`
    width: 100%;
    max-width: 150px;
    display: inline-block;
    margin: 5px;
`;

export const FormInput = styled.input`
    border: 2px solid ${({ theme }) => theme.color.black};
    padding: 15xp;
    height: 35px;
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 10px 5px 10px ${({ theme }) => theme.color.rollingStone};
`;

export const FormSelect = styled.select`
    border: 2px solid ${({ theme }) => theme.color.black};
    padding: 15xp;
    height: 35px;
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 10px 5px 10px ${({ theme }) => theme.color.rollingStone};
`;

export const FormButton = styled.button`
    width: 100%;
    padding: 7PX;
    border-radius: 10px;
    margin-top: 20px;
    background-color: ${({ theme }) => theme.color.rollingStone};
    transition: 0.5s;

    &:hover {
            filter: brightness(120%);
        }

        &:active {
            filter: brightness(140%);
        }
`;

export const Paragraf = styled.p`
    margin-top: 10px;
    text-align: center;
`;