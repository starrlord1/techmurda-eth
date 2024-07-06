import defineConfig from '@vitejs/plugin-react';
import react from '@vitejs/plugin-react';
import viteBasicSslPlugin from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default ({
  plugins: [react(), viteBasicSslPlugin()],
    build: {
      outDir: './docs'
    },
    base: './'
});
