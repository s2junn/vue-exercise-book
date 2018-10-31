import Vue from 'vue';
import { mount } from '@vue/test-utils';
import { doesNotReject } from 'assert';
import Drawer from '@components/Drawer.vue';

describe( 'Drawer Component', () => {
    {
        it ( 'renders correctly', () => {
            expect( true ).toBe( true );
        });
    
        // after applying @vue/test-utils
        it ( 'renders correctly', () => {
            const component = mount( Drawer );
            expect( component.html() ).toMatchSnapshot();
        });
    }

    {
        it ( 'renders correctly after changing the name state', () => {
            const component = new Vue( Drawer ).$mount();
            component.name = 'Camel';
    
            component.$nextTick( () => {
                expect( component.$el ).toMatchSnapshot();
                done();
            });
        });

        // after applying @vue/test-utils
        it ( 'renders correctly', () => {
            const component = mount( Drawer );
            component.setData({ state: 'open' });
            expect( component.html() ).toMatchSnapshot();
        });
    }
    

    it ( 'renders correctly with different props', () => {
        const component = new Vue( Drawer ).$mount();
        expect( component.$el ).toMatchSnapshot();
    });

    {
        it ( 'renders correctly setting the `state` prop', () => {
            const props = { state: 'open' };
            const Constructor = Vue.extend( Drawer );
            const component = new Constructor({ propsData: props }).$mount();
    
            expect( component.$el ).toMatchSnapshot();
        });

        // after applying @vue/test-utils
        it ( 'renders correctly setting the `state` prop', () => {
            const component = mount( Drawer, {
                propsData: {
                    state: 'open',
                }
            });

            expect( component.html() ).toMatchSnapshot();
        });
    }
    
});