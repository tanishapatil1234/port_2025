---
layout: cs-portfolio-lesson
title: "Submodule 4"
description: "Submodule 4 of Resume Building Mini-Quest"
permalink: /cs-portfolio-quest/resume/submodule_4/
parent: "Resume Building"
team: "Grinders"
submodule: 4
categories: [CSP, Submodule, ResumeBuilding]
tags: [resume, submodule, grinders]
author: "Grinders Team"
date: 2025-10-21
---

<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

<div class="max-w-3xl mx-auto p-6 bg-white rounded shadow">
  <h1 class="text-2xl font-bold mb-2">Resume PDF Generator</h1>
  <p class="mb-3 text-gray-600">Download your resume based on your previous inputs and choose your preferred layout style!</p>
  <div id="fetchStatus" class="mb-5 text-red-600"></div>

  <div id="layoutPicker" class="mb-5 hidden">
    <h2 class="text-lg font-semibold mb-3">Choose your resume style:</h2>
    <div class="flex gap-5 flex-col sm:flex-row">
      <button id="classicBtn" class="flex-1 border-2 border-gray-300 p-3 rounded hover:border-black focus:ring focus:ring-blue-200 transition">Classic <div class="text-xs mt-1 text-gray-500">Clean & Professional</div></button>
      <button id="modernBtn" class="flex-1 border-2 border-gray-300 p-3 rounded hover:border-black focus:ring focus:ring-blue-200 transition">Modern <div class="text-xs mt-1 text-gray-500">Bold Headings, Subtle Accents</div></button>
    </div>
  </div>

  <div id="pdfActions" class="mb-4 hidden">
    <button id="downloadBtn" class="btn primary">Download as PDF</button>
  </div>

  <div class="border rounded bg-gray-50 px-4 py-3 mt-2">
    <h2 class="font-semibold mb-2">Preview <span id="previewLabel" class="text-sm text-gray-400"></span></h2>
    <div id="resumePreview" class="mt-2"></div>
  </div>
</div>

<script>
(function() {
  let resumeData = null;
  let chosenLayout = null;

  const fetchStatus = document.getElementById('fetchStatus');
  const layoutPicker = document.getElementById('layoutPicker');
  const downloadBtn = document.getElementById('downloadBtn');
  const resumePreview = document.getElementById('resumePreview');
  const pdfActions = document.getElementById('pdfActions');
  const previewLabel = document.getElementById('previewLabel');
  const classicBtn = document.getElementById('classicBtn');
  const modernBtn = document.getElementById('modernBtn');

  function determineApiUrl() {
    if (window.location.hostname === 'localhost') {
      return 'http://localhost:8585/api/resume/me';
    } else if (window.location.hostname === 'pages.opencodingsociety.com') {
      return 'https://spring.opencodingsocity.com/api/resume/me';
    }
    return '';
  }

  async function fetchResume() {
    fetchStatus.textContent = '';
    let url = determineApiUrl();
    if (!url) {
      fetchStatus.textContent = 'Unrecognized host. Cannot fetch resume data.';
      return;
    }
    try {
      let res = await fetch(url, { credentials: 'include' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      let data = await res.json();
      if (!data || !data.professionalSummary) throw new Error('No resume data found. Complete previous modules first.');
      resumeData = data;
      layoutPicker.classList.remove('hidden');
    } catch (e) {
      fetchStatus.textContent = 'Error fetching resume: ' + (e?.message || e);
      resumePreview.innerHTML = '<div class="text-red-600">No resume to show.</div>';
    }
  }

  function renderPreview(layout, data) {
    const { professionalSummary, experiences = [] } = data;
    if (layout === 'classic') {
      previewLabel.textContent = '(Classic)';
      return `
      <div class="p-3">
        <div class="text-lg font-bold mb-2">Your Name</div>
        <div class="mb-3 text-gray-700 italic">${escapeHtml(professionalSummary)}</div>
        <div class="font-semibold mt-3 mb-1">Experience</div>
        <div>${experiences.map(e => `
          <div class="mb-2">
            <div class="font-bold">${escapeHtml(e.jobTitle)}</div>
            <div class="text-gray-500">${escapeHtml(e.company)} &bull; ${escapeHtml(e.dates)}</div>
            <div class="text-gray-700 whitespace-pre-line">${escapeHtml(e.description)}</div>
          </div>
        `).join('')}</div>
      </div>`;
    }
    if (layout === 'modern') {
      previewLabel.textContent = '(Modern)';
      return `
      <div class="p-3">
        <div class="flex items-center mb-3"><div class="rounded-full bg-blue-500 text-white w-10 h-10 flex items-center justify-center mr-3 text-xl">👤</div><div><div class="font-bold text-lg">Your Name</div><div class="text-blue-700">${escapeHtml(professionalSummary)}</div></div></div>
        <div class="uppercase tracking-wide text-sm text-blue-700 font-semibold mb-1">Experience</div>
        <div>${experiences.map(e => `
          <div class="mb-3 border-l-4 border-blue-400 pl-3">
            <div class="font-semibold text-blue-900">${escapeHtml(e.jobTitle)}</div>
            <div class="text-xs text-gray-400">${escapeHtml(e.company)} &bull; ${escapeHtml(e.dates)}</div>
            <div class="mt-1 text-gray-700 whitespace-pre-line">${escapeHtml(e.description)}</div>
          </div>
        `).join('')}</div>
      </div>`;
    }
    return '';
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function renderPdf(layout, data) {
    const { professionalSummary, experiences = [] } = data;
    const doc = new window.jspdf.jsPDF({ unit: 'pt', format: 'a4' });
    let y = 48;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text('Your Name', 40, y);
    y += 28;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    if (layout === 'classic') {
      doc.setTextColor(70, 70, 70);
      doc.text(professionalSummary, 40, y, { maxWidth: 520 });
      y += 30;
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('Experience', 40, y);
      y += 20;
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      experiences.forEach(ex => {
        doc.setFont('helvetica', 'bold');
        doc.text(ex.jobTitle, 48, y);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(85, 85, 85);
        doc.text(`${ex.company} • ${ex.dates}`, 48, y + 16);
        doc.setTextColor(70, 70, 70);
        let desc = ex.description;
        doc.text(desc, 48, y + 32, { maxWidth: 480 });
        y += 54 + 6 * ((desc.match(/\n/g) || []).length);
        doc.setTextColor(0, 0, 0);
      });
    } else if (layout === 'modern') {
      doc.setTextColor(44, 98, 182);
      doc.text(professionalSummary, 40, y, { maxWidth: 520 });
      y += 30;
      doc.setTextColor(44, 98, 182);
      doc.setFontSize(16);
      doc.text('EXPERIENCE', 40, y);
      y += 20;
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(12);
      experiences.forEach(ex => {
        doc.setFont('helvetica', 'bold');
        doc.text(ex.jobTitle, 48, y);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(130, 142, 158);
        doc.text(`${ex.company} • ${ex.dates}`, 48, y + 16);
        doc.setTextColor(70, 70, 70);
        let desc = ex.description;
        doc.text(desc, 48, y + 32, { maxWidth: 480 });
        y += 54 + 6 * ((desc.match(/\n/g) || []).length);
        doc.setTextColor(0, 0, 0);
      });
    }
    doc.save('Resume.pdf');
  }

  // UI setup
  if (classicBtn) classicBtn.onclick = function() {
    chosenLayout = 'classic';
    resumePreview.innerHTML = renderPreview('classic', resumeData);
    pdfActions.classList.remove('hidden');
  };
  if (modernBtn) modernBtn.onclick = function() {
    chosenLayout = 'modern';
    resumePreview.innerHTML = renderPreview('modern', resumeData);
    pdfActions.classList.remove('hidden');
  };
  if (downloadBtn) downloadBtn.onclick = function() {
    if (!chosenLayout || !resumeData) return;
    renderPdf(chosenLayout, resumeData);
  };

  fetchResume();
})();
</script>

