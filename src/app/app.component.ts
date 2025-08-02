import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RB Sons - Bathroom Accessories';

  openWhatsApp() {
    // Replace with your actual WhatsApp number
    const phoneNumber = '919876543210'; // Format: country code + number without +
    const message = encodeURIComponent('Hi! I\'m interested in your bathroom accessories. Can you please provide more information?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
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

  // Mobile menu toggle (if needed)
  toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    }
  }
}
