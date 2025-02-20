const { expect } = require('chai');
const { add } = require('./test');

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

describe('add function', () => {
    it('should return 5 when adding 2 and 3', () => {
        const result = add(2, 3);
        expect(result).to.equal(5);
    });

    it('should return -1 when adding -2 and 1', () => {
        const result = add(-2, 1);
        expect(result).to.equal(-1);
    });

    it('should return 0 when adding 0 and 0', () => {
        const result = add(0, 0);
        expect(result).to.equal(0);
    });

    it('should return 7.5 when adding 3.5 and 4', () => {
        const result = add(3.5, 4);
        expect(result).to.equal(7.5);
    });

    it('should return -5 when adding -2.5 and -2.5', () => {
        const result = add(-2.5, -2.5);
        expect(result).to.equal(-5);
    });
});