<template>
  <svg class="mission-visual community-visual" viewBox="0 0 560 440" role="img" aria-labelledby="community-visual-title" xmlns="http://www.w3.org/2000/svg">
    <title id="community-visual-title">Community nodes orbiting a shared open-source planet.</title>
    <defs>
      <radialGradient id="communityPlanetGradient" cx="30%" cy="26%" r="78%">
        <stop stop-color="#F3EFA9" />
        <stop offset=".34" stop-color="#DEDB8E" />
        <stop offset=".68" stop-color="#DD3F8F" />
        <stop offset="1" stop-color="#412B6B" />
      </radialGradient>
      <clipPath id="communityPlanetClip">
        <circle cx="282" cy="220" r="88" />
      </clipPath>
    </defs>
    <ellipse cx="282" cy="220" rx="226" ry="104" fill="none" stroke="#794993" stroke-width="3" stroke-dasharray="8 13" opacity=".55" transform="rotate(-10 282 220)" />
    <ellipse cx="282" cy="220" rx="162" ry="74" fill="none" stroke="#43D9FF" stroke-width="2" stroke-dasharray="5 12" opacity=".6" transform="rotate(18 282 220)" />
    <g class="connections" stroke="#43D9FF" stroke-width="4" stroke-linecap="round" opacity=".76">
      <path d="M192 145L282 220 396 135" />
      <path d="M138 254L282 220 425 282" />
      <path d="M238 334L282 220" />
    </g>
    <g class="community-planet">
      <ellipse cx="282" cy="220" rx="118" ry="39" fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-width="7" opacity=".5" transform="rotate(-13 282 220)" />
      <circle cx="282" cy="220" r="88" fill="url(#communityPlanetGradient)" />
      <g clip-path="url(#communityPlanetClip)">
        <path d="M197 203c34-17 66-5 99 4 31 8 56 3 80-18 4 18 2 36-4 53-29 19-66 24-108 12-34-10-59-18-88-1-2-18 4-37 21-50Z" fill="#C9287A" opacity=".88" />
        <path d="M205 165c28-12 49-1 75 3 24 3 43-11 61-26 15 9 27 21 37 36-29 20-60 25-95 16-35-9-54-17-89 0 1-11 5-21 11-29Z" fill="#F56EB3" opacity=".82" />
        <path d="M208 266c27-10 50 1 77 8 29 8 57 2 83-16-12 28-37 49-69 54-34 6-66-6-87-29-2-6-4-11-4-17Z" fill="#412B6B" opacity=".72" />
        <path d="M201 226c34-9 63 1 95 8 29 7 57 3 82-12" fill="none" stroke="#43D9FF" stroke-linecap="round" stroke-width="7" opacity=".75" />
        <circle cx="252" cy="179" r="9" fill="#FFFFFF" opacity=".42" />
        <circle cx="314" cy="261" r="7" fill="#FFFFFF" opacity=".3" />
      </g>
    </g>
    <g class="node node-slack" transform="translate(138 254)">
      <g class="node-inner">
        <circle r="42" fill="#412B6B" />
        <rect x="-25" y="-6" width="18" height="11" rx="5" fill="#43D9FF" transform="rotate(90 -16 -1)" />
        <rect x="-8" y="-25" width="18" height="11" rx="5" fill="#DD3F8F" />
        <rect x="7" y="-5" width="18" height="11" rx="5" fill="#DEDB8E" transform="rotate(90 16 0)" />
        <rect x="-10" y="14" width="18" height="11" rx="5" fill="#FFFFFF" />
        <circle cx="-16" cy="-1" r="5" fill="#43D9FF" />
        <circle cx="1" cy="-20" r="5" fill="#DD3F8F" />
        <circle cx="16" cy="0" r="5" fill="#DEDB8E" />
        <circle cx="-1" cy="19" r="5" fill="#FFFFFF" />
      </g>
    </g>
    <g class="node node-issues" transform="translate(396 135)">
      <g class="node-inner">
        <circle r="46" fill="#FFFFFF" />
        <path
          d="M0-28c-15.6 0-28.2 12.6-28.2 28.2 0 12.5 8.1 23.1 19.4 26.8 1.4.3 1.9-.6 1.9-1.4v-5.4c-7.9 1.7-9.6-3.4-9.6-3.4-1.3-3.2-3.1-4.1-3.1-4.1-2.5-1.7.2-1.7.2-1.7 2.8.2 4.3 2.9 4.3 2.9 2.5 4.3 6.6 3.1 8.2 2.4.3-1.8 1-3.1 1.8-3.8-6.3-.7-12.9-3.1-12.9-14 0-3.1 1.1-5.6 2.9-7.6-.3-.7-1.3-3.6.3-7.5 0 0 2.4-.8 7.8 2.9 2.3-.6 4.7-1 7.1-1s4.8.3 7.1 1c5.4-3.7 7.8-2.9 7.8-2.9 1.6 3.9.6 6.8.3 7.5 1.8 2 2.9 4.5 2.9 7.6 0 10.9-6.6 13.3-12.9 14 .9.8 1.9 2.4 1.9 4.9v7.2c0 .8.5 1.7 1.9 1.4C20.1 23.3 28.2 12.7 28.2.2 28.2-15.4 15.6-28 0-28Z"
          fill="#412B6B"
        />
      </g>
    </g>
    <g class="node node-event" transform="translate(425 282)">
      <g class="node-inner">
        <circle r="43" fill="#DEDB8E" />
        <rect x="-20" y="-16" width="40" height="31" rx="6" fill="#412B6B" />
        <path d="M-20-5h40M-9-25v16M10-25v16" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" />
      </g>
    </g>
    <g class="node node-code" transform="translate(192 145)">
      <g class="node-inner">
        <circle r="38" fill="#FFFFFF" />
        <path d="M-11-11L-24 0l13 11M11-11L24 0 11 11" stroke="#DD3F8F" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>
    </g>
    <g class="node node-star" transform="translate(238 334)">
      <g class="node-inner">
        <circle r="34" fill="#412B6B" />
        <path d="M0-19l6 13 14 2-10 10 3 14L0 13l-13 7 3-14-10-10 14-2 6-13Z" fill="#DEDB8E" />
      </g>
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
.community-planet {
  animation: planet-pulse 5s ease-in-out infinite;
  transform-origin: 282px 220px;
}
.node-inner {
  animation: node-float 6s ease-in-out infinite;
}
.node-issues,
.node-star {
  .node-inner {
    animation-delay: .8s;
  }
}
.node-event,
.node-code {
  .node-inner {
    animation-delay: 1.4s;
  }
}
.connections {
  animation: connection-pulse 4s ease-in-out infinite;
}

@keyframes planet-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.035); }
}

@keyframes node-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@keyframes connection-pulse {
  0%, 100% { opacity: .46; }
  50% { opacity: .82; }
}

@media (prefers-reduced-motion: reduce) {
  .community-planet,
  .node-inner,
  .connections {
    animation: none;
  }
}
</style>
