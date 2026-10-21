/**
 * Calcula cuánto IVA hay que pagar.
 * @param {number} precio - El precio base.
 * @param {number} [tipo=21] - El porcentaje de IVA.
 * @returns {number} El importe del IVA.
 */
function calcularIVA(precio, tipo = 21) {
    return (precio * tipo) / 100;
}

/**
 * Calcula el precio más el IVA.
 * @param {number} precio - El precio base.
 * @param {number} [tipo=21] - El porcentaje de IVA.
 * @returns {number} Precio con IVA incluido.
 */
function precioConIVA(precio, tipo = 21) {
    return precio + calcularIVA(precio, tipo);
}

/**
 * Aplica un descuento a un precio.
 * @param {number} precio - Precio original.
 * @param {number} porcentaje - Porcentaje de descuento.
 * @returns {number} Precio final.
 */
function aplicarDescuento(precio, porcentaje) {
    return precio - (precio * porcentaje) / 100;
}

/**
 * Redondea un número a los decimales indicados.
 * @param {number} numero - Número a redondear.
 * @param {number} [decimales=2] - Cantidad de decimales.
 * @returns {number} Número redondeado.
 */
function redondear(numero, decimales = 2) {
    return Number(numero.toFixed(decimales));
}

/**
 * Formatea un número en euros.
 * @param {number} numero - Número a formatear.
 * @returns {string} Número formateado en euros.
 */
function formatearEuros(numero) {
    return numero.toFixed(2).replace('.', ',') + " €";
}


/**
 * Recibe grados Celsius y devuelve grados Fahrenheit.
 * Fórmula: (°F = °C × 9 ÷ 5 + 32)
 * @param {number} c - Grados Celsius
 * @returns {number} Grados Fahrenheit
 */
function celsiusAFahrenheit(c) {
    return (c * 9) / 5 + 32;
}

/**
 * Recibe grados Fahrenheit y devuelve grados Celsius.
 * Fórmula: (°C = (°F - 32) × 5 ÷ 9)
 * @param {number} f - Grados Fahrenheit
 * @returns {number} Grados Celsius
 */
function fahrenheitACelsius(f) {
    return ((f - 32) * 5) / 9;
}

/**
 * Recibe un valor y dos unidades ("C" o "F").
 * Utiliza las dos funciones anteriores.
 * @param {number} valor - Valor numérico
 * @param {string} de - Unidad origen ("C" o "F")
 * @param {string} a - Unidad destino ("C" o "F")
 * @returns {number} Valor convertido
 */
function convertirTemperatura(valor, de, a) {
    // Si las unidades son iguales, se devuelve el mismo valor
    if (de === a) {
        return valor;
    }
    if (de === "C" && a === "F") {
        return celsiusAFahrenheit(valor);
    }
    if (de === "F" && a === "C") {
        return fahrenheitACelsius(valor);
    }
    return valor;
}

/**
 * Devuelve true si el texto llega a esa longitud; si no, false.
 * @param {string} texto - Texto a comprobar
 * @param {number} [minimo=8] - Longitud mínima
 * @returns {boolean}
 */
function longitudSuficiente(texto, minimo = 8) {
    return texto.length >= minimo;
}

/**
 * Recibe un texto y devuelve true si tiene alguna mayúscula.
 * @param {string} texto - Texto a comprobar
 * @returns {boolean}
 */
function tieneMayuscula(texto) {
    // Compara si el texto es diferente al pasarlo todo a minúsculas
    return texto !== texto.toLowerCase();
}

/**
 * Recibe un texto y devuelve true si tiene alguna minúscula.
 * @param {string} texto - Texto a comprobar
 * @returns {boolean}
 */
function tieneMinuscula(texto) {
    // Compara si el texto es diferente al pasarlo todo a mayúsculas
    return texto !== texto.toUpperCase();
}

/**
 * Recibe un texto y devuelve true si tiene algún número.
 * @param {string} texto - Texto a comprobar
 * @returns {boolean}
 */
function tieneNumero(texto) {
    // Usa una expresión regular básica para detectar dígitos numéricos
    return /\d/.test(texto);
}

/**
 * Recibe un texto y devuelve el nivel: "débil", "media" o "fuerte".
 * Cumple los 4 requisitos: fuerte. Cumple 3: media. Menos: débil.
 * Utiliza las cuatro funciones anteriores.
 * @param {string} texto - Contraseña a evaluar
 * @returns {string} Nivel de seguridad
 */
function evaluarContrasena(texto) {
    let requisitosCumplidos = 0;
    
    if (longitudSuficiente(texto)) requisitosCumplidos++;
    if (tieneMayuscula(texto)) requisitosCumplidos++;
    if (tieneMinuscula(texto)) requisitosCumplidos++;
    if (tieneNumero(texto)) requisitosCumplidos++;

    if (requisitosCumplidos === 4) {
        return "fuerte";
    } else if (requisitosCumplidos === 3) {
        return "media";
    } else {
        return "débil";
    }
}
/**
 * Recibe dos números enteros y devuelve un entero al azar entre los dos, incluidos.
 * @param {number} min - Mínimo
 * @param {number} max - Máximo
 * @returns {number} Número entero aleatorio
 */
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Recibe un texto con caracteres y devuelve un carácter al azar de ese texto.
 * @param {string} conjunto - Conjunto de caracteres
 * @returns {string} Carácter aleatorio
 */
function caracterAleatorio(conjunto) {
    let indice = numeroAleatorio(0, conjunto.length - 1);
    return conjunto[indice];
}

/**
 * Recibe una longitud y unas opciones (mayúsculas, números).
 * Devuelve un texto con esa longitud con caracteres al azar. Si la longitud no es un entero entre 6 y 30, devuelve null
 * @param {number} longitud - Longitud de la contraseña
 * @param {Object} [opciones={mayusculas: true, numeros: true}] - Opciones de configuración
 * @returns {string|null} Contraseña o null
 */
function generarContrasena(longitud, opciones = { mayusculas: true, numeros: true }) {
    if (typeof longitud !== "number" || longitud < 6 || longitud > 30) {
        return null;
    }

    let minusculas = "abcdefghijklmnopqrstuvwxyz";
    let mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numeros = "0123456789";

    // Siempre usa minúsculas por defecto
    let caracteresDisponibles = minusculas;
    if (opciones.mayusculas) {
        caracteresDisponibles += mayusculas;
    }
    if (opciones.numeros) {
        caracteresDisponibles += numeros;
    }

    let contrasena = "";
    for (let i = 0; i < longitud; i++) {
        contrasena += caracterAleatorio(caracteresDisponibles);
    }

    return contrasena;
}

/**
 * Recibe un texto y devuelve la lista de palabras (array).
 * Ignora los espacios repetidos y los saltos de línea
 * @param {string} texto - Texto de entrada
 * @returns {string[]} Lista de palabras
 */
function palabras(texto) {
    if (!texto || texto.trim() === "") {
        return [];
    }
    // Utiliza una expresión regular para separar por uno o más espacios, tabulaciones o saltos de línea
    return texto.trim().split(/\s+/);
}

/**
 * Recibe un texto y devuelve cuántas palabras tiene. Tiene que usar palabras.
 * @param {string} texto - Texto
 * @returns {number} Cantidad de palabras
 */
function contarPalabras(texto) {
    return palabras(texto).length;
}

/**
 * Recibe un texto y, si quieres, conEspacios (por defecto true).
 * Devuelve cuántos caracteres tiene. Si conEspacios es false, no cuenta los espacios.
 * @param {string} texto - Texto
 * @param {boolean} [conEspacios=true] - Incluir o no los espacios
 * @returns {number} Total de caracteres
 */
function contarCaracteres(texto, conEspacios = true) {
    if (!texto) return 0;
    if (conEspacios) {
        return texto.length;
    } else {
        // Reemplaza todos los espacios en blanco por cadenas vacías antes de medir
        return texto.replace(/\s/g, "").length;
    }
}

/**
 * Recibe un texto y devuelve la palabra más larga (no hace falta quitar signos de puntuación)
 * @param {string} texto - Texto
 * @returns {string} Palabra más larga
 */
function palabraMasLarga(texto) {
    let lista = palabras(texto);
    if (lista.length === 0) return "";

    let masLarga = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i].length > masLarga.length) {
            masLarga = lista[i];
        }
    }
    return masLarga;
}

/**
 * Recibe un texto y las palabras que se leen por minuto (ppm, por defecto 200).
 * Devuelve los minutos de lectura, redondeados hacia arriba.
 * @param {string} texto - Texto
 * @param {number} [ppm=200] - Palabras por minuto
 * @returns {number} Minutos de lectura
 */
function minutosLectura(texto, ppm = 200) {
    let totalPalabras = contarPalabras(texto);
    if (totalPalabras === 0) return 0;
    // Math.ceil redondea siempre hacia arriba
    return Math.ceil(totalPalabras / ppm);
}

/**
 * Comprueba si un texto es un número válido.
 * @param {string} texto - Texto introducido
 * @returns {boolean}
 */
function esNumeroValido(texto) {
    if (texto === "" || texto === null || isNaN(texto)) {
        return false;
    }
    return true;
}