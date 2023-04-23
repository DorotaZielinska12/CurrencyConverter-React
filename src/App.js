import Form from "./Form";
import { useState } from "react";
import { Clock } from "./Clock";
import { currencies } from "./currencies";
import { Wrapper } from "./AppStyled";


function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
    <Wrapper>
      <Clock />
      <h1 className="form__header">
                KALKULATOR WALUT
            </h1>
      <Form
        result={result}
        calculateResult={calculateResult}
      />
    </Wrapper>
  );
}

export default App;

