# Lummi New Tab Extension

A beautiful Chrome extension that replaces your new tab page with stunning AI-generated images from Lummi.

## Features

- Beautiful AI-generated background images
- Daily inspirational quotes
- Quick search functionality
- Customizable favorite links
- Image category selection

## Installation

### From Chrome Web Store (Recommended)

1. Go to the [Chrome Web Store](https://chrome.google.com/webstore/detail/lummi-new-tab/[extension-id])
2. Click "Add to Chrome"
3. Confirm the installation

### Manual Installation (Developer Mode)

1. Download the latest release from the [GitHub Releases page](https://github.com/pablostanley/lummi-extension/releases)
2. Extract the ZIP file to a folder on your computer
3. Open Chrome and navigate to `chrome://extensions/`
4. Enable "Developer mode" by toggling the switch in the top right corner
5. Click "Load unpacked" and select the extracted folder
6. The extension should now be installed and active

## Environment Variables

This extension uses environment variables to securely store API keys. When deploying to Vercel, you need to set up the following environment variable:

- `LUMMI_API_KEY`: Your Lummi API key (obtained from [Lummi API Portal](https://www.lummi.ai/portal/developer))

To set up environment variables in Vercel:

1. Go to your project in the Vercel dashboard
2. Navigate to "Settings" > "Environment Variables"
3. Add the environment variables with their respective values
4. Redeploy your project

## Usage

- Open a new tab to see your beautiful Lummi new tab page
- Use the search bar to search Google
- Access your favorite links with a single click
- Click the settings icon (⚙️) in the top right to customize:
  - Toggle inspirational quotes
  - Select which image categories to display
  - Add or edit your favorite links
- Click the refresh icon (↻) in the top left to get a new background image

## Development

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/pablostanley/lummi-extension.git
   cd lummi-extension
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file in the root directory with your Lummi API key:
   ```
   LUMMI_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Build the extension:
   ```
   npm run build
   ```

6. Package the extension for distribution:
   ```
   npm run package
   ```
   This will create a `lummi-new-tab-extension.zip` file ready for submission to the Chrome Web Store.

## License

MIT

## Credits

- All images provided by [Lummi AI](https://lummi.ai)
- Icons and design by Pablo Stanley 