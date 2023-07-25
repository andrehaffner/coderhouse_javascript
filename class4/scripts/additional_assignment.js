
function calculateMean(numbersList) {
    const sum = numbersList.reduce((acc, num) => acc + num, 0);
    return sum / numbersList.length;
}


function calculateMedian(numbersList) {
    const sortedNumbers = numbersList.slice().sort((a, b) => a - b);
    const n = sortedNumbers.length;
    let median = null;
    if (n % 2 === 0) {
        median = (sortedNumbers[n / 2 - 1] + sortedNumbers[n / 2]) / 2;
    } else {
        median = sortedNumbers[Math.floor(n / 2)];
    }
    return median;
}


function calculateStandardDeviation(numbersList) {
    const mean = calculateMean(numbersList);
    const sumSquares = numbersList.reduce((acc, num) => acc + Math.pow(num - mean, 2), 0);
    return Math.sqrt(sumSquares / numbersList.length);;
}


function calculateStatistics(numbers) {
    const mean = calculateMean(numbers);
    const median = calculateMedian(numbers);
    const standardDeviation = calculateStandardDeviation(numbers);
    return {mean: mean, median: median, standardDeviation: standardDeviation};
}