import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import sucrase from '@rollup/plugin-sucrase';
import svgr from '@svgr/rollup';
import css from 'rollup-plugin-import-css';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

const packageJson = require('./package.json');

export default {
	plugins: [
		peerDepsExternal(),
		resolve(),
		commonjs({
			include: 'node_modules/**',
			namedExports: {
				'node_modules/react-is/index.js': ['isMemo']
			}
		}),
		typescript({ tsconfig: 'tsconfig.rollup.json', useTsconfigDeclarationDir: true }),
		sucrase({
			exclude: ['node_modules/**'],
			transforms: ['typescript', 'jsx']
		}),
		css(),
		image(),
		svgr()
	],
	moduleContext: {
		'./node_modules/react-icons/lib/esm/iconBase.js': 'window'
	},
    external: ['rc-util', 'rc-util/es/hooks/useState'],
	input: 'src/index.ts',
	output: [
		{
			file: packageJson.main,
			format: 'cjs',
			sourcemap: true
		},
		{
			file: packageJson.module,
			format: 'esm',
			sourcemap: true
		}
	]
};
