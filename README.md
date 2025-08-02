# RB Sons - Bathroom Accessories Website

A modern, responsive website for RB Sons bathroom accessories business built with Angular.

## Features

- 🏠 **Modern Design**: Clean and professional design inspired by modern bathroom aesthetics
- 📱 **Responsive**: Fully responsive design that works on all devices
- 💬 **WhatsApp Integration**: Direct WhatsApp chat button for customer inquiries
- 🖼️ **Product Showcase**: Beautiful product gallery using your existing images
- ⚡ **Fast Performance**: Optimized for speed and user experience
- 🎨 **Smooth Animations**: Subtle animations for enhanced user experience

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **Products**: Showcase of bathroom accessories with detailed descriptions
3. **About**: Company information and key features
4. **Contact**: Contact form and business information
5. **WhatsApp Button**: Floating WhatsApp button for instant customer support

## Technologies Used

- **Angular 16**: Modern frontend framework
- **TypeScript**: Type-safe JavaScript
- **CSS3**: Modern styling with animations and responsive design
- **HTML5**: Semantic markup

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rbSons
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

### Building for Production

```bash
ng build --prod
```

## Customization

### WhatsApp Integration

To update the WhatsApp number, edit the `openWhatsApp()` method in `src/app/app.component.ts`:

```typescript
const phoneNumber = '919876543210'; // Replace with your actual number
```

### Images

The website uses images from the `rbsons/` folder. You can:
- Replace existing images with new ones
- Update image paths in the HTML
- Add more product cards as needed

### Styling

The main styles are in `src/app/app.component.css`. You can customize:
- Colors and themes
- Typography
- Layout and spacing
- Animations

## Project Structure

```
src/
├── app/
│   ├── app.component.html    # Main HTML template
│   ├── app.component.css     # Main styles
│   ├── app.component.ts      # Component logic
│   └── app.module.ts         # Angular module
├── assets/                   # Static assets
└── rbsons/                   # Product images
```

## Features to Add

- [ ] Product filtering and search
- [ ] Image gallery with lightbox
- [ ] Customer testimonials
- [ ] Blog section
- [ ] Online booking system
- [ ] SEO optimization
- [ ] Analytics integration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for RB Sons business use.

## Contact

For any questions or support, please contact RB Sons team.

---

**Note**: Make sure to update the WhatsApp number and contact information with your actual business details before deploying.
