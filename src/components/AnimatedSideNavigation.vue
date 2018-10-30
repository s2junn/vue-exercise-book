<template>
    <div class="animatedsidenavigation" :class="[ direction, state, type ]">
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
                    // 12.5%, 20em, 250px
                    // 에서 단위만 떼어낼 수 있는 정규식 필요
                    return true;
                }
            },
            state: {
                type: String,
                default: 'close',
                validator ( value ) {
                    return [ 'open', 'close' ].includes( value );
                }
            },
            type: {
                type: String,
                default: 'cover',
                validator ( value ) {
                    return [ 'cover', 'push' ].includes( value );
                }
            }
        },
        data () {
            return {
                isOpen: false
            }
        },
        computed: {
            classes () {
                return {

                };
            },
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
            direction ( direction ) {
                // 유효성 검사
                let directions = [ 'left', 'right', 'bottom', 'top' ];
                if ( !directions.includes( direction ) ) {
                    direction = 'left';
                }

                // 기존에 담겨있는 class 가 있는지 확인
                for ( const d of directions ) {
                    if ( this.classes.includes( d ) ) {
                        delete this.classes.d;
                    }
                }

                // .animated-navigation.left
                this.classes.push( direction )
            },
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
        position: fixed;
        width: 0;
        height: 0;
        z-index: 1;
        overflow-x: hidden;
        transition: 0.5s;
        // background-color: #111;
        // padding-top: 60px;

        &.left   { left   : 0; top      : 0; height : 100%; }
        &.top    { left   : 0; top      : 0; width  : 100%; }
        &.right  { right  : 0; top      : 0; height : 100%; }
        &.bottom { left   : 0; bottom   : 0; width  : 100%; }

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