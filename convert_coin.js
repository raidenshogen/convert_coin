  const result=document.getElementById("result") 
  const eur=document.getElementById("eur")
  const usd=document.getElementById("usd")
  const textbox=document.getElementById("textbox")
  let calc;
  function convert(){
 if(eur.checked){
    calc=Number(textbox.value)
    calc=calc*0.93;
    result.textContent=calc.toFixed(1) + "£";
  }
  else if(usd.checked){
    calc=Number(textbox.value)
    calc=calc*1.39;
    result.textContent=calc.toFixed(1) + "$";}
  else {
      result.textContent="select a unit";

  }

}