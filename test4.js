class Easing_main {
    getInfo() {
        return {
            id: 'Easing',
            name: 'Easing',
            blocks: [
                {
                    opcode: 'ease',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'ease | type: [type] x: [x]',
                    arguments: {
                        type: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'easeInOutBack'
                        },
                        max: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '1'
                        },
                    }
                }
            ]
        };
    }
    ease(args) {
        if(type == "easeInOutBack"){
            const c1 = 1.70158;
            const c2 = c1 * 1.525;

            return x < 0.5
                ? (pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
                : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;    
        }
    }
}
Scratch.extensions.register(new Easing_main());
