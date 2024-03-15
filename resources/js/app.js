import './bootstrap';
import { createApp } from 'vue';
//import IncrementCounter from './components/IncrementCounter.vue';
import Navbar from './components/Navbar.vue';


createApp({})
  //.component('IncrementCounter', IncrementCounter)
    .component('Navbar', Navbar)
   
  .mount('#app')
