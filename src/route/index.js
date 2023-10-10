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
  },

   footer,

    })
  })


// ==============================================================================
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
    title: 'Ivan Ivanov | Education',
  },

  header,


      education: [
        'Kyiv Polytechnic University',
        'Computer Academy',
        'CanSheCode Shool',
      ],

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

   footer,
    
  )
})

// Підключаємо роутер до бек-енду
module.exports = router
