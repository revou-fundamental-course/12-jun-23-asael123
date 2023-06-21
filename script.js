function operationcel () {
    let cel = document.getElementById("celsius").value
    console.log (cel);
    let cel2 = ((cel * 9/5) + 32) .toFixed(1) ;
    console.log (cel2);
    let celinput = document.getElementById("farenheit");
    celinput.value = cel2;
    let cara = document.getElementById("cara")
    cara.value = "untuk mendapatkan hasil Farenheit kita dapat mengkalikan angka tersebut dengan 9/5 lalu di tambahakan 32 seperti berikut:\n" + cel + " X 9/5 + 32 = " + cel2 ;


}

function opreationfar () {
    let far = document.getElementById("farenheit").value
    let far2 = ((far - 32) * 5/9).toFixed(1);
    let farinput = document.getElementById("celsius");
    farinput.value = far2;
    let cara = document.getElementById("cara")
    cara.value = "untuk mendapatkan hasil Celsius kita dapat mengkurangkan angka tersebut dengan 32 lalu di kalikan 5/9 seperti berikut:\n" + far + " - 32 X 5/9 = " + far2 ;
}
    

function reset () {
    document.getElementById("celsius").value = "";
    document.getElementById("farenheit").value = "";
    document.getElementById("cara").value = "";

}