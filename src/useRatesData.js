import { useEffect, useState } from "react";

const API_URL = "https://api.exchangerate.host/latest?base=PLN&symbols=USD,EUR,GBP,CZK,AUD,JPY"

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const { rates, date } = await response.json();

                setRatesData({
                    state: "success",
                    rates,
                    date,
                });

            } catch {
                setRatesData({
                    state: "error",
                });
            }
        };

        setTimeout(fetchRates, 1500);
    }, []);

    return ratesData;
};