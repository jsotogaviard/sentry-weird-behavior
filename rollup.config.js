import { nodeResolve } from '@rollup/plugin-node-resolve';


export default {
    input: 'src/sentry-weird-behavior.js',
    output: { file: 'dist/sentry-weird-behavior.js', format: 'iife' },
    plugins: [nodeResolve()]
}