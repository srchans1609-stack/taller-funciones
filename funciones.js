/**
 * Calcula cuánto IVA hay que pagar.
 * param {number} precio - El precio base.
 * param {number} [tipo=21] - El porcentaje de IVA.
 * returns {number} El importe del IVA.
 */
function calcularIVA(precio, tipo = 21) {
    return (precio * tipo) / 100;
}

/**
 * Calcula el precio más el IVA.
 * param {number} precio - El precio base.
 * param {number} [tipo=21] - El porcentaje de IVA.
 * returns {number} Precio con IVA incluido.
 */
function precioConIVA(precio, tipo = 21) {
    return precio + calcularIVA(precio, tipo);
}

/**
 * Aplica un descuento a un precio.
 * param {number} precio - Precio original.
 * param {number} porcentaje - Porcentaje de descuento.
 * returns {number} Precio final.
 */
function aplicarDescuento(precio, porcentaje) {
    return precio - (precio * porcentaje) / 100;
}

/**
 * Redondea un número a los decimales indicados.
 * param {number} numero - Número a redondear.
 * param {number} [decimales=2] - Cantidad de decimales.
 * returns {number} Número redondeado.
 */
function redondear(numero, decimales = 2) {
    return Number(numero.toFixed(decimales));
}

/**
 * Formatea un número en euros.
 * param {number} numero - Número a formatear.
 */
function formatearEuros(numero) {
    return numero.toFixed(2).replace('.', ',') + " €";
}