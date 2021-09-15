export interface Iperson{ 
    numero: number
    pseudo: string
    picture_profil: string
    message: { 
        id: number
        contenue: string
        date: string
        lus: boolean
        envoyerPar: boolean
    }[]
}

const datas = [
    {
        numero: 2,
        pseudo: "Lionnel Messi",
        picture_profil: "../media/Lionnel Messi.jpg",
        message: [
            {
                id: 1,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true /* 
                    true ==> Le message est envoyer par cette persone
                    false ==> Le message est envoyer par l'utilisateur connecté
                */
            },
            {
                id: 2,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 3,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 4,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 5,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 6,
                contenue: "Lorem ipsum dolor sit amet",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 7,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 8,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 9,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 10,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 11,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 12,
                contenue: "Lorem ipsum dolor sit amet",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 13,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 14,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 15,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true
            },
            {
                id: 16,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: true,
                envoyerPar: true
            },
            {
                id: 18,
                contenue: "Lorem ipsum dolor sit amet",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
        ]
    },
    {
        numero: 3,
        pseudo: "Max Verstappen",
        picture_profil: "../media/Max Verstappen.jpg",
        message: [
            {
                id: 1,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true /* 
                    true ==> Le message est envoyer par cette persone
                    false ==> Le message est envoyer par l'utilisateur connecté
                */
            },
            {
                id: 2,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 3,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 4,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 5,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 6,
                contenue: "Lorem ipsum dolor sit amet",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 7,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 8,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 9,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 10,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 11,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 12,
                contenue: "Lorem ipsum dolor sit amet",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 13,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 14,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 15,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true
            },
            {
                id: 16,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
        ]
    },
    {
        numero: 4,
        pseudo: "Marc Marquez",
        picture_profil: "../media/Marc Marquez.jpg",
        message: [
            {
                id: 1,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true /* 
                    true ==> Le message est envoyer par cette persone
                    false ==> Le message est envoyer par l'utilisateur connecté
                */
            },
            {
                id: 2,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 3,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 4,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 5,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 6,
                contenue: "Lorem ipsum dolor sit amet",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 7,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 8,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 9,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 10,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 11,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 12,
                contenue: "Lorem ipsum dolor sit amet",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 13,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 14,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 15,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true
            },
            {
                id: 16,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
        ]
    },
    {
        numero: 17,
        pseudo: "Sebastian Vettel",
        picture_profil: "../media/Sebastian Vettel.jpg",
        message: [
            {
                id: 1,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true /* 
                    true ==> Le message est envoyer par cette persone
                    false ==> Le message est envoyer par l'utilisateur connecté
                */
            },
            {
                id: 2,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 3,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 4,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 5,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 6,
                contenue: "Lorem ipsum dolor sit amet",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 7,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 8,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 9,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 10,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 11,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 12,
                contenue: "Lorem ipsum dolor sit amet",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 13,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 14,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 15,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true
            },
            {
                id: 16,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:47",
                lus: true,
                envoyerPar: false
            }
        ]
    },
    {
        numero: 5,
        pseudo: "Cristiano Ronaldo",
        picture_profil: "../media/Cristiano Ronaldo.jpg",
        message: [
            {
                id: 1,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true /* 
                    true ==> Le message est envoyer par cette persone
                    false ==> Le message est envoyer par l'utilisateur connecté
                */
            },
            {
                id: 2,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 3,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 4,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 5,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 6,
                contenue: "Lorem ipsum dolor sit amet",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 7,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 8,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 9,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 10,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 11,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 12,
                contenue: "Lorem ipsum dolor sit amet",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 13,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 14,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 15,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true
            },
            {
                id: 16,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
        ]
    },
    {
        numero: 15,
        pseudo: "Gerard Pique",
        picture_profil: "../media/Gerard Pique.jpg",
        message: [
            {
                id: 1,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true /* 
                    true ==> Le message est envoyer par cette persone
                    false ==> Le message est envoyer par l'utilisateur connecté
                */
            },
            {
                id: 2,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 3,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
        ]
    },
    {
        numero: 6,
        pseudo: "Lewis Hamilton",
        picture_profil: "../media/Lewis Hamilton.jpg",
        message: [
            {
                id: 1,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true /* 
                    true ==> Le message est envoyer par cette persone
                    false ==> Le message est envoyer par l'utilisateur connecté
                */
            },
            {
                id: 2,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 3,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
        ]
    },
    {
        numero: 7,
        pseudo: "Sergio Ramos",
        picture_profil: "../media/Sergio Ramos.jpg",
        message: [
            {
                id: 1,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true /* 
                    true ==> Le message est envoyer par cette persone
                    false ==> Le message est envoyer par l'utilisateur connecté
                */
            },
            {
                id: 2,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 3,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
        ]
    },
    {
        numero: 8,
        pseudo: "Valteri Bottas",
        picture_profil: "../media/Valteri Bottas.jpg",
        message: [
            {
                id: 1,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true /* 
                    true ==> Le message est envoyer par cette persone
                    false ==> Le message est envoyer par l'utilisateur connecté
                */
            },
            {
                id: 2,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 3,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
        ]
    },
    {
        numero: 9,
        pseudo: "Neymar Jr",
        picture_profil: "../media/Neymar Jr.jpg",
        message: [
            {
                id: 1,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true /* 
                    true ==> Le message est envoyer par cette persone
                    false ==> Le message est envoyer par l'utilisateur connecté
                */
            },
            {
                id: 2,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 3,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
        ]
    },
    {
        numero: 10,
        pseudo: "Sergio Perez",
        picture_profil: "../media/Sergio Perez.jpg",
        message: [
            {
                id: 1,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true /* 
                    true ==> Le message est envoyer par cette persone
                    false ==> Le message est envoyer par l'utilisateur connecté
                */
            },
            {
                id: 2,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 3,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
        ]
    },
    {
        numero: 11,
        pseudo: "Eden Hazard",
        picture_profil: "../media/Eden Hazard.jpg",
        message: [
            {
                id: 1,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true /* 
                    true ==> Le message est envoyer par cette persone
                    false ==> Le message est envoyer par l'utilisateur connecté
                */
            },
            {
                id: 2,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 3,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
        ]
    },
    {
        numero: 12,
        pseudo: "Lando Norris",
        picture_profil: "../media/Lando Norris.jpg",
        message: [
            {
                id: 1,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true /* 
                    true ==> Le message est envoyer par cette persone
                    false ==> Le message est envoyer par l'utilisateur connecté
                */
            },
            {
                id: 2,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 3,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
        ]
    },
    {
        numero: 13,
        pseudo: "Kylian Mbappé",
        picture_profil: "../media/Kylian Mbappé.jpg",
        message: [
            {
                id: 1,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true /* 
                    true ==> Le message est envoyer par cette persone
                    false ==> Le message est envoyer par l'utilisateur connecté
                */
            },
            {
                id: 2,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 3,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
            {
                id: 17,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                date: "11:45",
                lus: false,
                envoyerPar: true
            },
        ]
    },
    {
        numero: 14,
        pseudo: "Sergio Aguero",
        picture_profil: "../media/Sergio Aguero.jpg",
        message: [
            {
                id: 1,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true /* 
                    true ==> Le message est envoyer par cette persone
                    false ==> Le message est envoyer par l'utilisateur connecté
                */
            },
            {
                id: 2,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 3,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
        ]
    },
    {
        numero: 16,
        pseudo: "Charles Leclerc",
        picture_profil: "../media/Charles Leclerc.jpg",
        message: [
            {
                id: 1,
                contenue: "Lorem ipsum",
                date: "11:45",
                lus: true,
                envoyerPar: true /* 
                    true ==> Le message est envoyer par cette persone
                    false ==> Le message est envoyer par l'utilisateur connecté
                */
            },
            {
                id: 2,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores ",
                date: "11:47",
                lus: true,
                envoyerPar: false
            },
            {
                id: 3,
                contenue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias cupiditate maiores voluptates fugiat quae laborum error eligendi laudantium. Nihil animi maiores quia vel minima? Ipsam vitae deleniti ratione aliquid?",
                date: "11:45",
                lus: true,
                envoyerPar: true 
            },
        ]
    },
];

export default datas;