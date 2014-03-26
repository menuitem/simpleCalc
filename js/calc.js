var Calculator = (function(measure) {
    // Private stuff up here
    var Validate = (function(num){
            return {
                notANumber : function(num){
                    if ((isNaN(num) == true )) {
                        throw new Error ("Please, enter number!");
                    }
                },
                notZero: function(num){
                    if ((isNaN(num) == false ) && (num == 0)) {
                        throw new Error ("Can not divide by zero!");
                    }
                }
            }
        }())
    // Public methods here
    return {
        validate: Validate,
        calcAdd: function(n1,n2) {
            Validate.notANumber(n1);
            Validate.notANumber(n2);
            return n1 + n2 ;
        },
        calcSubtract: function(n1,n2) {
            Validate.notANumber(n1);
            Validate.notANumber(n2);
            return n1 - n2 ;
        },
        calcMultiply: function(n1,n2) {
            Validate.notANumber(n1);
            Validate.notANumber(n2);
            return n1 * n2 ;
        },
        calcDivide: function(n1,n2) {
            Validate.notANumber(n1);
            Validate.notANumber(n2);
            Validate.notZero(n2);
            return n1 / n2 ;
        }

    }
}())
