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
    border: 2px solid #191c1a;
    padding: 15xp;
    height: 35px;
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 10px 5px 10px rgb(108, 121, 108);
`;

export const FormSelect = styled.select`
    border: 2px solid #191c1a;
    padding: 15xp;
    height: 35px;
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 10px 5px 10px rgb(108, 121, 108);
`;

export const FormButton = styled.button`
    width: 100%;
    padding: 7PX;
    border-radius: 10px;
    margin-top: 20px;
    background-color: rgb(108, 121, 108);
    transition: 0.5s;

    &:hover {
            filter: brightness(110%);
        }

        &:active {
            filter: brightness(120%);
        }
`;

export const Paragraf = styled.p`
    margin-top: 10px;
    text-align: center;
`;