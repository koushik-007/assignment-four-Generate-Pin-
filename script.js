function randomPin() {
    let randomPin =Math.floor(1000 + Math.random()*9000);
    document.getElementById('screenFirst').value = randomPin;
}
let screenSecond = document.getElementById('screenSecond');
let calculatorBtn = document.getElementsByClassName("button");
let screenValueSecond = "";
for (item of calculatorBtn) {
    item.addEventListener('click', function(number){
        const buttonText = number.target.innerText;
        
        if (buttonText == 'C') {
            screenValueSecond = "";
            screenSecond.value = screenValueSecond;
           }
           
        else if(buttonText == '<'){
            screenValueSecond = parseInt(screenValueSecond/10);
            const newCurrent = screenValueSecond;
            screenSecond.value = newCurrent;
        }

        else{
            screenValueSecond += buttonText;
            screenSecond.value = screenValueSecond;
        }
    })
}
function submit(){
    const firstScreenValue = document.getElementById('screenFirst').value;
   
    const screenValueSecond = document.getElementById('screenSecond').value;

    if (firstScreenValue == screenValueSecond) {
        const pinMatch = document.getElementById('pinMatch').style.display = 'block';
        pinNotMatch = document.getElementById('pinNotMatch').style.display = 'none';
    }
    else{
        const pinNotMatch = document.getElementById('pinNotMatch').style.display = 'block';
        pinMatch = document.getElementById('pinMatch').style.display = 'none';
    }
}