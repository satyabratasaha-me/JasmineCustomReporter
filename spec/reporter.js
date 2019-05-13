var Reporter =   {

        specStarted: function(result){
            console.log('Spec started: ' + result.description + ' whose full description is: ' + result.fullName  +' message is ' + result.screenshot);
        },

        specDone: function(result){
            console.log('Spec started: ' + result.description + ' whose full description is: ' + result.fullName  +' message is ' + result.screenshot);
        }

}

exports.Reporter = Reporter;
