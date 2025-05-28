#!/bin/bash

# Video optimization script for web
# Usage: ./scripts/optimize-video.sh input-video.mp4 output-name

if [ $# -ne 2 ]; then
  echo "Usage: $0 <input-video> <output-name>"
  echo "Example: $0 my-video.mp4 hero-background"
  exit 1
fi

INPUT="$1"
OUTPUT_NAME="$2"
OUTPUT_DIR="public"

echo "Optimizing video: $INPUT"
echo "Output name: $OUTPUT_NAME"

# Create optimized 1080p version
echo "Creating optimized 1080p version..."
ffmpeg -i "$INPUT" \
  -vcodec libx264 \
  -crf 27 \
  -preset fast \
  -vf "scale=1920:1080" \
  -an \
  -movflags +faststart \
  -pix_fmt yuv420p \
  "$OUTPUT_DIR/$OUTPUT_NAME-1080p.mp4"

# Create 720p version for mobile
echo "Creating 720p version for mobile..."
ffmpeg -i "$INPUT" \
  -vcodec libx264 \
  -crf 29 \
  -preset fast \
  -vf "scale=1280:720" \
  -an \
  -movflags +faststart \
  -pix_fmt yuv420p \
  "$OUTPUT_DIR/$OUTPUT_NAME-720p.mp4"

echo "Video optimization complete!"
echo "Files created:"
echo "- $OUTPUT_DIR/$OUTPUT_NAME-1080p.mp4 (1080p)"
echo "- $OUTPUT_DIR/$OUTPUT_NAME-720p.mp4 (720p)"
echo ""
echo "To use in Hero component:"
echo "backgroundVideoLocal=\"/$OUTPUT_NAME\""
