<template>
  <svg class="mission-visual open-resources-visual" viewBox="0 0 560 440" role="img" aria-labelledby="open-resources-visual-title" xmlns="http://www.w3.org/2000/svg">
    <title id="open-resources-visual-title">An open handbook broadcasting free learning resources.</title>
    <defs>
      <radialGradient id="resourceGlow" cx="50%" cy="50%" r="65%">
        <stop offset="0%" stop-color="#DD3F8F" stop-opacity=".55" />
        <stop offset="100%" stop-color="#412B6B" stop-opacity=".05" />
      </radialGradient>
    </defs>
    <ellipse cx="278" cy="222" rx="224" ry="104" fill="url(#resourceGlow)" />
    <ellipse cx="278" cy="222" rx="180" ry="78" fill="none" stroke="#794993" stroke-width="3" stroke-dasharray="7 13" opacity=".58" transform="rotate(12 278 222)" />
    <g class="book">
      <path d="M133 166c48-18 101-10 147 24 47-34 99-42 147-24v158c-48-16-100-8-147 24-47-32-99-40-147-24V166Z" fill="#412B6B" opacity=".55" />
      <path d="M143 148c50-14 94-5 137 29v153c-43-32-88-42-137-25V148Z" fill="#FFFFFF" />
      <path d="M280 177c43-34 87-43 137-29v157c-49-17-94-7-137 25V177Z" fill="#F4F1F7" />
      <path d="M143 148c50-14 94-5 137 29v153c-43-32-88-42-137-25V148Z" fill="none" stroke="#412B6B" stroke-linejoin="round" stroke-width="4" opacity=".32" />
      <path d="M280 177c43-34 87-43 137-29v157c-49-17-94-7-137 25V177Z" fill="none" stroke="#412B6B" stroke-linejoin="round" stroke-width="4" opacity=".32" />
      <path d="M280 177v153" stroke="#412B6B" stroke-width="7" stroke-linecap="round" opacity=".5" />
      <path d="M169 199c29-6 52-1 75 12M169 226c32-5 58 1 82 15M169 253c24-3 44 1 62 10" stroke="#412B6B" stroke-width="8" stroke-linecap="round" opacity=".68" />
      <path d="M319 211c23-13 45-18 72-13M319 239c22-12 41-16 64-12M319 266c27-12 51-16 76-9" stroke="#412B6B" stroke-width="8" stroke-linecap="round" opacity=".68" />
      <path d="M296 183c15-9 29-15 44-19v95l-22-16-22 28v-88Z" fill="#DD3F8F" opacity=".92" />
      <path d="M222 117l14 31 31 14-31 14-14 31-14-31-31-14 31-14 14-31Z" fill="#43D9FF" />
      <circle cx="222" cy="162" r="13" fill="#FFFFFF" opacity=".72" />
    </g>
    <g class="resource-card docs-card">
      <rect x="75" y="88" width="104" height="78" rx="18" fill="#DD3F8F" />
      <path d="M107 117h40M107 139h27" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" />
      <path d="M96 106v44" stroke="#43D9FF" stroke-width="5" stroke-linecap="round" />
    </g>
    <g class="resource-card events-card">
      <rect x="384" y="78" width="106" height="86" rx="20" fill="#412B6B" />
      <rect x="410" y="111" width="54" height="34" rx="7" fill="#FFFFFF" opacity=".94" />
      <path d="M410 121h54M425 100v21M449 100v21" stroke="#43D9FF" stroke-width="6" stroke-linecap="round" />
    </g>
    <g class="resource-card video-card">
      <rect x="385" y="286" width="92" height="70" rx="18" fill="#43D9FF" />
      <path d="M421 307l35 20-35 20v-40Z" fill="#412B6B" />
    </g>
    <path class="signal signal-one" d="M279 155c31-36 66-55 110-63" stroke="#43D9FF" stroke-width="4" stroke-linecap="round" stroke-dasharray="4 12" opacity=".8" />
    <path class="signal signal-two" d="M286 300c34 18 70 24 108 17" stroke="#43D9FF" stroke-width="4" stroke-linecap="round" stroke-dasharray="4 12" opacity=".8" />
    <path class="signal signal-three" d="M223 157c-32-30-64-44-101-42" stroke="#43D9FF" stroke-width="4" stroke-linecap="round" stroke-dasharray="4 12" opacity=".8" />
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
.open-resources-visual {
  --mission-visual-shift-x: -24px;
}
.book {
  animation: book-float 6.5s ease-in-out infinite;
}
.resource-card {
  animation: resource-float 7s ease-in-out infinite;
}
.events-card {
  animation-delay: .8s;
}
.video-card {
  animation-delay: 1.4s;
}
.signal {
  animation: signal-pulse 3.2s ease-in-out infinite;
}

@keyframes book-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@keyframes resource-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(9px); }
}

@keyframes signal-pulse {
  0%, 100% { opacity: .35; }
  50% { opacity: .9; }
}

@media (prefers-reduced-motion: reduce) {
  .book,
  .resource-card,
  .signal {
    animation: none;
  }
}
</style>
