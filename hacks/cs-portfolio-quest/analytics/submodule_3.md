---
layout: post
title: "Submodule 3"
description: "Submodule 3 of Analytics/Admin Mini-Quest"
permalink: /cs-portfolio-quest/analytics/submodule_3/
parent: "Analytics/Admin"
team: "Curators"
submodule: 3
categories: [CSP, Submodule, Analytics/Admin]
tags: [analytics, submodule, curators]
author: "Curators Team"
date: 2025-10-21
---

{%- include tailwind/cs-portfolio-quest-lessons_info.html -%}

# Submodule 3: User Management System and User Analytics

[Return to Analytics and Mastery Certificate Quest]({{ site.baseurl }}/cs-portfolio-quest/analytics/)
<style>
  .analytics-container {
    background-color: #121212;
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    padding: 2rem;
    min-height: 100vh;
  }

  .page-title {
    font-size: 2rem;
    color: #ea8c33;
    margin-bottom: 2rem;
    font-weight: bold;
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
    border: 1px solid #2a2a2a;
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
    color: #ea8c33;
  }

  .metric-subtitle {
    color: #808080;
    font-size: 0.85rem;
  }

  .toolbar {
    background: #1e1e1e;
    padding: 1rem 1.5rem;
    margin-bottom: 1.5rem;
    border: 1px solid #2a2a2a;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .toolbar-title {
    font-size: 1.3rem;
    font-weight: bold;
    color: #ea8c33;
  }

  .download-btn {
    background: linear-gradient(135deg, #ea8c33 0%, #d67324 100%);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 12px rgba(234, 140, 51, 0.3);
    font-weight: 600;
  }

  .download-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(234, 140, 51, 0.4);
  }

  .table-container {
    background: #1e1e1e;
    border: 1px solid #2a2a2a;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 2rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    background: #252525;
    border-bottom: 2px solid #ea8c33;
  }

  th {
    padding: 1rem 0.75rem;
    text-align: left;
    font-weight: bold;
    color: #ea8c33;
    font-size: 0.9rem;
    cursor: pointer;
    user-select: none;
    border-right: 1px solid #2a2a2a;
    transition: background 0.2s;
  }

  th:last-child {
    border-right: none;
  }

  th:hover {
    background: #2e2e2e;
  }

  th.center {
    text-align: center;
  }

  .sort-indicator {
    display: inline-block;
    margin-left: 0.25rem;
    font-size: 0.7rem;
    opacity: 0.5;
  }

  th.active .sort-indicator {
    opacity: 1;
    color: #ea8c33;
  }

  tbody tr {
    border-bottom: 1px solid #2a2a2a;
    cursor: pointer;
    transition: background 0.2s;
  }

  tbody tr:hover {
    background: #252525;
  }

  tbody tr.expanded {
    background: #272727;
  }

  td {
    padding: 1rem 0.75rem;
    font-size: 0.9rem;
    border-right: 1px solid #2a2a2a;
  }

  td:last-child {
    border-right: none;
  }

  td.center {
    text-align: center;
  }

  .student-name {
    color: #ea8c33;
    font-weight: 600;
  }

  .grade-display {
    display: inline-block;
    min-width: 45px;
    text-align: center;
    font-weight: bold;
    font-size: 1rem;
  }

  .grade-a { color: #10b981; }
  .grade-b { color: #3b82f6; }
  .grade-c { color: #f59e0b; }
  .grade-d { color: #ef4444; }
  .grade-f { color: #dc2626; }
  .grade-none { color: #6b7280; }

  .progress-info {
    font-size: 0.75rem;
    color: #808080;
    margin-top: 0.25rem;
  }

  .progress-bar-container {
    width: 100%;
    max-width: 100px;
    height: 8px;
    background: #2a2a2a;
    border-radius: 4px;
    margin: 0.25rem auto;
    overflow: hidden;
  }

  .progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #ea8c33 0%, #d67324 100%);
    transition: width 0.3s;
    border-radius: 4px;
  }

  .detail-row {
    display: none;
    background: #1a1a1a;
    border-top: 2px solid #ea8c33;
  }

  .detail-row.active {
    display: table-row;
  }

  .detail-content {
    padding: 2rem;
  }

  .detail-header {
    font-size: 1.3rem;
    font-weight: bold;
    color: #ea8c33;
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid #ea8c33;
  }

  .modules-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .module-box {
    background: #252525;
    border: 1px solid #2a2a2a;
    border-radius: 8px;
    padding: 1.25rem;
  }

  .module-box h4 {
    color: #ea8c33;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid #2a2a2a;
    font-weight: 600;
  }

  .lesson-item {
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 0;
    font-size: 0.9rem;
    border-bottom: 1px solid #1e1e1e;
  }

  .lesson-item:last-child {
    border-bottom: none;
  }

  .lesson-label {
    color: #b0b0b0;
  }

  .module-summary {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 2px solid #2a2a2a;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    color: #ea8c33;
    font-size: 1rem;
  }

  .info-box {
    background: #1e1e1e;
    border: 1px solid #2a2a2a;
    border-radius: 12px;
    padding: 1.5rem;
    margin-top: 2rem;
  }

  .info-box h3 {
    font-size: 1rem;
    color: #ea8c33;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .legend-grid {
    display: flex;
    gap: 2rem;
    font-size: 0.9rem;
    flex-wrap: wrap;
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .legend-color {
    width: 16px;
    height: 16px;
    border-radius: 3px;
    border: 1px solid #2a2a2a;
  }

  .expand-icon {
    display: inline-block;
    margin-right: 0.5rem;
    font-size: 0.8rem;
    color: #ea8c33;
    transition: transform 0.2s;
  }

  tr.expanded .expand-icon {
    transform: rotate(90deg);
  }

  @media (max-width: 768px) {
    .analytics-container {
      padding: 1rem;
    }

    .toolbar {
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
    }

    .table-container {
      overflow-x: auto;
    }

    table {
      min-width: 900px;
    }

    .metrics-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="analytics-container">
  <h1 class="page-title">Student Grading Overview</h1>

  <!-- Metrics Grid -->
  <div class="metrics-grid">
    <div class="metric-card">
      <div class="metric-header">
        <span class="metric-title">Class Average</span>
        <div class="metric-icon" style="background: rgba(234, 140, 51, 0.2);">📊</div>
      </div>
      <div class="metric-value">84.5%</div>
      <div class="metric-subtitle">6 students enrolled</div>
    </div>

    <div class="metric-card">
      <div class="metric-header">
        <span class="metric-title">Modules Completed</span>
        <div class="metric-icon" style="background: rgba(16, 185, 129, 0.2);">✅</div>
      </div>
      <div class="metric-value">48</div>
      <div class="metric-subtitle">Out of 96 total</div>
    </div>

    <div class="metric-card">
      <div class="metric-header">
        <span class="metric-title">Top Performer</span>
        <div class="metric-icon" style="background: rgba(59, 130, 246, 0.2);">🏆</div>
      </div>
      <div class="metric-value">96%</div>
      <div class="metric-subtitle">Patel, Priya</div>
    </div>

    <div class="metric-card">
      <div class="metric-header">
        <span class="metric-title">Progress Rate</span>
        <div class="metric-icon" style="background: rgba(139, 92, 246, 0.2);">📈</div>
      </div>
      <div class="metric-value">50%</div>
      <div class="metric-subtitle">Average completion</div>
    </div>
  </div>

  <div class="toolbar">
    <div class="toolbar-title">Class Gradebook</div>
    <button class="download-btn" onclick="downloadReport()">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      Export Report
    </button>
  </div>

  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th onclick="sortTable('name')" id="th-name" class="active">
            Student Name
            <span class="sort-indicator">▼</span>
          </th>
          <th class="center" onclick="sortTable('module1')" id="th-module1">
            Module 1
            <span class="sort-indicator">▼</span>
          </th>
          <th class="center" onclick="sortTable('module2')" id="th-module2">
            Module 2
            <span class="sort-indicator">▼</span>
          </th>
          <th class="center" onclick="sortTable('module3')" id="th-module3">
            Module 3
            <span class="sort-indicator">▼</span>
          </th>
          <th class="center" onclick="sortTable('module4')" id="th-module4">
            Module 4
            <span class="sort-indicator">▼</span>
          </th>
          <th class="center">Overall</th>
        </tr>
      </thead>
      <tbody id="tableBody">
      </tbody>
    </table>
  </div>

  <div class="info-box">
    <h3>Grading Scale</h3>
    <div class="legend-grid">
      <div class="legend-item">
        <div class="legend-color" style="background: #10b981;"></div>
        <span>A (90-100%)</span>
      </div>
      <div class="legend-item">
        <div class="legend-color" style="background: #3b82f6;"></div>
        <span>B (80-89%)</span>
      </div>
      <div class="legend-item">
        <div class="legend-color" style="background: #f59e0b;"></div>
        <span>C (70-79%)</span>
      </div>
      <div class="legend-item">
        <div class="legend-color" style="background: #ef4444;"></div>
        <span>D (60-69%)</span>
      </div>
      <div class="legend-item">
        <div class="legend-color" style="background: #dc2626;"></div>
        <span>F (Below 60%)</span>
      </div>
    </div>
  </div>
</div>

<!-- Flask data pull -->

<!-- <script type="module">
  import { javaURI } from '{{ site.baseurl }}/assets/js/api/config.js';
  import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

  async function fetchPeople() {
    for (let id = 1; id <= 2; id++) {
      try {
        const res = await fetch(`${pythonURI}/api/user`, {
          ...fetchOptions,
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });

        console.log(`Request for ID ${id} → Status: ${res.status}`);

        if (res.status === 404) {
          console.log(`ID ${id} not found. Terminating loop.`);
          break; // stop loop if 404
        }

        if (res.ok) {
          const data = await res.json();
          console.log(`Data for ID ${id}:`, data);
        } else {
          console.warn(`Request failed for ID ${id} with status ${res.status}`);
        }

      } catch (err) {
        console.error(`Error fetching ID ${id}:`, err);
        break; // optional: stop on network or fetch error
      }
    }
  }

  fetchPeople();
</script> -->

<script type="module">
  import { javaURI } from '{{ site.baseurl }}/assets/js/api/config.js';
  import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

  async function fetchPeople() {
    const students = [];
    
    for (let id = 1; id <= 100; id++) {
      try {
        const res = await fetch(`${javaURI}/api/person/${id}`, {
          ...fetchOptions,
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });

        console.log(`Request for ID ${id} → Status: ${res.status}`);

        if (res.status === 404) {
          console.log(`ID ${id} not found. Terminating loop.`);
          break;
        }

        if (res.ok) {
          const data = await res.json();
          console.log(`Fetched person:`, data);

          // Create random lesson and module data
          const randomLessons = () =>
            Array.from({ length: 5 }, () => Math.floor(Math.random() * 21) * 5); // random 0–100 in steps of 5

          const randomProgress = () =>
            Math.floor(Math.random() * 5) * 25; // random 0, 25, 50, 75, 100

          const modules = {
            "Module 1": { progress: randomProgress(), lessons: randomLessons() },
            "Module 2": { progress: randomProgress(), lessons: randomLessons() },
            "Module 3": { progress: randomProgress(), lessons: randomLessons() },
            "Module 4": { progress: randomProgress(), lessons: randomLessons() },
          };

          students.push({
            id: data.id,
            name: data.name,
            modules
          });

        } else {
          console.warn(`Request failed for ID ${id} with status ${res.status}`);
        }

      } catch (err) {
        console.error(`Error fetching ID ${id}:`, err);
        break;
      }
    }

    console.log("✅ Final students array:", students);
    return students;
  }

  fetchPeople();

  async function main() {
    const students = await fetchPeople();
    console.log("Students array:", students);

    let currentSort = { key: 'name', direction: 'asc' };
    let expandedRow = null;

    function calculateModuleAverage(moduleData) {
      const completed = moduleData.lessons.filter(s => s > 0);
      if (completed.length === 0) return 0;
      return Math.round(completed.reduce((a, b) => a + b, 0) / completed.length);
    }

    function calculateOverallAverage(modules) {
      let total = 0, count = 0;
      Object.values(modules).forEach(m => {
        m.lessons.forEach(s => {
          if (s > 0) { total += s; count++; }
        });
      });
      return count > 0 ? Math.round(total / count) : 0;
    }

    function getGradeClass(score) {
      if (score >= 90) return 'grade-a';
      if (score >= 80) return 'grade-b';
      if (score >= 70) return 'grade-c';
      if (score >= 60) return 'grade-d';
      if (score > 0) return 'grade-f';
      return 'grade-none';
    }

    function renderTable() {
      const tbody = document.getElementById('tableBody');
      tbody.innerHTML = '';

      const sorted = [...students].sort((a, b) => {
        if (currentSort.key === 'name') {
          return currentSort.direction === 'asc' 
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        } else {
          const moduleKey = 'Module ' + currentSort.key.slice(-1);
          const avgA = calculateModuleAverage(a.modules[moduleKey]);
          const avgB = calculateModuleAverage(b.modules[moduleKey]);
          return currentSort.direction === 'asc' ? avgA - avgB : avgB - avgA;
        }
      });

      sorted.forEach(student => {
        const overall = calculateOverallAverage(student.modules);
        const isExpanded = expandedRow === student.id;
        
        const row = document.createElement('tr');
        row.onclick = () => toggleDetails(student.id);
        if (isExpanded) row.classList.add('expanded');
        
        let html = `
          <td>
            <span class="expand-icon">${isExpanded ? '▼' : '▶'}</span>
            <span class="student-name">${student.name}</span>
          </td>
        `;
        
        Object.entries(student.modules).forEach(([name, data]) => {
          const avg = calculateModuleAverage(data);
          html += `
            <td class="center">
              <div class="grade-display ${getGradeClass(avg)}">
                ${avg > 0 ? avg + '%' : '--'}
              </div>
              <div class="progress-bar-container">
                <div class="progress-bar" style="width: ${data.progress}%"></div>
              </div>
              <div class="progress-info">${data.progress}% Complete</div>
            </td>
          `;
        });
        
        html += `
          <td class="center">
            <div class="grade-display ${getGradeClass(overall)}" style="font-size: 1.2rem;">
              ${overall}%
            </div>
          </td>
        `;
        
        row.innerHTML = html;
        tbody.appendChild(row);
        
        const detailRow = document.createElement('tr');
        detailRow.className = 'detail-row';
        if (isExpanded) detailRow.classList.add('active');
        detailRow.id = `detail-${student.id}`;
        detailRow.innerHTML = `
          <td colspan="6">
            <div class="detail-content">
              <div class="detail-header">Grade Details - ${student.name}</div>
              <div class="modules-grid">
                ${Object.entries(student.modules).map(([name, data]) => `
                  <div class="module-box">
                    <h4>${name}</h4>
                    ${data.lessons.map((score, i) => `
                      <div class="lesson-item">
                        <span class="lesson-label">Lesson ${i + 1}</span>
                        <span class="grade-display ${getGradeClass(score)}">
                          ${score > 0 ? score + '%' : 'Not Started'}
                        </span>
                      </div>
                    `).join('')}
                    <div class="module-summary">
                      <span>Module Average:</span>
                      <span class="${getGradeClass(calculateModuleAverage(data))}">
                        ${calculateModuleAverage(data) > 0 ? calculateModuleAverage(data) + '%' : '--'}
                      </span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </td>
        `;
        tbody.appendChild(detailRow);
      });
    }

    function toggleDetails(id) {
      if (expandedRow === id) {
        expandedRow = null;
      } else {
        expandedRow = id;
      }
      renderTable();
    }

    function sortTable(key) {
      if (currentSort.key === key) {
        currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
      } else {
        currentSort = { key, direction: 'asc' };
      }
      
      document.querySelectorAll('th').forEach(th => th.classList.remove('active'));
      document.getElementById('th-' + key).classList.add('active');
      
      renderTable();
    }

    function downloadReport() {
      let csv = 'Student Name,Overall Average,Module 1 Progress,Module 1 Average,Module 2 Progress,Module 2 Average,Module 3 Progress,Module 3 Average,Module 4 Progress,Module 4 Average\n';
      
      students.forEach(s => {
        const overall = calculateOverallAverage(s.modules);
        csv += [
          s.name,
          overall,
          s.modules['Module 1'].progress + '%',
          calculateModuleAverage(s.modules['Module 1']),
          s.modules['Module 2'].progress + '%',
          calculateModuleAverage(s.modules['Module 2']),
          s.modules['Module 3'].progress + '%',
          calculateModuleAverage(s.modules['Module 3']),
          s.modules['Module 4'].progress + '%',
          calculateModuleAverage(s.modules['Module 4'])
        ].join(',') + '\n';
      });

      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'studentvue_analytics_report.csv';
      a.click();
    }

    renderTable();
  }

  main();
</script>