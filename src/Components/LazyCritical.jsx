import { useEffect } from 'react';

function LazyCritical() {
  useEffect(() => {
    // Array of non-critical CSS file paths
    const nonCriticalCSSFiles = [
      '../CSS/AboutSec.css',
      '../CSS/ServiceSec.css',
      '../CSS/Why.css',
      '../CSS/Contact.css',
      // Add more paths as needed
    ];

    // Dynamically import each non-critical CSS file
    nonCriticalCSSFiles.forEach((filePath) => {
      import(filePath)
        .then(() => {
          console.log(`Non-critical CSS (${filePath}) loaded`);
        })
        .catch((error) => {
          console.error(`Error loading non-critical CSS (${filePath}):`, error);
        });
    });
  }, []); // Empty dependency array ensures this effect runs only once, like componentDidMount

  return null; // Render nothing
}

export default LazyCritical;
