<template>
    <div class="animatedsidenavigation" :class="{ open: isOpen }">
        
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="#">App</a>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        
    </div>
</template>

<script>
    export default {
        name: 'animatedsidenavigation',
        extends: {},
        mixins: {},
        props: {
            direction: {
                type: String,
                default: 'left',
                validator ( value ) {
                    console.log( 'default value = ', value );
                    return [ 'left', 'right', 'bottom', 'top' ].includes( value ) ? value : 'right';
                }
            },
            state: {
                type: String,
                default: 'open',
                validator ( value ) {
                    return [ 'open', 'close' ].includes( value );
                }
            }
        },
        data: function () {
            return {
                isOpen: false || this.state === 'open'
            }
        },
        computed: {},
        components: {},
        watch: {},
        methods: {
            toggle: function () {
                this.isOpen ? this.close() : this.open();
            },
            open: function () {
                this.isOpen = true;
                document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
            },
            close: function () {
                this.isOpen = false;
                document.body.style.backgroundColor = "none";
            }
        },
        beforeCreate: function () {},
        created: function () {
            console.log( '*** created ***' );
            console.log( 'direction = ', this.direction );
        },
        beforeMount: function () {},
        mounted: function () {
            console.log( '*** mounted ***' );
            console.log( 'direction = ', this.direction );
        },
        beforeUpdate: function () {},
        updated: function () {},
        beforeDestroy: function () {},
        destroyed: function () {}
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

        &.open {
            width: 250px;
        }

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