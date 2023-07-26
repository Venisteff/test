document.querySelector("#finish").addEventListener("click",checkTest)
function checkTest(){
    let x=0
    let q4v0_0="старший сержант"
    let q4v0_1="старшийсержант"
    if(document.getElementById('q1v1').checked == true) {   
        x++
    } 
    if(document.getElementById('q2v1').checked == true) {   
        x++
    } 
    if(document.getElementById('q3v0').checked == true && document.getElementById('q3v1').checked == true && document.getElementById('q3v2').checked == false) {   
        x++
    }
     if(document.getElementById('q4v0').value.toLowerCase() == q4v0_0 || document.getElementById('q4v0').value.toLowerCase() == q4v0_1) {   
        x++
    } 
    if(document.getElementById('q5').value === "0" ){   
        x++
    } 
    if(document.getElementById('q6v1').checked == true) {   
        x++
    } 
    alert(" молодец, мой мальчик = " + x)
    console.log(document.getElementById('q5').value )
}