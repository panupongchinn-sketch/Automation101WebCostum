import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  ssr: false, // ✅ สำคัญมาก กัน prerender / พังตอน build

  nitro: { preset: "static" },

  css: ["./app/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },

  runtimeConfig: {
    public: {
      supabaseUrl: "",
      supabaseKey: "",
    },
  },
});
