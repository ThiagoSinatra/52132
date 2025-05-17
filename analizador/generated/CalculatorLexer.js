// Generated from c://Users//Mariana//OneDrive - docentes.frm.utn.edu.ar//SSL//2025//ANTLR4//antlr-calculator-project//Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,11,56,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,1,1,1,
1,2,1,2,1,3,1,3,1,4,1,4,1,5,4,5,35,8,5,11,5,12,5,36,1,6,1,6,1,7,1,7,1,8,
1,8,1,9,3,9,46,8,9,1,9,1,9,1,10,4,10,51,8,10,11,10,12,10,52,1,10,1,10,0,
0,11,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,1,0,3,2,0,65,90,
97,122,1,0,48,57,2,0,9,9,32,32,58,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,
7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,
0,0,19,1,0,0,0,0,21,1,0,0,0,1,23,1,0,0,0,3,25,1,0,0,0,5,27,1,0,0,0,7,29,
1,0,0,0,9,31,1,0,0,0,11,34,1,0,0,0,13,38,1,0,0,0,15,40,1,0,0,0,17,42,1,0,
0,0,19,45,1,0,0,0,21,50,1,0,0,0,23,24,5,42,0,0,24,2,1,0,0,0,25,26,5,47,0,
0,26,4,1,0,0,0,27,28,5,43,0,0,28,6,1,0,0,0,29,30,5,45,0,0,30,8,1,0,0,0,31,
32,5,61,0,0,32,10,1,0,0,0,33,35,7,0,0,0,34,33,1,0,0,0,35,36,1,0,0,0,36,34,
1,0,0,0,36,37,1,0,0,0,37,12,1,0,0,0,38,39,7,1,0,0,39,14,1,0,0,0,40,41,5,
40,0,0,41,16,1,0,0,0,42,43,5,41,0,0,43,18,1,0,0,0,44,46,5,13,0,0,45,44,1,
0,0,0,45,46,1,0,0,0,46,47,1,0,0,0,47,48,5,10,0,0,48,20,1,0,0,0,49,51,7,2,
0,0,50,49,1,0,0,0,51,52,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,54,1,0,0,
0,54,55,6,10,0,0,55,22,1,0,0,0,4,0,36,45,52,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CalculatorLexer extends antlr4.Lexer {

    static grammarFileName = "Calculator.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'*'", "'/'", "'+'", "'-'", "'='", null, 
                         null, "'('", "')'" ];
	static symbolicNames = [ null, "MUL", "DIV", "ADD", "SUB", "EQ", "ID", 
                          "INT", "LPAREN", "RPAREN", "NEWLINE", "WS" ];
	static ruleNames = [ "MUL", "DIV", "ADD", "SUB", "EQ", "ID", "INT", "LPAREN", 
                      "RPAREN", "NEWLINE", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CalculatorLexer.EOF = antlr4.Token.EOF;
CalculatorLexer.MUL = 1;
CalculatorLexer.DIV = 2;
CalculatorLexer.ADD = 3;
CalculatorLexer.SUB = 4;
CalculatorLexer.EQ = 5;
CalculatorLexer.ID = 6;
CalculatorLexer.INT = 7;
CalculatorLexer.LPAREN = 8;
CalculatorLexer.RPAREN = 9;
CalculatorLexer.NEWLINE = 10;
CalculatorLexer.WS = 11;



