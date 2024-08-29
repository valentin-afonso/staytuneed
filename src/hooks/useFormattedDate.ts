import { useMemo } from "react";

// Return date "2024-08-21T22:15:48+02:00" to "DD/MM/YYYY"
function useFormattedDate(dateString: string) {
  return useMemo(() => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }, [dateString]);
}

export default useFormattedDate;
