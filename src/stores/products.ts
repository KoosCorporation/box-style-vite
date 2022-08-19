import {
    defineStore
} from 'pinia'

export const getProducts = defineStore('products', {
    state: () => {
        return {
            count: 0,
            products: [{
                "id": 1,
                "title": "Joseph",
                "category": "Nissan",
                "precio": 5.05,
                "imageRoute": "../assets/img/products/product-1.png",
                "new": false
              }, {
                "id": 2,
                "title": "Tiffani",
                "category": "Acura",
                "precio": 6.15,
                "imageRoute": "http://dummyimage.com/134x100.png/cc0000/ffffff",
                "new": false
              }, {
                "id": 3,
                "title": "Denna",
                "category": "Hyundai",
                "precio": 4.47,
                "imageRoute": "http://dummyimage.com/113x100.png/5fa2dd/ffffff",
                "new": false
              }, {
                "id": 4,
                "title": "Corny",
                "category": "Mercedes-Benz",
                "precio": 3.52,
                "imageRoute": "http://dummyimage.com/172x100.png/dddddd/000000",
                "new": false
              }, {
                "id": 5,
                "title": "Mick",
                "category": "Ford",
                "precio": 4.75,
                "imageRoute": "@src/assets/img/products/product-1.png",
                "new": true
              }, {
                "id": 6,
                "title": "Erda",
                "category": "Kia",
                "precio": 5.83,
                "imageRoute": "http://dummyimage.com/132x100.png/5fa2dd/ffffff",
                "new": true
              }, {
                "id": 7,
                "title": "Chaddy",
                "category": "Chrysler",
                "precio": 6.64,
                "imageRoute": "http://dummyimage.com/240x100.png/5fa2dd/ffffff",
                "new": false
              }, {
                "id": 8,
                "title": "Rickey",
                "category": "Jaguar",
                "precio": 2.51,
                "imageRoute": "http://dummyimage.com/247x100.png/cc0000/ffffff",
                "new": false
              }, {
                "id": 9,
                "title": "Faythe",
                "category": "Pontiac",
                "precio": 2.72,
                "imageRoute": "http://dummyimage.com/235x100.png/5fa2dd/ffffff",
                "new": true
              }, {
                "id": 10,
                "title": "West",
                "category": "Dodge",
                "precio": 2.99,
                "imageRoute": "http://dummyimage.com/152x100.png/5fa2dd/ffffff",
                "new": true
              }, {
                "id": 11,
                "title": "Cammy",
                "category": "BMW",
                "precio": 9.18,
                "imageRoute": "http://dummyimage.com/211x100.png/dddddd/000000",
                "new": false
              }, {
                "id": 12,
                "title": "Daryle",
                "category": "Pontiac",
                "precio": 1.62,
                "imageRoute": "http://dummyimage.com/116x100.png/5fa2dd/ffffff",
                "new": true
              }, {
                "id": 13,
                "title": "Florette",
                "category": "GMC",
                "precio": 8.02,
                "imageRoute": "http://dummyimage.com/154x100.png/5fa2dd/ffffff",
                "new": false
              }, {
                "id": 14,
                "title": "Virgil",
                "category": "Plymouth",
                "precio": 7.18,
                "imageRoute": "http://dummyimage.com/204x100.png/ff4444/ffffff",
                "new": false
              }, {
                "id": 15,
                "title": "Cynthea",
                "category": "Aston Martin",
                "precio": 7.11,
                "imageRoute": "http://dummyimage.com/196x100.png/ff4444/ffffff",
                "new": false
              }, {
                "id": 16,
                "title": "Michal",
                "category": "Volkswagen",
                "precio": 5.65,
                "imageRoute": "http://dummyimage.com/173x100.png/cc0000/ffffff",
                "new": true
              }, {
                "id": 17,
                "title": "Katerina",
                "category": "GMC",
                "precio": 9.74,
                "imageRoute": "http://dummyimage.com/176x100.png/5fa2dd/ffffff",
                "new": false
              }, {
                "id": 18,
                "title": "Dennet",
                "category": "Kia",
                "precio": 3.71,
                "imageRoute": "http://dummyimage.com/250x100.png/5fa2dd/ffffff",
                "new": true
              }, {
                "id": 19,
                "title": "Prudy",
                "category": "Honda",
                "precio": 7.03,
                "imageRoute": "http://dummyimage.com/111x100.png/cc0000/ffffff",
                "new": true
              }, {
                "id": 20,
                "title": "Revkah",
                "category": "Mazda",
                "precio": 9.26,
                "imageRoute": "http://dummyimage.com/228x100.png/dddddd/000000",
                "new": false
              }],
            categoriesRoute: [{
                    categoriesOf: 'Mujer',
                    categoryValues: ['Suzuki', 'Buick', 'Toyota', 'Bentley'],
                },
                {
                    categoriesOf: 'Hombre',
                    categoryValues: ['Subaru', 'Buick', 'Mazda', 'Ford', 'Lambo']
                },
                {
                    categoriesOf: 'Accesorios',
                    categoryValues: ['Nissan', 'Hyundai', 'Mazda', 'Kia', 'GMC']
                },
                {
                    categoriesOf: 'Calzado',
                    categoryValues: ['Subaru', 'Buick', 'Mazda', 'Ford', 'GMC']
                },
                {
                    categoriesOf: 'Thrift_Flip',
                    categoryValues: ['Volkswagen', 'Kia', 'Mazda', 'Aston Martin', 'Plymouth', 'Pito', 'Pito Meteorico']
                },
            ],
            productsFiltered:[]
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        increment() {
            this.count++
        },
        filterProducts(filtro: string) {
            const filtered = this.products.filter((elemento: any) => {
                return elemento.category === filtro
            })
            return filtered
        },
        getCategoryRoute(category: string | string[]) {
            const categoryGeted = this.categoriesRoute.filter((element: any) => {
                return element.categoriesOf === category
            })
            return categoryGeted[0]
        },
        getProducById(id: number){
            const filtered = this.products.filter((elemento: any) => {
                return elemento.id === id
            })
            return filtered[0]
        },
        getNewProducts(){
            const filtered = this.products.filter((elemento: any) => {
                return elemento.new === true
            })
            return filtered
        }
    },
})