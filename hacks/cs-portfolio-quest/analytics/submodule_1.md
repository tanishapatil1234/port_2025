---
layout: cs-portfolio-lesson
title: "Submodule 1: Overall Analytics & Grades"
description: "Submodule 1 of Analytics/Admin Mini-Quest"
permalink: /cs-portfolio-quest/analytics/submodule_1/
parent: "Analytics/Admin"
team: "Curators"
submodule: 1
categories: [CSP, Submodule, Analytics/Admin]
tags: [analytics, submodule, curators]
author: "Curators Team: Nikhil, Rohan, Pranav, Shriya, Samhita, Adi"
date: 2025-10-21
---

{%- include tailwind/cs-portfolio-quest-lessons_info.html -%}

# Submodule 1: Overall Analytics & Grades

[Return to Analytics and Mastery Certificate Quest]({{ site.baseurl }}/cs-portfolio-quest/analytics/)

<style>
  .analytics-container {
    background-color: #121212;
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    padding: 2rem;
    min-height: 100vh;
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .metric-card {
    background: #1e1e1e;
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .metric-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .metric-title {
    color: #b0b0b0;
    font-size: 0.9rem;
  }

  .metric-icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }

  .metric-value {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0.5rem 0;
  }

  .metric-subtitle {
    color: #808080;
    font-size: 0.85rem;
  }

  .insights-card {
    background: linear-gradient(135deg, #ea8c33 0%, #d67324 100%);
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 2rem;
  }

  .insights-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .insights-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  .insights-subtitle {
    opacity: 0.9;
    font-size: 0.9rem;
  }

  .insights-content {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1rem;
  }

  .insights-text {
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .recommendation {
    display: flex;
    gap: 0.5rem;
    line-height: 1.6;
  }

  .insights-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    opacity: 0.9;
  }

  .live-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .live-dot {
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .chart-card {
    background: #1e1e1e;
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }

  .chart-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  .chart-container {
    position: relative;
    height: 300px;
  }

  .bottom-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 1.5rem;
  }

  .download-section {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    padding-bottom: 2rem;
  }

  .download-btn {
    background: linear-gradient(135deg, #ea8c33 0%, #d67324 100%);
    color: white;
    border: none;
    padding: 1rem 2.5rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 12px rgba(234, 140, 51, 0.3);
  }

  .download-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(234, 140, 51, 0.4);
  }

  .download-btn:disabled {
    cursor: wait;
    opacity: 0.8;
  }

  canvas {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    .analytics-container {
      padding: 1rem;
    }
    
    .metrics-grid {
      grid-template-columns: 1fr;
    }
    
    .bottom-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="analytics-container">
  <!-- Metrics Grid -->
  <div class="metrics-grid">
    <div class="metric-card">
      <div class="metric-header">
        <span class="metric-title">Total Study Time</span>
        <div class="metric-icon" style="background: rgba(234, 140, 51, 0.2);">⏱️</div>
      </div>
      <div class="metric-value">127.5h</div>
      <div class="metric-subtitle">+8h this week</div>
    </div>
    <div class="metric-card">
      <div class="metric-header">
        <span class="metric-title">Modules Completed</span>
        <div class="metric-icon" style="background: rgba(147, 51, 234, 0.2);">📚</div>
      </div>
      <div class="metric-value">24</div>
      <div class="metric-subtitle">3 in progress</div>
    </div>
    <div class="metric-card">
      <div class="metric-header">
        <span class="metric-title">Accuracy Rate</span>
        <div class="metric-icon" style="background: rgba(59, 130, 246, 0.2);">🎯</div>
      </div>
      <div class="metric-value">87.3%</div>
      <div class="metric-subtitle">+12% from last month</div>
    </div>
    <div class="metric-card">
      <div class="metric-header">
        <span class="metric-title">Day Streak</span>
        <div class="metric-icon" style="background: rgba(239, 68, 68, 0.2);">🔥</div>
      </div>
      <div class="metric-value">15</div>
      <div class="metric-subtitle">Keep it up!</div>
    </div>
  </div>

  <!-- AI Insights Card -->
  <div class="insights-card">
    <div class="insights-header">
      <div>
        <div class="insights-title">📊 AI Performance Insights</div>
        <div class="insights-subtitle">Generated by Gemini AI</div>
      </div>
      <div style="font-size: 1.5rem;">📈</div>
    </div>
    <div class="insights-content">
      <div class="insights-text">
        You improved your accuracy by <strong>12% this week</strong>. Great job staying consistent with your <strong>15-day streak!</strong> Your performance in Python and Data Analysis modules has been exceptional, with an average accuracy of <strong>88.5%</strong>.
      </div>
      <div class="recommendation">
        <span>💡</span>
        <div><strong>Recommendation:</strong> Consider focusing more time on Machine Learning fundamentals to boost your overall performance. You're only 3% away from reaching the 80% milestone!</div>
      </div>
    </div>
    <div class="insights-footer">
      <span>Last updated: Today at 9:42 AM</span>
      <div class="live-indicator">
        <div class="live-dot"></div>
        <span>Live</span>
      </div>
    </div>
  </div>

  <!-- Weekly Study Time Chart -->
  <div class="chart-card">
    <div class="chart-title">Weekly Study Time</div>
    <div class="chart-container">
      <canvas id="weeklyChart"></canvas>
    </div>
  </div>

  <!-- Bottom Charts Grid -->
  <div class="bottom-grid">
    <div class="chart-card">
      <div class="chart-title">Accuracy Per Module</div>
      <div class="chart-container">
        <canvas id="accuracyChart"></canvas>
      </div>
    </div>
    <div class="chart-card">
      <div class="chart-title">Question Categories Mastered</div>
      <div class="chart-container">
        <canvas id="categoriesChart"></canvas>
      </div>
    </div>
  </div>

  <!-- Download Button -->
  <div class="download-section">
    <button id="downloadBtn" class="download-btn">
      <span style="font-size: 1.2rem;">📄</span>
      Download Analytics Report (PDF)
    </button>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script>
  // Weekly Study Time Chart
  const weeklyCtx = document.getElementById('weeklyChart').getContext('2d');
  new Chart(weeklyCtx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Study Hours',
        data: [3.5, 4.2, 2.7, 5, 4.5, 6.5, 6],
        borderColor: '#ea8c33',
        backgroundColor: 'rgba(234, 140, 51, 0.1)',
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: '#ea8c33',
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#ea8c33',
          titleColor: '#fff',
          bodyColor: '#fff',
          padding: 12,
          cornerRadius: 8
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 8,
          grid: { color: 'rgba(255, 255, 255, 0.1)' },
          ticks: { color: '#b0b0b0' }
        },
        x: {
          grid: { display: false },
          ticks: { color: '#b0b0b0' }
        }
      }
    }
  });
  // Accuracy Per Module Chart
  const accuracyCtx = document.getElementById('accuracyChart').getContext('2d');
  new Chart(accuracyCtx, {
    type: 'bar',
    data: {
      labels: ['Python', 'Data Analysis', 'Web Dev', 'ML Basics', 'Algorithms'],
      datasets: [{
        data: [92, 88, 89, 78, 91],
        backgroundColor: '#ea8c33',
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#ea8c33',
          padding: 12,
          cornerRadius: 8
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          grid: { color: 'rgba(255, 255, 255, 0.1)' },
          ticks: { color: '#b0b0b0' }
        },
        x: {
          grid: { display: false },
          ticks: { color: '#b0b0b0' }
        }
      }
    }
  });
  // Question Categories Chart
  const categoriesCtx = document.getElementById('categoriesChart').getContext('2d');
  new Chart(categoriesCtx, {
    type: 'doughnut',
    data: {
      labels: ['Programming', 'Data Science', 'Web Development', 'Algorithms'],
      datasets: [{
        data: [35, 28, 22, 15],
        backgroundColor: ['#ea8c33', '#d67324', '#c56520', '#b4581c'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '70%',
      plugins: {
        legend: {
          display: true,
          position: 'right',
          labels: { color: '#b0b0b0', padding: 20 }
        },
        tooltip: {
          backgroundColor: '#ea8c33',
          padding: 12,
          cornerRadius: 8
        }
      }
    }
  });
  // PDF Download functionality
  const downloadBtn = document.getElementById('downloadBtn');
  downloadBtn.addEventListener('click', async function() {
    const button = this;
    const originalText = button.innerHTML;
    button.innerHTML = '<span style="font-size: 1.2rem;">⏳</span> Generating PDF...';
    button.disabled = true;
    try {
      const { jsPDF } = window.jspdf;
      const container = document.querySelector('.analytics-container');
      // Hide the download button temporarily
      const downloadSection = document.querySelector('.download-section');
      downloadSection.style.display = 'none';
      const canvas = await html2canvas(container, {
        scale: 2,
        backgroundColor: '#121212',
        logging: false
      });
      // Show the button again
      downloadSection.style.display = 'flex';
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('edulearn-analytics-report.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating the PDF. Please try again.');
    } finally {
      button.innerHTML = originalText;
      button.disabled = false;
    }
  });
</script>