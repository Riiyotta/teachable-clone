import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'

gsap.registerPlugin(CustomEase)

// CSS `ease` = cubic-bezier(.25,.1,.25,1); Webflow IX2 "ease" uses the same curve.
export const CSS_EASE = CustomEase.create('cssEase', '0.25,0.1,0.25,1')
export { gsap }
