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
    url: 'https://www.wix.com/',
    datePublished: '2023-06-15',
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
    url: 'https://todoist.com/',
    datePublished: '2023-05-20',
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
    url: 'https://www.blogger.com/',
    datePublished: '2022-11-10',
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
    datePublished: '2023-03-02',
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
    datePublished: '2022-08-25',
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
    url: 'https://www.grammarly.com/',
    datePublished: '2022-12-12',
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
    url: 'https://glorycloudusa.com/',
    datePublished: '2023-01-30',
  },
  {
    id: 11,
    title: 'Video Editing Software',
    description:
      'A desktop application for editing and enhancing videos with various features.',
    who: 'PhD',
    metadata: {
      tags: ['video editing', 'desktop', 'software'],
      type: 'desktop',
    },
    screenshot: video,
    url: 'https://www.movavi.com/se/',
    datePublished: '2023-04-18',
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
    url: 'https://codelivery.tech/',
    datePublished: '2023-07-21',
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
    url: 'https://www.kyakademien.se/',
    datePublished: '2022-09-05',
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
    url: 'https://www.pilatesanytime.com/',
    datePublished: '2023-08-11',
  },
]

export default data
