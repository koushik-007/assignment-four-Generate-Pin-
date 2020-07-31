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
            let newCurrent = screenValueSecond;
            
            if (newCurrent !=0) {
                screenSecond.value = newCurrent;
            }
           else{
            screenSecond.value = "";
            screenValueSecond = "";
           }
        }

        else{
            screenValueSecond += buttonText;
            screenSecond.value = screenValueSecond;
        }
    })
}

function submit(){
  
    const click = document.getElementById('clickCount').innerText;
    const clickCountNumber = parseInt(click);
    
    const newClickCount = clickCountNumber - 1;
    
    document.getElementById('clickCount').innerText = newClickCount;
    let newClickCountNumber = newClickCount+1;
    
    if (newClickCountNumber > 0) {
        
        let firstScreenValue = document.getElementById('screenFirst').value;
        
        let screenValueSecond = document.getElementById('screenSecond').value;
        
        const pinMatch = document.getElementById('pinMatch');
        const pinNotMatch = document.getElementById('pinNotMatch');
        if (firstScreenValue == screenValueSecond) {
            pinMatch.style.display = 'block';
            pinNotMatch.style.display = 'none';
        }
        else{
            pinMatch.style.display = 'none';
            pinNotMatch.style.display = 'block';
        }
    }
    if(newClickCount == 0){
        document.getElementById("submit").disabled = true;
    }
}