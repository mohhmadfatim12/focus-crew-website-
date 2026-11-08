# CLAUDE.md — Operating Rules for Claude Code & AI Agents (FocusCrew Website)

> [!IMPORTANT]
> # 🎯 MISSION & STRICT OPERATING DIRECTIVE
> This repository hosts the official landing page and direct APK distribution website for **FocusCrew**.
> The primary conversion goal is to provide a **flawless, 1-click download experience** for normal mobile Android users.

---

## 1. Distribution & MIME Type Rules (CRITICAL)
- **Direct APK Download**: The primary download button points to `/FocusCrew.apk` with `download="FocusCrew.apk"` and `type="application/vnd.android.package-archive"`.
- **Never Serve as ZIP**: An Android `.apk` is physically a zip container (`PK\x03\x04`). Mobile browsers (Samsung Internet, Chrome, Mi Browser) will inspect the file and append `.zip` unless explicit Android package headers are served:
  - `Content-Type: application/vnd.android.package-archive`
  - `Content-Disposition: attachment; filename="FocusCrew.apk"`
- **Header Configurations**:
  - `vercel.json` (Vercel edge headers)
  - `netlify.toml` (Netlify edge headers)
  - `public/_headers` (Cloudflare Pages headers)
  - `vite.config.ts` (Local development middleware)
  **DO NOT delete or alter these header rules.**

---

## 2. No Technical Jargon Policy
- Website visitors are normal everyday users trying to break phone addiction and quit pornography.
- **NEVER** introduce technical jargon, instructions about renaming `.zip` files, extracting archives, or modifying file extensions.
- The installation guide must remain 100% simple:
  1. Tap Download FocusCrew App.
  2. Tap the downloaded file to install.
  3. Allow permissions inside Android settings.

---

## 3. Tech Stack & Build Commands
- **Package Manager**: Use `pnpm` exclusively.
- **Build**: `pnpm build`
- **Dev**: `pnpm dev`
- **Lint**: `pnpm oxlint`
