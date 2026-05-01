<template>
    <section class="min-h-fit w-full" ref="contactSection" id="contact-section">
        <div :class="['flex flex-col items-center text-center pt-8 mb-24 transition-all motion-reduce:transition-none duration-500', visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']">
            <div v-if="content.formEmbedLink">
                <iframe :src="content.formEmbedLink" frameborder="0" marginheight="0" marginwidth="0" class="mb-10 min-h-[60vh] w-full">Loading...</iframe>
            </div>
            <div v-else class="max-w-3xl mx-auto pt-8">
                <h2 class="text-3xl font-extrabold mb-5">📭 Get in Touch</h2>
                <div class="space-y-3 mb-8">
                    <p v-for="msg in content.externalLink.note" class="text-slate-500 dark:text-slate-300 leading-relaxed">{{ msg }}</p>
                </div>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <template v-if="content.externalLink.link.email">
                        <a :href="'mailto:'+content.externalLink.link.email">
                            <button class="py-2 px-6 bg-transparent border border-button-color shadow-sm shadow-button-color text-button-color hover:text-white hover:bg-button-color focus:bg-button-color focus:text-white active:bg-button-color active:text-white duration-300">Send an Email</button>
                        </a>
                        <p class="text-sm text-slate-500 dark:text-slate-400">{{ content.externalLink.responseTimeMessage }}</p>
                    </template>
                    <template v-else>
                        <a :href="content.externalLink.link.other" target="_blank">
                            <button class="inline-flex items-center gap-2 py-2.5 px-6 bg-button-color border border-button-color shadow-sm shadow-button-color text-white hover:bg-transparent hover:text-button-color transition duration-300 rounded-md">
                                <span class="font-medium">Reach Out</span>
                            </button>
                        </a>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import { EnvelopeIcon } from '@heroicons/vue/24/solid';
import { onIntersect } from '../composables/onIntersect';

const props = defineProps({
    content: Object,
    transitions: Object
})

const contactSection = ref({})
const visible = props.transitions.active && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
    ? onIntersect(contactSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption })
    : true
</script>
