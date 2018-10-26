import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/views/home/Home.vue'
import About from '@/views/about/About.vue'
import Contact from '@/views/contact/Contact.vue'


Vue.use( Router )


export default new Router({
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
    ]
})