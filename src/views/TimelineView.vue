<template>
  <div class="visualbox w-full p-5">
    <table class="box table-fixed">
      <thead class="sticky top-0">
        <tr>
          <th
            :colspan="years.length + 1"
            class="sticky top-0 py-5 px-3 text-left"
          >
            <p>
              CAUTION! This timeline contains projects for which we do not have
              consistent funding information yet. Projects with unknown or
              incomplete funding data are marked with an asterisk (*).
            </p>
          </th>
        </tr>
        <tr class="table-head sticky border-y">
          <th>Project</th>
          <th
            v-for="(y, yKey) in years"
            :key="yKey"
            class="sticky top-0 border-l px-3 pb-1 text-xs"
          >
            {{ y }}
          </th>
        </tr>
      </thead>
      <tbody class="relative">
        <tr
          v-for="(p, pKey) in projects"
          :key="pKey"
          class="timeline-row border-b"
        >
          <td class="first-col sticky whitespace-nowrap p-2 text-left text-xs">
            <a :href="p.source" target="_blank">{{ p.title }}</a>
            <span v-if="p.noDataOnEnding">*</span>
          </td>
          <td
            v-for="(y, yKey) in years"
            :key="yKey"
            :class="
              isInFundingPeriod(p, y) && !p.noDataOnEnding
                ? 'bg-darkblue border-b-1 border-darkblue p-2'
                : ''
            "
            class="m-1 border-l p-0 text-xs"
          ></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  components: {},
  setup() {
    const tags = ref([]);

    const years = ref([]);
    const projects = ref([]);

    let start = new Date().getFullYear();
    let finish = new Date().getFullYear();

    const loadData = () => {
      let promise = new Promise((resolve) => {
        axios
          .get(
            "https://raw.githubusercontent.com/Closing-the-Gap-in-NLS-DH/Projects/master/PROJECTS.json"
          )
          .then((responseIndex) => {
            Object.keys(responseIndex.data).map((uuid, key) => {
              axios
                .get(
                  `https://raw.githubusercontent.com/Closing-the-Gap-in-NLS-DH/Projects/master${responseIndex.data[uuid].path}${uuid}.json`
                )
                .then((responseProject) => {
                  const period = [];
                  let noEnding = false;

                  responseProject.data.project.date.map((p) => {
                    if (p.from !== "") {
                      let begin = Number(p.from);
                      let end = -1;
                      if (begin < start) start = begin;
                      if (p.to !== "") {
                        end = Number(p.to);
                      } else noEnding = true;
                      if (end > finish) finish = end;
                      period.push([begin, end]);
                    }
                  });

                  if (period.length) {
                    projects.value.push({
                      title: responseProject.data.project.title,
                      periods: period,
                      noDataOnEnding: noEnding,
                      source: `https://github.com/Closing-the-Gap-in-NLS-DH/Projects/blob/master${responseIndex.data[uuid].path}${uuid}.json`,
                    });
                  }

                  responseProject.data.project.keywords.map((tag) => {
                    if (!tags.value.includes(tag)) tags.value.push(tag);
                  });

                  if (key === Object.keys(responseIndex.data).length - 1) {
                    resolve("ready");
                  }
                });
            });
          });
      });

      return promise;
    };

    const isInFundingPeriod = (project, year) => {
      let isFunded = false;
      project.periods.map((period) => {
        if (year >= period[0] && year <= period[1]) {
          isFunded = true;
        }
      });
      return isFunded;
    };

    const filteredProjectYears = (project, years) => {
      const newYearArr = [...years];
      const yearsToDel = [];
      project.periods.map((period) => {
        for (let i = period[0] + 1; i <= period[1]; i += 1) {
          yearsToDel.push(i);
        }
      });
      yearsToDel.map((y) => {
        newYearArr.splice(newYearArr.indexOf(y), 1);
      });
      if (project.title.includes("Topoi")) console.log(newYearArr);
      return newYearArr;
    };

    loadData()
      .then(() => {
        for (let i = start; i <= finish; i += 1) {
          years.value.push(i);
        }

        projects.value.map((p, i) => {
          p.periods.map((pp, pi) => {
            if (pp[1] === -1) projects.value[i].periods[pi][1] = finish;
          });
        });

        projects.value.sort((a, b) => {
          if (a.title > b.title) return 1;
          if (a.title < b.title) return -1;
          return 0;
        });
      })
      .catch((e) => {
        console.log(e);
      });

    return {
      projects,
      years,
      isInFundingPeriod,
      filteredProjectYears,
    };
  },
});
</script>
