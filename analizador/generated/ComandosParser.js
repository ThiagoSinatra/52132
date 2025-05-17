// Generated from c:/Users/thedi/Downloads/52132/analizador/Comandos.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ComandosListener from './ComandosListener.js';
import ComandosVisitor from './ComandosVisitor.js';

const serializedATN = [4,1,12,50,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,1,1,1,
1,2,1,2,1,3,1,3,3,3,31,8,3,1,4,1,4,1,5,1,5,1,5,1,5,3,5,39,8,5,1,5,1,5,1,
5,3,5,44,8,5,1,6,1,6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,2,1,0,1,4,2,
0,5,6,11,11,45,0,16,1,0,0,0,2,24,1,0,0,0,4,26,1,0,0,0,6,30,1,0,0,0,8,32,
1,0,0,0,10,43,1,0,0,0,12,45,1,0,0,0,14,47,1,0,0,0,16,17,3,2,1,0,17,21,3,
4,2,0,18,20,3,6,3,0,19,18,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,
0,0,22,1,1,0,0,0,23,21,1,0,0,0,24,25,7,0,0,0,25,3,1,0,0,0,26,27,5,5,0,0,
27,5,1,0,0,0,28,31,3,8,4,0,29,31,3,10,5,0,30,28,1,0,0,0,30,29,1,0,0,0,31,
7,1,0,0,0,32,33,7,1,0,0,33,9,1,0,0,0,34,35,5,7,0,0,35,38,3,12,6,0,36,37,
5,8,0,0,37,39,3,14,7,0,38,36,1,0,0,0,38,39,1,0,0,0,39,44,1,0,0,0,40,41,5,
9,0,0,41,42,5,10,0,0,42,44,3,14,7,0,43,34,1,0,0,0,43,40,1,0,0,0,44,11,1,
0,0,0,45,46,5,5,0,0,46,13,1,0,0,0,47,48,7,1,0,0,48,15,1,0,0,0,4,21,30,38,
43];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ComandosParser extends antlr4.Parser {

    static grammarFileName = "Comandos.g4";
    static literalNames = [ null, "'!'", "'/'", "'#'", "'&'", null, null, 
                            "'--'", "'='", "'-'" ];
    static symbolicNames = [ null, "EXCL", "BARRA", "DUR", "GRIE", "PAL", 
                             "NUM", "DOBLEGUION", "IGUAL", "GUION", "LETRA", 
                             "TEX", "WS" ];
    static ruleNames = [ "comando", "prefijoComando", "nombreComando", "argumento", 
                         "argumentoPosicional", "argumentoOpcional", "nombreArgumento", 
                         "valorArgumento" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ComandosParser.ruleNames;
        this.literalNames = ComandosParser.literalNames;
        this.symbolicNames = ComandosParser.symbolicNames;
    }



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ComandosParser.RULE_comando);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.prefijoComando();
	        this.state = 17;
	        this.nombreComando();
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2784) !== 0)) {
	            this.state = 18;
	            this.argumento();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prefijoComando() {
	    let localctx = new PrefijoComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ComandosParser.RULE_prefijoComando);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 30) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombreComando() {
	    let localctx = new NombreComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ComandosParser.RULE_nombreComando);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(ComandosParser.PAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumento() {
	    let localctx = new ArgumentoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ComandosParser.RULE_argumento);
	    try {
	        this.state = 30;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 6:
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 28;
	            this.argumentoPosicional();
	            break;
	        case 7:
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 29;
	            this.argumentoOpcional();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentoPosicional() {
	    let localctx = new ArgumentoPosicionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ComandosParser.RULE_argumentoPosicional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 2144) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentoOpcional() {
	    let localctx = new ArgumentoOpcionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ComandosParser.RULE_argumentoOpcional);
	    var _la = 0;
	    try {
	        this.state = 43;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.match(ComandosParser.DOBLEGUION);
	            this.state = 35;
	            this.nombreArgumento();
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8) {
	                this.state = 36;
	                this.match(ComandosParser.IGUAL);
	                this.state = 37;
	                this.valorArgumento();
	            }

	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 40;
	            this.match(ComandosParser.GUION);
	            this.state = 41;
	            this.match(ComandosParser.LETRA);
	            this.state = 42;
	            this.valorArgumento();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombreArgumento() {
	    let localctx = new NombreArgumentoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ComandosParser.RULE_nombreArgumento);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(ComandosParser.PAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valorArgumento() {
	    let localctx = new ValorArgumentoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ComandosParser.RULE_valorArgumento);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 2144) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ComandosParser.EOF = antlr4.Token.EOF;
ComandosParser.EXCL = 1;
ComandosParser.BARRA = 2;
ComandosParser.DUR = 3;
ComandosParser.GRIE = 4;
ComandosParser.PAL = 5;
ComandosParser.NUM = 6;
ComandosParser.DOBLEGUION = 7;
ComandosParser.IGUAL = 8;
ComandosParser.GUION = 9;
ComandosParser.LETRA = 10;
ComandosParser.TEX = 11;
ComandosParser.WS = 12;

ComandosParser.RULE_comando = 0;
ComandosParser.RULE_prefijoComando = 1;
ComandosParser.RULE_nombreComando = 2;
ComandosParser.RULE_argumento = 3;
ComandosParser.RULE_argumentoPosicional = 4;
ComandosParser.RULE_argumentoOpcional = 5;
ComandosParser.RULE_nombreArgumento = 6;
ComandosParser.RULE_valorArgumento = 7;

class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandosParser.RULE_comando;
    }

	prefijoComando() {
	    return this.getTypedRuleContext(PrefijoComandoContext,0);
	};

	nombreComando() {
	    return this.getTypedRuleContext(NombreComandoContext,0);
	};

	argumento = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentoContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.enterComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.exitComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandosVisitor ) {
	        return visitor.visitComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrefijoComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandosParser.RULE_prefijoComando;
    }

	EXCL() {
	    return this.getToken(ComandosParser.EXCL, 0);
	};

	BARRA() {
	    return this.getToken(ComandosParser.BARRA, 0);
	};

	DUR() {
	    return this.getToken(ComandosParser.DUR, 0);
	};

	GRIE() {
	    return this.getToken(ComandosParser.GRIE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.enterPrefijoComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.exitPrefijoComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandosVisitor ) {
	        return visitor.visitPrefijoComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandosParser.RULE_nombreComando;
    }

	PAL() {
	    return this.getToken(ComandosParser.PAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.enterNombreComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.exitNombreComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandosVisitor ) {
	        return visitor.visitNombreComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandosParser.RULE_argumento;
    }

	argumentoPosicional() {
	    return this.getTypedRuleContext(ArgumentoPosicionalContext,0);
	};

	argumentoOpcional() {
	    return this.getTypedRuleContext(ArgumentoOpcionalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.enterArgumento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.exitArgumento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandosVisitor ) {
	        return visitor.visitArgumento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentoPosicionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandosParser.RULE_argumentoPosicional;
    }

	TEX() {
	    return this.getToken(ComandosParser.TEX, 0);
	};

	PAL() {
	    return this.getToken(ComandosParser.PAL, 0);
	};

	NUM() {
	    return this.getToken(ComandosParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.enterArgumentoPosicional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.exitArgumentoPosicional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandosVisitor ) {
	        return visitor.visitArgumentoPosicional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentoOpcionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandosParser.RULE_argumentoOpcional;
    }

	DOBLEGUION() {
	    return this.getToken(ComandosParser.DOBLEGUION, 0);
	};

	nombreArgumento() {
	    return this.getTypedRuleContext(NombreArgumentoContext,0);
	};

	IGUAL() {
	    return this.getToken(ComandosParser.IGUAL, 0);
	};

	valorArgumento() {
	    return this.getTypedRuleContext(ValorArgumentoContext,0);
	};

	GUION() {
	    return this.getToken(ComandosParser.GUION, 0);
	};

	LETRA() {
	    return this.getToken(ComandosParser.LETRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.enterArgumentoOpcional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.exitArgumentoOpcional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandosVisitor ) {
	        return visitor.visitArgumentoOpcional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreArgumentoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandosParser.RULE_nombreArgumento;
    }

	PAL() {
	    return this.getToken(ComandosParser.PAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.enterNombreArgumento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.exitNombreArgumento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandosVisitor ) {
	        return visitor.visitNombreArgumento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorArgumentoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandosParser.RULE_valorArgumento;
    }

	TEX() {
	    return this.getToken(ComandosParser.TEX, 0);
	};

	NUM() {
	    return this.getToken(ComandosParser.NUM, 0);
	};

	PAL() {
	    return this.getToken(ComandosParser.PAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.enterValorArgumento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.exitValorArgumento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandosVisitor ) {
	        return visitor.visitValorArgumento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ComandosParser.ComandoContext = ComandoContext; 
ComandosParser.PrefijoComandoContext = PrefijoComandoContext; 
ComandosParser.NombreComandoContext = NombreComandoContext; 
ComandosParser.ArgumentoContext = ArgumentoContext; 
ComandosParser.ArgumentoPosicionalContext = ArgumentoPosicionalContext; 
ComandosParser.ArgumentoOpcionalContext = ArgumentoOpcionalContext; 
ComandosParser.NombreArgumentoContext = NombreArgumentoContext; 
ComandosParser.ValorArgumentoContext = ValorArgumentoContext; 
