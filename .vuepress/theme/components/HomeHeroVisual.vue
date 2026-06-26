<template>
  <svg class="home-hero-visual" viewBox="0 0 420 420" role="img" aria-labelledby="home-hero-visual-title" xmlns="http://www.w3.org/2000/svg">
    <title id="home-hero-visual-title">A colorful ringed mission planet with terminal windows running Lando commands.</title>
    <defs>
      <radialGradient id="heroPlanetGradient" cx="26%" cy="24%" r="82%">
        <stop offset="0%" stop-color="#F56EB3" />
        <stop offset="48%" stop-color="#DD3F8F" />
        <stop offset="100%" stop-color="#412B6B" />
      </radialGradient>
      <linearGradient id="heroRingGradient" x1="46" x2="374" y1="158" y2="260">
        <stop stop-color="#43D9FF" stop-opacity=".9" />
        <stop offset=".42" stop-color="#FFFFFF" stop-opacity=".9" />
        <stop offset=".72" stop-color="#DEDB8E" stop-opacity=".95" />
        <stop offset="1" stop-color="#DD3F8F" stop-opacity=".72" />
      </linearGradient>
      <filter id="heroGlow" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="16" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <clipPath id="heroPlanetClip">
        <circle cx="210" cy="210" r="124" />
      </clipPath>
    </defs>
    <g class="stars">
      <circle cx="68" cy="112" r="4" fill="#FFFFFF" opacity=".85" />
      <circle cx="348" cy="91" r="3.5" fill="#43D9FF" opacity=".9" />
      <circle cx="357" cy="303" r="4" fill="#FFFFFF" opacity=".75" />
      <path d="M102 318l4 9 9 4-9 4-4 9-4-9-9-4 9-4 4-9Z" fill="#DEDB8E" />
      <path d="M306 55l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" fill="#FFFFFF" opacity=".85" />
      <path d="M61 244l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" fill="#43D9FF" opacity=".72" />
    </g>
    <ellipse cx="210" cy="210" rx="176" ry="70" fill="none" stroke="#794993" stroke-width="2" stroke-dasharray="7 13" opacity=".5" transform="rotate(17 210 210)" />
    <ellipse class="planet-ring ring-back" cx="210" cy="210" rx="164" ry="55" fill="none" stroke="url(#heroRingGradient)" stroke-linecap="round" stroke-width="16" opacity=".82" transform="rotate(-15 210 210)" />
    <g class="mission-planet" filter="url(#heroGlow)">
      <circle cx="210" cy="210" r="124" fill="url(#heroPlanetGradient)" />
      <g clip-path="url(#heroPlanetClip)">
        <path d="M83 194c48-26 92-11 134 2 47 15 86 11 128-20 7 21 8 42 3 64-42 27-92 32-147 15-43-14-76-25-123-3-3-21-1-41 5-58Z" fill="#C9287A" />
        <path d="M95 145c35-16 63-3 96 1 32 4 56-14 80-33 22 11 42 27 56 48-37 27-76 36-122 24-43-11-68-24-120-1 2-14 5-27 10-39Z" fill="#F56EB3" opacity=".9" />
        <path d="M105 276c41-14 75 2 111 11 40 10 81 1 113-27-16 43-53 74-99 82-43 7-86-8-115-39-5-8-8-17-10-27Z" fill="#412B6B" opacity=".82" />
        <path d="M101 229c45-13 84-1 126 8 43 9 82 3 120-18" fill="none" stroke="#43D9FF" stroke-linecap="round" stroke-width="9" opacity=".75" />
        <path d="M127 321c44-22 83-4 124 4 25 5 48 2 70-9" fill="none" stroke="#DEDB8E" stroke-linecap="round" stroke-width="10" opacity=".56" />
        <circle cx="172" cy="154" r="13" fill="#FFFFFF" opacity=".45" />
        <circle cx="276" cy="261" r="11" fill="#FFFFFF" opacity=".32" />
        <circle cx="254" cy="133" r="6" fill="#DEDB8E" opacity=".7" />
      </g>
    </g>
    <path class="planet-ring ring-front" d="M51 215c44 47 127 76 216 69 47-4 86-18 116-40" fill="none" stroke="url(#heroRingGradient)" stroke-linecap="round" stroke-width="16" opacity=".95" />
    <g class="hero-terminal terminal-init" transform="translate(248 87) rotate(8)">
      <g class="terminal-card">
        <rect x="0" y="0" width="132" height="62" rx="13" fill="#1F1629" opacity=".92" />
        <path d="M0 13c0-7.2 5.8-13 13-13h106c7.2 0 13 5.8 13 13v8H0v-8Z" fill="#412B6B" />
        <circle cx="16" cy="10.5" r="3" fill="#DD3F8F" />
        <circle cx="27" cy="10.5" r="3" fill="#DEDB8E" />
        <circle cx="38" cy="10.5" r="3" fill="#43D9FF" />
        <text x="14" y="39" fill="#FFFFFF" font-family="Menlo, Monaco, Consolas, monospace" font-size="10.5" font-weight="700">$ lando init</text>
        <path d="M14 50h46" stroke="#DEDB8E" stroke-linecap="round" stroke-width="3" opacity=".72" />
        <path d="M68 50h23" stroke="#43D9FF" stroke-linecap="round" stroke-width="3" opacity=".68" />
      </g>
    </g>
    <g class="hero-terminal terminal-start" transform="translate(53 290) rotate(-7)">
      <g class="terminal-card">
        <rect x="0" y="0" width="176" height="82" rx="16" fill="#1F1629" opacity=".96" />
        <rect x="0" y="0" width="176" height="24" rx="16" fill="#412B6B" />
        <path d="M0 16c0-8.8 7.2-16 16-16h144c8.8 0 16 7.2 16 16v8H0v-8Z" fill="#412B6B" />
        <circle cx="20" cy="12" r="4" fill="#DD3F8F" />
        <circle cx="34" cy="12" r="4" fill="#DEDB8E" />
        <circle cx="48" cy="12" r="4" fill="#43D9FF" />
        <text x="17" y="51" fill="#FFFFFF" font-family="Menlo, Monaco, Consolas, monospace" font-size="14" font-weight="700">$ lando start</text>
        <rect class="terminal-caret" x="127" y="39" width="6" height="16" rx="2" fill="#43D9FF" opacity=".72" />
        <path d="M18 66h73" stroke="#DEDB8E" stroke-linecap="round" stroke-width="4" opacity=".8" />
        <path d="M102 66h28" stroke="#43D9FF" stroke-linecap="round" stroke-width="4" opacity=".7" />
      </g>
    </g>
    <g class="hero-terminal terminal-pull" transform="translate(251 304) rotate(7)">
      <g class="terminal-card">
        <rect x="0" y="0" width="137" height="64" rx="13" fill="#1F1629" opacity=".94" />
        <path d="M0 13c0-7.2 5.8-13 13-13h111c7.2 0 13 5.8 13 13v8H0v-8Z" fill="#412B6B" />
        <circle cx="16" cy="10.5" r="3" fill="#DD3F8F" />
        <circle cx="27" cy="10.5" r="3" fill="#DEDB8E" />
        <circle cx="38" cy="10.5" r="3" fill="#43D9FF" />
        <text x="14" y="40" fill="#FFFFFF" font-family="Menlo, Monaco, Consolas, monospace" font-size="10.5" font-weight="700">$ lando pull</text>
        <path d="M15 52h50" stroke="#DEDB8E" stroke-linecap="round" stroke-width="3" opacity=".74" />
        <path d="M76 52h29" stroke="#43D9FF" stroke-linecap="round" stroke-width="3" opacity=".68" />
      </g>
    </g>
  </svg>
</template>

<style lang="scss" scoped>
.home-hero-visual {
  display: block;
  height: auto;
  margin: auto;
  width: min(420px, 100%);
}
.stars circle,
.stars path {
  animation: twinkle 4.5s ease-in-out infinite;
  transform-origin: center;
}
.stars circle:nth-child(2),
.stars path:nth-child(5) {
  animation-delay: 1.25s;
}
.mission-planet {
  transform-origin: 210px 210px;
}
.planet-ring {
  animation: ring-glow 8s ease-in-out infinite;
}
.terminal-card {
  animation: terminal-float 6.5s ease-in-out infinite;
}
.terminal-init .terminal-card {
  animation-delay: .7s;
}
.terminal-pull .terminal-card {
  animation-delay: 1.2s;
}
.terminal-caret {
  animation: caret-blink 1.6s ease-in-out infinite;
}

@keyframes ring-glow {
  0%, 100% { opacity: .72; }
  50% { opacity: 1; }
}

@keyframes terminal-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes caret-blink {
  0%, 100% { opacity: .72; }
  50% { opacity: .28; }
}

@keyframes twinkle {
  0%, 100% { opacity: .55; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.18); }
}

@media (prefers-reduced-motion: reduce) {
  .planet-ring,
  .terminal-card,
  .terminal-caret,
  .stars circle,
  .stars path {
    animation: none;
  }
}
</style>
