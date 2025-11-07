## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Run Locally Using Docker

```bash
# Test the frontend in Docker.
./test-docker.sh

# Run the React app locally.
npm run dev

# Run the backend server locally.
npx tsx backend/server.ts

# Complile all the TypeScript.
npx tsc
```

## Tips

#### `react-pdf`

If you see something like this:

> Failed to load PDF: The API version "5.4.296" does not match the Worker version "5.4.394".

Then you need to uninstall `pdfjs-dist` and install the version that matches `react-pdf`, in this case `5.4.296`. You would use these commands:

```bash
npm uninstall pdfjs-dist

npm install pdfjs-dist@5.4.296
```

# Legacy: Run and deploy your AI Studio app

> Note: This no longer works as it doesn't pull directly from GitHub and I have
> made edits.

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1P4IWVeQWVFeMBxfu9kgyYH1r1SSB3HVo
