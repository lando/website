<template>
  <svg class="mission-visual start-building-visual" viewBox="0 0 560 440" role="img" aria-labelledby="start-building-visual-title" xmlns="http://www.w3.org/2000/svg">
    <title id="start-building-visual-title">A modular build kit with development tiles and a ready check.</title>
    <defs>
      <linearGradient id="startPlanetGradient" x1="150" x2="420" y1="90" y2="365">
        <stop stop-color="#43D9FF" />
        <stop offset=".45" stop-color="#DD3F8F" />
        <stop offset="1" stop-color="#412B6B" />
      </linearGradient>
      <filter id="startGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="12" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <clipPath id="startPlanetClip">
        <circle cx="282" cy="222" r="118" />
      </clipPath>
    </defs>
    <ellipse cx="284" cy="222" rx="214" ry="94" fill="none" stroke="#794993" stroke-width="3" stroke-dasharray="8 12" opacity=".6" transform="rotate(-12 284 222)" />
    <ellipse cx="284" cy="222" rx="158" ry="55" fill="none" stroke="#43D9FF" stroke-width="3" stroke-dasharray="5 13" opacity=".58" transform="rotate(16 284 222)" />
    <g class="build-planet">
      <circle cx="282" cy="222" r="118" fill="url(#startPlanetGradient)" opacity=".96" />
      <g clip-path="url(#startPlanetClip)">
        <path d="M169 202c42-19 78-5 119 5 38 10 76 8 113-19 6 20 6 41 0 61-39 25-86 31-141 15-38-11-70-23-105-4-2-20 2-40 14-58Z" fill="#C9287A" opacity=".78" />
        <path d="M166 277c37-11 67 4 101 12 41 10 78 1 111-23-16 39-50 67-93 72-42 5-83-10-109-41-5-7-8-13-10-20Z" fill="#412B6B" opacity=".7" />
        <path d="M174 227c41-10 77 2 116 10 36 8 69 4 101-13" fill="none" stroke="#DEDB8E" stroke-linecap="round" stroke-width="8" opacity=".68" />
        <circle cx="233" cy="164" r="11" fill="#FFFFFF" opacity=".36" />
        <circle cx="320" cy="277" r="8" fill="#FFFFFF" opacity=".28" />
      </g>
    </g>
    <g class="workspace" filter="url(#startGlow)">
      <rect x="124" y="226" width="312" height="126" rx="22" fill="#261D2D" />
      <rect x="148" y="251" width="106" height="16" rx="8" fill="#DEDB8E" />
      <rect x="148" y="282" width="174" height="12" rx="6" fill="#43D9FF" opacity=".85" />
      <rect x="148" y="308" width="138" height="12" rx="6" fill="#FFFFFF" opacity=".5" />
      <rect x="330" y="260" width="72" height="62" rx="15" fill="#FFFFFF" opacity=".95" />
      <path d="M347 290l13 13 26-31" stroke="#DD3F8F" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    </g>
    <g class="build-block block-one">
      <rect x="97" y="123" width="96" height="72" rx="18" fill="#FFFFFF" />
      <path d="M124 154l-14 13 14 13M166 154l14 13-14 13" stroke="#DD3F8F" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      <path d="M151 150l-12 34" stroke="#43D9FF" stroke-width="6" stroke-linecap="round" />
    </g>
    <g class="build-block block-two">
      <rect x="358" y="107" width="106" height="82" rx="20" fill="#43D9FF" />
      <rect x="383" y="132" width="56" height="10" rx="5" fill="#412B6B" />
      <rect x="383" y="154" width="38" height="10" rx="5" fill="#FFFFFF" opacity=".86" />
    </g>
    <g class="build-block block-three">
      <path d="M239 78h82l22 22v72H239V78Z" fill="#FFFFFF" />
      <path d="M321 78v22h22" fill="#DEDB8E" />
      <path d="M263 118h48M263 142h58" stroke="#412B6B" stroke-width="8" stroke-linecap="round" opacity=".75" />
    </g>
  </svg>
</template>

<style lang="scss" scoped>
.mission-visual {
  display: block;
  height: auto;
  margin: auto;
  max-width: 560px;
  width: 100%;
}
.build-planet {
  animation: planet-float 7s ease-in-out infinite;
  transform-origin: 282px 222px;
}
.build-block {
  animation: block-float 6.5s ease-in-out infinite;
}
.block-two {
  animation-delay: .7s;
}
.block-three {
  animation-delay: 1.15s;
}

@keyframes planet-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

@keyframes block-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}

@media (prefers-reduced-motion: reduce) {
  .build-planet,
  .build-block {
    animation: none;
  }
}
</style>
