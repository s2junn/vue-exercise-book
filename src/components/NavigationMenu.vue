<template>
    <div class="navigation-menu">
        <!--slot name="header"></slot-->
        <!--slot name="profile"></slot-->
        <!--slot name="coupon"></slot-->
        <!--slot name="management"></slot-->
        <!--slot name="settings"></slot-->
        <!--slot name="footer"></slot-->
    </div>
</template>

<script>
export default {
    name: 'NavigationMenu',
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
