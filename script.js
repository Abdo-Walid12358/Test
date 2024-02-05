const options = document.querySelectorAll(".options i");
const input1 = document.querySelector(".num-1");
const input2 = document.querySelector(".num-2");
const resultElement = document.querySelector(".result");

options.forEach(btn => {
    btn.addEventListener("click", (e) => {
        try{
            const num1 = parseFloat(input1.value);
            const num2 = parseFloat(input2.value);

            if(typeof num1 == "number" && typeof num2 == "number"){
                const mark = e.target.getAttribute("data-mark");
                
                let result = getResult(num1, mark, num2);
        
                input1.value = '';
                input2.value = '';
    
                if(!isNaN(result)){
                    resultElement.innerHTML = result;
                }else{
                    alert("ERROR");
                }
            }else{
                alert("ERROR");
            }
        }catch(err){
            alert("ERROR");

            input1.value = '';
            input2.value = '';
        }
    })
});

function getResult(num1, mark, num2){
    let res;

    if(mark == "+"){
        res = num1 + num2;
    }else if(mark == "-"){
        res = num1 - num2;
    }else if(mark == "*"){
        res = num1 * num2;
    }else if(mark == "/"){
        res = num1 / num2;
    }

    return res;
}
