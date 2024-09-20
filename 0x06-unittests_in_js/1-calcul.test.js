const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe("Test different types of function:", function(){
    describe("Test SUM function:", function(){
        it("Return 6.", function(){
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        })
    })

    describe("Test SUBTRACT function:", function(){
        it("Return -4.", function(){
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        })
    })

    describe("Test DIVIDE function:", function(){
        it("Return 0.2.", function(){
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        })
    })

    describe("Test DIVIDE function with 0:", function(){
        it("Return Error.", function(){
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        })  
    })
})
