class MyExtension {
    getInfo() {
        return {
            id: 'myextensionexample',
            name: 'Cool Extension',
            blocks: [
                {
                opcode: 'hello',
                blockType: Scratch.BlockType.REPORTER,
                text: 'Hello, world!'
                }
                ,{
                opcode: 'test',
                blockType: Scratch.BlockType.REPORTER,
                text: 'test'
                }
            ]
        };
    }


    hello() {
        return 'Hello, world!';
    }
    test() {
        return 'test';
    }
}


Scratch.extensions.register(new MyExtension());
