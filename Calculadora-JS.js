const num1= document.getElementById("numero1") //Acceder al documento HMTL por ID, y le pasamos el ID que le pusimos a esa etiqueta
const oper= document.getElementById("operador") // Lo mismo aplica para esto
const num2= document.getElementById("numero2") // Lo mismo aplica para esto
const cal= document.getElementById("calcular") // Lo mismo aplica para esto
const res= document.getElementById("resultado") // Lo mismo aplica para esto

cal.addEventListener('click',calcular)

function calcular(){
   const xoper = oper.value
   const num1x=parseFloat (num1.value)
   const num2x= parseFloat (num2.value)
   let res_final

    if((xoper == "+" || xoper == "-"  || xoper == "*" || xoper == "/") && !isNaN(num1x) &&!isNaN(num2x)){
        switch(xoper){
            case "+":
                res_final=num1x+num2x
                break
            case "-":
                res_final=num1x-num2x
                break
            case "*":
                res_final=num1x*num2x
                break
        
            case "/":
                 res_final=num1x/num2x
                break
        }
        
        res.innerText = +res_final
    }else{
        res.innerText = "No se pudo realizar el cálculo"
    }
}