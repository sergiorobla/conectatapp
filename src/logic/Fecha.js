const fechaActual = new Date();
const fechaFormateada = new Intl.DateTimeFormat("es-ES", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
}).format(fechaActual);
const year = fechaActual.getFullYear();

export { fechaActual, fechaFormateada, year };
