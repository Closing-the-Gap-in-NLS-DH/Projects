<template>
  <div class="mx-4 mb-2 w-auto">
    <div
      class="tag-container pointer mb-0 rounded-t-xl px-5 py-2"
      :class="collapsed ? 'rounded-b-xl' : ''"
      @click="collapsed = !collapsed"
    >
      {{ collapse_btn }}
      <svg
        v-if="collapsed"
        xmlns="http://www.w3.org/2000/svg"
        class="float-right ml-2 h-5 w-5"
        viewBox="-2 -2 18 18"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        v-if="!collapsed"
        xmlns="http://www.w3.org/2000/svg"
        class="float-right ml-2 h-5 w-5"
        viewBox="-2 -2 18 18"
        stroke="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div
      v-if="!collapsed"
      class="tag-container mt-0 flex flex-wrap rounded-b-xl p-3 pl-12 text-sm"
    >
      <cat-item :categories="categories" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import CatItem from "./CatItem.vue";

export default defineComponent({
  components: {
    CatItem,
  },
  props: {
    taglist: Array,
  },
  setup() {
    const collapse_btn = ref("Categories");
    const route = useRoute();
    let collapsed = ref(
      route.params.cat && route.params.cat != "" ? false : true
    );

    const categories = ref([
      {
        label: "Discipline",
        link: "discipline",
        keywords: [],
      },
      {
        label: "Resources",
        link: "resources",
        keywords: [],
      },
      {
        label: "Tools and Services",
        link: "tools_and_services",
        keywords: [],
      },
      {
        label: "Topics DH",
        link: "topics_dh",
        keywords: [],
      },
      {
        label: "Topics NLS",
        link: "topics_nls",
        keywords: [],
      },
    ]);

    categories.value.sort((a, b) =>
      a.label > b.label ? 1 : a.label === b.label ? 0 : -1
    );

    return {
      collapse_btn,
      collapsed,
      categories,
    };
  },
});
</script>
