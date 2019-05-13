const utils = require('./support/util')
describe('Suite A',function(){
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 4000;
    describe('Test A', function(){
        beforeAll((done)=>{
            setTimeout(()=>{
                console.log('Test A | Before All');
                done();
            },1000);
        })
        it('Validation 1',function(){
           expect(1).toBeEquall(1);
           console.log(jasmine.getEnv().x);
        }).result.screenshot = 'screenshot1';
    });
    describe('Test B', function(){
        beforeAll((done)=>{
            setTimeout(()=>{
                console.log('Test B | Before All');
                done();
            },1000);
        })
        it('Validation 1',function(){
            
            expect(true).toBe(true);
           
        });
        
    });
    describe('Test C', function(){
        beforeAll((done)=>{
            setTimeout(()=>{
                console.log('Test C | Before All');
                done();
            },1000);
        })
        it('Validation 1',function(done){
            utils.skipKdbTest();
            done();
        }).pend('KDB is down');
        
    });

});