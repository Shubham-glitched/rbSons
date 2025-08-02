import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product, Category } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  filteredProducts: Product[] = [];
  selectedCategory: string = 'all';
  currentCategory: Category | undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.categories = this.productService.getCategories();
    this.filteredProducts = this.products;

    // Check for category parameter in URL
    this.route.params.subscribe(params => {
      if (params['category']) {
        this.selectedCategory = params['category'];
        this.currentCategory = this.productService.getCategoryById(params['category']);
        this.filterByCategory(params['category']);
      }
    });
  }

  filterByCategory(categoryId: string) {
    this.selectedCategory = categoryId;
    this.currentCategory = categoryId === 'all' ? undefined : this.productService.getCategoryById(categoryId);
    
    if (categoryId === 'all') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.productService.getProducts(categoryId);
    }

    // Update URL
    if (categoryId === 'all') {
      this.router.navigate(['/products']);
    } else {
      this.router.navigate(['/products', categoryId]);
    }
  }

  getCategoryName(categoryId: string): string {
    const category = this.productService.getCategoryById(categoryId);
    return category ? category.name : categoryId;
  }

  openProductDetail(product: Product) {
    this.router.navigate(['/product', product.id]);
  }

  openWhatsApp() {
    const phoneNumber = '919876543210';
    const message = encodeURIComponent('Hi! I\'m interested in your bathroom accessories. Can you please provide more information?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Scroll to contact section
  scrollToContact() {
    const contactSection = document.querySelector('.footer');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    }
  }
}
