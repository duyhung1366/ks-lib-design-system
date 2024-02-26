// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import styles from "rollup-plugin-styles";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    external: ["react", "react-dom"],
    plugins: [
      peerDepsExternal(),
      resolve(),
      styles({
        mode: 'inject'
      }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser()
    ]
  },
  {
    input: "src/index.ts",
    output: [{ file: packageJson.types, format: "es" }],
    plugins: [dts.default()],
    external: [/\.(sass|scss|css)$/],
  },
];