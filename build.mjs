import * as esbuild from "esbuild"

await esbuild.build({
  entryPoints: ["src/main.ts"],
  bundle: true,
  minify: true,
  legalComments: "none",
  platform: "node",
  target: "node20",
  external: [],
  format: "esm",
  outdir: "build",
})
