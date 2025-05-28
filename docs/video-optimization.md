# Video Optimization for Web

## Quick Start

Use the included script to optimize any video for web use:

```bash
./scripts/optimize-video.sh your-video.mp4 output-name
```

This creates two optimized versions:

- `output-name-optimized.mp4` (1080p, ~2MB)
- `output-name-720p.mp4` (720p, ~800KB)

## Using Optimized Videos in Hero Component

```astro
<Hero
  title="Your Title"
  description="Your description"
  backgroundVideoLocal="/output-name"
/>
```

The component automatically serves:

- 720p version for mobile devices (≤768px)
- 1080p version for desktop devices (>768px)
- Original fallback if optimized versions fail

## Manual Optimization

### 1080p Optimized Version

```bash
ffmpeg -i input.mp4 \
  -vcodec libx264 \
  -crf 25 \
  -preset fast \
  -vf "scale=1920:1080" \
  -an \
  -movflags +faststart \
  -pix_fmt yuv420p \
  output-optimized.mp4
```

### 720p Mobile Version

```bash
ffmpeg -i input.mp4 \
  -vcodec libx264 \
  -crf 28 \
  -preset fast \
  -vf "scale=1280:720" \
  -an \
  -movflags +faststart \
  -pix_fmt yuv420p \
  output-720p.mp4
```

## Key Optimizations

- **No Audio**: Removes audio track (`-an`) to reduce file size
- **Fast Start**: Moves metadata to beginning (`-movflags +faststart`) for faster streaming
- **Optimized Codec**: Uses H.264 with web-optimized settings
- **Responsive Loading**: Different qualities for different screen sizes
- **Autoplay Support**: Muted videos for autoplay compliance

## File Size Results

For a 10-second 1080p video:

- **Original**: 4.4MB
- **Optimized 1080p**: 2.4MB (45% smaller)
- **Mobile 720p**: 840KB (81% smaller)

## Browser Support

- **HTML5 Video**: All modern browsers
- **Autoplay**: Works when muted
- **Responsive Sources**: Chrome 38+, Firefox 38+, Safari 9+
