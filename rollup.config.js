import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default [
    {
        input: "src/index.js",
        output: [
            {
                file: "dist/cjs/index.js",
                format: "cjs",
                sourcemap: true
            },
            {
                file: "dist/esm/index.js",
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            babel({
                exclude: "node_modules/**",
                presets: ["@babel/env", "@babel/preset-react"],
                babelHelpers: "bundled"
            }),
            commonjs(),
            postcss(),
            terser()
        ],
    },
    {
        input: "dist/esm/index.js",
        output: [
            { 
                file: "dist/index.js", 
                format: "esm"
            }
        ],
        external: [/\.css$/, "react"]
    }
];