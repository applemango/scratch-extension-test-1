class a_main {
    getInfo() {
        return {
            id: 'test',
            name: 'Math',
            color1: '#2ecc71',
            color2: '#27ae60',
            blocks: [
                /*{
                    opcode: 'b',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'set[text] to [text2]',
                    arguments: {
                        text: {
                            type: Scratch.ArgumentType.STRING
                            ,defaultValue: 'hello'
                        },
                        text2: {
                            type: Scratch.ArgumentType.STRING
                            ,defaultValue: '1'
                        }
                    }
                }
                ,*/{
                    opcode: 'c',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'calc[text]',
                    arguments: {
                        text: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1+1'
                        },
                    }
                }
                ,{
                    opcode: 'd',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'math[text]',
                    arguments: {
                        text: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Math.cos(1)'
                        },
                    }
                }
                ,{
                    opcode: 'e',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[text][text2][text3][text4][text5]',
                    arguments: {
                        text: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "apple"
                        }
                        ,text2: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'mango'
                        }
                        ,text3: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'banana'
                        }
                        ,text4: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'berry'
                        }
                        ,text5: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'grape'
                        }
                    }
                }
                ,{
                    opcode: 'e_',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[text][text2][text3]',
                    arguments: {
                        text: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "apple"
                        }
                        ,text2: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'mango'
                        }
                        ,text3: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'berry'
                        }
                    }
                }
            ]
        };
    }
    b(args) {

    }
    c(args) {
        var calc_string = args.text;
        if(calc_string.match(/[^0-9\+\-\*\/~\(\)\{\}\.\%\==\<\>\<=\>=\!=\||\&&]/g) == null) {
            try {
                var result = Function('return ('+calc_string+');')();
                return result;
            } catch(e) {
                console.error(e);
                console.error(calc_string);
                return NaN;
            }
        } else {
            console.error(args.text);
            return NaN;
        }
    }
    d(args) {
        try {
            var math_string = args.text;
            var result = Function('return ('+math_string+');')();
            return result;
        } catch(e) {
            console.error(e);
            console.error(args.text);
            return NaN;
        }
    }
    e(args) {
        return String(args.text)+String(args.text2)+String(args.text3)+String(args.text4)+String(args.text5);
    }
    e_(args) {
        return String(args.text)+String(args.text2)+String(args.text3);
    }
}
Scratch.extensions.register(new a_main());
