// Fallback data for when API is not available
const fallbackManagementData = [
  {
    id: 1,
    name: 'श्री. अभिजित (आबा ) पाटील',
    position: 'चेअरमन',
    description: 'कारखान्याचे मार्गदर्शक आणि प्रेरणास्रोत',
    experience: '२० वर्षे',
    icon: 'fa-crown',
    image: '/assets/images/aaba.jpg',
  },
  {
    id: 2,
    name: ' सौ. प्रेमलता बब्रुवान रोंगे ',
    position: ' व्हाईस चेअरमन ',
    description: 'शेतकरी हितसंबंध आणि विकास ',
    experience: '12 वर्षे ',
    icon: 'fa-crown',
    image: '/assets/images/vice-chairman.jpeg',
  },
  // {
  //   id: 2,
  //   name: 'श्री. राजेंद्र पाटील',
  //   position: 'उपाध्यक्ष',
  //   description: 'शेतकरी हितसंबंध आणि विकास',
  //   experience: '१५ वर्षे',
  //   icon: 'fa-user-tie',
  //   image: 'https://shrivighnaharssk.com/wp-content/uploads/2021/06/8-1-1024x549.jpg'
  // },
  // {
  //   id: 3,
  //   name: 'श्री. संजय देशमुख',
  //   position: 'सचिव',
  //   description: 'प्रशासकीय व्यवस्थापन',
  //   experience: '१२ वर्षे',
  //   icon: 'fa-clipboard-user',
  //   image: 'https://shrivighnaharssk.com/wp-content/uploads/2021/06/8-1-1024x549.jpg'
  // },
  // {
  //   id: 4,
  //   name: 'श्री. विकास शिंदे',
  //   position: 'खजिनदार',
  //   description: 'आर्थिक व्यवस्थापन',
  //   experience: '१० वर्षे',
  //   icon: 'fa-coins',
  //   image: 'https://shrivighnaharssk.com/wp-content/uploads/2021/06/8-1-1024x549.jpg'
  // },
  // {
  //   id: 5,
  //   name: 'श्री. अनिल जाधव',
  //   position: 'संचालक',
  //   description: 'तांत्रिक व्यवस्थापन',
  //   experience: '८ वर्षे',
  //   icon: 'fa-cogs',
  //   image: 'https://shrivighnaharssk.com/wp-content/uploads/2021/06/8-1-1024x549.jpg'
  // },

  {
    id: 3,
    name: 'श्री बी आर पाटील  ',
    position: 'संचालक',
    description: 'तांत्रिक व्यवस्थापन',
    experience: '६ वर्षे',
    icon: 'fa-coins',
    image: '/assets/images/man-icon.jpg',
  },
  {
    id: 4,
    name: 'श्री दत्तात्रय रावण गायकवाड ',
    position: ' प्र. कार्यकारी संचालक',
    description: 'तांत्रिक व्यवस्थापन',
    experience: '६ वर्षे',
    icon: 'fa-cogs',
    image: '/assets/images/man-icon.jpg',
  },
];

const fallbackDepartments = [
  {
    id: 1,
    name: 'श्री संभाजी ज्ञानोबा जाधव',
    position: ' संचालक',
    //description: 'तांत्रिक व्यवस्थापन', comments and rmove fro next part. also comments in managements.jsx
    // experience: '६ वर्षे',
    // icon: 'fa-coins',
    image: '/assets/images/man-icon.jpg',
  },
  {
    id: 2,
    name: 'श्री. कालिदास रघुनाथ पाटील',
    position: 'संचालक ',
    image: '/assets/images/man-icon.jpg',
  },
  {
    id: 3,
    name: 'श्री. दिनकर आदिनाथ चव्हाण',
    position: 'संचालक ',
    image: '/assets/images/man-icon.jpg',
  },
  {
    id: 4,
    name: 'श्री. सुरेश बाबा भुसे',
    position: 'संचालक ',
    image: '/assets/images/man-icon.jpg',
  },
  {
    id: 5,
    name: 'श्री. बाळासाहेब चिंतामणी हाके',
    position: 'संचालक ',
    image: '/assets/images/man-icon.jpg',
  },
  {
    id: 6,
    name: 'श्री. धनंजय उत्तम काळे',
    position: 'संचालक ',
    image: '/assets/images/man-icon.jpg',
  },
  {
    id: 7,
    name: 'श्री. साहेबराव श्रीमंत नागणे',
    position: 'संचालक ',
    image: '/assets/images/man-icon.jpg',
  },
  {
    id: 8,
    name: 'श्री. समाधान वसंतराव काळे',
    position: 'संचालक ',
    image: '/assets/images/man-icon.jpg',
  },
  {
    id: 9,
    name: 'श्री. कालिदास शंकर साळुंखे',
    position: 'संचालक ',
    image: '/assets/images/man-icon.jpg',
  },
  {
    id: 10,
    name: 'श्री. सचिन सोपान वाघाटे',
    position: 'संचालक ',
    image: '/assets/images/man-icon.jpg',
  },
  {
    id: 11,
    name: 'श्री. जनक माणिक भोसले',
    position: 'संचालक ',
    image: '/assets/images/man-icon.jpg',
  },
  {
    id: 12,
    name: 'श्री. प्रविण विक्रम कोळेकर',
    position: 'संचालक ',
    image: '/assets/images/man-icon.jpg',
  },
  {
    id: 13,
    name: 'श्री. नवनाथ अंकुश नाईकनवरे ',
    position: 'संचालक ',
    image: '/assets/images/man-icon.jpg',
  },
  {
    id: 14,
    name: 'श्री. दत्तात्रय विश्वनाथ नरसाळे',
    position: 'संचालक ',
    image: '/assets/images/man-icon.jpg',
  },
  {
    id: 15,
    name: 'श्री. सिताराम तयाप्पा गवळी',
    position: 'संचालक ',
    image: '/assets/images/man-icon.jpg',
  },
  {
    id: 16,
    name: 'श्री. अशोक ज्ञानोबा जाधव',
    position: 'संचालक ',
    image: '/assets/images/man-icon.jpg',
  },
  {
    id: 17,
    name: 'श्री. सिद्धेश्वेर शंकर बंडगर',
    position: 'संचालक ',
    image: '/assets/images/man-icon.jpg',
  },
  {
    id: 18,
    name: 'श्रीमती. कलावती महादेव खटके',
    position: 'संचालिका ',
    image: '/assets/images/man-icon.jpg',
  },
  {
    id: 19,
    name: 'श्रीमती. सविता विठ्ठल रणदिवे',
    position: 'संचालिका ',
    image: '/assets/images/man-icon.jpg',
  },
  {
    id: 20,
    name: 'श्री. दशरात दत्तु जाधव',
    position: 'तज्ञ-संचालक ',
    image: '/assets/images/man-icon.jpg',
  },
  {
    id: 21,
    name: 'श्री. अशोक दिगंबर तोंडले',
    position: 'तज्ञ-संचालक ',
    image: '/assets/images/man-icon.jpg',
  },
  {
    id: 22,
    name: 'श्री. दत्तात्रय विश्वनाथ नरसातुकाराम नारायण मस्के',
    position: 'संचालक ',
    image: '/assets/images/man-icon.jpg',
  },
];

export { fallbackManagementData, fallbackDepartments };
