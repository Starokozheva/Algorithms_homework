// 1

function knapsackGreedy(weights, values, capacity) {
    const n = weights.length;
    const ratios = [];
  
    for (let i = 0; i < n; i++) {
      ratios.push({ index: i, ratio: values[i] / weights[i] });
    }
  
    ratios.sort((a, b) => b.ratio - a.ratio);
  
    let totalValue = 0;
    let currentWeight = 0;
  
    for (let i = 0; i < n; i++) {
      const currentIndex = ratios[i].index;
      if (currentWeight + weights[currentIndex] <= capacity) {
        totalValue += values[currentIndex];
        currentWeight += weights[currentIndex];
      }
    }
  
    return totalValue;
}

const weights = [10, 5, 7, 3, 1];
const values = [15, 10, 7, 4, 1];
const capacity = 10;

const result = knapsackGreedy(weights, values, capacity);
console.log(result);




// 2

function maximizeProfit(activities) {
    const sortedActivities = activities.sort((a, b) => {
      return b.value - a.value;
    });
  
    const schedule = Array(8).fill(0);
  
    let totalProfit = 0;
  
    for (const activity of sortedActivities) {
      const startHour = activity.start;
      const endHour = activity.end;
      let slotFound = false;
  
      for (let i = startHour; i < endHour; i++) {
        if (schedule[i] === 0) {
          schedule[i] = 1;
          slotFound = true;
        } else if (i >= 4 && schedule[i] === 1) {
          totalProfit += activity.value;
          slotFound = true;
          break;
        }
      }
  
      if (!slotFound) {
        console.log(`Cannot schedule activity from ${startHour} to ${endHour}`);
      }
    }
  
    return totalProfit;
}

const activities = [
  { start: 11, end: 14, value: 2 },
  { start: 12, end: 16, value: 1 },
  { start: 10, end: 13, value: 3 },
  { start: 9, end: 11, value: 4 },
];

const result2 = maximizeProfit(activities);
console.log(result);
  