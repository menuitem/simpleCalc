describe("My simple calculator", function() {
    it("should be able to deal with strings", function(){
        expect(function() {Calculator.calcAdd("hello",1)}).toThrowError("Please, enter number!")
        expect(function() {Calculator.calcAdd(1,"hello")}).toThrowError("Please, enter number!")
    })
    it ("should add two numbers", function(){
        expect(Calculator.calcAdd(1.1,1.1)).toBe(2.2);
    })

    it ("should subtract two numbers", function(){
        expect(Calculator.calcSubtract(1.1,1.1)).toBe(0);
    })
    it ("should multiply two numbers", function(){
        expect(Calculator.calcMultiply(10,10)).toBe(100);
    })
    it ("should divide two numbers", function(){
        expect(Calculator.calcDivide(10,2)).toBe(5);
    })
    it("should throw error when dividing by zero", function(){
        expect(function() {Calculator.calcDivide(10,0)}).toThrowError("Can not divide by zero!")
    })
})