import { useState } from "react";
import { Result } from "./Result";
import { useRatesData } from "../useRatesData";
import {
    StyledForm,
    LabelText,
    FormInput,
    FormSelect,
    FormButton,
    Paragraf,
    Header,
    Loading,
    ErrorMessage
} from "./styled";


export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    const [currency, setCurrency] = useState("GBP");
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <StyledForm onSubmit={onSubmit}>
            <Header>
                KALKULATOR WALUT
            </Header>
            {ratesData.state === "loading"
                ? (
                    <Loading>
                        Prosze zaczekac... <br />Obecnie laduja sie kursy walut z Europejskiego Banku Centralnego
                    </Loading>
                )
                : (
                    ratesData.state === "error" ? (
                        <ErrorMessage>
                            Wystapil blad, prosze spradzic polaczenie internetowe!
                        </ErrorMessage>
                    ) : (
                        <>
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
                                        {Object.keys(ratesData.rates).map(((currency) => (
                                            <option
                                                key={currency}
                                                value={currency}
                                            >
                                                {currency}
                                            </option>
                                        )))}
                                    </FormSelect>
                                </label>
                            </p>
                            <p>
                                <FormButton>
                                    Przelicz
                                </FormButton>
                            </p>
                            <Result result={result} />
                            <Paragraf>
                                * Wymagane pole; Kursy walut pobierane sa z Europejskiego Banku Centralnego. <br />
                                Aktualne na dzień:&nbsp;<strong>{ratesData.date}</strong>
                            </Paragraf>
                        </>
                    )
                )}
        </StyledForm>
    );
};

export default Form;
