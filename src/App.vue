<template>
  <div class="flex flex-wrap">
    <div class="head w-full text-left p-5">
      <h1 class="text-5xl ml-3">
        {{ title }}
      </h1>
      <h2 class="text-2xl ml-3 mt-4">
        {{ subtitle }}
      </h2>
    </div>
    <div class="nav w-full pl-3">
      <div
        v-for="(item, key) in nav"
        :key="key"
        class="nav-item float-left py-3 ml-5 text-xl"
      >
        <router-link :to="item.link">{{ item.label }}</router-link>
      </div>
    </div>
    <div class="w-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const title = ref("Closing the Gap");
    const subtitle = ref("in Non-Latin Script Data");
    const nav = ref([
      {
        label: "Projects",
        link: "/",
      },
      {
        label: "Map",
        link: "/map",
      },
      {
        label: "Timeline",
        link: "/timeline",
      },
      {
        label: "Contribute",
        link: "/contribute",
      },
      {
        label: "About",
        link: "/about",
      },
    ]);

    return {
      title,
      subtitle,
      nav,
    };
  },
  provide: {
    // more languages can be added for different format options, yet existing:
    // - ara
    rtlCharset: /[\u0600-\u06FF]/,
  },
};
</script>
