
function App() {
  return (
    <body className="body">
      <div className="container">
        <form className="form">
          <fieldset className="form__fieldset">
            <legend className="form__legend"><strong>KALKULATOR WALUT</strong></legend>
            <p>
              <label> <span className="form__labelText"> Waluta PLN*: </span> <input className="form__field"
                type="number" name="amount" min="1" step="any" required />
              </label>
            </p>
            <p>
              <label> <span className="form__labelText">Wybierz Walute:</span>
                <select className="form__field" name="currency">
                  <option id="EUR">EUR</option>
                  <option id="USD">USD</option>
                  <option id="GBP">GBP</option>
                </select>
              </label>
            </p>
            <p>
              <label> <span className="form__labelText"> Wynik:</span>
                <input className="form__field form__field--special js-result" type="number" name="result" step="any"
                  disabled />
              </label>
            </p>
          </fieldset>
          <button className="form__button">Przelicz</button>
        </form>
        <p className="container__paragraph">
          * Wymagane pole; Kurs z dnia 05.02.2023
        </p>
      </div>
    </body>
  );
}

export default App;
