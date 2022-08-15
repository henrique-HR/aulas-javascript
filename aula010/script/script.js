var txt1 = window.document.getElementById('txt1')
        var txt2 = window.document.getElementById('txt2')
        var res  = window.document.getElementById('res')
        
        function somar(){
            n1= Number(txt1.value)
            n2= Number(txt2.value)
            var s = n1+n2
            res.innerHTML=`a soma ${n1} e ${n2} é igual ${s}`
          
        }
        function subtrair(){
            n1= Number(txt1.value)
            n2= Number(txt2.value)
            var s = n1-n2
            res.innerHTML=`a soma ${n1} e ${n2} é igual ${s}`
        }
        function dividir(){
            n1= Number(txt1.value)
            n2= Number(txt2.value)
            var s = n1/n2
            res.innerHTML=`a soma ${n1} e ${n2} é igual ${s}`
        }
        function multiplicar(){
            n1= Number(txt1.value)
            n2= Number(txt2.value)
            var s = n1*n2
            res.innerHTML=`a soma ${n1} e ${n2} é igual ${s}`
        }