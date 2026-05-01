<template>
    <section class="min-h-fit w-full" ref="workSection" id="project-section">
        <div class="relative flex py-5 items-center">
            <h1 class="text-3xl font-bold pr-2 sm:pr-5">💻 Projects</h1>
            <div class="flex-grow border-t border-black dark:border-white border-1"></div>
            <a :href="archiveLink" class="pl-2 sm:pl-5 hover:text-link-color text-right text-sm" target="_blank">GitHub Archive →</a>
        </div>

        <div>
            <!-- Stats / overview row -->
            <div class="flex flex-wrap items-center gap-3 mb-8 text-sm">
                <div class="px-4 py-2 rounded-full border border-button-color/40 bg-button-color/10 text-button-color font-semibold">
                    {{ totalProjects }}+ Projects
                </div>
                <div class="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                    {{ workCategories.length }} Categories
                </div>
                <div class="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                    {{ featuredCategory.projects.length }} Featured
                </div>
            </div>

            <p class="text-sm text-slate-500 dark:text-slate-400 mb-8">
                Click any section below to expand and see the projects inside.
            </p>

            <div class="flex flex-col mb-16">
                <ProjectCategorySection
                    :category="featuredCategory"
                    :default-expanded="false"
                    variant="featured"
                />
                <ProjectCategorySection
                    v-for="(category, index) in workCategories"
                    :key="'cat-' + index"
                    :category="category"
                    :default-expanded="false"
                    variant="compact"
                />
            </div>

            <div class="text-center mb-20">
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
import ProjectCategorySection from '../components/ProjectCategorySection.vue'
import portfolio from '../portfolio'

const props = defineProps({
    transitions: Object
})

const workCategories = portfolio.workCategories
const archiveLink = portfolio.archiveLink

const featuredCategory = {
    name: 'Featured Work',
    emoji: '⭐',
    description: 'A curated selection of recent research and engineering projects that best represent my work across NLP, RL, MLOps, and full-stack systems.',
    projects: portfolio.featuredWorks
}

const totalProjects = computed(() => {
    const categorized = workCategories.reduce((sum, cat) => sum + cat.projects.length, 0)
    return featuredCategory.projects.length + categorized
})

const workSection = ref({})
</script>
