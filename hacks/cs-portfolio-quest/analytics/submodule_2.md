---
layout: cs-portfolio-lesson
title: "Submodule 2: Certificates and Badges"
description: "Submodule 2 of Analytics/Admin Mini-Quest"
permalink: /cs-portfolio-quest/analytics/submodule_2/
parent: "Analytics/Admin"
team: "Curators"
submodule: 2
categories: [CSP, Submodule, Analytics/Admin]
tags: [analytics, submodule, curators]
author: "Curators Team"
date: 2025-10-21
---

# Submodule 2

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #121212;
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    padding: 2rem;
    min-height: 100vh;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  .section-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .certificates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
  .cert-card {
    border-radius: 12px;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .cert-card:hover {
    transform: translateY(-4px);
  }
  .cert-red {
    background: linear-gradient(135deg, #d94a38 0%, #c23b2a 100%);
    box-shadow: 0 4px 12px rgba(217, 74, 56, 0.3);
  }
  .cert-red:hover {
    box-shadow: 0 8px 20px rgba(217, 74, 56, 0.4);
  }
  .cert-orange {
    background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
    box-shadow: 0 4px 12px rgba(243, 156, 18, 0.3);
  }
  .cert-orange:hover {
    box-shadow: 0 8px 20px rgba(243, 156, 18, 0.4);
  }
  .cert-purple {
    background: linear-gradient(135deg, #8e44ad 0%, #6c3483 100%);
    box-shadow: 0 4px 12px rgba(142, 68, 173, 0.3);
  }
  .cert-purple:hover {
    box-shadow: 0 8px 20px rgba(142, 68, 173, 0.4);
  }
  .cert-badge {
    background: rgba(0, 0, 0, 0.2);
    color: #fff;
    padding: 4px 12px;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .cert-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }
  .cert-org {
    font-size: 0.95rem;
    opacity: 0.9;
    margin-bottom: 0.25rem;
  }
  .cert-date {
    font-size: 0.85rem;
    opacity: 0.8;
    margin-bottom: 1.25rem;
  }
  .cert-actions {
    display: flex;
    gap: 0.75rem;
  }
  .btn {
    padding: 0.6rem 1.25rem;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 600;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.2s;
  }
  .btn-download {
    background: rgba(0, 0, 0, 0.25);
    color: #fff;
  }
  .btn-download:hover {
    background: rgba(0, 0, 0, 0.35);
  }
  .btn-share {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
  }
  .btn-share:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  .skills-card {
    background: #1e1e1e;
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 2rem;
  }
  .skill-item {
    margin-bottom: 1.75rem;
  }
  .skill-item:last-child {
    margin-bottom: 0;
  }
  .skill-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
  }
  .skill-name {
    font-weight: 600;
    color: #ffffff;
  }
  .skill-percentage {
    font-weight: 700;
    color: #ea8c33;
  }
  .skill-bar {
    background: #2a2a2a;
    height: 10px;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
  }
  .skill-progress {
    height: 100%;
    background: linear-gradient(90deg, #ea8c33 0%, #d67324 100%);
    border-radius: 6px;
    transition: width 0.3s ease;
    box-shadow: 0 0 8px rgba(234, 140, 51, 0.5);
  }
  .badges-card {
    background: #1e1e1e;
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 2rem;
  }
  .badges-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  .badge {
    padding: 1rem 1.5rem;
    border-radius: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    text-align: center;
    border: 2px solid;
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: default;
  }
  .badge:hover {
    transform: translateY(-2px);
  }
  .badge-red {
    background: linear-gradient(135deg, #c0392b 0%, #a93226 100%);
    border-color: #e74c3c;
    box-shadow: 0 2px 8px rgba(231, 76, 60, 0.3);
  }
  .badge-red:hover {
    box-shadow: 0 4px 12px rgba(231, 76, 60, 0.4);
  }
  .badge-orange {
    background: linear-gradient(135deg, #d68910 0%, #bf790f 100%);
    border-color: #f39c12;
    box-shadow: 0 2px 8px rgba(243, 156, 18, 0.3);
  }
  .badge-orange:hover {
    box-shadow: 0 4px 12px rgba(243, 156, 18, 0.4);
  }
  .badge-purple {
    background: linear-gradient(135deg, #6c3483 0%, #5b2c6f 100%);
    border-color: #8e44ad;
    box-shadow: 0 2px 8px rgba(142, 68, 173, 0.3);
  }
  .badge-purple:hover {
    box-shadow: 0 4px 12px rgba(142, 68, 173, 0.4);
  }
  .badge-teal {
    background: linear-gradient(135deg, #138d75 0%, #117864 100%);
    border-color: #16a085;
    box-shadow: 0 2px 8px rgba(22, 160, 133, 0.3);
  }
  .badge-teal:hover {
    box-shadow: 0 4px 12px rgba(22, 160, 133, 0.4);
  }
  .badge-yellow {
    background: linear-gradient(135deg, #d4ac0d 0%, #b7950b 100%);
    border-color: #f1c40f;
    box-shadow: 0 2px 8px rgba(241, 196, 15, 0.3);
  }
  .badge-yellow:hover {
    box-shadow: 0 4px 12px rgba(241, 196, 15, 0.4);
  }
  .badges-footer {
    font-size: 0.9rem;
    color: #b0b0b0;
  }
  #certCanvas {
    display: none;
  }
  @media (max-width: 768px) {
    body {
      padding: 1rem;
    }
    .certificates-grid {
      grid-template-columns: 1fr;
    }
    .badges-grid {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }
    .section-title {
      font-size: 1.25rem;
    }
  }
</style>

<div class="container">
  <h2 class="section-title">Earned Certificates</h2>
  <div class="certificates-grid">
    <div class="cert-card cert-red">
      <span class="cert-badge">Verified</span>
      <h3 class="cert-title">Advanced Python Programming</h3>
      <div class="cert-org">Open Coding Society</div>
      <div class="cert-date">September 2024</div>
      <div class="cert-actions">
        <button class="btn btn-download" onclick="downloadCert('Advanced Python Programming', 'Data Science Academy', 'September 2024')">⬇ Download</button>
        <button class="btn btn-share">🔗 Share</button>
      </div>
    </div>
    <div class="cert-card cert-orange">
      <span class="cert-badge">Verified</span>
      <h3 class="cert-title">Data Analysis with Python</h3>
      <div class="cert-org">Open Coding Society</div>
      <div class="cert-date">June 2024</div>
      <div class="cert-actions">
        <button class="btn btn-download" onclick="downloadCert('Data Analysis with Python', 'Data Science Institute', 'June 2024')">⬇ Download</button>
        <button class="btn btn-share">🔗 Share</button>
      </div>
    </div>
    <div class="cert-card cert-purple">
      <span class="cert-badge">Verified</span>
      <h3 class="cert-title">Machine Learning Fundamentals</h3>
      <div class="cert-org">Open Coding Society</div>
      <div class="cert-date">July 2024</div>
      <div class="cert-actions">
        <button class="btn btn-download" onclick="downloadCert('Machine Learning Fundamentals', 'AI Learning Hub', 'July 2024')">⬇ Download</button>
        <button class="btn btn-share">🔗 Share</button>
      </div>
    </div>
  </div>

  <div class="skills-card">
    <h2 class="section-title">Skills Mastery</h2>
    <div class="skill-item">
      <div class="skill-header">
        <span class="skill-name">Data Analysis</span>
        <span class="skill-percentage">92%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: 92%"></div>
      </div>
    </div>
    <div class="skill-item">
      <div class="skill-header">
        <span class="skill-name">Python</span>
        <span class="skill-percentage">88%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: 88%"></div>
      </div>
    </div>
    <div class="skill-item">
      <div class="skill-header">
        <span class="skill-name">AI Ethics</span>
        <span class="skill-percentage">85%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
      </div>
    </div>
    <div class="skill-item">
      <div class="skill-header">
        <span class="skill-name">Machine Learning</span>
        <span class="skill-percentage">78%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: 78%"></div>
      </div>
    </div>
    <div class="skill-item">
      <div class="skill-header">
        <span class="skill-name">Statistics</span>
        <span class="skill-percentage">90%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: 90%"></div>
      </div>
    </div>
    <div class="skill-item">
      <div class="skill-header">
        <span class="skill-name">SQL</span>
        <span class="skill-percentage">82%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: 82%"></div>
      </div>
    </div>
  </div>

  <div class="badges-card">
    <h2 class="section-title">Achievement Badges</h2>
    <div class="badges-grid">
      <div class="badge badge-red">Python Master</div>
      <div class="badge badge-orange">Data Wizard</div>
      <div class="badge badge-purple">Quick Learner</div>
      <div class="badge badge-red">Streak Champion</div>
      <div class="badge badge-teal">Problem Solver</div>
      <div class="badge badge-yellow">AI Enthusiast</div>
    </div>
    <div class="badges-footer">5 badges earned • 4 more to unlock</div>
  </div>
</div>

<canvas id="certCanvas"></canvas>

<script>
function downloadCert(course, org, date) {
  const canvas = document.getElementById('certCanvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = 1400;
  canvas.height = 1000;
  
// Background - elegant cream
  ctx.fillStyle = '#f8f6f0';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Outer border - navy
  ctx.strokeStyle = '#2c3e50';
  ctx.lineWidth = 25;
  ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);
  
  // Inner border - gold accent
  ctx.strokeStyle = '#c9b037';
  ctx.lineWidth = 3;
  ctx.strokeRect(80, 80, canvas.width - 160, canvas.height - 160);
  
  // Decorative corners
  ctx.fillStyle = '#c9b037';
  ctx.beginPath();
  ctx.arc(80, 80, 15, 0, Math.PI * 2);
  ctx.arc(canvas.width - 80, 80, 15, 0, Math.PI * 2);
  ctx.arc(80, canvas.height - 80, 15, 0, Math.PI * 2);
  ctx.arc(canvas.width - 80, canvas.height - 80, 15, 0, Math.PI * 2);
  ctx.fill();
  
  // Title
  ctx.fillStyle = '#2c3e50';
  ctx.font = 'bold 60px Georgia';
  ctx.textAlign = 'center';
  ctx.fillText('CERTIFICATE', canvas.width / 2, 200);
  
  ctx.font = 'bold 48px Georgia';
  ctx.fillText('OF COMPLETION', canvas.width / 2, 260);
  
  // Decorative line under title
  ctx.strokeStyle = '#c9b037';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(400, 290);
  ctx.lineTo(1000, 290);
  ctx.stroke();
  // "This is to certify that"
  ctx.fillStyle = '#ffffff';
  ctx.font = '28px Arial';
  ctx.fillText('This is to certify that', canvas.width / 2, 380);
  
  // Student name
  ctx.fillStyle = '#ea8c33';
  ctx.font = 'italic bold 52px Georgia';
  ctx.fillText('Student Name', canvas.width / 2, 470);
  
  // Underline
  ctx.strokeStyle = '#ea8c33';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(400, 490);
  ctx.lineTo(1000, 490);
  ctx.stroke();
  
  // "has successfully completed"
  ctx.fillStyle = '#ffffff';
  ctx.font = '28px Arial';
  ctx.fillText('has successfully completed the course', canvas.width / 2, 560);
  
  // Course name
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 44px Arial';
  ctx.fillText(course, canvas.width / 2, 650);
  
  // Organization
  ctx.fillStyle = '#b0b0b0';
  ctx.font = '26px Arial';
  ctx.fillText('Issued by ' + org, canvas.width / 2, 710);
  
  // Date
  ctx.fillStyle = '#ea8c33';
  ctx.font = 'bold 24px Arial';
  ctx.fillText('Date: ' + date, canvas.width / 2, 800);
  
  // Signature line
  ctx.strokeStyle = '#ea8c33';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(500, 880);
  ctx.lineTo(900, 880);
  ctx.stroke();
  
  ctx.fillStyle = '#b0b0b0';
  ctx.font = '20px Arial';
  ctx.fillText('Authorized Signature', canvas.width / 2, 920);
  
  // Download
  const link = document.createElement('a');
  link.download = course.replace(/\s+/g, '_') + '_Certificate.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}
</script>