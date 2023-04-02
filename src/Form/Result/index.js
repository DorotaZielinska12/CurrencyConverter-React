import React from "react";

export const Result = ({ result }) => (
    <p>
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)}
                {result.targetAmount.toFixed(2)}
            </>
        )}
    </p>
);