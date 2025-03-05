const data = [
    {
        title: 'Bhansali',
        type: 'personal project',
        date: '2024',
        images: [
            './img/projects/coffret-bhansali-2024/expo-coffret-3.jpg',
            './img/vignettes/devdas-ramleela-books.jpg',
        ],
        content: '.editorial .artistic direction',
        field: 'editorial',
        link: 'bhansali.html'
    },
    {
        title: 'Luisirophilie',
        type: 'personal project',
        date: '2022',
        images: [
            './img/projects/collection/luisirophile-book-2.jpg',
            './img/projects/collection/luisirophile-doc.jpg',
        ],
        content: '.photography .editorial ',
        field: 'photography',
        link: 'luisirophilie.html'
    },
    // {
    //     title: 'FRAT7YL',
    //     type: 'commissioned',
    //     date: '2024',
    //     images: [
    //         './img/vignettes/frat7yl-w640.jpg',
    //         './img/vignettes/frat-icon-navbar.jpg',
    //     ],
    //     content: '.ui .artistic direction',
    //     field: 'front',
    //     link: 'frat7yl.html'
    // },
    {
        title: 'Sketch & Play',
        type: 'collaboration',
        date: '2023',
        images: [
            './img/projects/sketch-and-play-2023/sketchplay6.jpg',
            './img/projects/sketch-and-play-2023/sketchplay.jpg',
        ],
        content: '.signage .merch .illustration',
        field: 'other',
        link: 'sketchandplay.html'
    },
    {
        title: 'Party Goers',
        type: 'personal project',
        date: '2023',
        images: [
            './img/projects/party-goers/party-goers-both.jpg',
            './img/vignettes/party-goers-both-3.jpg',
        ],
        content: '.editorial .prints',
        field: 'prints',
        link: 'party-goers.html'
    },
    {
        title: 'Yo Mama',
        type: 'personal project',
        date: '2024',
        images: [
            './img/vignettes/yo-mama-riso.jpg',
            './img/projects/yo-mama-2024/yo-mama-star.png',
        ],
        content: '.animation .illustration .prints',
        field: 'other',
        link: 'yomama.html'
    },
    // {
    //     title: 'Une si longue lettre',
    //     type: 'personal project',
    //     date: '2024',
    //     images: [
    //         './img/vignettes/usll-2.jpg',
    //         './img/vignettes/usll.jpg',
    //     ],
    //     content: '. editorial',
    //     field: 'editorial',
    //     link: 'unesilonguelettre.html'
    // },
    // {
    //     title: 'Le Horla',
    //     type: 'personal project',
    //     date: '2024',
    //     images: [
    //         './img/vignettes/le-horla-back.jpg',
    //         './img/vignettes/horla.jpg',
    //     ],
    //     content: '. editorial',
    //     field: 'editorial',
    //     link: 'lehorla.html'
    // },
    // {
    //     title: 'En Plein Dedans',
    //     type: 'personal project',
    //     date: '2024',
    //     images: [
    //         './img/vignettes/pleindedans-2.jpg',
    //         './img/vignettes/pleindedans.jpg',
    //     ],
    //     content: '. photo',
    //     field: 'photography',
    //     link: 'enpleindedans.html'
    // },
    // {
    //     title: 'Ce qui fait Oeuvre',
    //     type: 'personal project',
    //     date: '2024',
    //     images: [
    //         './img/vignettes/espacemaingestesigne.jpg',
    //         './img/vignettes/espacemaingestesigne-2.jpg',
    //     ],
    //     content: '. photo. editorial',
    //     field: 'photography',
    //     link: 'cequifaitoeuvre.html'
    // },
    // {
    //     title: 'FEVER DREAM',
    //     type: 'personal project',
    //     date: '2024',
    //     images: [
    //         './img/vignettes/feverdream.jpg',
    //         './img/vignettes/feverdream-2.jpg',
    //     ],
    //     content: '. photo. editorial',
    //     field: 'photography',
    //     link: 'feverdream.html'
    // },
    // {
    //     title: 'La Sieste',
    //     type: 'collaboration',
    //     date: '2024',
    //     images: [
    //         './img/vignettes/sieste-2.jpg',
    //         './img/vignettes/sieste.jpg',
    //     ],
    //     content: '. editorial',
    //     field: 'editorial',
    //     link: 'lasieste.html'
    // },
    {
        title: 'Prose and Poetry',
        type: 'personal project',
        date: '2023',
        images: [
            './img/projects/proseandpoetry-2023/compo-riso-11.jpg',
            './img/vignettes/riso.jpg',
        ],
        content: '.editorial .lettering',
        field: 'editorial',
        link: 'proseandpoetry.html'
    },
    {
        title: 'Club Zinzin.e',
        type: 'personal project',
        date: '2024',
        images: [
            './img/vignettes/magazine.jpg',
            './img/vignettes/magazine-2.jpg',
        ],
        content: '.editorial .artistic direction',
        field: 'editorial',
        link: 'clubzinzine.html'
    },
    {
        title: 'L‘Atelier de Guilaine',
        type: 'commissioned',
        date: '2024',
        images: [
            './img/vignettes/guilaine-phone-2.jpg',
            './img/vignettes/atelier-de-guilaine.jpg',
        ],
        content: '.frontend .branding .editorial',
        field: 'front',
        link: 'atelierdeguilaine.html'
    },
    // {
    //     title: 'Nel Vespero Migrar',
    //     type: 'commissioned',
    //     date: '2024',
    //     images: [
    //         './img/vignettes/nvm.jpg',
    //         './img/vignettes/nvm-2.jpg',
    //     ],
    //     content: '. assets',
    //     field: 'front',
    //     link: 'nelvesperomigrar.html'
    // },
    // {
    //     title: 'Créativ‘ Show',
    //     type: 'collaboration',
    //     date: '2024',
    //     images: [
    //         './img/vignettes/creativ-2.jpg',
    //         './img/vignettes/creativ.jpg',
    //     ],
    //     content: '. illustration',
    //     field: 'other',
    //     link: 'creativ2024.html'
    // },
    // {
    //     title: 'Prints',
    //     type: 'personal project',
    //     date: '2023-2024',
    //     images: [
    //         './img/vignettes/prints.jpg',
    //         './img/vignettes/prints-2.jpg',
    //     ],
    //     content: '.merch .illustration',
    //     field: 'prints',
    //     link: 'prints.html'
    // },
    // {
    //     title: 'BDE 2024',
    //     type: 'commissioned',
    //     date: '2024',
    //     images: [
    //         './img/vignettes/colliers.jpg',
    //         './img/vignettes/bde-tape.jpg',
    //     ],
    //     content: '.merch .branding .illustration',
    //     field: 'other',
    //     link: 'bde-2024.html'
    // },
    {
        title: 'Un trop de Si',
        type: 'personal project',
        date: '2024',
        images: [
            './img/vignettes/untropdesi-2.jpg',
            './img/vignettes/untropdesi.jpg',
        ],
        content: '.editorial .illustration .branding',
        field: 'editorial',
        link: 'untropdesi.html'
    },
    {
        title: 'R&AElig;NT',
        type: 'personal project',
        date: '2025',
        images: [
            './img/vignettes/raent-brochure-rv-w640.jpg',
            './img/vignettes/40x60_01-w640.jpg',
        ],
        content: '.branding .editorial .lettering',
        field: 'other',
        link: 'raent.html'
    },
];

export default data;