// Fallback data for when API is not available
const fallbackProjects = [
  {
    id: 1,
    title: 'को-जनरेशन प्रकल्प',
    year: '२०१०',
    description: 'कारखान्यासाठी सौर ऊर्जेचा वापर करून विजेची बचत',
    budget: '२ करोड',
    category: 'ऊर्जा',
    status: 'पूर्ण',
    icon: 'fa-solar-panel',
  },
  {
    id: 2,
    title: 'जल संधारण प्रकल्प',
    year: '२०२१',
    description: 'पावसाचे पाणी साठवून पाण्याची बचत',
    budget: '१.५ करोड',
    category: 'जल व्यवस्थापन',
    status: 'पूर्ण',
    icon: 'fa-tint',
  },
  {
    id: 3,
    title: 'शेतकरी कल्याण केंद्र',
    year: '२०२३',
    description: 'शेतकऱ्यांसाठी सुविधा केंद्र आणि मार्गदर्शन',
    budget: '७५ लाख',
    category: 'कल्याण',
    status: 'चालू',
    icon: 'fa-users',
  },
  {
    id: 4,
    title: 'डिस्टीलरी',
    year: '२००५',
    description: 'डिस्टीलरी',
    budget: '८० लाख',
    category: 'तंत्रज्ञान',
    status: 'पूर्ण',
    icon: 'fa-users',
  },
];

const fallbackCategories = [
  { name: 'ऊर्जा', color: 'primary' },
  { name: 'जल व्यवस्थापन', color: 'info' },
  { name: 'कल्याण', color: 'success' },
  { name: 'पर्यावरण', color: 'warning' },
  { name: 'तंत्रज्ञान', color: 'danger' },
  { name: 'इतर', color: 'secondary' },
];

const fallbackStatistics = [
  { id: 1, number: '१०+', label: 'पूर्ण प्रकल्प', icon: 'fa-check-circle' },
  { id: 2, number: '५+', label: 'चालू प्रकल्प', icon: 'fa-cog' },
  { id: 3, number: '२५ करोड+', label: 'एकूण गुंतवणूक', icon: 'fa-rupee-sign' },
  { id: 4, number: '५००+', label: 'लाभार्थी शेतकरी', icon: 'fa-users' },
];

const fallbackTimeline = [
  { year: '२०२३', achievement: 'शेतकरी कल्याण केंद्र सुरू' },
  { year: '२०२२', achievement: 'सौर ऊर्जा प्रकल्प पूर्ण' },
  { year: '२०२१', achievement: 'जल संधारण प्रकल्प पूर्ण' },
  { year: '२०२०', achievement: 'डिजिटल इन्फ्रास्ट्रक्चर' },
  { year: '२०१९', achievement: 'पर्यावरण संरक्षण योजना' },
];

export { fallbackProjects, fallbackCategories, fallbackStatistics, fallbackTimeline };
