# Maharagama Toastmasters Club Website

A modern, responsive website for the Maharagama Toastmasters Club built with pure HTML, CSS, and JavaScript.

## Features

- **Dark Theme Design**: Professional dark theme with Toastmasters brand colors
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Navigation**: Smooth scrolling and mobile-friendly navigation
- **Contact Form**: Functional contact form with validation
- **Memories Gallery**: Filterable photo gallery with lightbox functionality
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Performance**: Optimized images and lazy loading

## File Structure

\`\`\`
├── index.html              # Main landing page
├── memories.html           # Photo gallery page
├── css/
│   ├── styles.css         # Main stylesheet
│   └── memories.css       # Gallery-specific styles
├── js/
│   ├── main.js           # Main JavaScript functionality
│   └── memories.js       # Gallery functionality
├── assets/
│   ├── images/           # Website images
│   │   ├── toastmasters-meeting.jpg
│   │   └── memories/     # Gallery images
│   └── favicon.ico       # Website favicon
└── README.md             # This file
\`\`\`

## Setup Instructions

1. **Download/Clone** the project files
2. **Replace placeholder images** in the `assets/images/` folder with actual club photos
3. **Update contact information** in `index.html` and `memories.html`
4. **Customize content** to match your club's specific details
5. **Upload to hosting** service (Netlify, Vercel, GitHub Pages, etc.)

## Customization

### Colors
The website uses CSS custom properties for easy color customization. Edit these in `css/styles.css`:

\`\`\`css
:root {
    --primary-bg: #0B1220;      /* Main background */
    --secondary-bg: #0E1217;    /* Card backgrounds */
    --accent-maroon: #772432;   /* Primary accent */
    --accent-navy: #004165;     /* Secondary accent */
    --accent-gold: #B7A57A;     /* Highlight color */
}
\`\`\`

### Content
- Update club information in `index.html`
- Replace contact details with actual information
- Add real social media links
- Update meeting times and venue details

### Images
Replace placeholder images with actual club photos:
- `assets/images/toastmasters-meeting.jpg` - Hero background
- `assets/images/memories/` - Gallery photos
- Update image paths in `js/memories.js`

## Hosting Options

### Netlify (Recommended)
1. Drag and drop the project folder to [Netlify](https://netlify.com)
2. Your site will be live instantly with a custom URL

### Vercel
1. Upload to [Vercel](https://vercel.com)
2. Connect your GitHub repository for automatic deployments

### GitHub Pages
1. Create a GitHub repository
2. Upload files and enable GitHub Pages in settings
3. Your site will be available at `username.github.io/repository-name`

### Traditional Web Hosting
Upload all files to your web hosting provider's public folder (usually `public_html` or `www`).

## Contact Form Integration

The contact form currently shows a success message. To make it functional:

### Option 1: EmailJS (Recommended)
1. Sign up at [EmailJS](https://emailjs.com)
2. Add the EmailJS library to your HTML
3. Configure the `sendEmail()` function in `js/main.js`

### Option 2: Formspree
1. Sign up at [Formspree](https://formspree.io)
2. Update the form action attribute with your Formspree endpoint

### Option 3: Netlify Forms
If hosting on Netlify, add `netlify` attribute to the form tag.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Optimize Images**: Compress images before uploading
2. **Use WebP Format**: Convert images to WebP for better compression
3. **Enable Gzip**: Configure your server to enable gzip compression
4. **CDN**: Use a CDN for faster global loading

## Accessibility Features

- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast colors
- Focus indicators
- Alt text for images

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, contact the Maharagama Toastmasters Club at:
- Email: maharagama.toastmasters@example.com
- Website: [Your Website URL]

---

Built with ❤️ for the Maharagama Toastmasters Club
