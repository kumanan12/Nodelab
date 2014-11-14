/**
 * Created by kmurugesan on 11/13/2014.
 */
var fortune = require("../../lib/fortune");
var expect = require("chai").expect;
suite('Fortune cookie tests', function () {
    test('getFortune() should return a fortune', function () {
        var expectedValue = "Conquer your fears or they will conquer you.";
        var str = fortune.getFortune();
        console.log(str);
        expect(str).to.equal(expectedValue);
    });
});
