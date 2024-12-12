const data = [
    {
        title: 'Bhansali',
        type: 'personal project',
        date: '2024',
        images: [
            './img/projects/coffret-bhansali-2024/expo-coffret-3.jpg',
            './img/projects/coffret-bhansali-2024/expo-posters.jpg',
        ],
        content: '. editorial',
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
        content: '. editorial. photo',
        field: 'editorial',
        link: 'luisirophilie.html'
    },
    {
        title: 'FRAT7YL',
        type: 'commissioned',
        date: '2024',
        images: [
            './img/vignettes/frat7yearslater-fev-2024-night-w640.webp',
            './img/vignettes/frat7yearslater-fev-2024-w640.webp',
        ],
        content: '. assets',
        field: 'front',
        link: 'frat7yl.html'
    },
    {
        title: 'Sketch & Play',
        type: 'collaboration',
        date: '2023',
        images: [
            './img/projects/sketch-and-play-2023/sketchplay6.jpg',
            './img/projects/sketch-and-play-2023/sketchplay.jpg',
        ],
        content: '. signage. merch',
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
        content: '. zine',
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
        content: '. animation. print',
        field: 'other',
        link: '/yomama.html'
    },
    // {
    //     title: 'BDE 2024',
    //     type: 'commissioned',
    //     date: '2024',
    //     images: [
    //         './img/vignettes/bde-tape-w640.jpg',
    //         './img/bde posters 2.jpg',
    //     ],
    //     content: '. merch. print',
    //     field: 'other',
    //     link: 'bde.html'
    // },
    {
        title: 'Une si longue lettre',
        type: 'personal project',
        date: '2024',
        images: [
            './img/vignettes/usll-2.jpg',
            './img/vignettes/usll.jpg',
        ],
        content: '. editorial',
        field: 'editorial',
        link: 'unesilonguelettre.html'
    },
    {
        title: 'Le Horla',
        type: 'personal project',
        date: '2024',
        images: [
            './img/vignettes/horla-2.jpg',
            './img/vignettes/horla.jpg',
        ],
        content: '. editorial',
        field: 'editorial',
        link: 'lehorla.html'
    },
    {
        title: 'En Plein Dedans',
        type: 'personal project',
        date: '2024',
        images: [
            './img/vignettes/pleindedans-2.jpg',
            './img/vignettes/pleindedans.jpg',
        ],
        content: '. photo',
        field: 'photography',
        link: 'enpleindedans.html'
    },
    {
        title: 'Ce qui fait Oeuvre',
        type: 'personal project',
        date: '2024',
        images: [
            './img/vignettes/espacemaingestesigne.jpg',
            './img/vignettes/espacemaingestesigne-2.jpg',
        ],
        content: '. photo. editorial',
        field: 'photography',
        link: 'cequifaitoeuvre.html'
    },
    {
        title: 'FEVER DREAM',
        type: 'personal project',
        date: '2024',
        images: [
            './img/vignettes/feverdream.jpg',
            './img/vignettes/feverdream-2.jpg',
        ],
        content: '. photo. editorial',
        field: 'photography',
        link: 'feverdream.html'
    },
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
        title: 'Compo riso',
        type: 'personal project',
        date: '2023',
        images: [
            './img/projects/riso/compo-riso-11.jpg',
            './img/vignettes/riso.jpg',
        ],
        content: '. editorial',
        field: 'editorial',
        link: 'compo-riso.html'
    },
    {
        title: 'Club Zinzin.e',
        type: 'personal project',
        date: '2024',
        images: [
            './img/vignettes/magazine.jpg',
            './img/vignettes/magazine-2.jpg',
        ],
        content: '. editorial',
        field: 'editorial',
        link: 'clubzinzine.html'
    },
    {
        title: 'L‘Atelier de Guilaine',
        type: 'commissioned',
        date: '2024',
        images: [
            './img/vignettes/guilaine-vertueux.jpg',
            './img/vignettes/guilaine-vertueux.jpg',
        ],
        content: '. frontend. print',
        field: 'front',
        link: 'latelierdeguilaine.html'
    },
    {
        title: 'Nel Vespero Migrar',
        type: 'commissioned',
        date: '2024',
        images: [
            './img/vignettes/nvm.jpg',
            './img/vignettes/nvm-2.jpg',
        ],
        content: '. assets',
        field: 'front',
        link: 'nelvesperomigrar.html'
    },
    {
        title: 'Créativ‘ Show',
        type: 'collaboration',
        date: '2024',
        images: [
            './img/vignettes/creativ-2.jpg',
            './img/vignettes/creativ.jpg',
        ],
        content: '. illustration',
        field: 'other',
        link: 'creativ2024.html'
    },
    {
        title: 'Prints',
        type: 'personal project',
        date: '2023-2024',
        images: [
            './img/vignettes/prints.jpg',
            './img/vignettes/prints-2.jpg',
        ],
        content: '. merch. illustration',
        field: 'prints',
        link: 'prints.html'
    },
    {
        title: 'BDE 2024',
        type: 'commissioned',
        date: '2024',
        images: [
            './img/vignettes/colliers.jpg',
            './img/vignettes/bde-tape.jpg',
        ],
        content: '. merch. illustration',
        field: 'other',
        link: 'stickers.html'
    },
    {
        title: 'Un trop de Si',
        type: 'personal project',
        date: '2024',
        images: [
            './img/vignettes/untropdesi-2.jpg',
            './img/vignettes/untropdesi.jpg',
        ],
        content: '. editorial. illustration',
        field: 'editorial',
        link: 'untropdesi.html'
    },
];

export default data;