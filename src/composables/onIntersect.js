/**
 * @function onIntersect
 * @param  {HTMLElement} elementToWatch elementToWatch
 * @param  {Boolean} once if true only run once
 * @param  {Object} options Intersection Observer API options
 * @return {Ref<boolean>}
 *
 * NOTE: Defaults to `true` so content is always visible even if the
 * IntersectionObserver never fires (which can happen for very tall sections,
 * in headless browsers, or with reduced-motion preferences). The observer
 * is still wired up but only used to retrigger entrance animations.
 */
import { ref, onMounted, onUnmounted } from 'vue';

export const onIntersect = (elementToWatch, once = true, options = { threshold: 0.1 }) => {
    const visible = ref(true)

    const observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
            visible.value = true
            if (once) {
                observer.unobserve(entry.target);
            }
        }
    }, options);

    onMounted(() => {
        if (elementToWatch.value) {
            observer.observe(elementToWatch.value)
        }
    })
    onUnmounted(() => observer.disconnect())

    return visible;
};
