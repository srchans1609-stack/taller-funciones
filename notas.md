# Apuntes y Pruebas 
## Fase 1: Exploración de funciones predefinidas

### 1. Tabla de predicciones y resultados en consola

| Línea de código | Tu predicción | Resultado real | Tipo (`typeof`) |
| :--- | :--- | :--- | :--- |
| `parseInt("42")` | 42 | 42 | number |
| `parseInt("12px")` | 12 | 12 | number |
| `parseInt("px12")` | error | NaN | number |
| `Number("")` | 0 | 0 | number |
| `isNaN("")` | error | false | boolean |
| `Math.round(-2.5)` | -2 | -2 | number |
| `"oso".replace("o", "0")` | "0s0" | "0so" | string |
| `"a,b,c".split(",")` | ['a','b','c'] | ['a', 'b', 'c'] | object (Array) |
| `0.1 + 0.2` | 0.3 | 0.30000000000000004 | number |
| `(1.005).toFixed(2)` | 1 | "1.00" | string |

### Cuestionario de la Fase 1

1. **¿Qué da `Number("")`? Da `0`. Es un problema en formularios porque si el usuario deja un campo en blanco, JavaScript lo interpreta como un cero y puede realizar cálculos erróneos en lugar de detectar que está vacío.

2. `parseInt("12px")` extrae el número del inicio (`12`), mientras que `parseInt("px12")` devuelve `NaN` porque no puede empezar a analizar texto que no sea un número válido al principio.

3.No da exactamente `0.3` debido al estándar de representación de números de punto flotante en binario (IEEE 754)[cite: 3]..

### 2. Clasificación de funciones predefinidas
* **Convertir:** `parseInt`, `Number`
* **Comprobar:** `isNaN`
* **Matemáticas:** `Math.round`, operaciones aritméticas y métodos numéricos como `toFixed`
* **Texto (Strings):** `replace`, `split`
* **Funciones adicionales conocidas:** `parseFloat`, `Math.max`, `String.trim`

### 3. Cuestionario de la Fase 1
1. **¿Qué da `Number("")`? ¿Por qué es un problema en un formulario?**  
   Da `0`. Es un problema grave en los formularios porque si un usuario deja un campo numérico completamente vacío, JavaScript lo interpreta como un cero (`0`) en lugar de detectar que está vacío. Esto puede provocar que se realicen cálculos incorrectos (por ejemplo, calcular impuestos o costes sobre un precio cero) en lugar de mostrar un aviso de campo requerido.
2. **¿Qué diferencia hay entre `parseInt("12px")` y `parseInt("px12")`?**  
   `parseInt("12px")` devuelve `12` porque analiza el texto de izquierda a derecha y extrae los dígitos numéricos iniciales antes de encontrar letras. En cambio, `parseInt("px12")` devuelve `NaN` (Not a Number) porque el texto comienza directamente con caracteres no numéricos, impidiendo que el motor analice ningún número válido al principio.
3. **¿Por qué `0.1 + 0.2` no da 0.3? ¿Qué problema crearía en una tienda?**  
   No da exactamente `0.3` debido al estándar IEEE 754 de representación de números de punto flotante en binario (doble precisión), donde ciertas fracciones decimales no se pueden representar de forma exacta. En una tienda online, esto crearía errores acumulativos de precisión en los céntimos de los carritos de la compra, generando descuadres contables y cobros inexactos a los clientes.

### 2. Clasificación de funciones predefinidas
* **Convertir:** `parseInt`, `Number`
* **Comprobar:** `isNaN`
* **Matemáticas:** `Math.round`, operaciones aritméticas y métodos numéricos como `toFixed`
* **Texto (Strings):** `replace`, `split`
* **Funciones adicionales conocidas:** `parseFloat`, `Math.max`, `String.trim`
