import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  specifications: {
    material: string;
    finish: string;
    dimensions: string;
    warranty: string;
    installation: string;
  };
  price?: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: "Modern Faucet",
      category: "faucets",
      description: "Contemporary design with superior functionality",
      longDescription: "This premium modern faucet combines sleek design with exceptional performance. Features a single-handle design for easy temperature control and a high-arc spout for convenient use. Perfect for modern bathroom aesthetics.",
      image: "rbsons/E -COM3716.jpg",
      features: ["Brass Construction", "Water Efficient", "Single Handle", "High Arc Spout"],
      specifications: {
        material: "Solid Brass",
        finish: "Chrome",
        dimensions: "H: 12.5\" x W: 4.5\"",
        warranty: "5 Years",
        installation: "Deck Mount"
      },
      inStock: true
    },
    {
      id: 2,
      name: "Shower System",
      category: "showers",
      description: "Complete shower solution for modern bathrooms",
      longDescription: "Transform your shower experience with this comprehensive shower system. Includes a rain shower head, handheld shower, and thermostatic valve for precise temperature control. Ideal for creating a spa-like experience at home.",
      image: "rbsons/E -COM3739.jpg",
      features: ["Thermostatic Control", "Rain Shower", "Handheld Shower", "Easy Installation"],
      specifications: {
        material: "Brass & Stainless Steel",
        finish: "Chrome",
        dimensions: "Rain Head: 8\", Handheld: 4\"",
        warranty: "3 Years",
        installation: "Wall Mount"
      },
      inStock: true
    },
    {
      id: 3,
      name: "Wall Mounted Basin",
      category: "basins",
      description: "Space-saving design with elegant aesthetics",
      longDescription: "This wall-mounted basin offers a clean, modern look while maximizing floor space. Perfect for contemporary bathrooms, it features a smooth ceramic finish and easy-to-clean design. Includes mounting hardware for secure installation.",
      image: "rbsons/E -COM3740 (1).jpg",
      features: ["Ceramic Finish", "Easy Installation", "Space Saving", "Modern Design"],
      specifications: {
        material: "Vitreous China",
        finish: "White Gloss",
        dimensions: "L: 20\" x W: 16\" x H: 6\"",
        warranty: "2 Years",
        installation: "Wall Mount"
      },
      inStock: true
    },
    {
      id: 4,
      name: "Bathroom Cabinet",
      category: "cabinets",
      description: "Storage solution with mirror and lighting",
      longDescription: "This multifunctional bathroom cabinet provides ample storage while incorporating modern LED lighting and an anti-fog mirror. Perfect for organizing toiletries and creating a well-lit grooming area. Features soft-close hinges for quiet operation.",
      image: "rbsons/Picsart_22-06-14_14-45-46-379.jpg",
      features: ["LED Lighting", "Anti-Fog Mirror", "Soft Close Hinges", "Ample Storage"],
      specifications: {
        material: "MDF with PVC Finish",
        finish: "White",
        dimensions: "W: 24\" x H: 32\" x D: 4.5\"",
        warranty: "2 Years",
        installation: "Wall Mount"
      },
      inStock: true
    },
    {
      id: 5,
      name: "Toilet Accessories",
      category: "toilets",
      description: "Complete toilet suite with modern design",
      longDescription: "This complete toilet suite includes a dual-flush toilet with soft-close seat and all necessary accessories. Features water-saving technology and a sleek, modern design that complements any bathroom style.",
      image: "rbsons/Picsart_22-06-22_13-51-49-834.jpg",
      features: ["Dual Flush", "Soft Close Seat", "Water Saving", "Modern Design"],
      specifications: {
        material: "Vitreous China",
        finish: "White",
        dimensions: "L: 28\" x W: 18\" x H: 30\"",
        warranty: "5 Years",
        installation: "Floor Mount"
      },
      inStock: true
    },
    {
      id: 6,
      name: "Towel Racks",
      category: "accessories",
      description: "Heated towel racks for ultimate comfort",
      longDescription: "Experience luxury with these heated towel racks that keep your towels warm and dry. Perfect for creating a spa-like atmosphere in your bathroom. Features energy-efficient heating and elegant stainless steel construction.",
      image: "rbsons/IMG-20220505-WA0101.jpg",
      features: ["Heated", "Stainless Steel", "Energy Efficient", "Elegant Design"],
      specifications: {
        material: "Stainless Steel",
        finish: "Chrome",
        dimensions: "W: 20\" x H: 24\"",
        warranty: "3 Years",
        installation: "Wall Mount"
      },
      inStock: true
    },
    {
      id: 7,
      name: "Premium Faucet Set",
      category: "faucets",
      description: "Luxury faucet set with advanced features",
      longDescription: "This premium faucet set includes a main faucet and matching accessories. Features touchless technology, temperature memory, and advanced water filtration. Perfect for high-end bathroom installations.",
      image: "rbsons/IMG-20220505-WA0102.jpg",
      features: ["Touchless Technology", "Temperature Memory", "Water Filtration", "Premium Finish"],
      specifications: {
        material: "Solid Brass",
        finish: "Brushed Nickel",
        dimensions: "H: 14\" x W: 5\"",
        warranty: "10 Years",
        installation: "Deck Mount"
      },
      inStock: true
    },
    {
      id: 8,
      name: "Modern Shower Panel",
      category: "showers",
      description: "Contemporary shower panel with multiple functions",
      longDescription: "This modern shower panel combines style and functionality with multiple shower heads, body jets, and a handheld shower. Features digital temperature control and LED lighting for an enhanced shower experience.",
      image: "rbsons/2024-11-11 at 3.10.33 PM.jpeg",
      features: ["Multiple Shower Heads", "Body Jets", "Digital Control", "LED Lighting"],
      specifications: {
        material: "Stainless Steel & Brass",
        finish: "Chrome",
        dimensions: "W: 32\" x H: 72\"",
        warranty: "5 Years",
        installation: "Wall Mount"
      },
      inStock: true
    }
  ];

  private categories: Category[] = [
    {
      id: "faucets",
      name: "Faucets",
      description: "Modern and traditional faucets for every bathroom style",
      image: "rbsons/E -COM3716.jpg",
      productCount: 2
    },
    {
      id: "showers",
      name: "Shower Systems",
      description: "Complete shower solutions for luxury bathroom experience",
      image: "rbsons/E -COM3739.jpg",
      productCount: 2
    },
    {
      id: "basins",
      name: "Basins & Sinks",
      description: "Stylish basins and sinks for modern bathrooms",
      image: "rbsons/E -COM3740 (1).jpg",
      productCount: 1
    },
    {
      id: "cabinets",
      name: "Cabinets & Storage",
      description: "Smart storage solutions with mirrors and lighting",
      image: "rbsons/Picsart_22-06-14_14-45-46-379.jpg",
      productCount: 1
    },
    {
      id: "toilets",
      name: "Toilets",
      description: "Modern toilet suites with advanced features",
      image: "rbsons/Picsart_22-06-22_13-51-49-834.jpg",
      productCount: 1
    },
    {
      id: "accessories",
      name: "Accessories",
      description: "Essential bathroom accessories and fixtures",
      image: "rbsons/IMG-20220505-WA0101.jpg",
      productCount: 1
    }
  ];

  private selectedCategorySubject = new BehaviorSubject<string>('all');
  selectedCategory$ = this.selectedCategorySubject.asObservable();

  constructor() { }

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(category?: string): Product[] {
    if (!category || category === 'all') {
      return this.products;
    }
    return this.products.filter(product => product.category === category);
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  getCategoryById(id: string): Category | undefined {
    return this.categories.find(category => category.id === id);
  }

  setSelectedCategory(category: string) {
    this.selectedCategorySubject.next(category);
  }
}
