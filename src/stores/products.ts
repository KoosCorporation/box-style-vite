import {
    defineStore
} from 'pinia'

export const getProducts = defineStore('products', {
    state: () => {
        return {
            count: 0,
            products: [{
                    title: 'camisa',
                    category: 'Blusa',
                    pito: 10
                },
                {
                    title: 'Top',
                    category: 'Blusa',
                    pito: 9
                },
                {
                    title: 'Jean',
                    category: 'Pants',
                    pito: 0
                },
                {
                    title: 'Short',
                    category: 'Pants'
                },
                {
                    title: 'Necklace',
                    category: 'Joyeria'
                },
                {
                    title: 'Bracelet',
                    category: 'Joyeria'
                },
                {
                    title: 'Elden Ring',
                    category: 'Joyeria'
                },

            ],
            otherProducts: [{
                    "id": 1,
                    "title": "mattis",
                    "category": "Tart Shells - Barquettes, Savory",
                    "gender": "Female",
                    "precio": 83.46
                },
                {
                    "id": 2,
                    "title": "in",
                    "category": "Cheese - Cheddar, Medium",
                    "gender": "Genderqueer",
                    "precio": 50.46
                },
                {
                    "id": 3,
                    "title": "donec ut",
                    "category": "Tandoori Curry Paste",
                    "gender": "Male",
                    "precio": 91.13
                },
                {
                    "id": 4,
                    "title": "eget",
                    "category": "Chocolate Bar - Coffee Crisp",
                    "gender": "Female",
                    "precio": 4.54
                },
                {
                    "id": 5,
                    "title": "pede",
                    "category": "Lid - 10,12,16 Oz",
                    "gender": "Male",
                    "precio": 50.21
                },
                {
                    "id": 6,
                    "title": "tortor duis",
                    "category": "Cocoa Butter",
                    "gender": "Male",
                    "precio": 58.73
                },
                {
                    "id": 7,
                    "title": "lectus in",
                    "category": "Tofu - Soft",
                    "gender": "Female",
                    "precio": 21.66
                },
                {
                    "id": 8,
                    "title": "sapien",
                    "category": "Lamb - Shanks",
                    "gender": "Female",
                    "precio": 42.17
                },
                {
                    "id": 9,
                    "title": "nibh",
                    "category": "Cheese - Brie,danish",
                    "gender": "Female",
                    "precio": 91.16
                },
                {
                    "id": 10,
                    "title": "elit sodales",
                    "category": "Wooden Mop Handle",
                    "gender": "Male",
                    "precio": 31.96
                }
            ]
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        increment() {
            this.count++
        },
    },
})