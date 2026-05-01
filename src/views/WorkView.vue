<template>
    <section class="min-h-screen w-full" ref="workSection" id="project-section">
        <div class="relative flex py-5 items-center" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
            <h1 class="text-3xl font-bold pr-2 sm:pr-5">💻 Projects</h1>
            <div class="flex-grow border-t border-black dark:border-white border-1"></div>
            <a :href="archiveLink" class="pl-2 sm:pl-5 hover:text-link-color text-right text-sm">Visit My GitHub Archive →</a>
        </div>

        <div :class="['transition-all motion-reduce:transition-none duration-500 delay-200', visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']">
            <!-- Stats / overview row -->
            <div class="flex flex-wrap items-center gap-3 sm:gap-5 mb-10 text-sm">
                <div class="px-4 py-2 rounded-full border border-button-color/40 bg-button-color/5 text-button-color font-semibold">
                    {{ totalProjects }}+ Projects
                </div>
                <div class="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                    {{ workCategories.length }} Areas
                </div>
                <div class="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                    Five years of building
                </div>
            </div>

            <!-- Featured projects -->
            <div class="flex items-center gap-3 mb-6">
                <h2 class="text-2xl font-bold">⭐ Featured Work</h2>
                <div class="flex-grow border-t border-slate-300 dark:border-slate-700"></div>
            </div>
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-8">Selected projects that best represent my recent research, engineering, and full-stack work.</p>

            <div class="flex flex-col space-y-12 mb-20">
                <WorkUnit
                    v-for="(project, index) in featuredWorks"
                    :key="'featured-' + index"
                    :project="project"
                />
            </div>

            <!-- Browse by category -->
            <div class="flex items-center gap-3 mb-6">
                <h2 class="text-2xl font-bold">📚 Browse by Category</h2>
                <div class="flex-grow border-t border-slate-300 dark:border-slate-700"></div>
            </div>
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-8">A full tour of my work across {{ workCategories.length }} areas. Click any header to expand or collapse.</p>

            <div class="flex flex-col mb-20">
                <ProjectCategorySection
                    v-for="(category, index) in workCategories"
                    :key="'cat-' + index"
                    :category="category"
                    :default-expanded="index < 3"
                />
            </div>

            <div class="text-center mb-36">
                <a :href="archiveLink" target="_blank">
                    <button class="py-2 px-6 bg-transparent border border-button-color text-button-color shadow-sm shadow-button-color transition ease-in-out hover:bg-button-color hover:text-white focus:bg-button-color focus:text-white active:bg-button-color active:text-white duration-300">
                        See All Repositories on GitHub
                    </button>
                </a>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, computed } from 'vue'
import WorkUnit from '../components/WorkUnit.vue'
import ProjectCategorySection from '../components/ProjectCategorySection.vue'
import portfolio from '../portfolio'
import { onIntersect } from '../composables/onIntersect'

const props = defineProps({
    transitions: Object
})

const featuredWorks = portfolio.featuredWorks
const workCategories = portfolio.workCategories
const archiveLink = portfolio.archiveLink

const totalProjects = computed(() => {
    const categorized = workCategories.reduce((sum, cat) => sum + cat.projects.length, 0)
    return featuredWorks.length + categorized
})

const workSection = ref({})
const visible = props.transitions.active && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
    ? onIntersect(workSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption })
    : true
</script>
