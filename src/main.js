import { mount } from 'svelte'
import './app.css'
import './lib/model-element-polyfill/model-element-polyfill.js'
import App from './App.svelte'


const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
