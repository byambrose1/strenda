/* Videos. Paste a YouTube link (or just the video ID) next to each title.
   A title with no link shows a "coming soon" tile in the app.
   Titles must match exactly. The full list, with what to film, is in docs/FILMING.md.

   Example:
     'Sit to stand': 'videos/sit-to-stand.mp4',
*/
const VIDEOS = {
  'Sit to stand': 'https://youtube.com/shorts/Mqk40fPEND0',
  'Chair hip hinge': 'videos/chair-hip-hinge.mp4',
  'Chair-supported row': 'videos/chair-supported-row.mp4',
  'Dead bug': 'videos/dead-bug.mp4',
  'Glute bridge march': 'videos/glute-bridge-march.mp4',
  'Glute bridge': 'videos/glute-bridge.mp4',
  'Sit to stand, high seat': 'videos/sit-to-stand-high-seat.mp4',
  'Seated leg extension': 'videos/seated-leg-extension.mp4',
  'Single-arm seated row': 'https://youtube.com/shorts/cpvD4Dk48UE',
  'Seated chest press': 'https://youtube.com/shorts/tgaAfNVrSXY',
  'Seated overhead press': 'https://youtube.com/shorts/ajOUu7XCltY',
  'Seated reverse fly': 'https://youtube.com/shorts/FgAWfqFk7S0',
  'Weighted seated march': 'https://youtube.com/shorts/JMo8rpI6CQY',
  'Seated weighted bicycle': 'https://youtube.com/shorts/sW8L5sahY5g',
  'Seated double leg extension': 'videos/seated-double-leg-extension.mp4',
  'Seated weighted side bend': 'https://youtube.com/shorts/11ePHu42zzI',
  'Seated side taps': 'videos/seated-side-taps.mp4',
  'Seated row': 'https://youtube.com/shorts/91YU84_mwzc',
  'Seated march': 'videos/seated-march.mp4',
  'How to do the test': 'videos/sit-to-stand.mp4',  // same clip as Sit to stand
  'How to do the seated test': 'videos/seated-bicep-curl.mp4',  // seated bicep curls: the 30-second arm curl test
  'Goblet squat': 'https://youtube.com/shorts/7aF8AdOKeNg',
  'Kettlebell goblet squat': 'https://youtube.com/shorts/7aF8AdOKeNg',  // same movement
  'Romanian deadlift': 'https://youtube.com/shorts/MLMgKMsk22c',
  'Dumbbell Romanian deadlift': 'https://youtube.com/shorts/MLMgKMsk22c',  // gym members do the same movement
  'Split squat with chop': 'https://youtube.com/shorts/r_CZ19Kvz8Y',
  'Standing side reach': 'https://youtube.com/shorts/ubRX-toxEgs',
  'Bent-over row': 'videos/bent-over-row.mp4',
  'Reverse lunge': 'videos/reverse-lunge.mp4',
  'Lateral raise': 'videos/lateral-raise.mp4',
  'Weighted march': 'https://youtube.com/shorts/at_GjxHAkUE',
  'Push press': 'videos/push-press.mp4',
  'Overhead press': 'https://youtube.com/shorts/ZVlMA-BJ-q8',
  'Seated arm raise': 'https://youtube.com/shorts/LtN_K734ves',
  'Seated bicep curl': 'videos/seated-bicep-curl.mp4',
  'Seated knee lift': 'https://youtube.com/shorts/NAUjVqGeUbM',
  'Single-leg glute bridge': 'https://youtube.com/shorts/p7xeNkuDp2I',
  'Wall slide': 'https://youtube.com/shorts/R9TB6P5Aw0c',
  'Supported step-back': 'https://youtube.com/shorts/lgp_zQ1Paq4',
  'Wall press-up': 'https://youtube.com/shorts/WC31X5JfTMk',
  'Bodyweight squat': 'videos/bodyweight-squat.mp4'
};
if (typeof module !== 'undefined') module.exports = VIDEOS;
