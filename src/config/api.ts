export const IS_DEV = false; // Set to true for development (localhost), false for production

export const API_BASE_URL = IS_DEV
    ? 'http://localhost:3000'
    : 'https://mcagro-ooix.vercel.app';
