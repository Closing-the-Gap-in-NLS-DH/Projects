<template>
  <div class="w-full">
    <div class="box m-5 rounded-2xl p-5">
      <h3 class="text-xl">Contribute (alpha)</h3>
      <p>
        This form is an alpha version, so bugs are likely to occur. If anything
        doesn't work as expected, please open an issue on
        <a
          class="font-bold"
          href="https://github.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/issues"
          target="_blank"
          >github</a
        >. Please make sure to provide as much information as possible for
        better reproducibility. We will continue to develop this service to
        include additional features, like validation on entry, automatically
        acquired coordinates or an option to load and continue to work on
        existing files.
      </p>
      <p class="p-4 bubble my-3 rounded-xl">
        After you finished entering your data, you have to click
        <span class="font-bold">twice</span> on the button at the end: Once for
        generating the JSON and once for the download. To populate your data
        into our database, please provide the JSON-file to our main contact:
        bua321-nls@geschkult.fu-berlin.de
      </p>
      <h4 class="text-2xl text-left">Metadata</h4>
      <div class="grid grid-cols-2 gap-y-1 gap-x-4 text-left">
        <label class="block col-span-2">
          <span>Name of the Editor (Surname, Forename)</span>
          <input
            type="text"
            class="mt-1 block w-full"
            v-model="project.record_metadata.record_created_by"
          />
        </label>
        <label class="block col-span-2">
          <span
            >Name of the
            {{
              project.project.type.charAt(0).toUpperCase() +
              project.project.type.slice(1)
            }}</span
          >
          <input
            type="text"
            v-model="project.project.title"
            class="mt-1 block w-full"
          />
        </label>
        <label class="block">
          <span>Abbreviation*</span>
          <input
            type="text"
            class="mt-1 block w-full"
            v-model="project.project.abbr"
          />
        </label>
        <label class="block">
          <span>Type</span>
          <select class="mt-1 block w-full" v-model="project.project.type">
            <option value="project">Project</option>
            <option value="organisation">Organisation</option>
          </select>
        </label>
        <!-- Refs -->
        <label class="block col-span-2">
          <span
            >Authority File URIs of the
            {{
              project.project.type.charAt(0).toUpperCase() +
              project.project.type.slice(1)
            }}</span
          >
          <div
            class="flex flex-row"
            v-for="(ref, refKey) in project.project.ref"
            :key="refKey"
          >
            <svg
              @click="project.project.ref.push('')"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              v-if="project.project.ref.length > 1"
              @click="project.project.ref.splice(refKey, 1)"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <input
              type="text"
              class="mt-1 left w-full"
              v-model="project.project.ref[refKey]"
            />
          </div>
        </label>
        <!-- Funding periods -->
        <label class="block col-span-2">
          <span>Funding periods</span>
          <div
            class="flex flex-row"
            v-for="(date, dateKey) in project.project.date"
            :key="dateKey"
          >
            <svg
              @click="project.project.date.push({ from: '', to: '' })"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              v-if="project.project.date.length > 1"
              @click="project.project.date.splice(dateKey, 1)"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <input
              type="text"
              class="mt-1 left"
              v-model="project.project.date[dateKey].from"
            />
            <span class="my-auto mx-2">to</span>
            <input
              type="text"
              class="mt-1 right"
              v-model="project.project.date[dateKey].to"
            />
          </div>
        </label>
        <!-- Websites -->
        <label class="block col-span-2">
          <span
            >Websites of the
            {{
              project.project.type.charAt(0).toUpperCase() +
              project.project.type.slice(1)
            }}</span
          >
          <div
            class="flex flex-row"
            v-for="(website, websiteKey) in project.project.websites"
            :key="websiteKey"
          >
            <svg
              @click="project.project.websites.push('')"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              v-if="project.project.websites.length > 1"
              @click="project.project.websites.splice(websiteKey, 1)"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <input
              type="text"
              class="mt-1 left w-full"
              v-model="project.project.websites[websiteKey]"
            />
          </div>
        </label>
        <!-- description -->
        <label class="block col-span-2">
          <span>Project Description</span>
          <textarea
            class="block w-full mt-1"
            v-model="project.project.project_desc"
          ></textarea>
        </label>
        <!-- Places -->
        <div class="block col-span-2">
          <span
            >Locations of the
            {{
              project.project.type.charAt(0).toUpperCase() +
              project.project.type.slice(1)
            }}</span
          >
          <div
            class="flex flex-row mr-7 w-full"
            v-for="(place, placeKey) in project.project.places"
            :key="placeKey"
          >
            <svg
              @click="
                project.project.places.push({
                  place_name: {
                    text: '',
                    ref: [''],
                  },
                  coordinates: {
                    lat: '',
                    lng: '',
                  },
                })
              "
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              v-if="project.project.places.length > 1"
              @click="project.project.places.splice(placeKey, 1)"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div
              class="border border-black rounded-xl grid grid-cols-2 border-1 m-2 p-4 w-full gap-2"
            >
              <label class="block">
                <span>Name of the place</span>
                <input
                  type="text"
                  class="mt-1 left w-full"
                  v-model="project.project.places[placeKey].place_name.text"
                />
              </label>
              <label class="block"
                >Authority File URIs of the place
                <div
                  v-for="(ref, refKey) in project.project.places[placeKey]
                    .place_name.ref"
                  class="flex flex-row ml-1"
                  :key="refKey"
                >
                  <svg
                    @click="
                      project.project.places[placeKey].place_name.ref.push('')
                    "
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mr-1 my-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <svg
                    v-if="
                      project.project.places[placeKey].place_name.ref.length > 1
                    "
                    @click="
                      project.project.places[placeKey].place_name.ref.splice(
                        placeKey,
                        1
                      )
                    "
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mr-1 my-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    class="mt-1 left w-full"
                    v-model="
                      project.project.places[placeKey].place_name.ref[refKey]
                    "
                  />
                </div>
              </label>
              <div class="block col-span-2">
                <div class="grid grid-cols-2 gap-2">
                  <label>
                    <span>Latitude</span>
                    <input
                      type="text"
                      class="mt-1 block w-full"
                      v-model="project.project.places[placeKey].coordinates.lat"
                    />
                  </label>
                  <label>
                    <span>Longitude</span>
                    <input
                      type="text"
                      class="mt-1 block w-full"
                      v-model="project.project.places[placeKey].coordinates.lng"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Languages -->
        <label class="block col-span-2">
          <span
            >Languages used in the interfaces and publications of the
            {{
              project.project.type.charAt(0).toUpperCase() +
              project.project.type.slice(1)
            }}
            (ISO-639-2)</span
          >
          <div class="flex flex-wrap">
            <div
              class="flex flex-row mr-7"
              v-for="(lang, langKey) in project.project.lang"
              :key="langKey"
            >
              <svg
                @click="project.project.lang.push('')"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-1 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                v-if="project.project.lang.length > 1"
                @click="project.project.lang.splice(langKey, 1)"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-1 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <input
                type="text"
                class="mt-1 left w-20"
                v-model="project.project.lang[langKey]"
              />
            </div>
          </div>
        </label>
        <!-- Topic Relations -->
        <label class="block col-span-2">
          <span>Topics</span>
          <div class="flex flex-row">
            <label class="mr-7">
              <input
                type="checkbox"
                true-value="true"
                false-value="false"
                v-model="project.project.topic_relations.dh"
              />
              <span class="ml-1">Digital Humanities</span>
            </label>
            <label class="mr-7">
              <input
                type="checkbox"
                true-value="true"
                false-value="false"
                v-model="project.project.topic_relations.nls"
              />
              <span class="ml-1">Non-Latin Script</span>
            </label>
            <label class="mr-7">
              <input
                type="checkbox"
                true-value="true"
                false-value="false"
                v-model="project.project.topic_relations.rdm"
              />
              <span class="ml-1">Research Data Management</span>
            </label>
            <label class="mr-7">
              <input
                type="checkbox"
                true-value="true"
                false-value="false"
                v-model="project.project.topic_relations.infrastructure"
              />
              <span class="ml-1">Infrastructure</span>
            </label>
            <label class="mr-7">
              <input
                type="checkbox"
                true-value="true"
                false-value="false"
                v-model="project.project.topic_relations.meta"
              />
              <span class="ml-1">Meta</span>
            </label>
          </div>
        </label>
        <!-- Relations -->
        <label class="block col-span-2">
          <span>Related projects or organisations</span>
          <div class="w-full">
            <div
              class="flex flex-row mr-7 w-full"
              v-for="(rel, relKey) in project.project.relations"
              :key="relKey"
            >
              <svg
                @click="addRelation"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-1 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                v-if="project.project.relations.length > 1"
                @click="project.project.relations.splice(relKey, 1)"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-1 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div
                class="border border-black rounded-xl grid grid-cols-2 border-1 m-2 p-4 w-full gap-2"
              >
                <label>
                  <span>Relation Type</span>
                  <select
                    class="mt-1 block w-full"
                    v-model="project.project.relations[relKey].relation_type"
                  >
                    <option value="parent">Parent</option>
                    <option value="sibling">Sibling</option>
                    <option value="child">Child</option>
                  </select>
                </label>
                <label>
                  <span>Type</span>
                  <select
                    class="mt-1 block w-full"
                    v-model="project.project.relations[relKey].type"
                  >
                    <option value="organisation">Organisation</option>
                    <option value="project">Project</option>
                  </select>
                </label>
                <label class="col-span-2">
                  <span>Choose existing {{ rel.type }} or add new entry</span>
                  <select
                    class="mt-1 block w-full"
                    v-model="project.project.relations[relKey].existingEntry"
                  >
                    <option value="null">NEW ENTRY</option>
                    <option
                      v-for="(p, pKey) in projectList"
                      :key="pKey"
                      :value="p.uuid"
                    >
                      {{ p.title }}
                    </option>
                  </select>
                </label>
                <div
                  class="col-span-2 grid grid-cols-2 gap-2"
                  v-if="
                    project.project.relations[relKey].existingEntry === 'null'
                  "
                >
                  <label class="block col-span-2">
                    <span>Name of the {{ rel.type }}</span>
                    <input
                      type="text"
                      class="mt-1 left w-full"
                      v-model="project.project.relations[relKey].title"
                    />
                  </label>
                  <!-- Refs -->
                  <label class="block">
                    <span
                      >Authority File URIs of the
                      {{
                        rel.type.charAt(0).toUpperCase() + rel.type.slice(1)
                      }}</span
                    >
                    <div
                      class="flex flex-row"
                      v-for="(relRef, relRefKey) in rel.refs"
                      :key="relRefKey"
                    >
                      <svg
                        @click="project.project.relations[relKey].refs.push('')"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 mr-1 my-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <svg
                        v-if="rel.refs.length > 1"
                        @click="
                          project.project.relations[relKey].refs.splice(
                            relRefKey,
                            1
                          )
                        "
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 mr-1 my-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <input
                        type="text"
                        class="mt-1 left w-full"
                        v-model="
                          project.project.relations[relKey].refs[relRefKey]
                        "
                      />
                    </div>
                  </label>
                  <!-- Websites -->
                  <label class="block">
                    <span
                      >Websites of the
                      {{
                        rel.type.charAt(0).toUpperCase() + rel.type.slice(1)
                      }}</span
                    >
                    <div
                      class="flex flex-row"
                      v-for="(relWebsite, relWebsiteKey) in rel.websites"
                      :key="relWebsiteKey"
                    >
                      <svg
                        @click="
                          project.project.relations[relKey].websites.push('')
                        "
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 mr-1 my-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <svg
                        v-if="rel.websites.length > 1"
                        @click="
                          project.project.relations[relKey].websites.splice(
                            relWebsiteKey,
                            1
                          )
                        "
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 mr-1 my-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <input
                        type="text"
                        class="mt-1 left w-full"
                        v-model="
                          project.project.relations[relKey].websites[
                            relWebsiteKey
                          ]
                        "
                      />
                    </div>
                  </label>
                  <!-- Places -->
                  <label class="block col-span-2">
                    <span
                      >Locations of the
                      {{
                        project.project.relations[relKey].type
                          .charAt(0)
                          .toUpperCase() +
                        project.project.relations[relKey].type.slice(1)
                      }}</span
                    >
                    <div class="w-full">
                      <div
                        class="flex flex-row mr-7 w-full"
                        v-for="(place, placeKey) in project.project.relations[
                          relKey
                        ].places"
                        :key="placeKey"
                      >
                        <svg
                          @click="
                            project.project.relations[relKey].places.push({
                              place_name: {
                                text: '',
                                ref: [''],
                              },
                              coordinates: {
                                lat: '',
                                lng: '',
                              },
                            })
                          "
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6 mr-1 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <svg
                          v-if="
                            project.project.relations[relKey].places.length > 1
                          "
                          @click="
                            project.project.relations[relKey].places.splice(
                              placeKey,
                              1
                            )
                          "
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6 mr-1 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div
                          class="border border-black rounded-xl grid grid-cols-2 border-1 m-2 p-4 w-full gap-2"
                        >
                          <label class="block"
                            >Name of the place
                            <input
                              type="text"
                              class="mt-1 left w-full"
                              v-model="
                                project.project.relations[relKey].places[
                                  placeKey
                                ].place_name.text
                              "
                            />
                          </label>
                          <div>
                            <label class="block"
                              >Authority File URIs of the place</label
                            >
                            <div
                              v-for="(ref, refKey) in project.project.relations[
                                relKey
                              ].places[placeKey].place_name.ref"
                              class="flex flex-row ml-1"
                              :key="refKey"
                            >
                              <svg
                                @click="
                                  project.project.relations[relKey].places[
                                    placeKey
                                  ].place_name.ref.push('')
                                "
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 mr-1 my-auto"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <svg
                                v-if="
                                  project.project.relations[relKey].places[
                                    placeKey
                                  ].place_name.ref.length > 1
                                "
                                @click="
                                  project.project.relations[relKey].places[
                                    placeKey
                                  ].place_name.ref.splice(placeKey, 1)
                                "
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 mr-1 my-auto"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <input
                                type="text"
                                class="mt-1 left w-full"
                                v-model="
                                  project.project.relations[relKey].places[
                                    placeKey
                                  ].place_name.ref[refKey]
                                "
                              />
                            </div>
                          </div>
                          <div class="block col-span-2">
                            <div class="grid grid-cols-2 gap-2">
                              <label>
                                <span>Latitude</span>
                                <input
                                  type="text"
                                  class="mt-1 block w-full"
                                  v-model="
                                    project.project.relations[relKey].places[
                                      placeKey
                                    ].coordinates.lat
                                  "
                                />
                              </label>
                              <label>
                                <span>Longitude</span>
                                <input
                                  type="text"
                                  class="mt-1 block w-full"
                                  v-model="
                                    project.project.relations[relKey].places[
                                      placeKey
                                    ].coordinates.lng
                                  "
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </label>
        <!-- Contacts -->
        <div class="block col-span-2">
          <span
            >Main contacts of the
            {{
              project.project.type.charAt(0).toUpperCase() +
              project.project.type.slice(1)
            }}</span
          >
          <div
            class="flex flex-row mr-7 w-full"
            v-for="(contact, contactKey) in project.project.contacts"
            :key="contactKey"
          >
            <svg
              @click="
                project.project.contacts.push({
                  pers_name: {
                    text: '',
                    ref: [''],
                  },
                  role: 0,
                  websites: [''],
                })
              "
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              v-if="project.project.contacts.length > 1"
              @click="project.project.contacts.splice(contactKey, 1)"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div
              class="border border-black rounded-xl grid grid-cols-2 border-1 m-2 p-4 w-full gap-2"
            >
              <label class="block"
                >Name of the contact (Surname, Forename)
                <input
                  type="text"
                  class="mt-1 left w-full"
                  v-model="project.project.contacts[contactKey].pers_name.text"
                />
              </label>
              <label class="block"
                >Authority File URIs of the contact
                <div
                  v-for="(ref, refKey) in project.project.contacts[contactKey]
                    .pers_name.ref"
                  class="flex flex-row ml-1"
                  :key="refKey"
                >
                  <svg
                    @click="
                      project.project.contacts[contactKey].pers_name.ref.push(
                        ''
                      )
                    "
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mr-1 my-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <svg
                    v-if="
                      project.project.contacts[contactKey].pers_name.ref
                        .length > 1
                    "
                    @click="
                      project.project.contacts[contactKey].pers_name.ref.splice(
                        contactKey,
                        1
                      )
                    "
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mr-1 my-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    class="mt-1 left w-full"
                    v-model="
                      project.project.contacts[contactKey].pers_name.ref[refKey]
                    "
                  />
                </div>
              </label>
              <label>
                <span>Role of the contact</span>
                <select
                  class="mt-1 block w-full"
                  v-model="project.project.contacts[contactKey].role"
                >
                  <option v-for="(r, rKey) in roles" :key="rKey" :value="r.id">
                    {{ r.label }}
                  </option>
                </select>
              </label>
              <label class="block">
                <span>Websites of the contact</span>
                <div
                  class="flex flex-row"
                  v-for="(
                    contactWebsite, contactWebsiteKey
                  ) in contact.websites"
                  :key="contactWebsiteKey"
                >
                  <svg
                    @click="
                      project.project.contacts[contactKey].websites.push('')
                    "
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mr-1 my-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <svg
                    v-if="contact.websites.length > 1"
                    @click="
                      project.project.contacts[contactKey].websites.splice(
                        contactWebsiteKey,
                        1
                      )
                    "
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mr-1 my-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    class="mt-1 left w-full"
                    v-model="
                      project.project.contacts[contactKey].websites[
                        contactWebsiteKey
                      ]
                    "
                  />
                </div>
              </label>
            </div>
          </div>
        </div>

        <h4 class="text-2xl">Research Data</h4>
        <!-- Languages -->
        <div class="block col-span-2">
          <span
            >Languages of the research data of
            {{
              project.project.type.charAt(0).toUpperCase() +
              project.project.type.slice(1)
            }}
            (ISO-639-2)</span
          >
          <div class="flex flex-wrap">
            <div
              class="flex flex-row mr-7"
              v-for="(lang, langKey) in project.project.research_data.lang"
              :key="langKey"
            >
              <svg
                @click="project.project.research_data.lang.push('')"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-1 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                v-if="project.project.research_data.lang.length > 1"
                @click="project.project.research_data.lang.splice(langKey, 1)"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-1 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <input
                type="text"
                class="mt-1 left w-20"
                v-model="project.project.research_data.lang[langKey]"
              />
            </div>
          </div>
        </div>
        <!-- Publications -->
        <label class="block col-span-2">
          <span
            >Percentage of Publications available in OpenAccess:
            {{ project.project.research_data.publications.access.open }}%</span
          >
          <div class="w-full mt-1 flex flex-row">
            <span class="mx-2">0%</span>
            <input
              type="range"
              class="w-full"
              v-model="project.project.research_data.publications.access.open"
            />
            <span class="mx-2">100%</span>
          </div>
        </label>
        <label class="block col-span-2">
          <span
            >Percentage of Publications available in ClosedAccess:
            {{
              project.project.research_data.publications.access.closed
            }}%</span
          >
          <div class="w-full mt-1 flex flex-row">
            <span class="mx-2">0%</span>
            <input
              type="range"
              class="w-full"
              v-model="project.project.research_data.publications.access.closed"
            />
            <span class="mx-2">100%</span>
          </div>
        </label>
        <label class="block col-span-2">
          <span
            >Approximate margin of error:
            {{
              project.project.research_data.publications.access.margin
            }}%</span
          >
          <div class="w-full mt-1 flex flex-row">
            <span class="mx-2">0%</span>
            <input
              type="range"
              class="w-full"
              v-model="project.project.research_data.publications.access.margin"
            />
            <span class="mx-2">100%</span>
          </div>
        </label>
        <!-- Licensing -->
        <div class="block col-span-2">
          <span>Licenses under which the publications are published</span>
          <div
            class="flex flex-row"
            v-for="(lic, licKey) in project.project.research_data.publications
              .licensing"
            :key="licKey"
          >
            <svg
              @click="
                project.project.research_data.publications.licensing.push('')
              "
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              v-if="
                project.project.research_data.publications.licensing.length > 1
              "
              @click="
                project.project.research_data.publications.licensing.splice(
                  licKey,
                  1
                )
              "
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <input
              type="text"
              class="mt-1 left w-full"
              v-model="
                project.project.research_data.publications.licensing[licKey]
              "
            />
          </div>
        </div>
        <!-- Datatypes -->
        <div
          v-for="(dt, dtKey) in datatypes"
          :key="dtKey"
          class="block col-span-2"
        >
          <h5 class="text-xl mt-3">{{ dt.label }}</h5>
          <div
            v-if="
              project.project.research_data.data[dt.key].datatypes.length === 0
            "
            class="flex flex-row mr-7 w-full"
          >
            <svg
              @click="
                project.project.research_data.data[dt.key].datatypes.push({
                  label: '',
                  licensing: [''],
                  access: {
                    open: 0,
                    closed: 0,
                    margin: 0,
                  },
                })
              "
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Add Datatype
          </div>
          <div
            class="flex flex-row mr-7 w-full"
            v-for="(data, dataKey) in project.project.research_data.data[dt.key]
              .datatypes"
            :key="dataKey"
          >
            <svg
              @click="
                project.project.research_data.data[dt.key].datatypes.push({
                  label: '',
                  licensing: [''],
                  access: {
                    open: 0,
                    closed: 0,
                    margin: 0,
                  },
                })
              "
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              @click="
                project.project.research_data.data[dt.key].datatypes.splice(
                  dataKey,
                  1
                )
              "
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div
              class="border border-black rounded-xl grid grid-cols-2 border-1 m-2 p-4 w-full gap-2"
            >
              <!-- label -->
              <label class="block col-span-2">
                <span>Label for the Datatype</span>
                <input
                  type="text"
                  v-model="data.label"
                  class="mt-1 block w-full"
                />
              </label>
              <!-- Access -->
              <label class="block col-span-2">
                <span
                  >Percentage of the Datatype available in OpenAccess:
                  {{ data.access.open }}%</span
                >
                <div class="w-full mt-1 flex flex-row">
                  <span class="mx-2">0%</span>
                  <input
                    type="range"
                    class="w-full"
                    v-model="data.access.open"
                  />
                  <span class="mx-2">100%</span>
                </div>
              </label>
              <label class="block col-span-2">
                <span
                  >Percentage of the Datatype available in ClosedAccess:
                  {{ data.access.closed }}%</span
                >
                <div class="w-full mt-1 flex flex-row">
                  <span class="mx-2">0%</span>
                  <input
                    type="range"
                    class="w-full"
                    v-model="data.access.closed"
                  />
                  <span class="mx-2">100%</span>
                </div>
              </label>
              <label class="block col-span-2">
                <span
                  >Approximate margin of error: {{ data.access.margin }}%</span
                >
                <div class="w-full mt-1 flex flex-row">
                  <span class="mx-2">0%</span>
                  <input
                    type="range"
                    class="w-full"
                    v-model="data.access.margin"
                  />
                  <span class="mx-2">100%</span>
                </div>
              </label>
              <!-- Licensing -->
              <label class="block col-span-2">
                <span>Licenses under which the Datatype is published</span>
                <div
                  class="flex flex-row"
                  v-for="(lic, licKey) in data.licensing"
                  :key="licKey"
                >
                  <svg
                    @click="
                      project.project.research_data.data[dt.key].datatypes[
                        dataKey
                      ].licensing.push('')
                    "
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mr-1 my-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <svg
                    v-if="data.licensing.length > 1"
                    @click="
                      project.project.research_data.data[dt.key].datatypes[
                        dataKey
                      ].licensing.splice(licKey, 1)
                    "
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mr-1 my-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    class="mt-1 left w-full"
                    v-model="
                      project.project.research_data.data[dt.key].datatypes[
                        dataKey
                      ].licensing[licKey]
                    "
                  />
                </div>
              </label>
            </div>
          </div>
          <!-- Repositories -->
          <div
            v-if="
              project.project.research_data.data[dt.key].repositories.length ===
              0
            "
            class="flex flex-row mr-7 w-full"
          >
            <svg
              @click="
                project.project.research_data.data[dt.key].repositories.push({
                  type: 'local',
                  accessibility: '',
                  ref: '',
                  description: '',
                })
              "
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Add Repository
          </div>
          <div
            class="flex flex-row mr-7 w-full"
            v-for="(repo, repoKey) in project.project.research_data.data[dt.key]
              .repositories"
            :key="repoKey"
          >
            <svg
              @click="
                project.project.research_data.data[dt.key].repositories.push({
                  type: 'local',
                  accessibility: '',
                  ref: '',
                  description: '',
                })
              "
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              @click="
                project.project.research_data.data[dt.key].repositories.splice(
                  contactKey,
                  1
                )
              "
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div
              class="border border-black rounded-xl grid grid-cols-2 border-1 m-2 p-4 w-full gap-2"
            >
              <h5 class="col-span-2 text-xl mt-3">
                Repository for {{ dt.label }}
              </h5>
              <label class="block">
                <span>Type</span>
                <select
                  class="mt-1 block w-full"
                  v-model="
                    project.project.research_data.data[dt.key].repositories[
                      repoKey
                    ].type
                  "
                >
                  <option value="remote">Remote</option>
                  <option value="local">Local</option>
                </select>
              </label>
              <label class="block">
                <span>Accessibility</span>
                <select
                  class="mt-1 block w-full"
                  v-model="
                    project.project.research_data.data[dt.key].repositories[
                      repoKey
                    ].accessibility
                  "
                >
                  <option value="restricted">Restricted</option>
                  <option value="open">Open</option>
                </select>
              </label>
              <label class="block col-span-2" v-if="repo.type === 'remote'">
                <span>Reference-URL or Link to the repository</span>
                <input
                  type="text"
                  v-model="
                    project.project.research_data.data[dt.key].repositories[
                      repoKey
                    ].ref
                  "
                  class="mt-1 block w-full"
                />
              </label>
              <label class="block col-span-2">
                <span>Description or Label for the repository</span>
                <input
                  type="text"
                  v-model="
                    project.project.research_data.data[dt.key].repositories[
                      repoKey
                    ].description
                  "
                  class="mt-1 block w-full"
                />
              </label>
            </div>
          </div>
        </div>

        <!-- Stack -->
        <h5 class="text-xl mt-3">Stack</h5>
        <label class="block col-span-2">
          <span>Database</span>
          <div
            v-if="project.project.stack.database.length === 0"
            class="flex flex-row mr-7 w-full"
          >
            <svg
              @click="project.project.stack.database.push('')"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Add Database Technology
          </div>
          <div
            class="flex flex-row"
            v-for="(db, dbKey) in project.project.stack.database"
            :key="dbKey"
          >
            <svg
              @click="project.project.stack.database.push('')"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              @click="project.project.stack.database.splice(dbKey, 1)"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <input
              type="text"
              class="mt-1 left w-full"
              v-model="project.project.stack.database[dbKey]"
            />
          </div>
        </label>
        <label class="block col-span-2">
          <span>Backend</span>
          <div
            v-if="project.project.stack.backend.length === 0"
            class="flex flex-row mr-7 w-full"
          >
            <svg
              @click="project.project.stack.backend.push('')"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Add Backend Technology
          </div>
          <div
            class="flex flex-row"
            v-for="(b, bKey) in project.project.stack.backend"
            :key="bKey"
          >
            <svg
              @click="project.project.stack.backend.push('')"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              @click="project.project.stack.backend.splice(bKey, 1)"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <input
              type="text"
              class="mt-1 left w-full"
              v-model="project.project.stack.backend[bKey]"
            />
          </div>
        </label>
        <label class="block col-span-2">
          <span>Frontend</span>
          <div
            v-if="project.project.stack.frontend.length === 0"
            class="flex flex-row mr-7 w-full"
          >
            <svg
              @click="project.project.stack.frontend.push('')"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Add Frontend Technology
          </div>
          <div
            class="flex flex-row"
            v-for="(f, fKey) in project.project.stack.frontend"
            :key="fKey"
          >
            <svg
              @click="project.project.stack.frontend.push('')"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              @click="project.project.stack.frontend.splice(fKey, 1)"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <input
              type="text"
              class="mt-1 left w-full"
              v-model="project.project.stack.frontend[fKey]"
            />
          </div>
        </label>
        <label class="block col-span-2">
          <span>Programming, Query or Script Languages</span>
          <div
            v-if="project.project.stack.languages.length === 0"
            class="flex flex-row mr-7 w-full"
          >
            <svg
              @click="project.project.stack.languages.push('')"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Add Language
          </div>
          <div
            class="flex flex-row"
            v-for="(l, lKey) in project.project.stack.languages"
            :key="lKey"
          >
            <svg
              @click="project.project.stack.languages.push('')"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              @click="project.project.stack.languages.splice(lKey, 1)"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <input
              type="text"
              class="mt-1 left w-full"
              v-model="project.project.stack.languages[lKey]"
            />
          </div>
        </label>
        <div class="col-span-2">
          <h5 class="text-xl mt-3">
            Tools that were used and/or developed in the
            {{
              project.project.type.charAt(0).toUpperCase() +
              project.project.type.slice(1)
            }}
          </h5>
          <div
            v-if="project.project.stack.tools.length === 0"
            class="flex flex-row mr-7 w-full"
          >
            <svg
              @click="
                project.project.stack.tools.push({
                  label: '',
                  self_developed: false,
                  ref: '',
                  purpose: '',
                })
              "
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Add Tool
          </div>
          <div
            class="flex flex-row mr-7 w-full"
            v-for="(tool, toolKey) in project.project.stack.tools"
            :key="toolKey"
          >
            <svg
              @click="
                project.project.stack.tools.push({
                  label: '',
                  self_developed: false,
                  ref: '',
                  purpose: '',
                })
              "
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              @click="project.project.stack.tools.splice(toolKey, 1)"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div
              class="border border-black rounded-xl grid grid-cols-2 border-1 m-2 p-4 w-full gap-2"
            >
              <label class="block col-span-2">
                <input
                  type="checkbox"
                  v-model="project.project.stack.tools[toolKey].self_developed"
                  true-value="true"
                  false-value="false"
                />
                <span class="ml-1">Is the tool self-developed?</span>
              </label>
              <label class="block col-span-2">
                <span>Label for the tool</span>
                <input
                  type="text"
                  v-model="project.project.stack.tools[toolKey].label"
                  class="mt-1 block w-full"
                />
              </label>
              <label class="block col-span-2">
                <span>Reference-URL or Link to the Tool</span>
                <input
                  type="text"
                  v-model="project.project.stack.tools[toolKey].ref"
                  class="mt-1 block w-full"
                />
              </label>
              <label class="block col-span-2">
                <span>Purpose of the Tool</span>
                <input
                  type="text"
                  v-model="project.project.stack.tools[toolKey].purpose"
                  class="mt-1 block w-full"
                />
              </label>
            </div>
          </div>
        </div>

        <!-- Policies -->
        <div class="col-span-2">
          <h5 class="text-xl mt-3">
            Policies that apply to the
            {{
              project.project.type.charAt(0).toUpperCase() +
              project.project.type.slice(1)
            }}
          </h5>
          <div
            v-if="project.project.policies.length === 0"
            class="flex flex-row mr-7 w-full"
          >
            <svg
              @click="
                project.project.policies.push({
                  type: '',
                  uri: '',
                })
              "
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Add Policy
          </div>
          <div
            class="flex flex-row mr-7 w-full"
            v-for="(p, pKey) in project.project.policies"
            :key="pKey"
          >
            <svg
              @click="
                project.project.policies.push({
                  type: '',
                  uri: '',
                })
              "
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              @click="project.project.policies.splice(pKey, 1)"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div
              class="border border-black rounded-xl grid grid-cols-2 border-1 m-2 p-4 w-full gap-2"
            >
              <label class="block col-span-2">
                <span>Label for or Type of the Policy</span>
                <input
                  type="text"
                  v-model="project.project.policies[pKey].label"
                  class="mt-1 block w-full"
                />
              </label>
              <label class="block col-span-2">
                <span>Reference-URL or Link to the Policy</span>
                <input
                  type="text"
                  v-model="project.project.policies[pKey].ref"
                  class="mt-1 block w-full"
                />
              </label>
            </div>
          </div>
        </div>

        <h4 class="text-2xl mt-3">Other</h4>
        <!-- Keywords -->
        <label class="block col-span-2">
          <span
            >Keywords that describe the
            {{
              project.project.type.charAt(0).toUpperCase() +
              project.project.type.slice(1)
            }}
            (lowerkey, no whitespace, separated by comma), please consult the
            <a
              class="font-bold"
              href="https://github.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/blob/master/KEYWORDS_DOCUMENTATION.md"
              target="_blank"
              >keywords documentation</a
            ></span
          >
          <input
            type="text"
            class="mt-1 left w-full"
            v-model="keywordList"
            @input="addKeyword"
          />
        </label>
        <!-- Comment -->
        <label class="block col-span-2">
          <span>Comments</span>
          <textarea
            class="block w-full mt-1"
            v-model="project.project.comment"
          ></textarea>
        </label>
        <a
          v-if="output === null"
          class="block col-span-2 bubble p-3 rounded-2xl mt-2 button text-center"
          @click="generateJSON(project)"
          >Generate JSON</a
        >
        <a
          v-if="output !== null"
          class="block col-span-2 bubble p-3 rounded-2xl mt-2 button text-center"
          :href="`data: text/json;charset=utf-8, ${output}`"
          :download="`${project.record_metadata.uuid}.json`"
          @click="reset()"
          >Download</a
        >
        <a
          class="block col-span-2 reset-btn p-3 rounded-2xl mt-2 button text-center"
          href="#"
          @click="resetForm()"
          >Reset Form</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default defineComponent({
  components: {
    //    tagList,
  },
  setup() {
    let output = ref(null);
    let oldRelArr = [];

    const projectList = ref([]);
    let keywordList = ref("");
    let data = null;

    const metadata = reactive({
      editor: "",
      creationDate: new Date().toISOString().split("T")[0],
    });
    const roles = [
      {
        id: 0,
        label: "Management",
      },
      {
        id: 1,
        label: "Employee",
      },
      {
        id: 2,
        label: "Student Employee",
      },
      {
        id: 3,
        label: "Contractor, Honorary Staff or other",
      },
    ];
    const datatypes = [
      {
        label: "Raw Data",
        key: "raw",
      },
      {
        label: "Refined Data",
        key: "refined",
      },
      {
        label: "Final Data",
        key: "final",
      },
    ];
    const preset = {
      schema_version: "0.1.6",
      record_metadata: {
        uuid: uuidv4(),
        record_created: new Date().toISOString().split("T")[0],
        record_created_by: "",
        record_modified: [
          {
            record_modified: "",
            record_modified_by: "",
          },
        ],
      },
      project: {
        title: "",
        abbr: "",
        type: "project",
        ref: [""],
        date: [
          {
            from: "",
            to: "",
          },
        ],
        websites: [""],
        project_desc: "",
        places: [
          {
            place_name: {
              text: "",
              ref: [""],
            },
            coordinates: {
              lat: "",
              lng: "",
            },
          },
        ],
        topic_relations: {
          dh: false,
          nls: false,
          rdm: false,
          infrastructure: false,
          meta: false,
        },
        relations: [
          {
            relation_type: "parent",
            type: "project",
            existingEntry: "null", // Muss raus aus dem Objekt
            title: "", // Muss noch abhängig von Org usw. gemacht werden
            refs: [""],
            websites: [""],
            places: [
              {
                place_name: {
                  text: "",
                  ref: [""],
                },
                coordinates: {
                  lat: "",
                  lng: "",
                },
              },
            ],
            relations: [],
          },
        ],
        lang: [""],
        contacts: [
          {
            pers_name: {
              text: "",
              ref: [""],
            },
            role: 0,
            websites: [""],
          },
        ],
        research_data: {
          lang: [""],
          publications: {
            access: {
              open: 0,
              closed: 0,
              margin: 0,
            },
            licensing: [""],
          },
          data: {
            raw: {
              datatypes: [],
              repositories: [],
            },
            refined: {
              datatypes: [],
              repositories: [],
            },
            final: {
              datatypes: [],
              repositories: [],
            },
          },
        },
        stack: {
          database: [],
          backend: [],
          frontend: [],
          tools: [],
          languages: [],
        },
        policies: [],
        keywords: [""],
        comment: "",
      },
    };

    const project = reactive(JSON.parse(JSON.stringify(preset)));

    const resetForm = () => {
      if (
        confirm(
          "Are you sure you want to reset the form?\n\nPlease make sure you saved your data as a JSON.\nAll the data you entered will be lost!"
        )
      ) {
        Object.assign(project, preset);
      }
    };
    /* Nice to have, might continue later

    const adjustPubAccess = (target, e) => {
      const oldVal = Number(project.project.research_data.publications.access[target]);
      const newVal = Number(e.target.value);

      console.log(oldVal, newVal);
      console.log(project.project.research_data.publications.access);

      if (target === 'open') {
        if (newVal + project.project.research_data.publications.access.closed > 100) {
          project.project.research_data.publications.access.open = newVal;

          if (newVal - oldVal > 0)
            project.project.research_data.publications.access.closed -= (newVal - oldVal);
          else
            project.project.research_data.publications.access.closed += (oldVal - newVal);
          
          if (project.project.research_data.publications.access.closed < 0) project.project.research_data.publications.access.closed = 0;
        } else 
          project.project.research_data.publications.access.open = newVal;
      }

      if (target === 'closed') {
        if (newVal + project.project.research_data.publications.access.open > 100) {
          project.project.research_data.publications.access.closed = newVal;

          if (newVal - oldVal > 0)
            project.project.research_data.publications.access.open -= (newVal - oldVal);
          else
            project.project.research_data.publications.access.open += (oldVal - newVal);
          
          if (project.project.research_data.publications.access.open < 0) project.project.research_data.publications.access.open = 0;
        } else 
          project.project.research_data.publications.access.closed = newVal;
      }

      if (target === 'margin') {
      }
    };
*/
    const addRelation = () => {
      console.log(project);
      project.project.relations.push({
        relation_type: "parent",
        type: "project",
        existingEntry: "null", // Muss raus aus dem Objekt
        title: "", // Muss noch abhängig von Org usw. gemacht werden
        refs: [""],
        websites: [""],
        places: [
          {
            place_name: {
              text: "",
              ref: [""],
            },
            coordinates: {
              lat: "",
              lng: "",
            },
          },
        ],
        relations: [],
      });
    };

    const addKeyword = () => {
      if (keywordList.value.includes(",")) {
        project.project.keywords = keywordList.value
          .replace(/\s/gi, "")
          .split(",");
      }
    };

    const generateJSON = (project) => {
      oldRelArr = project.project.relations;
      const newRelationArr = [];
      project.project.relations.map((r) => {
        console.log(r);
        if (r.type === "project" && r.existingEntry === "null") {
          newRelationArr.push({
            relation_type: r.relation_type,
            type: "project",
            title: r.title,
            ref: r.refs,
            websites: r.websites,
            places: r.places,
            relations: [],
          });
        } else if (r.type === "project" && r.existingEntry !== "null") {
          projectList.value.map((p) => {
            if (p.uuid === r.existingEntry) {
              newRelationArr.push({
                relation_type: r.relation_type,
                type: "project",
                title: p.title,
                uuid: r.existingEntry,
              });
            }
          });
        } else if (r.type === "organisation" && r.existingEntry === "null") {
          newRelationArr.push({
            relation_type: r.relation_type,
            type: "organisation",
            org_name: {
              text: r.title,
            },
            websites: r.websites,
            places: r.places,
            relations: [],
          });
        } else if (r.type === "organisation" && r.existingEntry !== "null") {
          projectList.value.map((p) => {
            if (p.uuid === r.existingEntry) {
              newRelationArr.push({
                relation_type: r.relation_type,
                type: "organisation",
                org_name: {
                  text: p.title,
                },
                uuid: r.existingEntry,
              });
            }
          });
        }

        project.project.relations = newRelationArr;
        Object.keys(project.project.topic_relations).map((k) => {
          project.project.topic_relations[k] = Boolean(
            project.project.topic_relations[k]
          );
        });
      });
      output.value = encodeURIComponent(JSON.stringify(project, null, 2));
    };

    const reset = () => {
      output.value = null;
      project.project.relations = oldRelArr;
    };

    axios
      .get(
        "https://raw.githubusercontent.com/Closing-the-Gap-in-NLS-DH/Projects/master/PROJECTS.json"
      )
      .then((responseIndex) => {
        Object.keys(responseIndex.data).map((key) => {
          projectList.value.push({
            uuid: key,
            title: responseIndex.data[key].title,
          });
        });
      });
    return {
      resetForm,
      project,
      projectList,
      addRelation,
      addKeyword,
      generateJSON,
      keywordList,
      roles,
      metadata,
      data,
      datatypes,
      output,
      reset,
    };
  },
});
</script>
