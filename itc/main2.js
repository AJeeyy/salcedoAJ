let celbtn = document.getElementById("cel");
let fahbtn = document.getElementById("fah");

celbtn.addEventListener('click', function(){
    let input = document.getElementById('input2').value;
    document.getElementById('output2').value = input*5/9;
    })

fahbtn.addEventListener('click', function(){
    let input = document.getElementById('input2').value;
    document.getElementById('output2').value = (input-32)*5/9;
    })
