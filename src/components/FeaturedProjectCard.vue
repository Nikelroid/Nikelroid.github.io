<template>
    <div class="group flex flex-col rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow-md hover:shadow-xl hover:-translate-y-1 motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-md transition-all duration-300 h-full">
        <div class="relative aspect-video w-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
            <img
                @load="imgLoaded = true"
                @error="imgLoaded = true"
                :src="getImageUrl(project.imageLink)"
                :class="['w-full h-full object-cover transition-all duration-500 group-hover:scale-105', imgLoaded ? 'opacity-100' : 'opacity-0']"
                loading="lazy"
            />
            <span class="absolute top-3 left-3 px-2 py-1 rounded text-xs font-semibold bg-button-color text-white shadow-md">
                {{ project.yearCompleted }}
            </span>
        </div>
        <div class="flex flex-col gap-3 p-5 flex-grow">
            <h3 class="text-lg font-extrabold leading-tight">{{ project.projectName }}</h3>
            <p class="text-sm text-slate-500 dark:text-slate-300 leading-relaxed flex-grow">{{ project.description }}</p>
            <p class="text-xs font-mono text-slate-600 dark:text-slate-400 pt-1">{{ project.techStack }}</p>
            <div class="flex flex-wrap gap-x-4 gap-y-2 items-center text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-700">
                <a v-for="link in project.links" :href="link.url" class="flex items-center space-x-1 hover:text-link-color focus:text-link-color active:text-link-color text-sm" target="_blank">
                    <span v-if="link.type == 'git'" class="flex items-center space-x-1">
                        <font-awesome-icon icon="fa-brands fa-github" class="h-5 w-5"></font-awesome-icon>
                        <span v-if="link.label">{{ link.label }}</span>
                        <span v-else>Code</span>
                    </span>
                    <span v-else-if="link.type == 'external'" class="flex items-center space-x-1">
                        <ArrowTopRightOnSquareIcon class="h-5 w-5"/>
                        <span>{{ link.label }}</span>
                    </span>
                    <span v-else class="flex items-center space-x-1">
                        <LinkIcon class="h-5 w-5"/>
                        <span>{{ link.label }}</span>
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { LinkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
    project: Object
})

const imgLoaded = ref(false)

let getImageUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href
}
</script>
