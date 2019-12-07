<template>
  <p class="mouse-wrapper">
    <svg
      @click="scrollTo"
      class="mouse"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 76 130"
      preserveAspectRatio="xMidYMid meet"
    >
      <g fill="none" fill-rule="evenodd">
        <rect width="70" height="118" x="1.5" y="1.5" stroke="#FFF" stroke-width="8" rx="36" />
        <circle class="scroll" cx="36.5" cy="31.5" r="4.5" fill="#FFF" />
      </g>
    </svg>
  </p>
</template>

<script>
export default {
  props: {
    target: String
  },
  methods: {
    scrollTo() {
      this.$emit("scrollTo", this.target);
    }
  }
};
</script>

<style lang="scss" scoped>
.mouse-wrapper {
  margin-top: 1rem;
  .mouse {
    max-width: 30px;
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  .scroll {
    animation-name: scroll;
    animation-duration: 1.5s;
    animation-timing-function: cubic-bezier(0.65, -0.55, 0.25, 1.5);
    animation-iteration-count: infinite;
    transform-origin: 50% 20.5px;
    will-change: transform, opacity;
    opacity: 1;
  }

  .scroll-link {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
  }
}

@keyframes scroll {
  0%,
  20% {
    transform: translateY(0) scaleY(1);
  }

  100% {
    transform: translateY(36px) scaleY(2);
    opacity: 0;
  }
}
</style>