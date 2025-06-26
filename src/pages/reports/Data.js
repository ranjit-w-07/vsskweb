// src/Data.js

// ✅ Fallback data (with updated download paths)
const fallbackReports = [
  {
    id: 1,
    title: 'वार्षिक अहवाल २०२२-२३',
    description: 'कारखान्याचा संपूर्ण वार्षिक अहवाल',
    category: 'वार्षिक अहवाल',
    downloadUrl: '/assets/pdf/voice.pdf',
    icon: 'fa-file-pdf',
  },
  {
    id: 2,
    title: 'आर्थिक अहवाल २०२२-२३',
    description: 'कारखान्याचा आर्थिक अहवाल',
    category: 'आर्थिक अहवाल',
    downloadUrl: '/assets/pdf/dummy.pdf',
    icon: 'fa-chart-line',
  },
  {
    id: 3,
    title: 'उत्पादन अहवाल २०२२-२३',
    description: 'कारखान्याचा संपूर्ण उत्पादन अहवाल',
    category: 'उत्पादन अहवाल',
    downloadUrl: '/assets/pdf/voice.pdf',
    icon: 'fa-file-pdf',
  },
  {
    id: 4,
    title: 'वार्षिक अहवाल २०२२-२३',
    description: 'कारखान्याचा संपूर्ण वार्षिक अहवाल',
    category: 'वार्षिक अहवाल',
    downloadUrl: '/assets/pdf/year-2025-26.pdf',
    icon: 'fa-file-pdf',
  },
];

const categories = [
  { name: 'वार्षिक अहवाल', icon: 'fa-calendar-alt', color: 'primary' },
  { name: 'आर्थिक अहवाल', icon: 'fa-chart-bar', color: 'success' },
  { name: 'उत्पादन अहवाल', icon: 'fa-industry', color: 'warning' },
  { name: 'कल्याण अहवाल', icon: 'fa-heart', color: 'info' },
];

export { fallbackReports, categories };
