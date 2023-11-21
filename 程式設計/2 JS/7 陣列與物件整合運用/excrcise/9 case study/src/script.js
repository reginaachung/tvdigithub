// 小步測試，反覆驗證
let bmiHistoryData = [];
const bmiStatesData = {
  "overThin": {
    "state": "過輕",
    "color": "藍色"
  },
  "normal": {
    "state": "正常",
    "color": "紅色"
  },
  "overWeight": {
    "state": "過重",
    "color": "澄色"
  },
  "mildFat": {
    "state": "輕度肥胖",
    "color": "黃色"
  },
  "moderateFat": {
    "state": "中度肥胖",
    "color": "黑色"
  },
  "severeFat": {
    "state": "重度肥胖",
    "color": "綠色"
  },
}
function bmiStatesText(state) {
  console.log(`您的體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}`)
}
function addData(bmi,state){
  let obj = {};
  obj.bmi = bmi;
  obj.state = state;
  bmiHistoryData.push(obj);
}
function printBmi(height, weight) {
  // let height = 178;
  // let weight = 130;
  let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
  // console.log(bmi);
  if (bmi < 18.5) {
    addData(bmi, "overThin")
    //overThin
    bmiStatesText("overThin");
  } else if (18.5 <= bmi && bmi < 24) {
    //normal
    bmiStatesText("normal");
    addData(bmi, "normal");
  } else if (24 <= bmi && bmi < 27) {
    //overWeight
    bmiStatesText("overWeight");
    addData(bmi, "overWeight");
  } else if (27 <= bmi && bmi < 30) {
    //mildFat
    bmiStatesText("mildFat");
    addData(bmi, "mildFat");
  } else if (30 <= bmi && bmi < 35) {
    //moderateFat
    bmiStatesText("moderateFat");
    addData(bmi, "moderateFat")
  } else if (bmi >= 35) {
    //severeFat
    bmiStatesText("severeFat");
    addData(bmi, "severeFat")
  } else {
    console.log("您的數值輸入錯誤，請重新輸入")
  }
}
function showHistoryData(){
  const totalNum = bmiHistoryData.length;
  const lastNum = totalNum - 1;
  const lastState = bmiHistoryData[lastNum].state
  console.log(`您總共計算 ${totalNum} 次 BMI 紀錄，最後一次 BMI 指數為 ${bmiHistoryData[lastNum].bmi}，體重${bmiStatesData[lastState].state}！健康指數為${bmiStatesData[lastState].color}！`);
}
// 輸入數據，顯示對應物件內容
printBmi(178, 20);
printBmi(178, 70);
printBmi(178, 85);
showHistoryData();


