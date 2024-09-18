const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe('calculateNumber', () => {
    it('rounding of a', () => {
        assert.equal(calculateNumber(16.78, 2), 19);
        assert.equal(calculateNumber(1.1, 0), 1);
        assert.equal(calculateNumber(2, 4.5), 7);
    });

    it('rounding of b', () => {
        assert.equal(calculateNumber(2, 5.78), 8);
        assert.equal(calculateNumber(0, 1.3), 1); 
        assert.equal(calculateNumber(2, 4.5), 7);
    });

    it('sum of a and b', () => {
        assert.equal(calculateNumber(16.78, 2.5), 20);
        assert.equal(calculateNumber(1.1, 0.2), 1); 
        assert.equal(calculateNumber(3.5, 2.5), 7);
    });      
});
