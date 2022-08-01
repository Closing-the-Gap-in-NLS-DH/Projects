<template>
  <div class="bubble bg-brightblue rounded-full px-4 ml-0 mr-2 my-1">{{ label }}</div>
</template>

<script>
import { defineComponent, inject } from 'vue';

export default defineComponent({
  components: {
  },
  props: {
    label: String,
    link: String,
  },
  setup(props) {
    const now = new Date().getTime();
    const isArabic = inject('rtlCharset').test(props.label);
    return {
      isArabic,
      now,
    };
  },
});
</script>