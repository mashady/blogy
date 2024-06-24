// lib/formatDate.js
import { format } from "date-fns";

export const formatDate = (dateString) => {
  try {
    const date = new Date(dateString);
    if (isNaN(date)) {
      throw new Error("Invalid date");
    }
    return format(date, "PPPpp"); // Customize the format string as needed
  } catch (error) {
    console.error("Invalid date:", dateString, error);
    return "Invalid date";
  }
};
