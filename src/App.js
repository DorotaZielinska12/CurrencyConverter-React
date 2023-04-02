import Form from "./Form";
import React, { useState } from "react";
import { currencies } from "./currencies";

function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      targetAmount: amount / rate
    });
  }

  return (
    <body className="body">
      <div className="container">
        <Form
          result={result}
          calculateResult={calculateResult}
        />
        <p className="container__paragraph">
          * Wymagane pole; Kurs z dnia 05.02.2023
        </p>
      </div>
    </body>
  );
}

export default App;
