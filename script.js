console.log('hello! from console');
function findSelection(field) {
  var test = document.getElementsByName(field);
  var sizes = test.length;

  console.log(sizes);
  for (i = 0; i < sizes; i++) {
    if (test[i].checked == true) {
      console.log(test[i].value + ' you got a value');
      return test[i].value;
    }
  }
}

function submitForm() {
  var genderS = findSelection('genderS');
  console.log(genderS);
  return false;
}
