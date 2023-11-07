const calulator = (newvalue) => {
  const result = (document.getElementById("result").value += newvalue);
};
const deleteMe = () => {
  const result = (document.getElementById("result").value = "");
};
const answer = () => {
  const result = document.getElementById("result").value;
  const mainAnswer = eval(result);
  document.getElementById("result").value = mainAnswer;
};
