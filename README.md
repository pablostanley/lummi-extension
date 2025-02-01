# Lummi New Tab Extension

A beautiful new tab experience with Lummi images, featuring:
- Dynamic background images from Lummi
- Google search with suggestions
- Customizable favorite links with icons
- Inspirational quotes
- Category-based image selection

## Installation Instructions

1. Download and unzip the extension file
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the unzipped folder
5. Open a new tab to see the extension in action!

## Development Workflow

When making changes to the extension:

1. Run the watch script to automatically rebuild on changes:
```bash
npm run watch
```

2. After each change:
   - Go to `chrome://extensions/`
   - Find "Lummi New Tab"
   - Click the refresh icon (🔄)
   - Open a new tab to see your changes

Note: Chrome caches extension files aggressively. If you don't see your changes:
1. Try toggling the extension off and on
2. Clear Chrome's cache for the extension:
   - Right-click the refresh icon
   - Select "Clear cache and reload"
3. As a last resort, remove and re-add the extension

## Features

- **Dynamic Backgrounds**: Beautiful images from Lummi that change every hour
- **Quick Search**: Google search with suggestions (⌘K to focus)
- **Favorite Links**: Add and customize your favorite websites
- **Categories**: Choose which types of images you want to see
- **Settings**: Easy customization (⌘, to open)

## Keyboard Shortcuts

- `⌘K` - Focus search
- `⌘,` - Open settings
- `Esc` - Close settings/suggestions

## Configuration

1. Replace `YOUR_API_KEY` in `src/App.tsx` with your Lummi API key
2. Customize the image categories in the settings dialog
3. Toggle quotes on/off as needed

## Development

To run the development server:
```bash
npm run dev
```

To build the extension:
```bash
npm run build
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Vite
- Lummi API for images
- quotable.io for quotes 