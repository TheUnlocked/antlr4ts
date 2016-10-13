﻿/*
 * [The "BSD license"]
 *  Copyright (c) 2012 Terence Parr
 *  Copyright (c) 2012 Sam Harwell
 *  All rights reserved.
 *
 *  Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions
 *  are met:
 *
 *  1. Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *  2. Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 *  3. The name of the author may not be used to endorse or promote products
 *     derived from this software without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 *  IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 *  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
 *  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 *  DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 *  THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 *  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 *  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

// ConvertTo-TS run at 2016-10-04T11:26:51.7913318-07:00

import { Token } from './Token';

/** A lexer is recognizer that draws input symbols from a character stream.
 *  lexer grammars result in a subclass of this object. A Lexer object
 *  uses simplified match() and error recovery mechanisms in the interest
 *  of speed.
 */
export abstract class Lexer {
	static get DEFAULT_TOKEN_CHANNEL(): number {
		return Token.DEFAULT_CHANNEL;
	}

	static get HIDDEN(): number {
		return Token.HIDDEN_CHANNEL;
	}

	setChannel(channel: number): void {
		throw "not implemented";
	}

	setType(type: number): void {
		throw "not implemented";
	}

	pushMode(mode: number): void {
		throw "not implemented";
	}

	popMode(): void {
		throw "not implemented";
	}

	mode(mode: number): void {
		throw "not implemented";
	}

	more(): void {
		throw "not implemented";
	}

	skip(): void {
		throw "not implemented";
	}

	action(arg: null, ruleIndex: number, actionIndex: number): void {
		throw "not implemented";
	}
}

export namespace Lexer {
	export const DEFAULT_MODE: number = 0;
	export const MORE: number = -2;
	export const SKIP: number = -3;

	export const MIN_CHAR_VALUE: number = 0x0000;
	export const MAX_CHAR_VALUE: number = 0xFFFE;
}
