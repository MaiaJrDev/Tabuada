
function laco(){

   for(let n1 = 1; n1 <= 10; n1++){
      
     
      let n2 = document.getElementById('n').value;
    //verifica se o input está vazio
      if(n2 === ''){
         alert('insira um valor');
         break;
      }
      let res = n2*n1;
    //cria uma div no DOM
      let dv = document.createElement ("div");
    //insere um id na div 
      let ss = 'result' +n1;
      dv.setAttribute('id', ss);
    //insere a div no HTML  
      document.getElementById('main').appendChild(dv);
    //insere o resultado na div criada  
      document.getElementById(ss).innerHTML = n2 +' x ' +n1 +' = ' +res;
   }
 } 

