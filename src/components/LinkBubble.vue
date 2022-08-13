<template>
  <div class="icon rounded-full w-8 h-8 border-2 mr-1">
    <a :href="href" target="_blank">
      <svg
        v-if="type === 'link'"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 icon-text m-auto mt-1"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
        />
        <path
          d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
        />
      </svg>
      <svg
        v-if="type === 'git'"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 icon-text m-auto mt-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    </a>
  </div>
</template>

<script>
import { defineComponent, inject } from "vue";

export default defineComponent({
  components: {},
  props: {
    href: String,
    type: String,
  },
  setup(props) {
    const now = new Date().getTime();
    const isArabic = inject("rtlCharset").test(props.label);
    return {
      isArabic,
      now,
    };
  },
});
</script>
