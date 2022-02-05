export { default as CarouselComponent } from '../..\\components\\CarouselComponent.vue'
export { default as CommentFormComponent } from '../..\\components\\CommentFormComponent.vue'
export { default as CommentListComponent } from '../..\\components\\CommentListComponent.vue'
export { default as CommentsComponent } from '../..\\components\\CommentsComponent.vue'
export { default as FooterComponent } from '../..\\components\\FooterComponent.vue'
export { default as HeaderComponent } from '../..\\components\\HeaderComponent.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
