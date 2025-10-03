export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    tags: string[];
    rating: number;
    background: string,
    backgroundImg?: string,
}

export interface CartItem {
    productId: number;
    quantity: number;
}

const categories = [
    {"id": "xmas", "label": "Xmas"},
    {"id": "candy", "label": "Candy"},
    {"id": "monster", "label": "Monster"},
    {"id": "camping", "label": "Camping"},
    {"id": "sporty", "label": "Sporty"},
]

const products: Product[] = [
    {
        id: 100,
        name: "Xmas Globin",
        image: "/images/100.png",
        price: 3.12,
        tags: ['xmas', 'candy', 'queen', 'Season Choice'],
        rating: 4.5,
        background: "#49B649",
    },
    {
        id: 101,        
        name: "City Hunter",
        image: "/images/101.png",
        price: 2.15,
        tags: ['monster', 'hunter', 'sporty'],
        rating: 4.5,
        background: "#AF2A3A",
    },
    {
        id: 102,
        name: "Cosy Student",
        image: "/images/102.png",
        price: 1.63,
        tags: ['king', 'student', 'blue', 'sporty'],
        rating: 4.5,
        background: "#E1BF47",
    },
    {
        id: 103,
        name: "Baby Boy",
        image: "/images/103.png",
        price: 9.30,
        tags: ['sporty', 'blue'],
        rating: 4.5,
        background: "#4962B6",
    },
    {
        id: 104,
        name: "Active Summer",
        image: "/images/104.png",
        price: 4.8,
        tags: ['sporty', 'summer', 'Season Choice'],
        rating: 4.5,
        background: "#B69349",
    },
    {
        id: 105,
        name: "Mystery Landlord",
        image: "/images/105.png",
        price: 2.58,
        tags: ['monster', 'landlord', 'Season Choice'],
        rating: 4.5,
        background: "#954AB1",
    },
    {
        id: 106,
        name: "Sporty Friend",
        image: "/images/106.png",
        price: 1.2,
        tags: ['sporty', 'friend', 'blue '],
        rating: 4.5,
        background: "#1E82A3",
    },
    {
        id: 107,
        name: "Halloween Cuties",
        image: "/images/107.png",
        price: 12.6,
        tags: ['queen', 'Season Choice', 'halloween', 'monster'],
        rating: 4.5,
        background: "#BE0B88",
    },
    {
        id: 108,
        name: "Let's go camping",
        image: "/images/108.png",
        price: 7.75,
        tags: ['camping', 'sporty', 'Season Choice'],
        rating: 4.5,
        background: "#A5B649",
    },
    {
        id: 109,
        name: "Study hard",
        image: "/images/109.png",
        price: 10.1,
        tags: ['student', 'sporty', 'boy', 'blue'],
        rating: 4.5,
        background: "#49ABB6",
    },
    {
        id: 110,
        name: "Awesome Pumpkin",
        image: "/images/110.png",
        price: 3.6,
        tags: ['halloween', 'monster', 'Season Choice'],
        rating: 4.5,
        background: "#B64957",
    },
    {
        id: 111,
        name: "Warm cave",
        image: "/images/111.png",
        price: 5.3,
        tags: ['monster', 'cave', 'Season Choice'],
        rating: 4.5,
        background: "#B66649",
    },
    {
        id: 113,
        name: "Snow man",
        image: "/images/113.png",
        price: 5.3,
        tags: ['snow', 'xmas', 'cold'],
        rating: 4.5,
        background: "#810CC5",
    },
    {
        id: 114,
        name: "Santa’s surprise", 
        image: "/images/114.png",
        price: 6.3,
        tags: ['santa', 'xmas', 'gift', 'boy'],
        rating: 4.5,
        background: "#EDBF6B",
    },
    {
        id: 115,
        name: "Jingle all the slide",
        image: "/images/115.png",
        price: 4.3,
        tags: ['xmas', 'santa', 'sleigh', 'snow', 'sporty'],
        rating: 4.5,
        background: "#9F0000",
    },
    {
        id: 116,
        name: "Santa Claus is coming",
        image: "/images/116.png",
        price: 5.8,
        tags: ['santa', 'xmas', 'cute'],
        rating: 4.5,
        background: "#A95FA1",
    },
    {
        id: 117,
        name: "Peter Pan",
        image: "/images/117.png",
        price: 2.58,
        tags: ['camping', 'xmas', 'Season Choice', 'boy'],
        rating: 4.5,
        background: "#C8BD1D",
    },
    {
        id: 118,
        name: "Santa claus",
        image: "/images/118.png",
        price: 3.2,
        tags: ['xmas', 'santa', 'Season Choice'],
        rating: 4.5,
        background: "#2E71DE",
    },
    {
        id: 119,
        name: "Sound of love",
        image: "/images/119.png",
        price: 12.6,
        tags: ['baby', 'angel', 'love', 'xmas', 'music'],
        rating: 4.5,
        background: "#179193",
    },
    {
        id: 120,
        name: "Baby Angel",
        image: "/images/120.png",
        price: 7.5,
        tags: ['xmas', 'baby', 'angel'],
        rating: 4.5,
        background: "#1340BA",
    },
    {
        id: 121,
        name: "King",
        image: "/images/121.png",
        price: 10.1,
        tags: ['king', 'xmas', 'Season Choice'],
        rating: 4.5,
        background: "#B65749",
    },
    {
        id: 122,
        name: "Little Red Riding Hood",
        image: "/images/122.png",
        price: 3.6,
        tags: ['Girl', 'student', 'camping', 'xmas'],
        rating: 4.5,
        background: "#1C914A",
    },
    {
        id: 123,
        name: "Friends Forever",
        image: "/images/123.png",
        price: 5.3,
        tags: ['friend', 'xmas', 'sporty'],
        rating: 5,
        background: "#D3A117",
    } 
];

const productsWithAI: Product[] = products.map((product) => {
    const urlBG = (product.id == 100 || (product.id > 112 && product.id < 124)) ?  `/images/xmas-bg/${product.id}.png` : `/images/xmas-bg/${product.id - 100}.jpg`;
      
    return {
        ...product,
        name: product.name + " by AI",
        backgroundImg: urlBG
    }
});

const cart: CartItem[] = [
    { productId: 100, quantity: 2 },
    { productId: 111, quantity: 1 },
    { productId: 105, quantity: 3 }
];

export function getProductsByCategory(categoryId: string, isAI: boolean): Product[] {
    const list = isAI ? productsWithAI : products;
    return list.filter((product) => product.tags.includes(categoryId));
}

export { products, cart, categories, productsWithAI };
