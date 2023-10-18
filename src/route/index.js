// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

//===============================================================
var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack developer',
  salary:  {
    text: 'Salary:',
    sum: '600 $ в місяць',
  },
  address: 'Ukraine, Kyiv , 02152',
 }

 var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com'
    },

    phone: {
      text: '+380971111678',
      href: 'tel: +380971111678',
    },
    linkedin: {
      text: 'Linkedin',
      href: 'https://www.linkedin.com/in/dmytro-test'
    },
  },
 }

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
    title: 'Ivan Ivanov | Resume',
  },

   header,

   main: {
    summary: {
      title: 'Summary',
      text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
      work on a new project I learn the domain and try to understand the idea of the project. Good team
      player, every colleague is a friend to me.`
    },
    experience: {
      title: 'Other experience',
      text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
        tournament position, goals etc), analyzing by simple mathematics models and preparing probability
        for such events like: money line - first win / draw / second win, totals etc.`
    }
   },

   footer
    
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
    title: 'Ivan Ivanov | Skills',
  },

  header,

  main: {
    skills: [
      {
        name: 'HTML',
        point: 10,
        isTop: true,
      },
      {
        name: 'Handlebars',
        point: 8,
        isTop: true,
      },
      {
        name: 'Git & Terminal',
        point: 6,
        isTop: false,
      },
      {
        name: 'React.js',
        point: 0,
      },
    ],

    hobbies: [
      { name:'Dancing', isMaine: true },
       { name: 'Tennis', isMaine: true },
       { name:'reading' , isMain: false },
     ],

  },

   footer,

    })
  })


// ==============================================================================
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
    title: 'Ivan Ivanov | Work',
  },

  header,

    main:{
      work: [
        {
          position: 'Junior Fullstack Developer',
          company: {
          name: 'it-brains',
          url: 'htttp//it-brains.com.ua',
          },

        duration: {
          from: '10.10.2023',
          to: '22.03.2023'
        },
        }, 
        
        {
          position: 'Junior Fullstack Developer',
          company: { 
            name: 'CanShecode',
          url:'https//canshecode.com.ua',
          },

        duration: {
          from: '10.10.2023',
          to: null,
        },

        projectAmount: 3,

        projects: [
          {
            name: 'Resume',
            url: 'http//resume.com.ua',
            about: 'інформація про проект',
            stacks: [
              {
                name: 'React.js',
              },
              {
                name: 'HTML/CSS',
              },
              {
                name: 'Node.js',
              },
            ],
            awards: [
              {
                name: 'Background verification...',
              },
              {
                name: 'Preparing SEO...',
              },
            ],
            stackAmount: 2,
            awardAmount: 2,
          },
        ],
      },
       ] ,
},

   footer,

    })
})


//================================================================================================

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
    title: 'Ivan Ivanov | Education',
  },

  header,

    main:{
      education: [
       { name:'Kyiv Polytechnic University', isEnd: true },
        { name: 'Computer Academy', isEnd: true },
        { name:'CanSheCode Shool' , isEnd: false },
      ],

      certificates: [
        { name:'CanShecode HTML', id: 111111 },
        { name: 'CnaShecode JS', id: 22222 },
        { name:'IT-Brains React' , id: 33333 },
      ],   
},

   footer,

    })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',

    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science+',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
