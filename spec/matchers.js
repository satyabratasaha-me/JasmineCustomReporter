var Matcher = {

    toBeEquall: function(){
        return{
            compare: function(actual,expected){
                var result = {pass: actual === expected};
                result.message = 'Screen';
                return result;

            }
        }
    }
}

exports.Matcher = Matcher;
