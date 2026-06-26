<template>
  <svg
    class="donate-heart"
    :class="{'is-idle-bouncing': isIdleBouncing}"
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
</template>

<script setup>
import {onBeforeUnmount, onMounted, ref} from 'vue';

const MIN_IDLE_BOUNCE_DELAY = 3000;
const MAX_IDLE_BOUNCE_DELAY = 60000;
const IDLE_BOUNCE_DURATION = 3000;

const isIdleBouncing = ref(false);
let bounceTimeout = null;

const getRandomIdleBounceDelay = () => (
  Math.floor(Math.random() * (MAX_IDLE_BOUNCE_DELAY - MIN_IDLE_BOUNCE_DELAY + 1)) + MIN_IDLE_BOUNCE_DELAY
);

const clearBounceTimeout = () => {
  if (bounceTimeout !== null && typeof window !== 'undefined') {
    window.clearTimeout(bounceTimeout);
  }
  bounceTimeout = null;
};

const queueIdleBounce = () => {
  if (typeof window === 'undefined') return;

  clearBounceTimeout();
  bounceTimeout = window.setTimeout(playIdleBounce, getRandomIdleBounceDelay());
};

const playIdleBounce = () => {
  bounceTimeout = null;
  isIdleBouncing.value = true;
  bounceTimeout = window.setTimeout(() => {
    isIdleBouncing.value = false;
    queueIdleBounce();
  }, IDLE_BOUNCE_DURATION);
};

onMounted(queueIdleBounce);
onBeforeUnmount(clearBounceTimeout);
</script>
