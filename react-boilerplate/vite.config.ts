// vite.config.js
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 기본 포트 번호 설정
    strictPort: false, // 포트 충돌 시 다음 포트로 이동
    open: true, // 서버 시작 시 브라우저 자동으로 열기
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },

  // scss전역사용
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern", "legacy"
        includePaths: ["src/assets/scss"],
        additionalData: `@use "@/assets/scss/theme";`,
      },
    },
  },

  // 빌드 설정
  build: {
    minify: "esbuild", // CSS 압축 설정
    cssCodeSplit: true, // CSS 코드 분할 설정
  },
});
