
export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
  };
  
  export const products: Product[] = [
    {
      id: 1,
      name: "Classic T-Shirt",
      description: "Soft cotton t-shirt for everyday wear.",
      price: 25,
      image: "/images/tshirt.png",
      category: "Clothing",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      description: "Noise-cancelling over-ear headphones.",
      price: 99,
      image: "/images/headphone.png",
      category: "Electronics",
    },
    {
      id: 3,
      name: "Coffee Mug",
      description: "Ceramic mug for your favorite drinks.",
      price: 12,
      image: "/images/mug.png",
      category: "Home & Kitchen",
    },
    {
      id: 4,
      name: "Sneakers",
      description: "Stylish running shoes for daily wear.",
      price: 65,
      image: "/images/sneakers.png",
      category: "Footwear",
    },
    {
      id: 5,
      name: "Desk Lamp",
      description: "Adjustable LED desk lamp with dimmer.",
      price: 35,
      image: "/images/lamp.png",
      category: "Office",
    },
    {
      id: 6,
      name: "Samsung",
      description: "Adjustable LED desk lamp with dimmer.",
      price: 35,
      image: "/images/phone.png",
      category: "Electronics",
    },
    {
      id: 7,
      name: "Makeup Kit",
      description: "Adjustable LED desk lamp with dimmer.",
      price: 35,
      image: "/images/accessories2.png",
      category: "Accessories",
    },
    {
      id: 8,
      name: "complete Kit",
      description: "Get the perfect kit for you outing to attract more clients.",
      price: 35,
      image: "/images/accessories1.png",
      category: "Accessories",
    }
  ];
  