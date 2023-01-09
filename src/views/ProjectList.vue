<template>
  <div class="m-5 flex flex-wrap">
    <div class=" top-0 w-full rounded-xl py-2">
      <div class="w-full">
        <cat-list-new ref="categoriesRef" />
        <tag-list :taglist="tags" />
        <lang-list :langlist="langs" />
      </div>
    </div>
    <div class="elementcount m-2 w-full text-xl">
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
  </div>
</template>

<script>
import { defineComponent, ref, watchEffect, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import projectItem from "@/components/ProjectItems.vue";
import tagList from "@/components/TagList.vue";
import langList from "@/components/LangList.vue";
import catListNew from "@/components/CatListNew.vue";

export default defineComponent({
  components: {
    projectItem,
    tagList,
    langList,
    catListNew
  },
  setup() {
    const projectList = ref([]);
    const tags = ref([]);
    const langs = ref([]);   
    const route = useRoute();
    const categoriesRef=ref([])

    const resetData = () => {
      tags.value = [];
      projectList.value = [];
      langs.value = [];
     // tagsSorted.value =[]
    };

    
    const matchingTag = (responseProject) =>
      route.params.tag &&
      responseProject.data.project.keywords.includes(route.params.tag);

    const matchingLanguge = (responseProject) =>
      route.params.lang &&
      responseProject.data.project.research_data.lang.includes(
        route.params.lang
      );

      

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
                  matchingTag(responseProject) ||
                  matchingLanguge(responseProject) ||
                  // Or, if no category or tag is selected, show every project
                  (!route.params.tag && !route.params.lang )
                ) {
                  projectList.value.push({
                    _id: key,
                    metadata: responseProject.data.record_metadata,
                    project: responseProject.data.project,
                    source: `https://github.com/Closing-the-Gap-in-NLS-DH/Projects/blob/master${responseIndex.data[key].path}${key}.json`,
                  });
                  
                  projectList.value.sort((a, b) =>
                    a.project.title.localeCompare(b.project.title, "en", {
                      sensitivity: "base",
                    })
                  );

                  responseProject.data.project.keywords.map((tag) => {
                    if (!tags.value.includes(tag)) {
                      tags.value.push(tag);
                    }
                  });
                  
                  tags.value.sort();

                  responseProject.data.project.research_data.lang.map(
                    (lang) => {
                      if (!langs.value.includes(lang)) {
                        langs.value.push(lang);                       
                      }
                    }
                  );

                  langs.value.sort();
                }

                axios.get("https://raw.githubusercontent.com/Closing-the-Gap-in-NLS-DH/Projects/master/KEYWORDS/KEYWORDS.json")
                                .then((responseKeywords)=>{
                                    for (const [k, v] of Object.entries(responseKeywords.data)){
                                        responseProject.data.project.keywords.map((tag) =>{
                                            if (v.includes(tag)){
                                               // console.log(tag, " in ", k)
                                                for (const v2 of Object.values(categoriesRef.value?.categories)){
                                                    if(v2.link==k){
                                                        if (!v2.keywords.includes(tag)){
                                                            v2.keywords.push(tag);
                                                        }                                                   
                                                    }
                                                    v2.keywords.sort()
                                                }
                                            }
                                    
                                     }
                                
                                )}})
                
              })
              .then(() => {
                //console.log(langs.value);          
              });
          });
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
      langs,
      categoriesRef
      
    };    
  },
});

</script>
