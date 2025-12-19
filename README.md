#Cvision AI Resume Builder

#Intelligent ATS-Friendly Resume Generation System

#📌 Project Overview

Cvision is an AI-powered resume generation platform that creates customized, ATS-optimized resumes based on user inputs, target job descriptions, and industry context.
It supports multiple templates, job matching analysis, ATS scoring, and smart content suggestions with a continuous feedback loop.

#🧩 Core Features

AI-generated resume content based on user career information

Industry-specific keyword optimization

ATS compatibility scoring and recommendations

Job description matching analysis

Smart content suggestions by job role & industry

Feedback loop that improves AI outputs based on user edits

3+ customizable visual resume templates

Export formats: PDF, DOCX, HTML

Resume version management dashboard

#🛠️ Tech Stack

Frontend: React + Vite

UI Framework: Tailwind CSS

State Management: React Hooks / Context

AI Layer: Base44 AI (LLM-powered resume optimization)

Export Tools:

PDF: html2canvas, jsPDF

DOCX: Structured HTML → DOCX conversion

Storage: Base44 Entities (Resume, Feedback, Templates)

#📂 Project Structure
cvision-ai-resume-builder/
│
├── src/
│   ├── home/
│   │   ├── HomePage.jsx
│   │   └── ResumeScenarioSelector.jsx
│   │
│   ├── resume/
│   │   ├── ResumeBuilderPage.jsx
│   │   ├── ResumePreview.jsx
│   │   ├── EnhancedResumePreview.jsx
│   │   ├── TemplateCustomizer.jsx
│   │   ├── TemplateGallery.jsx
│   │   ├── SmartSuggestions.jsx
│   │   ├── ATSScoreCard.jsx
│   │   ├── JobMatchAnalyzer.jsx
│   │   ├── ExportOptions.jsx
│   │   └── FeedbackCollector.jsx
│   │
│   ├── entities/
│   │   └── Resume.js
│   │
│   ├── layout/
│   │   └── Layout.jsx
│   │
│   └── main.jsx
│
├── public/
├── package.json
├── vite.config.js
└── README.md

#⚙️ Setup Instructions
1️⃣ Prerequisites

Ensure you have the following installed:

Node.js (v18 or later recommended)

npm or yarn

A modern browser (Chrome, Edge, Firefox)

2️⃣ Clone the Repository
git clone https://github.com/your-username/cvision-ai-resume-builder.git
cd cvision-ai-resume-builder

3️⃣ Install Dependencies
npm install


or

yarn install

4️⃣ Environment Configuration

If using environment variables (optional):
Create a .env file in the root directory:

VITE_APP_NAME=Cvision AI Resume Builder


⚠️ Base44 AI configuration is managed internally through the Base44 platform and does not require API keys in this setup.

5️⃣ Run the Application (Development Mode)
npm run dev


The app will be available at:

http://localhost:3000

6️⃣ Build for Production
npm run build


To preview the production build:

npm run preview

#🧪 Testing & Quality Assurance

Recommended testing steps:

Test all resume scenarios:

Entry-level

Experienced professional

Career changer

Academic / Research

Creative / Portfolio

Verify:

ATS score calculation

Job description matching accuracy

Template customization persistence

PDF, DOCX, and HTML exports contain correct data

Test on:

Chrome, Edge, Firefox

Desktop and mobile screen sizes
