//COMPLETED
//WHOOOPS!!

var reportedCases, currentlyInfected, infected, factor, value, availableBeds, severe, impact, infectionsByRequestedTime1, infectionsByRequestedTime2, numberDays, estiNum, totalHospitalBeds, totalBeds, occupiedBeds, vepe;
//reportedCases = 50000;
document.getElementsByClassName('data-reported-cases').value;
//totalHospitalBeds = 100;
document.getElementsByClassName('data-total-hospital-beds ').totalHospitalBeds;
//numberDays = 8;
document.getElementsByClassName('data-time-to-elapse').numberDays;

console.log(reportedCases);
covid19ImpactEstimator();
factr();
calc();
severeCasesByRequestedTime();
numberBeds();

function covid19ImpactEstimator() {
    currentlyInfected = reportedCases * 10;
    severeImpact = reportedCases * 50;
}

function factr() {
    factor = Math.floor(numberDays / 3);

}

function calc() {
    value = Math.pow(2, factor);
    impact = currentlyInfected;
    severe = severeImpact;
    infectionsByRequestedTime1 = severe * value;
    infectionsByRequestedTime2 = impact * value;
}

function severeCasesByRequestedTime() {
    estiNum1 = .15 * infectionsByRequestedTime1;
    estiNum2 = .15 * infectionsByRequestedTime2;

}

function numberBeds() {
    occupiedBeds = 0.65 * totalHospitalBeds;
    availableBeds = 0.35 * totalHospitalBeds;

}
var hospitalBedsByRequestedTime = Math.floor(estiNum1 / availableBeds);
if (hospitalBedsByRequestedTime >= 0) {
    //console.log(hospitalBedsByRequestedTime + ' hospital beds are be available ');
} else if (hospitalBedsByRequestedTime < 0) {
    // console.log('-' + hospitalBedsByRequestedTime + ' hospital beds are be available ');


}

var casesForICUByRequestedTime = 0.5 * estiNum1;
var casesForVentilatorsByRequestedTime = 0.2 * estiNum1;

var avgDailyIncomeInUSD, dollarsInFlight, avgDailyIncomeInUSD, avgDailyIncomeInUSD, avgDailyIncomePopulation;
avgDailyIncomeInUSD = 5;
avgDailyIncomePopulation = 0.71;
dollarsInFlight = Math.floor((avgDailyIncomePopulation * avgDailyIncomeInUSD) / factor);

//console.log(infectionsByRequestedTime1, infectionsByRequestedTime2);
//console.log(estiNum1, estiNum2);