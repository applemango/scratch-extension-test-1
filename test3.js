class test_main {
    getInfo() {
        return {
            id: 'test3',
            name: 'test3',
            blocks: [
                {
                    opcode: 'test',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[iti] [ni] [san]',
                    arguments: {
                        iti: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '1'
                        },
                        ni: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '+'
                        },
                        san: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1'
                        }
                    }
                }
            ]
        };
    }
    test(args) {
        if(args.ni == "+"){
            return Number(args.iti) + Number(args.san)
        }
        return 0
    }
}
Scratch.extensions.register(new test_main());
