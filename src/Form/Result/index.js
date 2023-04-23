import { FormResult } from "./styled";


export const Result = ({ result }) => (
    <FormResult>
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;

                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </FormResult>
);