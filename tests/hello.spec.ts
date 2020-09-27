import { expect } from 'chai';
import {Hello} from '../src/hello';

describe("Hello function", () => {
    it("should return Hello World!", () => {
        const result = Hello()
        expect(result).to.equal("Hello world!");
    });
});