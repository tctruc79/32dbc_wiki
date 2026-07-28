#!/usr/bin/env node
// Chen thanh chuyen ngon ngu (VI song ngu <-> EN) vao moi trang HTML da build.
// Ly do dung cach nay thay vi Quartz component/plugin "chuan": quartz.ts's `layout`
// override khong duoc build pipeline cua repo nay doc (loadQuartzConfig() tu goi
// loadQuartzLayout() noi bo, khong nhan override) -- xem log.md 2026-07-28 de biet chi tiet
// dieu tra. Script nay chay sau moi lan `npx quartz build`, doc lai --basepath tu attribute
// data-basepath ma Quartz da nhung san trong <body>, nen hoat dong dung voi ca 2 cay build
// (public/vi/ va public/en/) ma khong can biet dang build cay nao.
import { readdir, readFile, writeFile } from "fs/promises"
import { join } from "path"

const SNIPPET_MARKER = "id=\"lang-switch-bar\""
// Trang redirect o public/index.html (xem build-site.sh) khong phai trang Quartz that,
// khong co data-basepath -- bo qua, khong chen switcher vao do.
const SKIP_MARKER = "http-equiv=\"refresh\""

const SNIPPET = `<div id="lang-switch-bar" style="position:sticky;top:0;z-index:1000;display:flex;justify-content:flex-end;padding:.35rem .75rem;background:var(--light,#faf8f8);border-bottom:1px solid var(--lightgray,#e5e5e5);">
<a id="language-switch-link" href="#" style="display:inline-flex;align-items:center;gap:.3rem;font-size:.85rem;text-decoration:none;color:var(--dark,#2b2b2b);border:1px solid var(--lightgray,#e5e5e5);border-radius:8px;padding:.15rem .6rem;">🌐</a>
</div>
<script>(function(){function setup(){var link=document.getElementById("language-switch-link");if(!link)return;var siteRoot=document.body.dataset.basepath||"";var path=window.location.pathname;var rel=siteRoot&&path.indexOf(siteRoot)===0?path.slice(siteRoot.length):path;var enMatch=rel.match(/^\\/en(\\/.*|)$/);var viMatch=rel.match(/^\\/vi(\\/.*|)$/);if(enMatch){link.href=siteRoot+"/vi"+(enMatch[1]||"/");link.textContent="🇻🇳 Tiếng Việt";link.title="Chuyển sang bản song ngữ (VI)";}else if(viMatch){link.href=siteRoot+"/en"+(viMatch[1]||"/");link.textContent="🇬🇧 English";link.title="Switch to full-English version";}else{link.href=siteRoot+"/en/";link.textContent="🇬🇧 English";link.title="Switch to full-English version";}}setup();document.addEventListener("nav",setup);document.addEventListener("render",setup);})();</script>
`

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(full)))
    } else if (entry.name.endsWith(".html")) {
      files.push(full)
    }
  }
  return files
}

async function main() {
  const targetDir = process.argv[2]
  if (!targetDir) {
    console.error("Usage: node inject-language-switch.mjs <build-output-dir>")
    process.exit(1)
  }
  const files = await walk(targetDir)
  let injected = 0
  for (const file of files) {
    const html = await readFile(file, "utf8")
    if (html.includes(SNIPPET_MARKER) || html.includes(SKIP_MARKER)) continue
    const patched = html.replace(/(<body[^>]*>)/, `$1\n${SNIPPET}`)
    if (patched === html) continue
    await writeFile(file, patched, "utf8")
    injected++
  }
  console.log(`Injected language switcher into ${injected}/${files.length} HTML files in ${targetDir}`)
}

main()
