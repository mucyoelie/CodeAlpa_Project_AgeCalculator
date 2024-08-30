let UserInput = document.getElementById('date');
UserInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById('result');

function calculateAge(){

    let birthDate = new Date(UserInput.value);
    let Day1 = birthDate.getDate();
    let Month1 = birthDate.getMonth() + 1;
    let Year1 = birthDate.getFullYear();

    let NowDay = new Date();

    let Day2 = NowDay.getDate();
    let Month2 = NowDay.getMonth() + 1;
    let Year2 = NowDay.getFullYear();

    let Day3,Month3,Year3;
    Year3 = Year2 - Year1;
     
    if(Month2 >= Month1){
        Month3 = Month2 - Month1;
    }
    else{
        Year3--;
        Month3 =12 + Month2 - Month1;
    }

    if(Day2 >= Day1){
        Day3 = Day2 - Day1;
    }
    else{
        Month3--;
        Day3 = getDaysInMonth(Year1,Month1) + Day2 - Day1;
    }

    if(Month3 < 0){
Month3 = 11;
Year3--;
    }

    result.innerHTML =`you are ${Year3} years ${Month3} month ${Day3} days`;
}
function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}