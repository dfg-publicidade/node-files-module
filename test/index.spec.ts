import { expect } from 'chai';
import { describe, it } from 'mocha';
import Files from '../src/index';

/* Tests */
describe('index.ts', (): void => {
    it('1. getJson', async (): Promise<void> => {
        const test: any = await Files.getJson(`${__dirname}/test.json`);

        expect(test).to.be.deep.eq({
            value1: 1,
            value2: 2
        });
    });

    it('2. getJson', async (): Promise<void> => {
        let fileError: any;

        try {
            await Files.getJson(undefined);
        }
        catch (err) {
            fileError = err;
        }

        expect(fileError).to.exist;
        expect(fileError.message).to.be.eq('File not found or not accessible: undefined');
    });
});
