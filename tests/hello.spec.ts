import { expect } from 'chai';
import {Hello} from '../src/hello';

describe("Hello function", () => {
    it("should return Hello Bob", () => {
        const result = Hello("Bob")
        expect(result).to.equal("Hello Bob");
    });
});