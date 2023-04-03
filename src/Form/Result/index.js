import React from "react";

export const Result = ({ result }) => (
    <p>
        {result !== undefined && (
            <>
                {result.targetAmount.toFixed(2)}
            </>
        )}
    </p>
);