/*
Explique como os parênteses afetam o resultado de uma expressão com 
operadores lógicos em JavaScript.
Resposta:
false && false || true                     false && (false || true)
    false || true                                 false && true
        true                                            false
*/