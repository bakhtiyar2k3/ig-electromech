#!/usr/bin/env bash
set -e
SRC_DIR="./video-source"
OUT_DIR="./public/videos"
POSTER_DIR="$OUT_DIR/posters"

mkdir -p "$OUT_DIR" "$POSTER_DIR"

for f in "$SRC_DIR"/*.mp4; do
  [ -e "$f" ] || continue
  fname=$(basename "$f")
  name="${fname%.*}"
  echo "Processing: $fname"

  # 720p WebM (VP9)
  ffmpeg -y -i "$f" -vf "scale=-2:720" -c:v libvpx-vp9 -b:v 0 -crf 32 -c:a libopus "$OUT_DIR/${name}-720.webm"

  # 720p MP4 (H.264) - good fallback for Safari
  ffmpeg -y -i "$f" -vf "scale=-2:720" -c:v libx264 -preset medium -crf 24 -c:a aac -b:a 96k -movflags +faststart "$OUT_DIR/${name}-720.mp4"

  # 480p WebM (mobile)
  ffmpeg -y -i "$f" -vf "scale=-2:480" -c:v libvpx-vp9 -b:v 0 -crf 34 -c:a libopus "$OUT_DIR/${name}-480.webm"

  # 480p MP4 (mobile fallback)
  ffmpeg -y -i "$f" -vf "scale=-2:480" -c:v libx264 -preset medium -crf 26 -c:a aac -b:a 64k -movflags +faststart "$OUT_DIR/${name}-480.mp4"

  # Poster (single frame at 1s)
  ffmpeg -y -i "$f" -ss 00:00:01 -vframes 1 -q:v 2 "$POSTER_DIR/${name}.jpg"

  # Print sizes
  ls -lh "$OUT_DIR/${name}-"* | sed -n '1,4p'
done

echo "Done. Optimized files are in $OUT_DIR and posters in $POSTER_DIR"
