function entry(char){
  const formula = document.getElementById('formula');
  formula.value = formula.value + char;
}
function opentry(char){
  const formula = document.getElementById('formula');
  const result = document.getElementById('result');
  if(result.value == 0){
    formula.value = formula.value + char;
}else{
  formula.value = result.value + char;
  result.value = "0"
}
}
function calculate(){
  const formula = document.getElementById('formula');
  const result = eval(formula.value);
  document.getElementById('result').value = result;
}
function erase(){
  document.getElementById('formula').value = "";
  document.getElementById('result').value = "0";
}
function del(){
  const formula = document.getElementById('formula');
  formula.value = formula.value.substring(0,formula.value.length-1);
}
function powtwo(){
  const result = document.getElementById('result');
  const poww = Math.pow(result.value,2);
  document.getElementById('result').value = poww;
}
function squared(){
  const result = document.getElementById('result');
  const sqard = Math.sqrt(result.value);
  document.getElementById('result').value = sqard;
}
function plusminus(){
  const result = document.getElementById('result');
  if(result.value > 0){
  result.value = "-" + result.value;
}else{
  result.value = result.value.substr(1);
}
}
