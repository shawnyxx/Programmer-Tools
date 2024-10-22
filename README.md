# Programmer Tools

A collection of useful tools for developers, built with React and Tailwind CSS. This web application includes various utilities to help streamline development workflows.

![Programmer Tools Screenshot](/api/placeholder/800/400)

## Features

### 1. Code Snippet Creator
- Create beautiful code snippets with custom styling
- Export snippets as PNG images
- Copy snippets directly to clipboard
- Adjustable preview width
- Responsive design for all screen sizes

### 2. JSON Formatter
- Format and validate JSON data
- Minify JSON
- Copy formatted JSON to clipboard
- Download formatted JSON as file
- Real-time error validation
- Split view layout (input/output)

### 3. Color Palette Generator (Coming Soon)
- Generate harmonious color schemes
- Export palettes in various formats
- Save and manage custom palettes

## Technologies Used

- React 18
- Tailwind CSS
- Lucide Icons
- HTML2Canvas
- Create React App

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (version 16 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/shawnyxx/programmer-tools.git
cd programmer-tools
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Project Structure

```
programmer-tools/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CodeSnippetCreator/
│   │   │   └── index.js
│   │   ├── JsonFormatter/
│   │   │   └── index.js
│   │   └── ToolCard/
│   │       └── index.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

## Usage

### Code Snippet Creator
1. Click on the "Code Snippet Creator" card
2. Paste or type your code in the input area
3. Click "Preview" to see how it looks
4. Use "Download PNG" to save as an image
5. Use "Copy to Clipboard" to copy the image

### JSON Formatter
1. Click on the "JSON Formatter" card
2. Paste your JSON in the input panel
3. Click "Format" to prettify or "Minify" to compress
4. Copy or download the formatted result
5. Check for any validation errors

## Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Authors

- Shawny
- GitHub: [@shawnyxx](https://github.com/shawnyxx)

- Crypt0zauruS
- GitHub: [@Crypt0zauruS](https://github/Crypt0zauruS)

## Acknowledgments

- Icons by [Lucide Icons](https://lucide.dev/)
- UI components inspired by [Tailwind CSS](https://tailwindcss.com/)
- HTML to Canvas conversion by [HTML2Canvas](https://html2canvas.hertzen.com/)
