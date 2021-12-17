<template>
  <ul class="icons">
    <li v-for="(icon, index) in icons" :key="index">
      <img :src="icon.src" :alt="icon.alt">
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  .icons {
    display: flex;
    gap:1.5rem;
    list-style: none;
    padding-left: 0;
    .icon {
      height: 3.25rem;
    }
  }
</style>

<script>
export default {
  data() {
    return {
      icons: [
        { src: 'images/icons/osx.png', alt:'MacOS logo.' },
        { src: 'images/icons/windows.png', alt:'Windows logo.' },
        { src: 'images/icons/linux.png', alt:'Linux logo.' },
        { src: 'images/icons/line.png', alt:'A divider line.' },
        { src: 'images/icons/safari.png', alt:'Safari logo.' },
        { src: 'images/icons/chrome.png', alt:'Chrome logo.' },
        { src: 'images/icons/firefox.png', alt:'Firefox logo.' },
      ]
    }
  }
}
</script>
