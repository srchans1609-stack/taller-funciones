document.addEventListener("DOMContentLoaded", () => {

    // ---  MANEJADOR DE IVA Y PRECIOS ---
    document.getElementById("btnIVA").addEventListener("click", () => {
        let inputPrecio = document.getElementById("precioIVA").value.trim();
        let inputTipo = document.getElementById("tipoIVA").value.trim();
        let contenedorDiv = document.getElementById("resultadoIVA");

        contenedorDiv.innerHTML = ""; // Limpiar errores previos

        // El precio vacío o no válido no puede tratarse como 0
        if (!esNumeroValido(inputPrecio)) {
            contenedorDiv.innerHTML = "<p style='color:red;'>Error: El precio es obligatorio y debe ser un número válido.</p>";
            return;
        }

        let precio = parseFloat(inputPrecio);
        let tipo;

        // Si el campo IVA está vacío, por defecto usa 21
        if (inputTipo === "") {
            tipo = 21;
        } else {
            if (!esNumeroValido(inputTipo)) {
                contenedorDiv.innerHTML = "<p style='color:red;'>Error: El tipo de IVA introducido no es válido.</p>";
                return;
            }
            tipo = parseFloat(inputTipo);
        }

        let ivaCalculado = calcularIVA(precio, tipo);
        let totalConIVA = precioConIVA(precio, tipo);

        contenedorDiv.innerHTML = `
            <p>IVA a pagar: <strong>${ivaCalculado.toFixed(2)} €</strong></p>
            <p>Precio total con IVA: <strong>${totalConIVA.toFixed(2)} €</strong></p>
        `;
    });

    // ---  MANEJADOR DE TEMPERATURAS ---
    document.getElementById("btnTemp").addEventListener("click", () => {
        let valorStr = document.getElementById("tempValor").value.trim();
        let de = document.getElementById("tempDe").value;
        let a = document.getElementById("tempA").value;
        let contenedorDiv = document.getElementById("resultadoTemp");

        contenedorDiv.innerHTML = "";

        if (!esNumeroValido(valorStr)) {
            contenedorDiv.innerHTML = "<p style='color:red;'>Error: Introduce un valor numérico para la temperatura.</p>";
            return;
        }

        let valor = parseFloat(valorStr);
        let resultado = convertirTemperatura(valor, de, a);

        contenedorDiv.innerHTML = `<p>Resultado: <strong>${resultado.toFixed(2)} ${a}</strong></p>`;
    });

    // ---  MANEJADOR VALIDADOR DE CONTRASEÑAS ---
    document.getElementById("btnPass").addEventListener("click", () => {
        let texto = document.getElementById("passValor").value;
        let contenedorDiv = document.getElementById("resultadoPass");

        contenedorDiv.innerHTML = "";

        if (texto === "") {
            contenedorDiv.innerHTML = "<p style='color:red;'>Error: La contraseña no puede estar vacía.</p>";
            return;
        }

        let nivel = evaluarContrasena(texto);
        contenedorDiv.innerHTML = `<p>Nivel de seguridad: <strong style="text-transform: uppercase;">${nivel}</strong></p>`;
    });

    // ---  MANEJADOR GENERADOR DE CONTRASEÑAS ---
    document.getElementById("btnGen").addEventListener("click", () => {
        let longitudStr = document.getElementById("genLongitud").value.trim();
        let contenedorDiv = document.getElementById("resultadoGen");

        contenedorDiv.innerHTML = "";

        if (!esNumeroValido(longitudStr)) {
            contenedorDiv.innerHTML = "<p style='color:red;'>Error: Introduce una longitud válida (entero entre 6 y 30).</p>";
            return;
        }

        let longitud = parseInt(longitudStr);
        let contrasena = generarContrasena(longitud);

        if (contrasena === null) {
            contenedorDiv.innerHTML = "<p style='color:red;'>Error: La longitud debe estar comprendida entre 6 y 30 caracteres.</p>";
        } else {
            contenedorDiv.innerHTML = `<p>Contraseña generada: <code>${contrasena}</code></p>`;
        }
    });

    // ---  MANEJADOR CONTADOR DE PALABRAS ---
    document.getElementById("btnContador").addEventListener("click", () => {
        let texto = document.getElementById("textoContador").value;
        let contenedorDiv = document.getElementById("resultadoContador");

        contenedorDiv.innerHTML = "";

        let numPalabras = contarPalabras(texto);
        let numCaracteres = contarCaracteres(texto, true);
        let palabraLarga = palabraMasLarga(texto);
        let minLectura = minutosLectura(texto);

        contenedorDiv.innerHTML = `
            <p>Palabras: <strong>${numPalabras}</strong></p>
            <p>Caracteres (con espacios): <strong>${numCaracteres}</strong></p>
            <p>Palabra más larga: <strong>${palabraLarga || "Ninguna"}</strong></p>
            <p>Tiempo estimado de lectura: <strong>${minLectura} min(s)</strong></p>
        `;
        // ---  MANEJADOR DE PRUEBAS AUTOMATIZADAS ---
    let btnPruebas = document.getElementById("btnEjecutarPruebas");
    if (btnPruebas) {
        btnPruebas.addEventListener("click", () => {
            let contenedorDiv = document.getElementById("resultadoPruebas");
            contenedorDiv.innerHTML = "<p>Ejecutando pruebas en la consola y validando...</p>";
            
            // Llamamos a la función de pruebas definida en pruebas.js
            let resultado = ejecutarPruebas();

            if (resultado.exito === resultado.total) {
                contenedorDiv.innerHTML = `
                    <p style='color:green; font-weight:bold;'>¡Todas las pruebas han pasado con éxito!</p>
                    <p>Resultado: <strong>${resultado.exito} / ${resultado.total}</strong> pruebas correctas.</p>
                `;
            } else {
                contenedorDiv.innerHTML = `
                    <p style='color:red; font-weight:bold;'>¡Atención! Hay pruebas que han fallado.</p>
                    <p>Superadas: <strong>${resultado.exito}</strong> de <strong>${resultado.total}</strong>. Revisa la consola (F12) para ver los detalles.</p>
                `;
            }
        });
    }
    });

});