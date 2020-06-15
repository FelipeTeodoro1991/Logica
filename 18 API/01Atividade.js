let rs = require('readline-sync');
let axios = require('axios');

let YesOrNo = rs.keyInYN('Isira sim ou não');



axios.get('https://yesno.wtf/api')
.then(function(response){
 let answerSystem = response.data.answer;
 let replySystem = false
if(answerSystem == 'yes'){
    replySystem = true
}  
if( replySystem == YesOrNo){ 
    console.log('O usuario ACERTOU a resposta! ')
}
else if( replySystem != YesOrNo){
    console.log('O usuario ERROU a resposta! ')
}

});  
