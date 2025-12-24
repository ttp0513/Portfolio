import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite"; 
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // Add react, tailwind to use them in the profject
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Creates a path alias so that @ always points to project’s src folder.
    },
  },
});


