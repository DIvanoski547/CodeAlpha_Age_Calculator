const userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge() {
  let birthDate = new Date(userInput.value);

  // Conditional to check if date is given
  if (!birthDate.getTime()) { 
    result.innerHTML = "Please enter a valid date.";
    return;
  }

  // Variables to store the given date by user
  let birthDay = birthDate.getDate();
  let birthMonth = birthDate.getMonth() + 1;
  let birthYear = birthDate.getFullYear();

  let today = new Date();

  // Variables to store the todays date
  let todayDay = today.getDate();
  let todayMonth = today.getMonth() + 1;
  let todayYear = today.getFullYear();

  // Variables to store calculated date (result)
  let calculatedDay = todayDay - birthDay;
  let calculatedMonth = todayMonth - birthMonth;
  let calculatedYear = todayYear - birthYear;
  
  //conditional to adjust the negative days result with helperfunction to 
  if (calculatedDay < 0) {
    calculatedMonth--;
    calculatedDay += getDaysInMonth(todayYear, todayMonth - 1);
  }

  //Conditional to adjust the negative months result
  if (calculatedMonth < 0) {
    calculatedYear--;
    calculatedMonth += 12;
  }
  
  // Result
  result.innerHTML = `You are ${calculatedYear} years,${calculatedMonth} months,${calculatedDay} days old`;

  //Helper function to calculate how many days are in month including leap years
  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  document.getElementById("calculate-button").addEventListener("click", calculateAge); 
}
