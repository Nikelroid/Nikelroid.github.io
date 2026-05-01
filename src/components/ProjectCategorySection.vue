<template>
    <section class="mb-6">
        <button
            @click="expanded = !expanded"
            class="w-full flex items-center justify-between gap-3 py-4 px-3 sm:px-4 rounded-md border border-slate-200 dark:border-slate-700 hover:border-button-color dark:hover:border-button-color hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300 text-left"
            :class="{ 'border-button-color/40 bg-slate-50 dark:bg-slate-800/40': expanded }"
        >
            <div class="flex items-center gap-3 flex-wrap min-w-0">
                <span class="text-2xl flex-shrink-0">{{ category.emoji }}</span>
                <h2 class="text-lg sm:text-xl font-bold truncate">{{ category.name }}</h2>
                <span class="inline-flex items-center justify-center text-xs font-semibold px-2.5 py-0.5 rounded-full bg-button-color/15 text-button-color border border-button-color/30 flex-shrink-0">
                    {{ category.projects.length }} {{ category.projects.length === 1 ? 'project' : 'projects' }}
                </span>
            </div>
            <ChevronDownIcon
                :class="['h-5 w-5 transition-transform duration-300 text-slate-500 dark:text-slate-400 flex-shrink-0', expanded ? 'rotate-180' : 'rotate-0']"
            />
        </button>

        <div v-show="expanded" class="px-1 sm:px-2 pt-5">
            <p v-if="category.description" class="text-sm text-slate-500 dark:text-slate-400 mb-5">{{ category.description }}</p>
            <div :class="gridClass">
                <component
                    :is="cardComponent"
                    v-for="(project, index) in category.projects"
                    :key="index"
                    :project="project"
                />
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, computed } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/24/solid';
import ProjectCardCompact from './ProjectCardCompact.vue';
import FeaturedProjectCard from './FeaturedProjectCard.vue';

const props = defineProps({
    category: Object,
    defaultExpanded: {
        type: Boolean,
        default: false
    },
    variant: {
        type: String,
        default: 'compact' // 'compact' | 'featured'
    }
})

const expanded = ref(props.defaultExpanded)

const cardComponent = computed(() =>
    props.variant === 'featured' ? FeaturedProjectCard : ProjectCardCompact
)

const gridClass = computed(() =>
    props.variant === 'featured'
        ? 'grid grid-cols-1 md:grid-cols-2 gap-5'
        : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
)
</script>
