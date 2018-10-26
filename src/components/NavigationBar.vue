<template>
    <div class="navigation-bar">
        <h2>Navigation Bar</h2>
        <nav>
            <router-link 
                class="spacing"
                v-for="routes in links" 
                v-bind:key="`${ routes.id }`" 
                :to="`${ routes.page }`">{{ routes.text }}</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavigationBar',
    extends: {},
    mixins: {},
    props: {},
    components: {},
    data: function () {
        return {
            links: [
                {
                    id: 0,
                    text: 'App',
                    page: '/app'
                },
                {
                    id: 1,
                    text: 'Home',
                    page: '/home'
                },
                {
                    id: 2,
                    text: 'About',
                    page: '/about'
                },
                {
                    id: 3,
                    text: 'Contact',
                    page: '/contact'
                },
            ]
        }
    },
    computed: {},
    watch: {},
    methods: {},
    beforeCreate: function () {}
}
</script>

<style lang="scss" scoped>
.spacing {
    margin-right: 10px;
}
</style>
