/**
 * Comprueba si el valor obtenido coincide con el esperado.
 * param {string} descripcion - Descripción de la prueba
 * param {*} obtenido - Resultado real obtenido de la función
 * param {*} esperado - Resultado que se esperaba obtener
 * returns {boolean} true si pasa la prueba, false si falla
 */
function probar(descripcion, obtenido, esperado) {
    let pasa = (obtenido === esperado);
    console.assert(pasa, `[FALLO] ${descripcion} -> Obtenido: ${obtenido}, Esperado: ${esperado}`);
    return pasa;
}

/**
 * Ejecuta el conjunto completo de pruebas para todas las herramientas.
 * returns {Object} Resumen con el total de pruebas y las superadas con éxito.
 */
function ejecutarPruebas() {
    let exito = 0;
    let total = 0;

    console.log("--- INICIANDO BATERÍA DE PRUEBAS ---");

    // ---  Pruebas de IVA y Descuentos ---
    total++; if (probar("calcularIVA(100, 21) normal", calcularIVA(100), 21)) exito++;
    total++; if (probar("calcularIVA(100, 10) con tipo", calcularIVA(100, 10), 10)) exito++;
    total++; if (probar("aplicarDescuento(80, 25) caso normal", aplicarDescuento(80, 25), 60)) exito++;
    total++; if (probar("aplicarDescuento(80, 0) caso límite (0%)", aplicarDescuento(80, 0), 80)) exito++;

    // ---  Pruebas de Temperaturas ---
    total++; if (probar("celsiusAFahrenheit(100)", celsiusAFahrenheit(100), 212)) exito++;
    total++; if (probar("convertirTemperatura(25, 'C', 'C') unidades iguales", convertirTemperatura(25, "C", "C"), 25)) exito++;

    // ---  Pruebas de Validador de Contraseñas ---
    total++; if (probar("longitudSuficiente('1234567') caso límite falso", longitudSuficiente("1234567"), false)) exito++;
    total++; if (probar("evaluarContrasena('Abcdefg1') fuerte", evaluarContrasena("Abcdefg1"), "fuerte")) exito++;
    total++; if (probar("evaluarContrasena('abc') débil", evaluarContrasena("abc"), "débil")) exito++;

    // ---  Pruebas del Generador de Contraseñas (20 veces longitud solicitada) ---
    for (let i = 0; i < 20; i++) {
        let pass = generarContrasena(12);
        total++;
        if (probar(`generarContrasena(12) - Intento ${i + 1}`, pass.length, 12)) exito++;
    }
    total++; if (probar("generarContrasena(3) caso límite inválido (<6)", generarContrasena(3), null)) exito++;

    // ---  Pruebas del Contador de Palabras ---
    total++; if (probar("contarPalabras('hola mundo') normal", contarPalabras("hola mundo"), 2)) exito++;
    total++; if (probar("contarPalabras('') caso límite vacío", contarPalabras(""), 0)) exito++;
    total++; if (probar("minutosLectura('') caso límite vacío", minutosLectura(""), 0)) exito++;

    console.log(`Pruebas finalizadas: ${exito} de ${total} superadas.`);
    
    return { exito, total };
}