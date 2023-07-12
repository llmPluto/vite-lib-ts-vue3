/**
 * @description 项目模式
 */
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

/**
 * @description 库模式
 */
import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import fs from "fs";
import { libInjectCss, scanEntries } from "vite-plugin-lib-inject-css";

const files = fs.readdirSync(resolve(__dirname, "packages/components"));
const pathMap: { [name: string]: string } = {};
files.forEach((key) => {
  pathMap[`components/${key}/index`] =
    resolve(__dirname, "packages/components") + `/${key}/index.ts`;
});

const compCssMap = (() => {
  const tempMap: { [key: string]: string | undefined } = {};
  Object.keys(pathMap).forEach((key) => {
    tempMap[key] = undefined;
  });
  return tempMap;
})();

export default defineConfig({
  plugins: [vue(), libInjectCss()],
  css: {
    preprocessorOptions: {
      less: {},
    },
  },
  build: {
    // 严格分割每个样式文件
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      // entry: pathList,
      entry: {
        index: resolve(__dirname, "packages/index.ts"),
        ...pathMap,
      },
      // formats: ["cjs", "es"],
      formats: ["es"],
      // name: "MyLib",
      // the proper extensions will be added
      // 默认
      fileName: "[name]",
    },
    rollupOptions: {
      treeshake: true,
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        // globals: {
        //   vue: "Vue",
        // },
        dir: "lib",
        /**
         * @description 以下代码是网目标组件文件夹下放置对应的index.css，目前也是临时方案
         */
        assetFileNames: (chunkInfo) => {
          const keys = Object.keys(compCssMap);
          let name = chunkInfo.name;

          if (chunkInfo.name.endsWith(".css")) {
            keys.some((key) => {
              if (!compCssMap[key]) {
                const arr = key.split("/");
                arr.splice(arr.length - 1, 1, "index.css");
                name = arr.join("/");
                compCssMap[key] = name;
                return true;
              }
              return false;
            });
          }
          return name;
        },
      },
    },
  },
});
