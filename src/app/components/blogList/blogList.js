/* ============
 * Blog List Component
 * ============
 *
 * A basic blog list component.
 *
 * lists blog posts
 */

import slotMixin from './../../mixins/slot';

export default {
    mixins: [
        slotMixin,
    ],
    props: {
        contextualStyle: {
            type: String,
            required: false,
        },
    },
    data() {
        return {
            posts: [{
                _id: '1928483',
                title: 'blog post 1',
                content: `Vestibulum eu odio. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. 
                      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                      Etiam iaculis nunc ac metus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, 
                      sit amet adipiscing sem neque sed ipsum. Donec mollis hendrerit risus.`
            }, {
                _id: '122285',
                title: 'blog post 2',
                content: `Vestibulum eu odio. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. 
                      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                      Etiam iaculis nunc ac metus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, 
                      sit amet adipiscing sem neque sed ipsum. Donec mollis hendrerit risus.`
            }]
        }
    },
    computed: {
        classNames() {
            // const classNames = ['panel'];

            // if (this.contextualStyle) {
            //   classNames.push(`panel-${this.contextualStyle}`);
            // } else {
            //   classNames.push('panel-default');
            // }

            // return classNames;
        },
    },
};
