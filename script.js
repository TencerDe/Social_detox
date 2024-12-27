const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Timer Logic
let timer;
let seconds = 0;

document.getElementById('start-btn').addEventListener('click', () => {
  timer = setInterval(() => {
    seconds++;
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    document.getElementById('timer-display').textContent = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, 1000);
});

document.getElementById('stop-btn').addEventListener('click', () => clearInterval(timer));

// Goal List Logic
document.getElementById('add-goal-btn').addEventListener('click', () => {
  const goalInput = document.getElementById('goal-input').value;
  if (goalInput.trim()) {
    const li = document.createElement('li');
    li.textContent = goalInput;
    document.getElementById('goal-list').appendChild(li);
    document.getElementById('goal-input').value = '';
  }
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

// Chart.js for Progress Visualization
const ctx = document.getElementById('progress-chart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [{
      label: 'Detox Hours',
      data: [2, 3, 4, 5, 6],
      borderColor: '#4caf50',
      borderWidth: 2,
    }],
  },
});
