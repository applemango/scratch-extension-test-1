class Easing_main {
    getInfo() {
        return {
            id: 'Easing',
            name: 'Easing',
            color1: '#3498db',
            color2: '#2980b9',
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
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1'
                        }
                    }
                }
            ]
        };
    }
    ease(args) {
        if(args.type == "easeInOutBack"){
            const c1 = 1.70158;
            const c2 = c1 * 1.525;
            const x = args.x;

            return x < 0.5
                ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
                : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;    
        } else {
            console.error("Easing type not found");
            return null;
        }
    }
}
Scratch.extensions.register(new Easing_main());
