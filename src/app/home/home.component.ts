import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, Category } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
  }

  // Navigate to specific category
  navigateToCategory(categoryId: string) {
    this.router.navigate(['/products', categoryId]);
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

  // Smooth scrolling for navigation links
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
