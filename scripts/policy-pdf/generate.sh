#!/usr/bin/env bash
# Regenerate the letterhead PDFs for every drafted policy/disclosure.
# Requires: node_modules (esbuild) + python3 with reportlab & Pillow.
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$DIR/../.."
"$ROOT/node_modules/.bin/esbuild" "$DIR/dump-entry.ts" --bundle --format=esm --platform=node --outfile="$DIR/dump.mjs"
node "$DIR/dump.mjs" > "$DIR/policies.json"
python3 "$DIR/genpdf.py"
echo "Done. PDFs written to public/policies/"
