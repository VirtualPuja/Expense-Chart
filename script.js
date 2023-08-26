const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const expenseValue = [17.45, 34.91, 52.36, 37.07, 23.79, 43.28, 25.48];
const barColors = ["#f4ceb8", "#e2cbd9", "#c2a2c2", "#bfd1d0", "#e9a7b8", "#a4d4dc", "#dfefc6"];

new Chart("myChart", { 
  type: "bar",
  data: {
    labels: weekday,
    datasets: [{
      backgroundColor: barColors,
      data: expenseValue
    }]
  },
  options: {
    scales: {
        x: {
            grid: {
               display: false
            }
         },
         y: {
            grid: {
               display: false
            }
         }
   },
   plugins: {
    legend: {display: false}
  }}
});
