# Hausarzt Nord Website

A modern, responsive website for Hausarzt Nord medical practice in Vienna, Austria. Built with React and featuring a calming, professional design with comprehensive healthcare information and services.

## 🏥 Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Modern UI/UX**: Clean, calming design with brand colors (green, blue, white)
- **Accessibility**: WCAG-AA compliant with proper ARIA labels and keyboard navigation
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Performance**: Optimized loading with lazy loading and efficient bundling

### Pages & Content
1. **Home**: Hero banner, featured services, upcoming events
2. **Medical & Private Services**: Comprehensive service listings
3. **Minor Surgery**: Surgical procedures and facilities
4. **Nutrition**: Nutrition counseling services
5. **Workshops & Trainings**: Educational programs
6. **Events**: Upcoming events and activities
7. **Event Registration**: Form for event registration
8. **Useful Info**: Downloads, links, and resources
9. **Contact**: Contact form with Google Maps integration
10. **Map**: Standalone map page with directions
11. **Imprint**: Legal information
12. **Privacy Policy**: Comprehensive privacy policy

### Technical Features
- **React Router**: Client-side routing with clean URLs
- **AOS Animations**: Smooth scroll animations
- **Form Validation**: Client-side form validation
- **Google Maps Integration**: Embedded maps with OS detection
- **Responsive Navigation**: Hamburger menu for mobile
- **Sticky Header**: Navigation that stays at top on scroll

## 🎨 Design System

### Colors
- **Primary Green**: `#006837` (Brand color)
- **Accent Blue**: `#0055AA` (Secondary color)
- **White**: `#ffffff` (Background)
- **Red Accent**: `#D32F2F` (CTAs/Errors)
- **Light Gray**: `#f8f9fa` (Backgrounds)
- **Medium Gray**: `#6c757d` (Text)
- **Dark Gray**: `#343a40` (Headings)

### Typography
- **Primary Font**: Poppins (Headings)
- **Secondary Font**: Open Sans (Body text)
- **Minimum Font Size**: 16px for accessibility

### Components
- **Cards**: Rounded corners (8px+), subtle shadows
- **Buttons**: Rounded, hover effects, consistent styling
- **Forms**: Clean inputs with focus states
- **Navigation**: Sticky header with mobile hamburger menu

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hausarzt-nord-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## 📦 Dependencies

### Core Dependencies
- `react` - UI library
- `react-dom` - React DOM rendering
- `react-router-dom` - Client-side routing
- `aos` - Animate On Scroll library
- `styled-components` - CSS-in-JS styling

### Development Dependencies
- `react-scripts` - Create React App build tools
- `@testing-library/react` - Testing utilities
- `@testing-library/jest-dom` - Custom Jest matchers

## 🏗️ Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.js       # Navigation header
│   ├── Footer.js       # Site footer
│   └── *.css           # Component styles
├── pages/              # Page components
│   ├── Home.js         # Homepage
│   ├── Contact.js      # Contact page
│   ├── Map.js          # Map page
│   └── *.css           # Page styles
├── App.js              # Main app component
├── App.css             # Global styles
└── index.js            # App entry point
```

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deployment Options

#### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push to main branch

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts to deploy

#### Traditional Hosting
1. Run `npm run build`
2. Upload `build/` folder to your web server
3. Configure server for React Router (SPA)

### Environment Variables
Create a `.env` file in the root directory:
```
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
REACT_APP_CONTACT_API_ENDPOINT=your_contact_api_endpoint
```

## 🔧 Configuration

### Google Maps Integration
1. Get a Google Maps API key from Google Cloud Console
2. Enable Maps Embed API
3. Add API key to environment variables
4. Update map URLs in Contact.js and Map.js

### Contact Form
The contact form currently simulates API calls. To connect to a real backend:
1. Update the `handleSubmit` function in Contact.js
2. Replace the setTimeout with actual API calls
3. Add proper error handling

### SEO Optimization
- Update meta tags in `public/index.html`
- Add structured data for medical practice
- Optimize images and content
- Submit sitemap to search engines

## 🧪 Testing

### Run Tests
```bash
npm test
```

### Test Coverage
```bash
npm test -- --coverage --watchAll=false
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## ♿ Accessibility

- WCAG-AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Skip-to-main links
- Proper ARIA labels

## 🔒 Security

- HTTPS recommended for production
- Form validation on client and server
- XSS protection with React
- Secure headers configuration
- Regular dependency updates

## 📈 Performance

- Optimized bundle size
- Lazy loading for images
- Efficient CSS with CSS variables
- Minimal JavaScript footprint
- CDN-ready static assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions or support:
- Email: info@hausarzt-nord.at
- Phone: +43 1 234 56 789
- Address: Nordstraße 123, 1234 Vienna, Austria

## 🚀 Quick Start Checklist

- [ ] Install dependencies: `npm install`
- [ ] Start development server: `npm start`
- [ ] Configure Google Maps API key
- [ ] Update contact form endpoint
- [ ] Customize content for your practice
- [ ] Test on multiple devices
- [ ] Build for production: `npm run build`
- [ ] Deploy to hosting platform

---

Built with ❤️ for Hausarzt Nord
