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
            <h1 className="form__header">
                KALKULATOR WALUT
            </h1>
            <p>
                <label>
                    <span className="form__labelText">
                        Waluta PLN*:
                    </span>
                    <input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        placeloder="Wpisz kwote w zlotowkach"
                        className="form__field"
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
                    <span className="form__labelText">
                        Wybierz Walute:
                    </span>
                    <select
                        className="form__field"
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
                <button className="form__button">Przelicz
                </button>
            </p>
            <Result result={result} />
            <p className="container__paragraph">
                * Wymagane pole; Kurs walutowy z dnia 05.02.2023
            </p>
        </form >
    );
};

export default Form;