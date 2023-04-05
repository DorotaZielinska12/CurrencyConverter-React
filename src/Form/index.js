import "./style.css";
import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend"><strong>KALKULATOR WALUT</strong></legend>
                <p>
                    <label> <span className="form__labelText"> Waluta PLN*: </span> <input className="form__field"
                        type="number" name="amount" min="1" step="any" required />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Wybierz Walute:</span>
                        <select className="form__field" name="currency"
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
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText"> Wynik:</span>
                        <input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            className="form__field form__field--special"
                            type="number"
                            name="result"
                            step="any"
                            requred
                            disabled />
                            <Result result={result} />
                    </label>
                </p>
            </fieldset>
            <button className="form__button">Przelicz</button>
            <button className="form__button">Kasuj</button>
        </form>
    )
}
export default Form;