import img1  from '../../assits/image/totel1.webp'
import img2  from '../../assits/image/2.1.jpg'
import img3  from '../../assits/image/3.webp'
import img4  from '../../assits/image/7.1.jpg'
import img5  from '../../assits/image/5.1.jpg'
import img6  from '../../assits/image/totel1.1.jpg'
import img7  from '../../assits/image/01.jpg'
import img8  from '../../assits/image/6.jpg'

const bags = [
    {
        category: "Premium",
        bags: [
            {
                id:1,
                name: "Elegant Leather Tote Bag",
                image: img1,
                price: 199.99,
                briefSpec: "Premium leather tote bag with spacious compartments.",
                company: "LuxuryBags Inc.",
                type: "Tote Bag",
                category: "Premium",
                specifications: ["Leather", "Spacious", "Premium"]
                
            },
            {
                id:2,
                name: "Explorer Pro Backpack",
                image: img2,
                price: 129.99,
                briefSpec: "Durable backpack designed for outdoor adventurers.",
                company: "AdventureGear Co.",
                type: "Backpack",
                category: "Premium",
                specifications: ["Durable", "Outdoor", "Adventure"]
            },
            {
                id:3,
                name: "Chic Crossbody Purse",
                image: img3,
                price: 89.99,
                briefSpec: "Stylish crossbody purse with a modern design.",
                company: "FashionBags Boutique",
                type: "Crossbody Purse",
                category: "Premium",
                specifications: ["Stylish", "Modern", "Crossbody"]
            },
            {
                id:4,
                name: "Weekend Traveler's Duffel",
                image: img4,
                price: 149.99,
                briefSpec: "Spacious duffel bag perfect for weekend trips.",
                company: "Explorer Essentials",
                type: "Duffel Bag",
                category: "Premium",
                specifications: ["Spacious", "Weekend", "Travel"]
            },
            {
                id:5,
                name: "Business Traveler's Garment Bag",
                image: "https://vonbaer.com/cdn/shop/products/von-baer-weekender-premium-mens-full-grain-leather-weekend-bag-solid-brown-front-view_2048x2048.jpg?v=1681908132",
                price: 199.99,
                briefSpec: "Garment bag designed for business travelers with suit compartments.",
                company: "ProfessionalStyle Bags",
                type: "Garment Bag",
                category: "Premium",
                specifications: ["Business Travel", "Suit Compartments"]
            },
            {
                id:6,
                name: "Canvas Messenger Bag",
                image: img5,
                price: 79.99,
                briefSpec: "Classic canvas messenger bag with adjustable strap.",
                company: "CasualStyle Co.",
                type: "Messenger Bag",
                category: "Premium",
                specifications: ["Classic", "Canvas", "Adjustable"]
            },
            {
                id:34,
                name: "Tech-Friendly Laptop Tote",
                image: img6,
                price: 129.99,
                briefSpec: "Tote bag with dedicated compartments for laptops and gadgets.",
                company: "TechStyle Solutions",
                type: "Tote Bag",
                category: "Premium",
                specifications: ["Tech-Friendly", "Laptop Compartment"]
            },
            {
                id:7,
                name: "Minimalist Canvas Backpack",
                image: img7,
                price: 89.99,
                briefSpec: "Simple and lightweight canvas backpack for everyday use.",
                company: "Casual Comfort Co.",
                type: "Backpack",
                category: "Premium",
                specifications: ["Minimalist", "Canvas", "Lightweight"]
            },
            {
                id:8,
                name: "Designer Leather Satchel",
                image: img8,
                price: 349.99,
                briefSpec: "Exquisite designer leather satchel with unique detailing.",
                company: "HighFashion Bags",
                type: "Satchel",
                category: "Premium",
                specifications: ["Designer", "Leather", "Exquisite"]
            },
            {
                id:9,
                name: "Traveler's Toiletry Kit",
                image: "https://m.media-amazon.com/images/I/41AC0IVaUlL._AC_UY1100_.jpg",
                price: 34.99,
                briefSpec: "Compact and organized toiletry kit for travelers.",
                company: "Explorer Essentials",
                type: "Toiletry Kit",
                category: "Premium",
                specifications: ["Compact", "Organized", "Travel"]
            },
            {
                id:10,
                name: "Quilted Shoulder Bag",
                image: "https://assets.ajio.com/medias/sys_master/root/20230329/H0tH/6423dc74907deb497ab8c90c/-1117Wx1400H-460600830-coffeebrown-MODEL.jpg",
                price: 149.99,
                briefSpec: "Quilted shoulder bag with a sophisticated look.",
                company: "ChicStyle Boutique",
                type: "Shoulder Bag",
                category: "Premium",
                specifications: ["Quilted", "Sophisticated"]
            },
        ]
    },
    {
        category: "Trending",
        bags: [
            {
                id:35,
                name: "Weekender Duffel with Shoe Compartment",
                image: "https://www.jiomart.com/images/product/original/rvfvt5wuap/handcuffs-unisex-duffel-bag-waterproof-gym-sports-weekend-getaway-bags-with-shoe-and-wet-clothes-compartments-black-product-images-orvfvt5wuap-p595321496-0-202211151047.jpg?im=Resize=(1000,1000)",
                price: 159.99,
                briefSpec: "Spacious duffel bag with a dedicated shoe compartment.",
                company: "Traveler's Gear Co.",
                type: "Duffel Bag",
                category: "Trending",
                specifications: ["Spacious", "Shoe Compartment", "Weekend"]
            },
            {
                id:11,
                name: "Convertible Travel Duffel",
                image: "https://m.media-amazon.com/images/I/91p8tcqBJCS._SL1500_.jpg",
                price: 149.99,
                briefSpec: "Convertible travel duffel that transforms into a backpack.",
                company: "Explorer Essentials",
                type: "Duffel Bag/Backpack",
                category: "Trending",
                specifications: ["Convertible", "Travel"]
            },
            {
                id:12,
                name: "Leather Laptop Tote",
                image: "https://i.etsystatic.com/19525814/r/il/53d8a2/3773399084/il_1140xN.3773399084_4rz3.jpg",
                price: 199.99,
                briefSpec: "Stylish leather tote with a padded laptop pocket.",
                company: "CasualStyle Co.",
                type: "Tote Bag",
                category: "Trending",
                specifications: ["Stylish", "Leather", "Laptop Pocket"]
            },
            {
                id:13,
                name: "Urban Explorer Crossbody",
                image: "https://d010205.bibloo.com/_galerie/varianty/195/1954878-z.jpg",
                price: 109.99,
                briefSpec: "Urban-style crossbody bag for city explorers.",
                company: "Explorer Gear Co.",
                type: "Crossbody Bag",
                category: "Trending",
                specifications: ["Urban Style", "Crossbody"]
            },
            {
                id:14,
                name: "Weekend Traveler's Backpack",
                image: "https://www.trawoc.com/cdn/shop/files/TRAWOC_Featured_8_1066x.png?v=1676490678",
                price: 129.99,
                briefSpec: "Weekend-ready backpack with ample storage.",
                company: "Traveler's Essentials",
                type: "Backpack",
                category: "Trending",
                specifications: ["Weekend", "Ample Storage"]
            },
            {
                id:15,
                name: "Canvas Weekender Tote",
                image: "https://images.dailyobjects.com/marche/product-images/1205/natural-white-olive-trail-weekender-images/Natural-White-Olive-Trail-Weekender.png?tr=cm-pad_resize,v-2,w-683,h-537,dpr-1",
                price: 89.99,
                briefSpec: "Canvas weekender tote for short getaways.",
                company: "Casual Comfort Co.",
                type: "Tote Bag",
                category: "Trending",
                specifications: ["Canvas", "Weekender"]
            },
            {
                id:16,
                name: "Vintage Leather Satchel",
                image: "https://i.etsystatic.com/19887624/r/il/120b9e/3776862605/il_1140xN.3776862605_c8gb.jpg",
                price: 179.99,
                briefSpec: "Classic vintage leather satchel for a timeless look.",
                company: "RetroStyle Bags",
                type: "Satchel",
                category: "Trending",
                specifications: ["Vintage", "Leather", "Timeless"]
            },
            {
                id:17,
                name: "Outdoor Hiking Backpack",
                image: "https://m.media-amazon.com/images/I/71zT+yuZOLL._AC_SL1500_.jpg",
                price: 139.99,
                briefSpec: "Rugged hiking backpack built for outdoor enthusiasts.",
                company: "Explorer Gear Co.",
                type: "Backpack",
                category: "Trending",
                specifications: ["Rugged", "Hiking", "Outdoor"]
            },
        ],
    },
    {
        category: "Top Pick",
        bags: [

            {
                id:18,
                name: "Luxury Weekend Tote",
                image: "https://images.dailyobjects.com/marche/product-images/1205/all-mustard-trail-weekender-images/All-Mustard-Trail-Weekender.png?tr=cm-pad_resize,v-2,w-683,h-537,dpr-1",
                price: 249.99,
                briefSpec: "High-end weekend tote for luxury travelers.",
                company: "LuxuryBags Inc.",
                type: "Tote Bag",
                category: "Top Pick",
                specifications: ["Luxury", "Weekend"]
            },
            {
                id:19,
                name: "Convertible Travel Backpack",
                image: "https://img.fruugo.com/product/1/63/721597631_max.jpg",
                price: 169.99,
                briefSpec: "Versatile travel backpack that converts into a duffel.",
                company: "Explorer Essentials",
                type: "Backpack/Duffel",
                category: "Top Pick",
                specifications: ["Versatile", "Convertible"]
            },
            {
                id:20,
                name: "Stylish Laptop Sleeve",
                image: "https://m.media-amazon.com/images/I/51aEFNrmJEL._SL1000_.jpg",
                price: 49.99,
                briefSpec: "Stylish laptop sleeve with a slim and protective design.",
                company: "TechStyle Solutions",
                type: "Laptop Sleeve",
                category: "Top Pick",
                specifications: ["Stylish", "Slim", "Protective"]
            },
           
            {
                id:21,
                name: "Weekend Explorer Backpack",
                image: "https://m.media-amazon.com/images/I/51QWygNVQAL.jpg",
                price: 119.99,
                briefSpec: "Weekend-ready backpack with a modern design.",
                company: "Explorer Gear Co.",
                type: "Backpack",
                category: "Top Pick",
                specifications: ["Weekend", "Modern Design"]
            },
            {
                id:22,
                name: "Fashionable Leather Clutch",
                image: "https://www.perona.com/cdn/shop/products/aph02692-7wUZOsV3tJ_700x.jpg?v=1681194993",
                price: 79.99,
                briefSpec: "Fashion-forward leather clutch for special occasions.",
                company: "ChicStyle Boutique",
                type: "Clutch",
                category: "Top Pick",
                specifications: ["Fashionable", "Leather"]
            },
            {
                id:23,
                name: "Tech Enthusiast's Laptop Backpack",
                image: "https://ae01.alicdn.com/kf/Sd8ef038288cc45998affa1a3d30b731bi/New-Fashion-High-Quality-Hard-Shell-Business-Backpack-Student-Large-Capacity-Waterproof-School-Bag-15-6.jpg_220x220.jpg_.webp",
                price: 149.99,
                briefSpec: "Laptop backpack designed for tech enthusiasts with tech organization.",
                company: "TechStyle Solutions",
                type: "Laptop Backpack",
                category: "Top Pick",
                specifications: ["Tech Enthusiast", "Tech Organization"]
            },
            {
                id:24,
                name: "Eco-Friendly Canvas Tote",
                image: "https://5.imimg.com/data5/SELLER/Default/2022/3/XV/ND/YK/7982302/eco-friendly-canvas-bags-500x500.jpg",
                price: 59.99,
                briefSpec: "Eco-friendly canvas tote with recycled materials.",
                company: "GreenLiving Co.",
                type: "Tote Bag",
                category: "Top Pick",
                specifications: ["Eco-Friendly", "Recycled Materials"]
            },
            {
                id:25,
                name: "Luxury Leather Briefcase",
                image: "https://cdn.shopify.com/s/files/1/2726/4990/files/no1-mens-leather-briefcase-solid-brown-front-view.jpg",
                price: 299.99,
                briefSpec: "High-end leather briefcase for professionals.",
                company: "LuxuryBags Inc.",
                type: "Briefcase",
                category: "Top Pick",
                specifications: ["Luxury", "Leather"]
            },
            {
                id:26,
                name: "Traveler's Tech Organizer Bag",
                image: "https://images.dailyobjects.com/marche/product-images/1703/marshal-tech-case-yellow-images/marshal-tech-kit-organiser-yellow.png?tr=cm-pad_resize,v-2,w-683,h-537,dpr-1",
                price: 79.99,
                briefSpec: "Organizer bag with dedicated pockets for tech gadgets.",
                company: "Explorer Essentials",
                type: "Tech Organizer Bag",
                category: "Top Pick",
                specifications: ["Tech Gadgets", "Organization"]
            },
            {
                id:27,
                name: "Retro Canvas Backpack",
                image: "https://m.media-amazon.com/images/I/811p8WzFE+L._UX679_.jpg",
                price: 129.99,
                briefSpec: "Vintage-style canvas backpack for retro enthusiasts.",
                company: "RetroStyle Bags",
                type: "Backpack",
                category: "Top Pick",
                specifications: ["Vintage", "Canvas"]
            },
            {
                id:28,
                name: "Designer Luxury Clutch",
                image: "https://www.perona.com/cdn/shop/products/aph02723-kcTjolceak_700x.jpg?v=1681194704",
                price: 219.99,
                briefSpec: "Designer luxury clutch with exquisite detailing.",
                company: "HighFashion Bags",
                type: "Clutch",
                category: "Top Pick",
                specifications: ["Designer", "Luxury"]
            },
            {
                id:29,
                name: "Versatile Travel Trolley",
                image: "https://mokobara.com/cdn/shop/products/Cabin-Pro-1_17b31110-6426-418c-81c7-d9a4ab42d9ed.jpg?v=1692000315&width=700",
                price: 369.99,
                briefSpec: "Versatile travel trolley with expandable capacity.",
                company: "Explorer Gear Co.",
                type: "Travel Trolley",
                category: "Top Pick",
                specifications: ["Versatile", "Expandable"]
            },
            {
                id:30,
                name: "Sleek Laptop Messenger Bag",
                image: "https://images.dailyobjects.com/marche/product-images/1202/kelp-mantle-messenger-images/Kelp-Mantle-Messenger-vw.png?tr=cm-pad_resize,v-2,w-683,h-537,dpr-1",
                price: 89.99,
                briefSpec: "Sleek messenger bag designed for professionals.",
                company: "TechStyle Solutions",
                type: "Messenger Bag",
                category: "Top Pick",
                specifications: ["Sleek", "Laptop Compartment"]
            },
            {
                id:31,
                name: "Chic Leather Shoulder Bag",
                image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT8SSknXupCEo4zgYwqhDaobSKSRBkR2HqgydrrBFIhCN80noyWUleRs6WQlZeTKEe7igtMMz21Rf1bKGDMUWavHVHkOjNzfDnxhnmgwe0so2hxq6w6xj2gJg&usqp=CAE",
                price: 139.99,
                briefSpec: "Chic leather shoulder bag with a stylish twist.",
                company: "ChicStyle Boutique",
                type: "Shoulder Bag",
                category: "Top Pick",
                specifications: ["Chic", "Leather"]
            },
            {
                id:32,
                name: "Weekend Adventure Backpack",
                image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQjH4LUvy_gJpsXgv34Fl2LkBmXWH7cLiIwmLzNb6DeSfHcPZbPDkzYQ9xQRKobn3R8rrA7ioUnqnanPizswCmuJ2K3XFmKdc285RtPoV3E8y5BETiMGLQk&usqp=CAE",
                price: 129.99,
                briefSpec: "Adventure-ready backpack with versatile compartments.",
                company: "Explorer Gear Co.",
                type: "Backpack",
                category: "Top Pick",
                specifications: ["Adventure", "Versatile"]
            },
            {
                id:33,
                name: "Eco-Friendly Travel Tote",
                image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ4qiRkVabZcMEptHeDWBAR4uAaIy9GWjbXj1qy4idv5f0hDVVHRlpGKBfKpgLHErB6gNzMXFhy0ADriefsP04D_99xAJsuCLUWHPdHfsWz&usqp=CAE",
                price: 69.99,
                briefSpec: "Eco-conscious travel tote made from sustainable materials.",
                company: "GreenLiving Co.",
                type: "Tote Bag",
                category: "Top Pick",
                specifications: ["Eco-Friendly", "Sustainable"]
            },
        ],
    },
];

export default bags;
