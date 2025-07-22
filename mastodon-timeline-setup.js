const myTimeline = new MastodonTimeline.Init({
  mtContainerId: 'mt-container',
  instanceUrl: 'https://hachyderm.io', // Change this to your preferred instance
  timelineType: 'profile', // or 'hashtag' or 'profile'
  userId: '109858074080091787',
  profileName: '@R_Forwards',
  maxNbPostShow: '10',
  maxNbPostFetch: '10',
  insistSearchContainer: true, // This helps with timing issues
  insistSearchContainerTime: '5000' // Wait up to 5 seconds for container
});

        // Function to detect current Quarto theme
        function detectQuartoTheme() {
            // Method 1: Check for Quarto's theme class on html or body
            if (document.documentElement.getAttribute('data-bs-theme') === 'dark' ||
                document.body.classList.contains('quarto-dark') ||
                document.documentElement.classList.contains('quarto-dark')) {
                return 'dark';
            }
            
            // Method 2: Check for dark mode in CSS custom properties
            const computedStyle = getComputedStyle(document.documentElement);
            const bgColor = computedStyle.getPropertyValue('--bs-body-bg') || 
                           computedStyle.getPropertyValue('background-color');
            
            // If background is dark, assume dark theme
            if (bgColor && (bgColor.includes('rgb(') || bgColor.includes('#'))) {
                // Simple heuristic: convert to grayscale and check brightness
                const isDark = isColorDark(bgColor);
                return isDark ? 'dark' : 'light';
            }
            
            // Method 3: Check CSS media query preference
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
            
            return 'light';
        }

        // Helper function to determine if a color is dark
        function isColorDark(color) {
            // Convert color to RGB values
            let r, g, b;
            
            if (color.startsWith('#')) {
                // Hex color
                const hex = color.slice(1);
                r = parseInt(hex.substr(0, 2), 16);
                g = parseInt(hex.substr(2, 2), 16);
                b = parseInt(hex.substr(4, 2), 16);
            } else if (color.startsWith('rgb')) {
                // RGB color
                const matches = color.match(/\d+/g);
                if (matches && matches.length >= 3) {
                    r = parseInt(matches[0]);
                    g = parseInt(matches[1]);
                    b = parseInt(matches[2]);
                } else {
                    return false; // Default to light if can't parse
                }
            } else {
                return false; // Unknown format, default to light
            }
            
            // Calculate luminance
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            return luminance < 0.5; // Dark if luminance is less than 50%
        }

        // Function to sync timeline theme with Quarto theme
        function syncTimelineTheme() {
            const currentTheme = detectQuartoTheme();
            myTimeline.mtColorTheme(currentTheme);
        }

        // Set up theme synchronization
        function setupThemeSync() {
            // Initial sync
            syncTimelineTheme();
            
            // Method 1: Watch for changes to data-bs-theme attribute (Bootstrap-based Quarto)
            if (document.documentElement.hasAttribute('data-bs-theme')) {
                const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                        if (mutation.type === 'attributes' && 
                            mutation.attributeName === 'data-bs-theme') {
                            syncTimelineTheme();
                        }
                    });
                });
                
                observer.observe(document.documentElement, {
                    attributes: true,
                    attributeFilter: ['data-bs-theme']
                });
            }
            
            // Method 2: Watch for class changes on body or html
            const classObserver = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && 
                        mutation.attributeName === 'class') {
                        syncTimelineTheme();
                    }
                });
            });
            
            classObserver.observe(document.body, {
                attributes: true,
                attributeFilter: ['class']
            });
            
            classObserver.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['class']
            });
            
            // Method 3: Listen for custom events (if your Quarto site dispatches them)
            document.addEventListener('quartoThemeChanged', syncTimelineTheme);
            
            // Method 4: Poll for changes (fallback method)
            let lastTheme = detectQuartoTheme();
            setInterval(() => {
                const currentTheme = detectQuartoTheme();
                if (currentTheme !== lastTheme) {
                    syncTimelineTheme();
                    lastTheme = currentTheme;
                }
            }, 1000); // Check every second
        }

        // Initialize theme synchronization when the timeline is ready
        setTimeout(setupThemeSync, 1000);
