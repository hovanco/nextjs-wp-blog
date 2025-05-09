// export const formatDate = (input: string | number | Date) => {
//   const date = new Date(input);
//   const day = String(date.getDate()).padStart(2, "0");
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// };

export const formatDate = (input: string | Date) => {
  const date = new Date(input);

  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const options: Intl.DateTimeFormatOptions = {
    month: "short", // "Jan", "Feb", ..., "Dec"
    day: "2-digit", // "01", "02", ..., "31"
    year: "numeric", // "2025"
  };

  return date.toLocaleDateString("en-US", options); // e.g. "Apr 08, 2025"
};
