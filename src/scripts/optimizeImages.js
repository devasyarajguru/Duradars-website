// optimizeImages.js

// Import imagemin and imagemin-webp
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

// Define the optimization configuration
const optimizationConfig = {
  source: 'src/assets/*.{jpg,png}', // Path to the source images
  destination: 'src/assets/opimage', // Destination folder for optimized images
  plugins: [
    imageminWebp({ quality: 75 }) // Plugin configuration (e.g., quality)
  ]
};

// Function to optimize images
async function optimizeImages() {
  try {
    // Run imagemin with the specified configuration
    await imagemin([optimizationConfig.source], {
      destination: optimizationConfig.destination,
      plugins: optimizationConfig.plugins
    });

    console.log('Images optimized successfully 222');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

// Call the optimizeImages function to start the optimization process
optimizeImages();
