Webpack Boilerplate (HTML, CSS, JS)
A lightweight and customizable Webpack boilerplate configured for building modern web applications using HTML, CSS, and JavaScript.

This boilerplate is pre-configured with Webpack to handle:

HTML (via html-webpack-plugin)
CSS (via style-loader and css-loader)
JavaScript (ES6+ with source maps for debugging)
Dev Server for live reloading and efficient development workflows.


Features
✅ Live Reloading: Instant browser updates using webpack-dev-server.
✅ CSS Support: Styles are processed and injected automatically.
✅ HTML Templates: Automatic generation of index.html.
✅ Asset Management: Handles images and static files.
✅ Source Maps: Better debugging with source maps.
✅ Production Build: Optimized and minified code for deployment.


Installation
Clone the Repository:
git clone https://github.com/yourusername/webpack-boilerplate.git
cd webpack-boilerplate


Install Dependencies:
npm install


Usage
Start Development Server:
npm run start
Runs the development server at http://localhost:8080


Build for Production:
npm run build
Outputs optimized files to the dist/ folder.


Project Structure

webpack-boilerplate/
├── dist/              # Compiled output (auto-generated)
├── src/               # Source files
│   ├── index.js       # JavaScript entry point
│   ├── styles/
│   │   ├── style.css  # Main CSS file
│   ├── assets/        # Images and other assets
│   ├── template.html  # HTML template
├── .gitignore         # Git ignored files
├── package.json       # Node.js dependencies
├── webpack.config.js  # Webpack configuration
└── README.md          # Documentation



Available Scripts
npm run start → Start Webpack Dev Server on http://localhost:8080
npm run build → Build the project for production into the dist/ folder
npm run clean → Remove old build files (if configured)


Dependencies
webpack → Bundler for JavaScript and assets.
webpack-cli → Command-line interface for Webpack.
webpack-dev-server → Development server with live reload.
html-webpack-plugin → Automatically generates index.html.
css-loader → Loads and processes CSS.
style-loader → Injects CSS into the DOM.
html-loader → Handles src attributes in HTML (e.g., images).




