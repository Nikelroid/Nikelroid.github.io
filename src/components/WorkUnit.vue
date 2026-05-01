<template>
    <div class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-8 items-center">
        <div v-if="!project.alignLeft" class="order-first pb-4 lg:pb-0 lg:order-none w-full">
            <img
                @load="imgLoaded = true"
                @error="imgLoaded = true"
                :src="getImageUrl(project.imageLink)"
                :class="['shadow-md rounded-md w-full max-h-[420px] object-cover transition-opacity duration-500', imgLoaded ? 'opacity-100' : 'opacity-0']"
                loading="lazy"
            />
        </div>
        <div class="flex flex-col space-y-3" :class="project.alignLeft ? 'text-left' : 'lg:text-left'">
            <p class="text-sm text-button-color font-semibold tracking-wide">{{ project.yearCompleted }}</p>
            <h3 class="text-xl lg:text-2xl font-extrabold leading-tight">{{ project.projectName }}</h3>
            <p class="text-base text-slate-500 dark:text-slate-300 leading-relaxed">{{ project.description }}</p>
            <p class="text-sm font-mono text-slate-600 dark:text-slate-400">{{ project.techStack }}</p>
            <div class="flex flex-wrap gap-x-5 gap-y-2 items-center text-slate-400 pt-1" :class="!project.alignLeft ? 'lg:justify-end' : ''">
                <a v-for="link in project.links" :href="link.url" class="flex items-center space-x-2 hover:text-link-color focus:text-link-color active:text-link-color" target="_blank">
                    <span v-if="link.type == 'git'" class="flex items-center space-x-2">
                        <font-awesome-icon icon="fa-brands fa-github" class="h-6 w-6"></font-awesome-icon>
                        <span v-if="link.label">{{ link.label }}</span>
                        <span v-else>Code</span>
                    </span>
                    <span v-else-if="link.type == 'external'" class="flex items-center space-x-2">
                        <ArrowTopRightOnSquareIcon class="h-6 w-6"/>
                        <span>{{ link.label }}</span>
                    </span>
                    <span v-else class="flex items-center space-x-2">
                        <LinkIcon class="h-5 w-5"/>
                        <span>{{ link.label }}</span>
                    </span>
                </a>
            </div>
        </div>
        <div v-if="project.alignLeft" class="order-first pb-4 lg:pb-0 lg:order-none w-full">
            <img
                @load="imgLoaded = true"
                @error="imgLoaded = true"
                :src="getImageUrl(project.imageLink)"
                :class="['shadow-md rounded-md w-full max-h-[420px] object-cover transition-opacity duration-500', imgLoaded ? 'opacity-100' : 'opacity-0']"
                loading="lazy"
            />
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
