#!/bin/bash
# Build ca 2 ban site: VI (song ngu, content/ -> public/) va EN (hoan toan tieng Anh,
# content-en/ -> public/en/), roi chen thanh chuyen ngon ngu vao moi trang HTML.
# Dung chung cho CI (deploy.yaml) va preview local.
set -euo pipefail
cd "$(dirname "$0")/.."

rm -rf public
npx quartz build -d content -o public
npx quartz build -d content-en -o public/en

# public/en/ nam long trong public/, nen 1 lan quet la du (script tu de quy vao subfolder)
node scripts/inject-language-switch.mjs public

echo "Build xong: public/ (VI song ngu) + public/en/ (EN)"
