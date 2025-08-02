import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = Number(params['id']);
      this.product = this.productService.getProductById(productId);
      
      if (!this.product) {
        // Product not found, redirect to products page
        this.router.navigate(['/products']);
      }
    });
  }

  getCategoryName(categoryId: string): string {
    const category = this.productService.getCategoryById(categoryId);
    return category ? category.name : categoryId;
  }

  closeModal() {
    // Navigate back to products page
    this.router.navigate(['/products']);
  }

  inquireAboutProduct() {
    const phoneNumber = '919876543210';
    const message = encodeURIComponent(`Hi! I'm interested in the ${this.product?.name}. Can you please provide more information about pricing and availability?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }

  openWhatsApp() {
    const phoneNumber = '919876543210';
    const message = encodeURIComponent(`Hi! I'm interested in the ${this.product?.name}. Can you please provide more information?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }
}
