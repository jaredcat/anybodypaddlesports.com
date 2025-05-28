# AnyBody Paddlesports

A modern, static website for paddle board tours and equipment rentals built with Astro and Tailwind CSS.

## 🚀 Project Structure

Inside this Astro project, you'll see the following folders and files:

```
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── Layout.astro
│   ├── config/
│   │   ├── site.ts
│   │   └── locations.ts
│   ├── pages/
│   │   ├── index.astro
│   │   ├── book.astro
│   │   ├── contact.astro
│   │   ├── locations.astro
│   │   └── what-to-expect.astro
│   └── styles/
│       └── global.css
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`     |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run deploy`          | Build and deploy to GitHub Pages                |

## 📦 Deployment

This site is configured for deployment to GitHub Pages:

1. Update `site` and `base` in `astro.config.mjs` with your GitHub Pages URL
2. Enable GitHub Pages in your repository settings
3. Push to the `main` branch to trigger automatic deployment

## ⚙️ Configuration

### Site Settings

Update `src/config/site.ts` with your contact information and Cal.com booking links.

### Locations

Modify `src/config/locations.ts` to add, remove, or update location information.

### Styling

The site uses Tailwind CSS with custom color schemes defined in `tailwind.config.mjs`. Update the primary and accent colors to match your brand.

### Cal.com Integration

1. Create your Cal.com account and set up event types for tours and rentals
2. Update the booking URLs in `src/config/site.ts`
3. Optionally embed Cal.com widgets directly in the booking page

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Performance**: Static generation with Astro for fast loading
- **Accessibility**: WCAG compliant with proper ARIA labels
- **TypeScript**: Full TypeScript support with strict configuration
- **Easy Configuration**: Centralized config files for easy updates

## 📝 Content Management

All content is managed through TypeScript configuration files:

- Contact information: `src/config/site.ts`
- Location data: `src/config/locations.ts`
- Navigation and footer: `src/components/Header.astro` and `src/components/Footer.astro`

## 🔧 Customization

### Adding New Locations

1. Add location data to `src/config/locations.ts`
2. Location cards will automatically appear on the homepage and locations page

### Booking Integration

The booking page is set up to integrate with Cal.com. Replace the placeholder links in `src/config/site.ts` with your actual Cal.com event URLs.

### Color Scheme

Update the color palette in `tailwind.config.mjs` to match your brand colors.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request
