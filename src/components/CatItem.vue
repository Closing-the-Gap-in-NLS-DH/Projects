<template>
  <div
    v-for="(cat, key) in categories"
    :key="key"
    class="dropdown"
    :class="cat.link"
  >
    <simple-badge :label="cat.label" :cat="true" />
    <ul class="dropdown-content">
      <tag-bubble
        v-for="(tag, key) in cat.keywords"
        :key="key"
        :label="tag"
        :link="tag"
        target="tag"
        :small="true"
      />
    </ul>
  </div>
</template>

<script>
import { defineComponent, inject } from "vue";
import TagBubble from "./TagBubble.vue";
import SimpleBadge from "@/components/SimpleBadge.vue";

export default defineComponent({
  components: {
    TagBubble,
    SimpleBadge,
  },
  props: {
    categories: Object,
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
