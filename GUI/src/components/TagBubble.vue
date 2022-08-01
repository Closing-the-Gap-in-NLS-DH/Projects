<template>
  <router-link
    v-if="link"
    class="bubble rounded-full pr-4 pl-4 ml-0 mr-2 my-1"
    :class="(route.params[target] === link) ? 'bg-darkblue pr-0 flex flex-row' : ''"
    :to="targetArr"
  >
  <span v-if="target === 'tag'">#</span>{{ label }} <svg v-if="route.params[target] === link" xmlns="http://www.w3.org/2000/svg" class="ml-1 m-auto h-5 w-5" :class="small ? 'mr-0' : 'mr-1'" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
    </svg>
  </router-link>
</template>

<script>
import { defineComponent, inject, computed } from 'vue';
import {
  useRoute,
} from 'vue-router';

export default defineComponent({
  components: {
  },
  props: {
    label: String,
    link: String,
    small: Boolean,
    target: String,
  },
  setup(props) {
    const now = new Date().getTime();
    const isArabic = inject('rtlCharset').test(props.label);

    const route = useRoute();

    const targetArr = computed(() => {
      switch (props.target) {
        case 'tag':
          return {
            name: 'projectsFiltered',
            params: {
              tag: (route.params.tag === props.link) ? '' : props.link,
            }
          };
        case 'cat': 
          return {
            name: 'projectCategories',
            params: {
              cat: (route.params.cat === props.link) ? '' : props.link,
            }
          };
        default: return {};
      }
    });

    return {
      isArabic,
      now,
      route,
      targetArr,
    };
  },
});
</script>