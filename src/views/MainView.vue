<template>
	<SplashView v-if="showingSplash"/>

  	<div v-show="!showingSplash" class="min-h-screen overscroll-contain bg-white dark:bg-slate-900 dark:text-slate-300 text-base">
		<Navbar :show-transition="showLanding" :dark-mode-active="darkModeActive" @toggle-dark="toggleDark"/>

		<!-- Fixed left-edge social icons (centered inside left margin) -->
		<ul class="hidden md:flex md:fixed md:bottom-6 md:flex-col md:space-y-5 z-20 md:left-[22px] lg:left-[32px] xl:left-[40px]">
			<li v-show="githubLink" :class="['transition-all motion-reduce:transition-none duration-500', showLanding ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">
				<a :href="githubLink" target="_blank">
					<font-awesome-icon icon="fa-brands fa-github" class="h-9 w-9 text-black hover:-translate-y-1 transition duration-300 dark:text-slate-300"></font-awesome-icon>
				</a>
			</li>
			<li v-show="linkedinLink" :class="['transition-all motion-reduce:transition-none duration-500 delay-[100ms]', showLanding ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">
				<a :href="linkedinLink" target="_blank">
					<font-awesome-icon icon="fa-brands fa-linkedin" class="h-9 w-9 text-black hover:-translate-y-1 transition duration-300 dark:text-slate-300"></font-awesome-icon>
				</a>
			</li>
			<li v-show="xTwitterLink" :class="['transition-all motion-reduce:transition-none duration-500 delay-[200ms]', showLanding ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">
				<a :href="xTwitterLink" target="_blank">
					<font-awesome-icon icon="fa-brands fa-x-twitter" class="h-9 w-9 text-black hover:-translate-y-1 transition duration-300 dark:text-slate-300"></font-awesome-icon>
				</a>
			</li>
			<li v-show="faceBookLink" :class="['transition-all motion-reduce:transition-none duration-500 delay-[300ms]', showLanding ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">
				<a :href="faceBookLink" target="_blank">
					<font-awesome-icon icon="fa-brands fa-facebook" class="h-9 w-9 text-black hover:-translate-y-1 transition duration-300 dark:text-slate-300"></font-awesome-icon>
				</a>
			</li>
		</ul>

		<!-- Fixed right-edge location text (centered inside right margin) -->
		<p :class="['hidden md:block fixed origin-bottom-right rotate-90 transition-all motion-reduce:transition-none duration-500 z-20 text-base font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap md:bottom-6 md:right-[36px] lg:right-[48px] xl:right-[56px]', showLanding ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">
			📍 Based in {{ portfolio.greeting.basedLocation }}
		</p>

		<!-- Mobile social icons row -->
		<ul class="flex md:hidden items-center justify-center gap-6 py-4">
			<li v-show="githubLink"><a :href="githubLink" target="_blank"><font-awesome-icon icon="fa-brands fa-github" class="h-6 w-6 dark:text-slate-300"></font-awesome-icon></a></li>
			<li v-show="linkedinLink"><a :href="linkedinLink" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin" class="h-6 w-6 dark:text-slate-300"></font-awesome-icon></a></li>
			<li v-show="xTwitterLink"><a :href="xTwitterLink" target="_blank"><font-awesome-icon icon="fa-brands fa-x-twitter" class="h-6 w-6 dark:text-slate-300"></font-awesome-icon></a></li>
			<li v-show="faceBookLink"><a :href="faceBookLink" target="_blank"><font-awesome-icon icon="fa-brands fa-facebook" class="h-6 w-6 dark:text-slate-300"></font-awesome-icon></a></li>
		</ul>

		<!-- Centered content area with comfortable side borders -->
		<div class="px-4 sm:px-8 md:px-20 lg:px-28 xl:px-32">
			<div class="container mx-auto max-w-full 2xl:max-w-7xl">
				<LandingView :content="portfolio.greeting" :show-transition="showLanding"/>

				<AboutView :content="portfolio.about" :transitions="portfolio.transitions" />

				<WorkExperienceView :content="portfolio.professionalExperiences" :transitions="portfolio.transitions" />

				<ExperienceView :content="portfolio.experiences" :transitions="portfolio.transitions" />

				<WorkView :transitions="portfolio.transitions" />

				<ContactView :content="portfolio.contact" :transitions="portfolio.transitions" />

				<footer class="text-center pb-6 text-xs text-slate-500 dark:text-slate-400">
					<p>Built with Vue, Vite, and Tailwind CSS by Nima Kelidari.</p>
					<p>Template adapted from <a href="https://github.com/feifyKike/webdev_portfolio" class="hover:text-link-color" target="_blank">webdev_portfolio</a> by Maxim Shelepov.</p>
				</footer>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import Navbar from '../components/Navbar.vue'
import LandingView from './LandingView.vue'
import AboutView from './AboutView.vue'
import WorkExperienceView from './WorkExperienceView.vue'
import ExperienceView from './ExperienceView.vue'
import WorkView from './WorkView.vue'
import ContactView from './ContactView.vue'
import SplashView from './SplashView.vue'

import portfolio from '../portfolio'

const router = useRouter()

const showingSplash = ref(portfolio.splashScreen)
const showLanding = ref(!(portfolio.transitions.active || portfolio.transitions.onlyLanding))
const darkModeActive = ref(false)

onMounted(() => {
	splashScreen()
	landingTransition()
	useDark()
})

// Social Media Links
const emailLink = portfolio.socialMediaLinks.email
const githubLink = portfolio.socialMediaLinks.github
const linkedinLink = portfolio.socialMediaLinks.linkedin
const telegramLink = portfolio.socialMediaLinks.telegram
const xTwitterLink = portfolio.socialMediaLinks.xtwitter;
const faceBookLink = portfolio.socialMediaLinks.facebook

const splashScreen = () => {
	if (portfolio.splashScreen) {
		setTimeout(() => {
			showingSplash.value = false
			router.push(window.location.hash)
		}, 2000)
	}
}

const landingTransition = () => {
	if (!showLanding.value && portfolio.splashScreen) {
		setTimeout(() => {
			showLanding.value = true
		}, 2100)
	} else if (!showLanding.value) {
		setTimeout(() => {
			showLanding.value = true
		}, 500)
	}
}

const useDark = () => {
	// credit: https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection
	if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		document.documentElement.classList.remove('bg-white')
		document.documentElement.classList.add('dark', 'bg-slate-900')
		darkModeActive.value = true
	} else {
		document.documentElement.classList.remove('dark', 'bg-slate-900')
		document.documentElement.classList.add('bg-white')
		darkModeActive.value = false
	}
}

const toggleDark = () => {
	if (darkModeActive.value) {
		localStorage.theme = 'light'
	} else {
		localStorage.theme = 'dark'
	}

	useDark()
}

</script>