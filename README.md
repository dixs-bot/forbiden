# Access Restricted Page - Premium Next.js 15 Project Structure

This directory contains a complete, production-ready, premium "Access Restricted" (403 Error / Internal Only) page structure designed for modern Next.js 15 applications using React, Tailwind CSS, Framer Motion, and Lucide React.

## Project Structure

```text
/home/appuser/work/6a2430056ae82ddfd8f44667/6a25bc726dfd6c9bce0b3f64/
├── app/
│   ├── page.tsx                   # Main Access Restricted Client Page with SEO & text specs
│   └── globals.css                # Global Tailwind CSS Imports
├── components/
│   ├── AnimatedBackground.tsx     # Custom SVG noise overlay + fluid radial glow loops
│   ├── FloatingParticles.tsx      # Particle effect and premium background grid backdrop
│   ├── SecurityShield.tsx         # Interactive security badge featuring glowing Lucide Shields
│   └── StatusBadge.tsx            # Highly polished glowing status '🔒 403 • Internal Access Only'
├── package.json                   # Dependency Configuration
├── tsconfig.json                  # TypeScript Compiler Settings
├── tailwind.config.js             # Tailwind CSS Settings
├── postcss.config.js              # PostCSS Plugins
└── next.config.ts                 # Next.js Config
```

---

## File Details

### 1. Main Page Component (`app/page.tsx`)
- **Type**: `'use client'`
- **SEO & Layout**: Uses embedded `<title>` tags for proper document indexing (`Access Restricted | Secure System`). Designed solely in Dark Mode using Vercel, Linear, and Stripe-inspired layouts.
- **Glassmorphism**: Built inside a high-end glass container utilizing Tailwind's `backdrop-blur-xl`, `bg-zinc-950/60`, and refined borders.
- **Animation**: Leverages custom Framer Motion staggered entrance animations (`staggerChildren: 0.15`) with bespoke cubic-bezier transitions for smooth component load.
- **Copy Alignment**:
  - Small Badge: `SECURE INTERNAL SYSTEM`
  - Headline: `Access Restricted`
  - Subtitle: `Mohon maaf, project ini tidak dapat diakses secara publik.`
  - Main Description: `Untuk menjaga keamanan database, API, dan informasi internal perusahaan, akses ke sistem ini dibatasi hanya untuk personel yang memiliki otorisasi resmi.`
  - Secondary Text: `Jika Anda merasa memiliki hak akses, silakan hubungi administrator sistem.`
  - Blinking indicator: `System Secure` (glowing green pulsing dot)
  - Footer: `Protected by Company Security Policy Unauthorized access is prohibited.` separated by modern divider graphics.

### 2. Animated Background (`components/AnimatedBackground.tsx`)
- Contains smooth, slow-moving radial light sources loops utilizing CSS & Framer Motion keyframe arrays.
- Employs a super high-quality visual noise texture generated via an optimized inline data-URI SVG:
  ```css
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' ...")
  ```

### 3. Floating Particles (`components/FloatingParticles.tsx`)
- Spawns custom Framer Motion dynamic glowing nodes drift animations starting from negative delays to ensure seamless loading.
- Features a fine-lined background pixel grid overlay to reinforce a developer-centric security environment.

### 4. Security Shield (`components/SecurityShield.tsx`)
- Houses the Lucide React `Shield` icon inside concentric breathing rings.
- Uses pulse borders and multiple layers of box shadow transitions mapped to Framer Motion parameters for a real-time reactive posture.

### 5. Status Badge (`components/StatusBadge.tsx`)
- Implements a prominent floating pill showing `🔒 403 • Internal Access Only`.
- Features an active blinking red signal with a radial aura highlighting its secure state.

---

## Technical Features

1. **TypeScript & Tailored Types**: Hand-crafted type-safe structures natively compliant with TypeScript 5.x.
2. **Next.js 15 Prepared**: Standard file routing integration utilizing Client-Side Rendering with SEO overrides.
3. **Optimized Animations**: Complete GPU-accelerated motion paths that prevent layout reflows during load sequences.
