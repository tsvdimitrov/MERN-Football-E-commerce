import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Tsvetomir',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
    ],
    products: [
        {
            _id: '1',
            name: 'Manchester United men home shirt 2021/2022',
            slug: 'adidas-slim-shirt',
            category: "Shirts",
            image: 'https://images.footballfanatics.com/manchester-united/manchester-united-home-shirt-2021-22_ss4_p-12052601+u-at664r59yn8qgpq61tz1+v-206a8d38ca49417f845b1e6711c02106.jpg?_hv=1&w=900',
            price: '79,99',
            countInStock: 10,
            brand: 'Adidas',
            rating: 5,
            numReviews: 10,
            description: 'high quality shirt'
        },
        {
            _id: '2',
            name: 'Liverpool men home shirt 2021/2022',
            slug: 'nike-slim-shirt',
            category: "Shirts",
            image: 'https://images.footballfanatics.com/liverpool/liverpool-home-stadium-shirt-2021-22_ss4_p-12056478+u-156yz4c3a3s1rt484tsv+v-bce69e00e0fd44e982d650966b9f0121.jpg?_hv=1&w=900',
            price: '79,99',
            countInStock: 0,
            brand: 'Nike',
            rating: 5,
            numReviews: 10,
            description: 'high quality shirt'

        },
        {
            _id: '3',
            name: 'Arsenal men home shirt 2021/2022',
            slug: 'adidas-slim-shirt',
            category: "Shirts",
            image: 'https://images.footballfanatics.com/arsenal/arsenal-home-shirt-2021-22_ss4_p-12053433+u-1avq8ji9qg1bm52vn3w1+v-0255292a1a6b4da5ac22f279906585b1.jpg?_hv=1&w=900',
            price: '79,99',
            countInStock: 10,
            brand: 'Adidas',
            rating: 5,
            numReviews: 10,
            description: 'high quality shirt'
        }, {
            _id: '4',
            name: 'Manchester City men home shirt 2021/2022',
            slug: 'puma-slim-shirt',
            category: "Shirts",
            image: 'https://images.footballfanatics.com/manchester-city/manchester-city-home-shirt-2021-22_ss4_p-12056671+u-110kfto6bxdte6cxkh77+v-e7feda88cc5e4b33b0870c1b32613850.jpg?_hv=1&w=900',
            price: '79,99',
            countInStock: 10,
            brand: 'Puma',
            rating: 5,
            numReviews: 10,
            description: 'high quality shirt'
        },
        {
            _id: '5',
            name: 'Tottenham men home shirt 2021/2022',
            slug: 'nike-slim-shirt',
            category: "Shirts",
            image: 'https://images.footballfanatics.com/tottenham-hotspur/tottenham-hotspur-home-stadium-shirt-2021-22_ss4_p-12056236+u-14tyvex9b7rga8rlqh6d+v-ec913d99f04b4f89870df2bca0add475.jpg?_hv=1&w=900',
            price: '79,99',
            countInStock: 10,
            brand: 'Nike',
            rating: 5,
            numReviews: 10,
            description: 'high quality shirt'
        },
        {
            _id: '6',
            name: 'Chelsea men home shirt 2021/2022',
            slug: 'nike-slim-shirt',
            category: "Shirts",
            image: 'https://images.footballfanatics.com/chelsea/chelsea-home-stadium-shirt-2021-22_ss4_p-12056125+u-5mijsfxcr93116g2bhlh+v-7054a0d06c44477aa6f594dd85f81503.jpg?_hv=1&w=900',
            price: '79,99',
            countInStock: 10,
            brand: 'Nike',
            rating: 5,
            numReviews: 10,
            description: 'high quality shirt'
        },
        {
            _id: '7',
            name: 'Real Madrid men home shirt 2021/2022',
            slug: 'adidas-slim-shirt',
            category: "Shirts",
            image: 'https://images.footballfanatics.com/real-madrid/real-madrid-home-shirt-2021-22_ss4_p-12053620+u-jgnte10nfu0cg15e2w9d+v-22b278be24f2410dbb98d291281658ec.jpg?_hv=1&w=900',
            price: '79,99',
            countInStock: 10,
            brand: 'Adidas',
            rating: 5,
            numReviews: 10,
            description: 'high quality shirt'
        },
        {
            _id: '8',
            name: 'Barcelona men home shirt 2021/2022',
            slug: 'nike-slim-shirt',
            category: "Shirts",
            image: 'https://images.footballfanatics.com/barcelona/barcelona-home-vapor-match-shirt-2021-22_ss4_p-12056216+u-4ic38v0l4caw2442ni7+v-1829b076277f48d495c234b814af63fe.jpg?_hv=1&w=340',
            price: '79,99',
            countInStock: 10,
            brand: 'Nike',
            rating: 5,
            numReviews: 10,
            description: 'high quality shirt'
        },
        {
            _id: '9',
            name: 'Atletico Madrid men home shirt 2021/2022',
            slug: 'nike-slim-shirt',
            category: "Shirts",
            image: 'https://images.footballfanatics.com/atletico-de-madrid/atl%C3%A9tico-de-madrid-home-vapor-match-shirt-2021-22_ss4_p-12056083+u-fcu0vlz83y0fm1kpisqi+v-54491258c6f7498f89020d3e9d6d8089.jpg?_hv=1&w=340',
            price: '79,99',
            countInStock: 10,
            brand: 'Nike',
            rating: 5,
            numReviews: 10,
            description: 'high quality shirt'
        },
        {
            _id: '10',
            name: 'Valencia men home shirt 2021/2022',
            slug: 'puma-slim-shirt',
            category: "Shirts",
            image: 'https://images.footballfanatics.com/valencia-cf/valencia-home-shirt-2021-22_ss4_p-12057005+u-14b2u37e2jozbjouh83r+v-f139262447ac4ffbb1e4f608df2ebb54.jpg?_hv=1&w=900',
            price: '79,99',
            countInStock: 10,
            brand: 'Puma',
            rating: 5,
            numReviews: 10,
            description: 'high quality shirt'
        }
    ]
}

export default data;

