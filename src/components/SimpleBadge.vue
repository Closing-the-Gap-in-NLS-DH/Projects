<template>
  <div
    class="catbubble my-1 ml-0 mr-2 rounded-full px-4"
    :class="cat ? '' : 'w-60'"
  >
    {{ label }}
  </div>
</template>

<script>
import { defineComponent, inject } from "vue";

export default defineComponent({
  components: {},
  props: {
    label: String,
    link: String,
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
