import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const formatDate = (date) => date.toLocaleString(undefined, {
    hour: "2-digit",
    minute:
"2-digit",
    second:
"2-digit",
    day: "numeric",
    month: "long",
    year: "numeric"
});

export const Clock = () => {
    const date = useCurrentDate();
  
    return (
       <StyledClock>
           {formatDate(date)}
       </StyledClock>
    )
  };