grammar Comandos;

// Lexer
EXCL : '!' ;
BARRA : '/';
DUR : '#' ;
GRIE : '&' ;
PAL : [a-zA-Z\u00E1\u00E9\u00ED\u00F3\u00FA\u00C1\u00C9\u00CD\u00D3\u00DA\u00F1\u00D1][a-zA-Z0-9\u00E1\u00E9\u00ED\u00F3\u00FA\u00C1\u00C9\u00CD\u00D3\u00DA\u00F1\u00D1]*;
NUM : [0-9]+ ('.' [0-9]+)? ;
DOBLEGUION : '--' ;
IGUAL : '=' ;
GUION : '-' ;   
LETRA : [a-zA-Z] ;
TEX : '"' (~['\r\n])* '"' ;
WS : [ \t\n\r]+ -> skip ;


// Parser
comando
    : prefijoComando nombreComando (argumento)*
    ;

prefijoComando
    : EXCL | BARRA | DUR | GRIE 
    ;
nombreComando
    : PAL
    ; 
argumento
    : argumentoPosicional | argumentoOpcional
    ;
argumentoPosicional
    : TEX | PAL | NUM
    ;
argumentoOpcional
    :   DOBLEGUION nombreArgumento (IGUAL valorArgumento)? | GUION LETRA valorArgumento
    ;
nombreArgumento
    :  PAL
    ;
valorArgumento
    : TEX | NUM | PAL
    ;




