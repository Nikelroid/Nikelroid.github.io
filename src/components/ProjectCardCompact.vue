<template>
    <div class="flex flex-col rounded-md bg-white dark:bg-slate-800 shadow-md hover:shadow-lg hover:-translate-y-1 motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-md text-left p-5 transition-all duration-300 h-full">
        <div class="flex items-start justify-between gap-3 mb-2">
            <h3 class="text-base sm:text-lg font-extrabold leading-tight">{{ project.projectName }}</h3>
            <span class="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap pt-1">{{ project.yearCompleted }}</span>
        </div>
        <p class="text-sm text-slate-500 dark:text-slate-300 mb-3 flex-grow">{{ project.description }}</p>
        <p class="text-xs text-slate-600 dark:text-slate-400 mb-3 italic">{{ project.techStack }}</p>
        <div class="flex flex-wrap gap-x-4 gap-y-2 items-center text-slate-400 mt-auto">
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
</template>
<script setup>
import { LinkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
    project: Object
})
</script>
