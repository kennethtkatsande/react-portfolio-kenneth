import project1 from '../assets/projects/project-1.jpg'
import project2 from '../assets/projects/car_on_sale.jpg'
import project3 from '../assets/projects/maize_stack.jpg'
import project4 from '../assets/projects/amazon_book.jpg'

export const HERO_CONTENT = `I’m a versatile professional with a passion for teaching, business, and creativity. I believe that iron can sharpen iron and the sharper we are at executing our tasks, the further our reach extends. Let’s connect and explore how I can help you achieve your goals!.`

export const ABOUT_TEXT = `I am a multi-faceted professional passionate about continuous personal development and sharing knowledge. As a South African Physical Science tutor, I enjoy helping students excel, while my work as an agent in car sales and grain distribution, particularly to Zimbabwe, allows me to connect people with essential products. I also create custom portfolio websites to help individuals showcase their unique talents. My creative journey as a poet has led to two published works, *Have you ever wondered what they do, my boy?* and *Chiselled Thoughts*, available on Amazon. I believe life is a challenge best shared with those who can uplift one another, bringing fulfillment to all involved..`

export const EXPERIENCES = [
  {
    year: '2020 - Present',
    role: 'Tutor in Maths and Physical Science',
    company: 'Metropolitan Group of Schools & Mount Sunset Private School',
    description: `Teaching Pure Mathematics and Physical Science.`,
    technologies: [
      'Mathematics',
      'Physical Science',
      'Statistics',
      'A-Level',
      'Grade 12',
    ],
  },
  {
    year: '2020 - present',
    role: 'Poet',
    company: 'Quill Stroking Frenzy (my brand name for poetry)',
    description: `I write poems for encouragement, current events and for giving another point of view.`,
    technologies: ['Motivation', 'Advice', 'Life Events', 'Publishing'],
  },
  {
    year: 'Dec 2023 - present',
    role: 'Portfolio Website Developer',
    company: 'Freelance',
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. `,
    technologies: ['Python', 'Typescript', 'JavaScript', 'HTML', 'CSS'],
  },
]

export const PROJECTS = [
  {
    title: 'Portfolio Website',
    image: project1,
    description:
      'A fully functional portfolio website featuring modern design paradigms and showcasing projects, skills, and contact information',
    technologies: ['HTML', 'CSS', 'React', 'Node.js'],
  },
  {
    title: 'Selling Quality Cars',
    image: project2,
    description:
      'If you are looking for your first ride or one that saves fuel and always impresses your friends let me be at your service. Be it a bakkie, a hatchback, I got you ...',
    technologies: ['Petrol', 'Diesel', 'Hybrid'],
  },
  {
    title: 'Maize',
    image: project3,
    description:
      'If you are ready to supply maize outside Mzansi, get in touch so that we get you the best deal per tonne for your noble work.',
    technologies: ['Maize'],
  },
  {
    title: 'Poetry',
    image: project4,
    description:
      'For assistance in assignments that involve poetry, written pieces for special events for loved ones, birthdays and so forth, get in touch.',
    technologies: ['Birthday', 'Encouragement', 'Memory', 'Performance'],
  },
]

export const CONTACT = {
  address: 'Plot No 7 Katoen, White River ',
  phoneNo: '+27 73 391 4508 ',
  email: 'kennethtakudzwakatsande@gmail.com',
}
