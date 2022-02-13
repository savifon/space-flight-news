export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    year: "numeric",
    month: "2-digit",
    hour: "numeric",
    minute: "numeric",
  });
};
