import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Wrapper, LabelText, FormInput, FormSelect, FormButton, Paragraf } from "./styled";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <Wrapper onSubmit={onSubmit}>
            <p>
                <label>
                    <LabelText>
                        Waluta PLN*:
                    </LabelText>
                    <FormInput
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        placeloder="Wpisz kwote w zlotowkach"
                        type="number"
                        name="amount"
                        min="1"
                        step="any"
                        required
                    />
                </label>
            </p>
            <p>
                <label>
                    <LabelText>
                        Wybierz Walute:
                    </LabelText>
                    <FormSelect
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map((currency => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
                            </option>
                        )))}
                    </FormSelect>
                </label>
            </p>
            <p>
                <FormButton>Przelicz
                </FormButton>
            </p>
            <Result result={result} />
            <Paragraf>
                * Wymagane pole; Kurs walutowy z dnia 05.02.2023
            </Paragraf>
        </Wrapper>
    );
};

export default Form;
