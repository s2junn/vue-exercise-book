<template>
    <div class="animatedsidenavigation" :class="{ open: isOpen }" :style="`${ dimension }: ${ size };`">
        <slot name="navigation-menu"></slot>
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
            size: {
                type: String,
                default: '250px',
                validator () {
                    return true;
                }
            },
            state: {
                type: String,
                default: 'close',
                validator ( value ) {
                    return [ 'open', 'close' ].includes( value );
                }
            }
        },
        data () {
            return {
                isOpen: false
            }
        },
        computed: {
            dimension () {
                if ( this.direction === 'left' || this.direction === 'right' ) {
                    return 'width';
                } else {
                    return 'height';
                }
            }
        },
        components: {},
        watch: {
            isOpen ( opened ) {
                if ( opened ) {
                    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
                } else {
                    document.body.style.backgroundColor = "transparent";
                }
            }
        },
        methods: {
            toggle () {
                this.isOpen ? this.close() : this.open();
            },
            open () {
                this.isOpen = true;
            },
            close () {
                this.isOpen = false;
            }
        },
        beforeCreate () {},
        created () {
            console.log( '*** created ***' );

            let opened = false || this.state === 'open';
            opened ? this.open() : this.close();
        },
        beforeMount () {},
        mounted () {
            console.log( '*** mounted ***' );
        },
        beforeUpdate () {},
        updated () {},
        beforeDestroy () {},
        destroyed () {}
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
            & + div {
                margin-left: 250px;
            }
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