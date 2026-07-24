import { createRouter } from 'sv-router';
import Home from './App.svelte';
import CaseStudies from './routes/studies.svelte';

export const { p, navigate, isActive, preload, route } = createRouter({
	'/': Home,
  '/studies': CaseStudies,
});
