import {build} from 'esbuild';
await build({entryPoints:['src/effects.jsx'],bundle:true,minify:true,format:'esm',define:{'process.env.NODE_ENV':'"production"'},outfile:'../public/biogas/effects.js'});
