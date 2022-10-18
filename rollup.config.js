import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import reesolve from '@rollup/plugin-node-resolve';
import PeerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss'


export default {
  input: './index.ts',
  output: [
    {
      dir: "build",
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
  ],
  preserveModules: true,
  plugins: [
    PeerDepsExternal(),
    image(),
    reesolve(),
    commonjs({
      include: /node_modules/,
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extract: false,
      modules: true,
      use: ["css"]
    })
  ]
}