<template>
    <section class="min-h-fit w-full" ref="aboutSection" id="about-section">
        <div class="relative flex py-5 items-center" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
            <h1 class="text-3xl font-bold pr-5">😎 About Me</h1>
            <div class="flex-grow border-t border-black dark:border-white border-1"></div>
        </div>
        <div>
            <div :class="['flex flex-col gap-y-6 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0 mb-20 text-[17px] text-slate-500 dark:text-slate-300 transition-all motion-reduce:transition-none duration-500 delay-300', visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']">
                <div class="order-2 lg:order-none flex flex-col gap-5">
                    <p v-for="paragraph in content.autobiography" class="leading-relaxed">{{ paragraph }}</p>
                    <div>
                        <p class="pb-3 text-base text-slate-700 dark:text-slate-200 font-semibold">Most Recent Tech Stack</p>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="tech in content.techStack" class="text-sm font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">{{ tech }}</span>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3 order-1 lg:order-none content-start">
                    <div class="col-span-2 aspect-[16/9] overflow-hidden rounded-md shadow-md">
                        <img :src="getImageUrl(content.photo4Link)" class="w-full h-full object-cover" loading="lazy"/>
                    </div>
                    <div class="aspect-[5/4] overflow-hidden rounded-md shadow-md">
                        <img :src="getImageUrl(content.photo5Link)" class="w-full h-full object-cover" loading="lazy"/>
                    </div>
                    <div class="aspect-[5/4] overflow-hidden rounded-md shadow-md">
                        <img :src="getImageUrl(content.photo1Link)" class="w-full h-full object-cover" loading="lazy"/>
                    </div>
                    <div class="aspect-[5/4] overflow-hidden rounded-md shadow-md">
                        <img :src="getImageUrl(content.photo2Link)" class="w-full h-full object-cover" loading="lazy"/>
                    </div>
                    <div class="aspect-[5/4] overflow-hidden rounded-md shadow-md">
                        <img :src="getImageUrl(content.photo3Link)" class="w-full h-full object-cover" loading="lazy"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import { onIntersect } from '../composables/onIntersect'

const props = defineProps({
    content: Object,
    transitions: Object
})

const aboutSection = ref({})
const visible = props.transitions.active && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
    ? onIntersect(aboutSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption })
    : true

let getImageUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href
}
</script>
