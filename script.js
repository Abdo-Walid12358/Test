const options = document.querySelectorAll(".options i");
const input1 = document.querySelector(".num-1");
const input2 = document.querySelector(".num-2");
const resultElement = document.querySelector(".result");

options.forEach(btn => {
    btn.addEventListener("click", (e) => {
        try{
            const num1 = input1.value;
            const num2 = input2.value;
    
            const mark = e.target.getAttribute("data-mark");
    
            let values = `${num1} ${mark} ${num2}`;
    
            let result = eval(values);
    
            input1.value = '';
            input2.value = '';

            if(!isNaN(result)){
                resultElement.innerHTML = result;
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