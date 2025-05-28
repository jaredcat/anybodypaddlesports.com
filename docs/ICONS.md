# Icon Management in AnyBody Paddlesports

This document explains our build-time icon generation approach and why it's superior to raw SVG code.

## Problems with Raw SVG Code

The original approach of embedding SVG code directly in templates had several issues:

1. **Code Duplication**: Same icons copied across multiple files
2. **Hard to Maintain**: Changing an icon requires finding all instances
3. **Bundle Size**: Each SVG is duplicated in the output
4. **Inconsistency**: Easy to have slight variations
5. **No Type Safety**: No way to ensure icon names are valid

## Our Solution: Build-Time Icon Generation

We use a build-time script to generate TypeScript definitions from the official Heroicons library, providing the best developer experience with zero runtime overhead.

### Benefits

- ✅ **Perfect Type Safety**: TypeScript prevents invalid icon names
- ✅ **Zero Runtime Overhead**: Icons resolved at build time
- ✅ **Official Heroicons**: Always up-to-date with the latest icons
- ✅ **Optimal Bundle Size**: Only includes icons you actually use
- ✅ **Clean API**: Simple, React-like component interface
- ✅ **Automatic Updates**: Run script to sync with latest Heroicons

### Usage

```astro
---
import Icon from "@/components/Icon.astro";
---

<!-- Basic usage -->
<Icon name="phone" />

<!-- With custom size and styling -->
<Icon name="envelope" size="lg" class="text-blue-500" />

<!-- In a container -->
<div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
  <Icon name="map-pin" class="text-white" />
</div>
```

### Available Icons

Current icons in the generated set:

**Contact & Communication:**

- `phone` - Phone/telephone icon
- `envelope` - Email/envelope icon
- `map-pin` - Map pin/location icon

**UI & Navigation:**

- `users` - Group of people icon
- `cube` - 3D box/package icon
- `video-camera` - Video camera icon
- `check-solid` - Checkmark icon (solid)
- `shield-check` - Security/safety shield with check
- `bars-3` - Hamburger menu icon

**Activity & Experience:**

- `bolt` - Lightning/flexibility icon
- `face-smile` - Happy face/get wet icon
- `heart` - Heart/CPR icon
- `map` - Map/area knowledge icon
- `academic-cap` - Graduation cap/training icon
- `sun` - Sun/rescue icon
- `link` - Chain link/tow icon
- `arrow-up` - Up arrow/assist icon

**Social Media:**

- `facebook` - Facebook brand icon
- `instagram` - Instagram brand icon
- `youtube` - YouTube brand icon

### Type Safety in Action

```astro
<!-- ✅ This works -->
<Icon name="phone" />

<!-- ❌ This causes a TypeScript error -->
<Icon name="invalid-icon" />
```

The `IconName` type ensures you can only use valid icon names, preventing runtime errors.

## How It Works

### 1. Icon Generation Script

The `scripts/generate-icons.js` script:

1. Reads SVG files from the `heroicons` package
2. Generates a TypeScript file with icon definitions
3. Creates type-safe `IconName` union type
4. Embeds actual SVG content at build time

### 2. Icon Component

The `src/components/Icon.astro` component:

1. Imports generated icons and types
2. Provides size and styling props
3. Renders SVG with zero runtime overhead
4. Ensures type safety with `IconName` type

### 3. Build Integration

Icons are automatically generated during build:

```bash
npm run build  # Runs generate:icons first
npm run generate:icons  # Manual generation
```

## Adding New Icons

To add a new icon:

1. **Add to the script**: Edit `scripts/generate-icons.js` and add your icon to the `iconList` array:

```javascript
const iconList = [
  // ... existing icons
  { name: 'heart', type: 'outline' },
  { name: 'star', type: 'solid' },
];
```

2. **Regenerate**: Run the generation script:

```bash
npm run generate:icons
```

3. **Use it**: The new icon is now available with full type safety:

```astro
<Icon name="heart" class="text-red-500" />
```

## Performance Impact

This approach provides:

- **Smallest Bundle**: Only used icons are included
- **Zero Runtime Cost**: No JavaScript needed for icons
- **Perfect Caching**: Icons embedded in HTML
- **Optimal Compression**: Repeated SVG patterns compress well
- **Fast Builds**: Pre-resolved at build time

## Migration Notes

Successfully migrated all pages to use the generated approach:

- ✅ Contact page (`src/pages/contact.astro`)
- ✅ Home page (`src/pages/index.astro`)
- ✅ Book page (`src/pages/book.astro`)
- ✅ What to Expect page (`src/pages/what-to-expect.astro`)
- ✅ Header component (`src/components/Header.astro`)

## Icon Name Mappings

When migrating from the old hardcoded approach:

| Old Name | New Name |
|----------|----------|
| `mail` | `envelope` |
| `location-marker` | `map-pin` |
| `check` | `check-solid` |
| `shield` | `shield-check` |
| `menu` | `bars-3` |

## Why Not React Components?

React icon components would add 45KB+ overhead for static icons, defeating Astro's zero-JS philosophy. Our approach gives you the clean API of React components without any runtime cost.

This is the optimal solution for icons in Astro projects!

## About Social Media Icons

The social media icons (Facebook, Instagram, YouTube) are **custom brand icons** that are not available in Heroicons. These came from the original contact page where they were hardcoded as raw SVGs.

**Important Note**: The original Instagram icon was incorrect (showing circles instead of the proper camera/square icon). We've replaced it with the correct Instagram brand icon that shows the proper camera outline with a circle in the center and a dot in the upper right corner.

These icons are:

- **Facebook**: Official Facebook "f" logo
- **Instagram**: Proper camera/square icon (corrected from the original)
- **YouTube**: Official YouTube play button logo

All social media icons follow brand guidelines and are appropriate for use in "Follow us" contexts.
