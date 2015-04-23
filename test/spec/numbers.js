define(['numbers'], function(numbers) {
    'use strict';
    describe('The numbers module', function() {
        describe('The add method', function() {
            var output;
            beforeEach(function(){
            	this.numberInput1 = 1;
            	this.nuumberInput2 = 2;
            	this.stringInput1 = '2';
            	this.stringInput2 = 'oops';
            });

            it('should accept one or more numerical arguments and return the sum of them', function() {
                //act
                output = numbers.add(this.numberInput1, this.nuumberInput2);

                //assert
                expect(output).toEqual(3);
                expect(output).not.toEqual(4);
            });

            it('should try to parse an integer when a string is passed to the method', function() {
                output = numbers.add(this.numberInput1, this.stringInput1);

                expect(output).toEqual(3);
            });

            it('should ignore the arguments which is not a parsable string',function(){
            	output = numbers.add(this.numberInput1, this.stringInput2);

            	expect(output).toEqual(1);
            });

        });
    });
});
