<template>
  <div class="flex flex-wrap m-5">
    <div class="sticky top-0 stickybox rounded-xl w-full py-2">
      <div class="w-full">
        <cat-list />
        <tag-list :taglist="tags" />
      </div>
    </div>
    <div class="w-full text-xl m-2 elementcount">
      {{ projectList.length }} Elements
    </div>
    <project-item
      v-for="project in projectList"
      :key="project._id"
      :project="project.project"
      :id="project._id"
      :source="project.source"
      :metadata="project.metadata"
    />
    <!--
    <p class="text-xs text-gray-400 font-mono mx-1 my-2">
      Fetched from <a href="https://github.com/Closing-the-Gap-in-NLS-DH/Projects/blob/master/RESOURCES.json" target="_blank">https://github.com/Closing-the-Gap-in-NLS-DH/Projects/blob/master/RESOURCES.json</a>
    </p>
    <tagList
      v-if="tags.length > 0"
      v-bind:tagList="tags"
      path="org"
    />
    <ul class="mx-1 mt-2 flex">
      <li
        v-for="(char, charKey) in alphaOrder"
        v-bind:key="charKey"
        class="mr-2"
      >
        <a v-bind:href="`#${char}`">{{ char }}</a>
      </li>
    </ul>
    <ul>
      <li v-for="(char, charKey) in alphaOrder"
          v-bind:key="charKey">
        <h3 class="ml-1 mt-2 text-xl">{{ char }}</h3>
        <a v-bind:name="char" />
        <resource-item
          v-for="(r, rKey) in orgList.alpha[char]"
          v-bind:key="rKey"
          v-bind:label="r.label"
          v-bind:comment="r.comment"
          v-bind:link="r.ref"
          v-bind:tags="r.tags"
          v-bind:credit="r.collected_by"
        ></resource-item>
      </li>
    </ul>
    -->
  </div>
</template>

<script>
import { defineComponent, ref, watchEffect, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import projectItem from "@/components/ProjectItems.vue";
import tagList from "@/components/TagList.vue";
import catList from "@/components/CatList.vue";

export default defineComponent({
  components: {
    projectItem,
    tagList,
    catList,
  },
  setup() {
    const projectList = ref([]);
    const tags = ref([]);
    const route = useRoute();

    const resetData = () => {
      tags.value = [];
      projectList.value = [];
    };

    const loadData = () => {
      axios
        .get(
          "https://raw.githubusercontent.com/Closing-the-Gap-in-NLS-DH/Projects/master/PROJECTS.json"
        )
        .then((responseIndex) => {
          Object.keys(responseIndex.data).map((key) => {
            axios
              .get(
                `https://raw.githubusercontent.com/Closing-the-Gap-in-NLS-DH/Projects/master${responseIndex.data[key].path}${key}.json`
              )
              .then((responseProject) => {
                if (
                  (route.params.tag &&
                    responseProject.data.project.keywords.includes(
                      route.params.tag
                    )) ||
                  (route.params.cat &&
                    responseProject.data.project.topic_relations[
                      route.params.cat
                    ])
                ) {
                  projectList.value.push({
                    _id: key,
                    metadata: responseProject.data.record_metadata,
                    project: responseProject.data.project,
                    source: `https://github.com/Closing-the-Gap-in-NLS-DH/Projects/blob/master${responseIndex.data[key].path}${key}.json`,
                  });
                  responseProject.data.project.keywords.map((tag) => {
                    if (!tags.value.includes(tag)) tags.value.push(tag);
                  });
                  projectList.value.sort((a, b) => {
                    if (
                      a.project.title.toLowerCase() >
                      b.project.title.toLowerCase()
                    )
                      return 1;
                    if (
                      a.project.title.toLowerCase() <
                      b.project.title.toLowerCase()
                    )
                      return -1;
                    return 0;
                  });
                } else if (!route.params.tag && !route.params.cat) {
                  projectList.value.push({
                    _id: key,
                    metadata: responseProject.data.record_metadata,
                    project: responseProject.data.project,
                    source: `https://github.com/Closing-the-Gap-in-NLS-DH/Projects/blob/master${responseIndex.data[key].path}${key}.json`,
                  });
                  responseProject.data.project.keywords.map((tag) => {
                    if (!tags.value.includes(tag)) tags.value.push(tag);
                  });
                  projectList.value.sort((a, b) => {
                    if (
                      a.project.title.toLowerCase() >
                      b.project.title.toLowerCase()
                    )
                      return 1;
                    if (
                      a.project.title.toLowerCase() <
                      b.project.title.toLowerCase()
                    )
                      return -1;
                    return 0;
                  });
                }

                return null;
              });
            return null;
          });
        })
        .then(() => {
          console.log("finished");
          console.log(tags.value);
        });
    };

    watchEffect(() => {
      loadData();
    });

    watch(route, (to) => {
      if (!to.hash) {
        resetData();
        loadData();
      }
    });

    return {
      projectList,
      tags,
    };
  },
});
</script>
