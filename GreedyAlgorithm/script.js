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
  