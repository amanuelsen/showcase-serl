import todolist from '../public/todolist.jpg'
import ecom from '../public/ecom.jpg'
import blog from '../public/blog.jpg'
import game from '../public/game.jpg'
import clone from '../public/clone.png'
import music from '../public/music.png'
import learing from '../public/E-learning.png'
import fit from '../public/fit.png'
import virtual from '../public/virtual.png'
import chatbot from '../public/AI-chatt.png'
import video from '../public/video.png'

const data = [
  {
    id: 1,
    title: 'E-commerce Website',
    description:
      'A user-friendly online store built with React and Redux for a clothing brand.',
    who: 'Student',
    metadata: {
      tags: ['e-commerce', 'react', 'redux'],
      type: 'web',
    },
    screenshot: ecom,
    url: 'https://www.wix.com/ecommerce/website',
  },
  {
    id: 2,
    title: 'To-Do List App',
    description:
      'A simple and efficient to-do list application built with vanilla JavaScript.',
    who: 'Student',
    metadata: {
      tags: ['to-do', 'javascript'],
      type: 'web',
    },
    screenshot: todolist,
    url: 'https://todoist.com/sv',
  },
  {
    id: 3,
    title: 'Blog Platform',
    description:
      'A content management system for creating and publishing blog posts.',
    who: 'Teacher',
    metadata: {
      tags: ['blog', 'cms', 'php'],
      type: 'web',
    },
    screenshot: blog,
    url: 'https://www.blogger.com/about/?bpli=1&pli=1',
  },

  {
    id: 7,
    title: 'Mobile Game',
    description: 'A fun and addictive puzzle game developed with Unity.',
    who: 'Student',
    metadata: {
      tags: ['game', 'unity'],
      type: 'mobile',
    },
    screenshot: game,
    url: 'https://www.drakensang.com/en?aid=8322&msclkid=e19dff4310f817e2653199b5910fa961',
  },
  {
    id: 8,
    title: 'Social Media Platform Clone',
    description:
      'A basic social media platform with user profiles and posts, built with Python and Django.',
    who: 'Student',
    metadata: {
      tags: ['social media', 'python', 'django'],
      type: 'web',
    },
    screenshot: clone,
    url: 'https://oyelabs.com/facebook-clone/',
  },
  {
    id: 9,
    title: 'AI-powered Chatbot',
    description:
      'A chatbot trained on a large dataset to answer user questions.',
    who: 'Teacher',
    metadata: {
      tags: ['ai', 'chatbot'],
      type: 'web',
    },
    screenshot: chatbot,
    url: 'https://www.grammarly.com/a/ai?utm_source=bing&utm_medium=cpc&utm_campaign=627242194&utm_content=81295266133136&utm_term=artificial%20intelligence&keywordid=81295459310517&targetid=kwd-81295459310517:loc-174&adgroup=1300723387508773&device=c&matchtype=p&network=s&extension=&clickid=3ffc51b18b7915f6b30537470e455bca&&msclkid=3ffc51b18b7915f6b30537470e455bca&utm_source=bing&utm_medium=cpc&utm_campaign=2023%20-%20Search%20-%20T2%20-%20AI&utm_term=artificial%20intelligence&utm_content=General%20-%20Artificial%20Intelligence&gclid=3ffc51b18b7915f6b30537470e455bca&gclsrc=3p.ds',
  },
  {
    id: 10,
    title: 'Music Streaming App',
    description:
      'A mobile app for streaming music with a personalized recommendation system.',
    who: 'Student',
    metadata: {
      tags: ['music', 'mobile', 'recommendation'],
      type: 'mobile',
    },
    screenshot: music,
    url: 'https://glorycloud.tv/?msclkid=a712b4ebe17e19a43a8ed21d64e26a39',
  },
  {
    id: 11,
    title: 'Video Editing Software',
    description:
      'A desktop application for editing and enhancing videos with various features.',
    who: 'Phd',
    metadata: {
      tags: ['video editing', 'desktop', 'software'],
      type: 'desktop',
    },
    screenshot: video,
    url: 'https://www.movavi.com/adv/video-editor-plus.html?utm_campaign=484347642&utm_campaignid=484347642&utm_adgroupid=1238051129616668&msclkid=7bbd2bbbbd501641f2c24d4d38b1beb5&utm_source=bing&utm_medium=cpc&utm_term=video%20editing%20software&utm_content=VIDEO%20EDITOR%20software',
  },
  {
    id: 12,
    title: 'Virtual Reality Game',
    description:
      'An immersive VR experience with stunning graphics and engaging gameplay.',
    who: 'Student',
    metadata: {
      tags: ['vr', 'game', 'immersive'],
      type: 'vr',
    },
    screenshot: virtual,
    url: 'https://codelivery.tech/gaming/?msclkid=a1c9d233263e16f43ce6b4c5a04dac4c&utm_source=bing&utm_medium=cpc&utm_campaign=Search_Leadgen_Szwecja&utm_term=virtual%20reality%20gaming&utm_content=Gaming_Search1',
  },
  {
    id: 13,
    title: 'E-learning Platform',
    description:
      'An online platform for students to learn various subjects with interactive courses.',
    who: 'Teacher',
    metadata: {
      tags: ['e-learning', 'online', 'education'],
      type: 'web',
    },
    screenshot: learing,
    url: 'https://www.kyakademien.se/e-learning-platform/',
  },
  {
    id: 14,
    title: 'Fitness Tracking App',
    description:
      'A mobile app to track workouts, calories, and health metrics.',
    who: 'Student',
    metadata: {
      tags: ['fitness', 'health', 'mobile'],
      type: 'mobile',
    },
    screenshot: fit,
    url: 'https://www.pilatesanytime.com/px/App-v3?msclkid=7638ca4f7e4013c8f809acb9f9f18d99&utm_source=bing&utm_medium=cpc&utm_campaign=Pilates%20App%20-%20Other%20Geos&utm_term=best%20pilates%20workout%20app&utm_content=Pilates%20Best',
  },
]

export default data
