---
layout: cs-portfolio-lesson
title: "Submodule 5"
description: "Submodule 5 of Resume Building Mini-Quest"
permalink: /cs-portfolio-quest/resume/submodule_5/
parent: "Resume Building"
team: "Grinders"
submodule: 5
categories: [CSP, Submodule, ResumeBuilding]
tags: [resume, submodule, grinders, linkedin]
author: "Grinders Team"
date: 2025-10-21
---

<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

<style>
  .linkedin-header {
    background: linear-gradient(135deg, #0077b5 0%, #00a0dc 100%);
    height: 120px;
    position: relative;
  }
  .linkedin-profile-photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #f3f4f6;
    border: 4px solid white;
    position: absolute;
    bottom: -60px;
    left: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5em;
    color: #0077b5;
    font-weight: bold;
  }
  .skill-badge {
    display: inline-block;
    background: #dbeafe;
    color: #1e40af;
    padding: 4px 12px;
    border-radius: 16px;
    font-size: 0.875rem;
    margin: 4px;
  }
  .loading {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 3px solid #f3f4f6;
    border-top-color: #3b82f6;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
</style>

<div class="max-w-6xl mx-auto p-4">
  <h1 class="text-2xl font-bold mb-2">LinkedIn Profile Builder</h1>
  <p class="text-gray-600 mb-4">Build your professional LinkedIn profile with AI assistance. Fill out the information below and click Generate Profile.</p>

  <!-- Input Form -->
  <div id="inputForm" class="border rounded p-4 mb-4">
    <h2 class="text-xl font-semibold mb-3">Your Information</h2>
    
    <div class="grid md:grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium mb-1">Full Name *</label>
        <input id="fullName" class="w-full border rounded px-3 py-2" placeholder="e.g., Sarah Johnson">
      </div>
      
      <div>
        <label class="block text-sm font-medium mb-1">Professional Headline *</label>
        <input id="headline" class="w-full border rounded px-3 py-2" placeholder="e.g., Computer Science Student | Software Engineer">
      </div>
      
      <div>
        <label class="block text-sm font-medium mb-1">Location</label>
        <input id="location" class="w-full border rounded px-3 py-2" placeholder="e.g., San Diego, CA">
      </div>
      
      <div>
        <label class="block text-sm font-medium mb-1">Skills (comma-separated)</label>
        <input id="skills" class="w-full border rounded px-3 py-2" placeholder="Python, JavaScript, React, Data Analysis">
      </div>
    </div>

    <div class="mt-4">
      <label class="block text-sm font-medium mb-1">Tell us about yourself *</label>
      <textarea id="aboutPrompt" rows="3" class="w-full border rounded px-3 py-2" placeholder="What's your background? What are you passionate about? What are your career goals?"></textarea>
      <p class="text-xs text-gray-500 mt-1">This will be used to generate your About section</p>
    </div>

    <div class="mt-4">
      <label class="block text-sm font-medium mb-1">Your Experience & Projects *</label>
      <textarea id="experiencePrompt" rows="3" class="w-full border rounded px-3 py-2" placeholder="Describe your work experience, internships, projects, and key achievements..."></textarea>
      <p class="text-xs text-gray-500 mt-1">This will be used to generate your Experience section</p>
    </div>

    <div class="mt-4">
      <label class="block text-sm font-medium mb-1">Education</label>
      <textarea id="education" rows="2" class="w-full border rounded px-3 py-2" placeholder="e.g., B.S. Computer Science, UC San Diego, Expected 2026"></textarea>
    </div>

    <button id="generateBtn" onclick="generateProfile()" class="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      <span id="generateIcon">✨</span> Generate LinkedIn Profile
    </button>
    
    <div id="statusMessage" class="mt-3 p-3 rounded hidden"></div>
  </div>

  <!-- LinkedIn Preview -->
  <div id="linkedinPreview" class="border rounded overflow-hidden hidden">
    <div class="bg-gray-100 p-3 border-b flex justify-between items-center">
      <h2 class="text-xl font-semibold">Your LinkedIn Profile</h2>
      <button onclick="copyAllSections()" class="px-4 py-2 bg-green-600 text-white rounded text-sm hover:bg-green-700">
        📋 Copy All Sections
      </button>
    </div>

    <div class="bg-white">
      <!-- LinkedIn Header -->
      <div class="linkedin-header"></div>
      <div class="linkedin-profile-photo" id="profilePhoto">?</div>
      
      <!-- Profile Content -->
      <div class="px-6 pt-16 pb-6">
        <div class="mb-4">
          <h1 id="previewName" class="text-2xl font-bold"></h1>
          <p id="previewHeadline" class="text-gray-700 mt-1"></p>
          <p id="previewLocation" class="text-gray-500 text-sm mt-1"></p>
        </div>

        <!-- About Section -->
        <div class="border rounded p-4 mb-4 bg-gray-50">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-lg font-semibold">About</h3>
            <button onclick="copySection('about')" class="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300">
              📋 Copy
            </button>
          </div>
          <p id="previewAbout" class="text-gray-700 whitespace-pre-wrap"></p>
        </div>

        <!-- Experience Section -->
        <div class="border rounded p-4 mb-4 bg-gray-50">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-lg font-semibold">Experience</h3>
            <button onclick="copySection('experience')" class="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300">
              📋 Copy
            </button>
          </div>
          <p id="previewExperience" class="text-gray-700 whitespace-pre-wrap"></p>
        </div>

        <!-- Skills Section -->
        <div class="border rounded p-4 mb-4 bg-gray-50">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-lg font-semibold">Skills</h3>
            <button onclick="copySection('skills')" class="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300">
              📋 Copy
            </button>
          </div>
          <div id="previewSkills"></div>
        </div>

        <!-- Education Section -->
        <div class="border rounded p-4 mb-4 bg-gray-50">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-lg font-semibold">Education</h3>
            <button onclick="copySection('education')" class="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300">
              📋 Copy
            </button>
          </div>
          <p id="previewEducation" class="text-gray-700 whitespace-pre-wrap"></p>
        </div>

        <div class="text-center mt-6">
          <button onclick="resetForm()" class="px-6 py-2 border rounded hover:bg-gray-100 mr-2">
            ← Edit Information
          </button>
          <a href="https://www.linkedin.com" target="_blank" class="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Open LinkedIn →
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
const API_KEY = 'AIzaSyBRQH3NCC1m3UGfm_mbl2b3aHGJkcAZtms';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
const STORAGE_KEY = 'linkedin_profile_v2';

let profileData = {
  about: '',
  experience: ''
};

// Load saved data
window.addEventListener('DOMContentLoaded', () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      Object.keys(data).forEach(key => {
        const el = document.getElementById(key);
        if (el) el.value = data[key] || '';
      });
    }
  } catch(e) {}
});

// Auto-save inputs
document.querySelectorAll('input, textarea').forEach(el => {
  el.addEventListener('input', saveToLocal);
});

function saveToLocal() {
  const data = {
    fullName: document.getElementById('fullName').value,
    headline: document.getElementById('headline').value,
    location: document.getElementById('location').value,
    skills: document.getElementById('skills').value,
    aboutPrompt: document.getElementById('aboutPrompt').value,
    experiencePrompt: document.getElementById('experiencePrompt').value,
    education: document.getElementById('education').value
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

async function generateProfile() {
  const fullName = document.getElementById('fullName').value.trim();
  const headline = document.getElementById('headline').value.trim();
  const aboutPrompt = document.getElementById('aboutPrompt').value.trim();
  const experiencePrompt = document.getElementById('experiencePrompt').value.trim();

  if (!fullName || !headline || !aboutPrompt || !experiencePrompt) {
    showMessage('Please fill in all required fields (*)', 'error');
    return;
  }

  const btn = document.getElementById('generateBtn');
  const icon = document.getElementById('generateIcon');
  btn.disabled = true;
  icon.innerHTML = '<span class="loading"></span>';
  
  showMessage('Generating your LinkedIn profile... This may take a moment.', 'info');

  try {
    // Generate About section
    const aboutPromptText = `You are a professional LinkedIn profile writer. Write a compelling "About" section (3-4 paragraphs) for:

Name: ${fullName}
Headline: ${headline}
Background: ${aboutPrompt}

Make it professional, engaging, first-person, and highlight their strengths. Return ONLY the about text.`;

    const aboutResponse = await callGemini(aboutPromptText);
    profileData.about = aboutResponse;

    // Generate Experience section
    const expPromptText = `You are a professional LinkedIn profile writer. Write a professional "Experience" section for:

Name: ${fullName}
Headline: ${headline}
Experience: ${experiencePrompt}

Format as: Job Title | Company | Dates, then bullet points of achievements. Use action verbs and quantify results. Return ONLY the experience text.`;

    const expResponse = await callGemini(expPromptText);
    profileData.experience = expResponse;

    // Update preview
    updateLinkedInPreview();
    
    document.getElementById('inputForm').classList.add('hidden');
    document.getElementById('linkedinPreview').classList.remove('hidden');
    
    showMessage('Profile generated successfully! 🎉', 'success');
  } catch (error) {
    showMessage(`Error: ${error.message}`, 'error');
    btn.disabled = false;
    icon.textContent = '✨';
  }
}

async function callGemini(promptText) {
  const response = await fetch(`${API_URL}?key=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        parts: [{ text: promptText }]
      }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000
      }
    })
  });

  if (!response.ok) {
    throw new Error('API request failed');
  }

  const data = await response.json();
  return data.candidates[0].content.parts[0].text.trim();
}

function updateLinkedInPreview() {
  const fullName = document.getElementById('fullName').value.trim();
  const headline = document.getElementById('headline').value.trim();
  const location = document.getElementById('location').value.trim();
  const skills = document.getElementById('skills').value.trim();
  const education = document.getElementById('education').value.trim();

  // Update profile photo
  document.getElementById('profilePhoto').textContent = fullName ? fullName.charAt(0).toUpperCase() : '?';

  // Update basic info
  document.getElementById('previewName').textContent = fullName;
  document.getElementById('previewHeadline').textContent = headline;
  document.getElementById('previewLocation').textContent = location ? `📍 ${location}` : '';

  // Update sections
  document.getElementById('previewAbout').textContent = profileData.about;
  document.getElementById('previewExperience').textContent = profileData.experience;
  
  // Update skills
  if (skills) {
    const skillsArray = skills.split(',').map(s => s.trim()).filter(s => s);
    document.getElementById('previewSkills').innerHTML = skillsArray
      .map(skill => `<span class="skill-badge">${skill}</span>`)
      .join('');
  }

  // Update education
  document.getElementById('previewEducation').textContent = education || 'No education added';
}

function copySection(section) {
  let text = '';
  if (section === 'about') {
    text = profileData.about;
  } else if (section === 'experience') {
    text = profileData.experience;
  } else if (section === 'skills') {
    text = document.getElementById('skills').value;
  } else if (section === 'education') {
    text = document.getElementById('education').value;
  }

  navigator.clipboard.writeText(text).then(() => {
    showMessage('Copied to clipboard! ✓', 'success');
  }).catch(() => {
    showMessage('Failed to copy', 'error');
  });
}

function copyAllSections() {
  const fullName = document.getElementById('fullName').value;
  const headline = document.getElementById('headline').value;
  const location = document.getElementById('location').value;
  
  const allText = `
NAME: ${fullName}

HEADLINE: ${headline}

LOCATION: ${location}

ABOUT:
${profileData.about}

EXPERIENCE:
${profileData.experience}

SKILLS:
${document.getElementById('skills').value}

EDUCATION:
${document.getElementById('education').value}
  `.trim();

  navigator.clipboard.writeText(allText).then(() => {
    showMessage('All sections copied! ✓', 'success');
  });
}

function resetForm() {
  document.getElementById('inputForm').classList.remove('hidden');
  document.getElementById('linkedinPreview').classList.add('hidden');
  document.getElementById('generateBtn').disabled = false;
  document.getElementById('generateIcon').textContent = '✨';
}

function showMessage(message, type) {
  const statusEl = document.getElementById('statusMessage');
  statusEl.textContent = message;
  statusEl.className = `mt-3 p-3 rounded ${type === 'error' ? 'bg-red-100 text-red-700' : type === 'success' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`;
  statusEl.classList.remove('hidden');
  
  if (type !== 'info') {
    setTimeout(() => statusEl.classList.add('hidden'), 4000);
  }
}
</script>
