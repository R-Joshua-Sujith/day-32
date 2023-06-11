const movies = [
    {
        id: 101,
        src: "https://media.movieassets.com/static/images/items/movies/posters/410db45093c02465213de10c1fe67290.jpg",
        name: "To kill a Mocking bird by Harper Lee",
        desc: "This classic novel explores themes of racial injustice and moral growth through the eyes of Scout Finch, a young girl in the 1930s American South.",
        rating: "4",
        category: "Fiction",
        link: "https://www.youtube.com/embed/XODFEs8Gspk",
    }, {
        id: 102,
        src: "http://www.bookerworm.com/images/1984.jpg",
        name: "1984 by George Orwell",
        desc: " Set in a dystopian future, this novel depicts a totalitarian society where individualism is suppressed and government surveillance is omnipresent.",
        rating: "4.5",
        category: "Fiction",
        link: "https://www.youtube.com/embed/2QLy4_2spkk",
    },
    {
        id: 103,
        src: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781471134746/pride-and-prejudice-9781471134746_hr.jpg",
        name: "Pride and Prejudice by Jane Austen",
        desc: "This beloved novel follows the romantic journey of Elizabeth Bennet as she navigates societal expectations, love, and the challenges of class in 19th-century England.",
        rating: "4.1",
        category: "Fiction",
        link: "https://www.youtube.com/embed/eVHu5-n69qQ",
    },
    {
        id: 104,
        src: "https://i.pinimg.com/originals/83/9c/fa/839cfa60faa10999f6d1b73251da5dc4.jpg",
        name: "The Great Gatsby",
        desc: " Set in the 1920s, this novel explores themes of wealth, love, and the American Dream through the eyes of the mysterious Jay Gatsby.",
        rating: "4.8",
        category: "Fiction",
        link: "https://www.youtube.com/embed/ZjHl5TyWMsQ"
    },
    {
        id: 105,
        src: "https://i.thenile.io/r1000/9780780797086.jpg?r=5e9a5f24471f7",
        name: "Harry Potter and the Sorcerer's Stone by J.K. Rowling",
        desc: "The first book in the Harry Potter series introduces readers to the magical world of Hogwarts School of Witchcraft and Wizardry as Harry Potter discovers his true identity.",
        rating: "3.9",
        category: "Fiction",
        link: "https://www.youtube.com/embed/3DC-0fNlSVk"
    },
    {
        id: 106,
        src: "https://cdn2.penguin.com.au/covers/original/9780241988794.jpg",
        name: "The Catcher in the Rye by JD Salinger",
        desc: "This coming-of-age novel follows the rebellious teenager Holden Caulfield as he navigates adolescence, identity, and the challenges of the adult world.",
        rating: "4.1",
        category: "Fiction",
        link: "https://www.youtube.com/embed/O4_xjVgV0N0"
    },
    {
        id: 107,
        src: "http://3.bp.blogspot.com/-HxVxhy2RH-0/VANY1W2HZRI/AAAAAAAAEig/vi6vPNg85ns/s1600/TheHungerGames.jpg",
        name: "The Hunger Games by Suzanne Collins",
        desc: "Set in a dystopian future, this gripping novel follows Katniss Everdeen as she becomes a symbol of rebellion against a tyrannical government through a brutal televised competition.",
        rating: "4.2",
        category: "Fiction",
        link: "https://www.youtube.com/embed/GCBMn2joCo0"
    },

    {
        id: 108,
        src: "https://i0.wp.com/bookzone.boyslife.org/files/2011/03/lordrings.gif?fit=600%2C918&ssl=1",
        name: "The Lord of the Rings by J.R.R. Tolkien",
        desc: "This epic fantasy trilogy follows Frodo Baggins and his companions as they embark on a perilous journey to destroy the One Ring and save Middle-earth from the dark lord Sauron.",
        rating: "4.5",
        category: "Fiction",
        link: "https://www.youtube.com/embed/xvHvCIqSN8E"
    },
    {
        id: 109,
        src: "https://i1.wp.com/knowdemia.com/wp-content/uploads/2020/06/becoming-53.jpg?resize=1011%2C1536&ssl=1",
        name: "Becoming by Michelle Obama",
        desc: " In her memoir, former First Lady Michelle Obama shares her personal journey, from her upbringing on the South Side of Chicago to her time in the White House.",
        category: "Non-fiction",
        rating: "4.8",
        link: "https://www.youtube.com/embed/5QfxxIvG2oA"
    },
    {
        id: 110,
        src: "https://cdn2.penguin.com.au/covers/original/9780099511021.jpg",
        name: "Educated by Tara Westover",
        desc: "This memoir recounts the author's upbringing in a strict and abusive household in rural Idaho, and her journey to escape and pursue an education.",
        category: "Non-fiction",
        rating: "5",
        link: "https://www.youtube.com/embed/T6NKkHVD2wI"
    }, {
        id: 111,
        src: "https://i.pinimg.com/originals/1c/2d/77/1c2d77e86a125f7fc289a63bded13743.jpg",
        name: "The Immortal Life of Henrietta Lacks by Rebecca Skloot",
        desc: " This book tells the true story of Henrietta Lacks, an African American woman whose cells were used without her consent to make significant medical discoveries.",
        category: "Non-fiction",
        rating: "4",
        link: "https://www.youtube.com/embed/GRjLK-zSQuE"
    },

    {
        id: 112,
        src: "https://pdflake.com/wp-content/uploads/2021/05/The-Power-Of-Now-PDF-Book-In-English-By-Eckhart-Tolle.jpg",
        name: "The Power of Now",
        desc: "This spiritual guide explores the concept of living in the present moment and finding inner peace and happiness.",
        category: "Non-fiction",
        rating: "3.9",
        link: "https://www.youtube.com/embed/P2r9oTMx-_E"
    },
    {
        id: 113,
        src: "https://cdn2.penguin.com.au/covers/original/9780141033570.jpg",
        name: "Thinking,Fast and Slow",
        desc: "This book delves into the workings of the human mind and explores the two systems of thinking: the fast, intuitive system and the slow, deliberate system.",
        category: "Non-fiction",
        rating: "4.1",
        link: "https://www.youtube.com/embed/d953fegpMFE"
    },
    {
        id: 114,
        src: "https://i.thenile.io/r1000/9789387669208.jpg?r=5dc5950dbcb0c",
        name: "The Diary of a young girl",
        desc: "This diary, written by Anne Frank while in hiding during the Holocaust, provides a poignant and personal account of the time. ",
        category: "Non-fiction",
        rating: "4.2",
        link: "https://www.youtube.com/embed/1yraQN81lU8"
    },
    {
        id: 115,
        src: "https://tse3.mm.bing.net/th?id=OIP.HD8G34DmW_KGqFHTGcCfnQHaLc&pid=Api&P=0&h=180",
        name: "The Man who Knew Infinity",
        desc: "A Life of the Genius Ramanujan by Robert Kanigel: This biography tells the story of Indian mathematician Srinivasa Ramanujan, his brilliance, and his contributions to mathematics.",
        category: "Non-fiction",
        rating: "4.5",
        link: "https://www.youtube.com/embed/npcmIC-I7Ec"
    },

    {
        id: 116,
        src: "http://www.morethanareview.com/wp-content/uploads/2014/04/Int-the-wild.jpg",
        name: "Into the Wild",
        desc: "This true story follows the journey of Christopher McCandless, a young man who gave up his possessions and embarked on a solitary adventure in the Alaskan wilderness.",
        category: "Non-fiction",
        rating: "4.6",
        link: "https://www.youtube.com/embed/lRM3WBBJoxw"
    },




]

export default movies;