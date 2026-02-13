import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // WICHTIG: Muss exakt mit dem GitHub-Repository-Namen übereinstimmen (Case-sensitive)
  base: '/StandardmodellDerPhysik/',
})