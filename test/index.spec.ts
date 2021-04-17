import { expect } from 'chai';
import { describe, it } from 'mocha';
import Files from '../src/index';

/* Tests */
describe('index.ts', (): void => {
    it('1. getJson', async (): Promise<void> => {
        const test: any = Files.getJson(`${__dirname}/test.json`);

        expect(test).to.be.deep.eq({
            value1: 1,
            value2: 2
        });
    });
});
