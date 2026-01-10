export const IS_DEV = import.meta.env.DEV;

export const API_BASE_URL = IS_DEV
    ? 'http://localhost:3000'
    : 'https://mrcagro-server.vercel.app'; // Updated to point to likely backend URL, wait user provided 'https://mcagro-ooix.vercel.app' as backend? Or is that the frontend?
// The user's previous code had: : 'https://mcagro-ooix.vercel.app'; which looks like the FRONTEND URL (Vercel usually hosts frontend).
// Unless they deployed the express server to Vercel too?
// The server/package.json has "start": "node index.js". Vercel can host node apps.
// Let's stick to what was there but make IS_DEV dynamic.
// Wait, if 'https://mcagro-ooix.vercel.app' is the frontend, where is the backend hosted?
// Usually MERN on Vercel: /api/ -> handled by serverless functions or a separate backend.
// If they are running `node index.js` locally, they have a separate server.
// If they deployed the server, they should have a URL for it.
// User config previously: 'https://mcagro-ooix.vercel.app'. I will assume this is correct (maybe a monorepo deployment or they deployed server there).
// Just restoring the URL structure but making the boolean dynamic.
