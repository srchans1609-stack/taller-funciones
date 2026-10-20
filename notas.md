parseInt("42") -- | Resultado: 42 | Tipo: number
parseInt("12px") -- Predicción: 12 | Resultado: 12 | Tipo: number
parseInt("px12") -- Predicción: error | Resultado: NaN | Tipo: number
Number("") -- Predicción: 0 | Resultado: 0 | Tipo: number
isNaN("") -- Predicción: error | Resultado: false | Tipo: boolean
Math.round(-2.5) -- Predicción: -2 | Resultado: -2 | Tipo: number
"oso".replace("o", "0") -- Predicción: "0s0" | Resultado: "0so" | Tipo: string
"a,b,c".split(",") -- Predicción: ['a','b','c'] | Resultado: ['a', 'b', 'c'] | Tipo: object (Array)
0.1 + 0.2 -- Predicción: 0.3 | Resultado: 0.30000000000000004 | Tipo: number
(1.005).toFixed(2) -- Predicción: 1 | Resultado: "1.00" | Tipo: string 