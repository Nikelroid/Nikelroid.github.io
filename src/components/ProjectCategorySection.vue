<template>
    <section class="mb-10">
        <button
            @click="expanded = !expanded"
            class="w-full flex items-center justify-between gap-3 py-3 px-2 border-b border-slate-300 dark:border-slate-700 hover:border-button-color dark:hover:border-button-color transition-colors duration-300 text-left"
        >
            <div class="flex items-center gap-3 flex-wrap">
                <span class="text-2xl">{{ category.emoji }}</span>
                <h2 class="text-xl sm:text-2xl font-bold">{{ category.name }}</h2>
                <span class="inline-flex items-center justify-center text-xs font-semibold px-2 py-0.5 rounded-full bg-button-color/10 text-button-color border border-button-color/30">
                    {{ category.projects.length }}
                </span>
            </div>
            <ChevronDownIcon
                :class="['h-5 w-5 transition-transform duration-300 text-slate-500 dark:text-slate-400 flex-shrink-0', expanded ? 'rotate-180' : 'rotate-0']"
            />
        </button>

        <p v-if="category.description" class="text-sm text-slate-500 dark:text-slate-400 mt-3 px-2">{{ category.description }}</p>

        <div v-show="expanded" class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <ProjectCardCompact
                v-for="(project, index) in category.projects"
                :key="index"
                :project="project"
            />
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/24/solid';
import ProjectCardCompact from './ProjectCardCompact.vue';

const props = defineProps({
    category: Object,
    defaultExpanded: {
        type: Boolean,
        default: true
    }
})

const expanded = ref(props.defaultExpanded)
</script>
