<template>
    <div class="animatedsidenavigation">
        
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
        
    </div>
</template>

<script>
    export default {
        name: 'animatedsidenavigation',
        extends: {},
        mixins: {},
        props: {},
        components: {},
        data: function() {
            return {

            }
        },
        computed: {},
        watch: {},
        methods: {},
        beforeCreate: function() {},
        created: function () {},
        beforeMount: function() {},
        mounted: function() {},
        beforeUpdate: function() {},
        updated: function() {},
        beforeDestroy: function() {},
        destroyed: function() {}
    }
</script>

<style lang="scss" scoped>
    .animatedsidenavigation {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #111;
        overflow-x: hidden;
        padding-top: 60px;
        transition: 0.5s;

        a {
            padding: 8px 8px 8px 32px;
            text-decoration: none;
            font-size: 25px;
            color: #818181;
            display: block;
            transition: 0.3s;

            &:hover {
                color: #f1f1f1;
            }
        }
    }
</style>