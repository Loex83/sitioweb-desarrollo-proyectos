import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/sitioweb-desarrollo-proyectos/dashboard/',
  plugins: [react()]
});
