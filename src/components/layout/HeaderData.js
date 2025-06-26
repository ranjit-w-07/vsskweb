// Use fallback data if API fails
const contactInfo = {
  // R small header data changed
  phone: ' ७५५८२४२२१६',
  email: 'shrivitthalsugar@gmail.com / shrivitthalsugar@yahoo.com',
};

const siteData = {
  title: 'श्री विठ्ठल सहकारी साखर कारखाना लि., वेणुनगर / गुरसाळे',
  logoUrl: '/assets/images/fev.jpg', // header imagge
  // logoUrl: 'https://Logo.png',
  mobileLogoUrl: '/assets/images/fev.jpg',
};

const navigationData = [
  { _id: '1', title: 'मुख्य  पृष्ठ ', path: '/', isActive: true },
  { _id: '2', title: 'वाटचाल', path: '/about', isActive: true },
  { _id: '3', title: 'प्रकल्प', path: '/projects', isActive: true },
  { _id: '4', title: 'पारितोषिके', path: '/awards', isActive: true },
  { _id: '5', title: 'संचालक मंडळ', path: '/management', isActive: true },
  // { _id: '6', title: 'E-Auction', path: '/e-auction', isActive: true },
  { _id: '7', title: 'संपर्क', path: '/contact', isActive: true },
  { _id: '8', title: 'रिपोर्ट', path: '/reports', isActive: true },
  { _id: '9', title: 'बातम्या', path: '/news', isActive: true },
];
export { contactInfo, siteData, navigationData };
