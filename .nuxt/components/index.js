export const CarouselComponent = () => import('../..\\components\\CarouselComponent.vue' /* webpackChunkName: "components/carousel-component" */).then(c => wrapFunctional(c.default || c))
export const CommentFormComponent = () => import('../..\\components\\CommentFormComponent.vue' /* webpackChunkName: "components/comment-form-component" */).then(c => wrapFunctional(c.default || c))
export const CommentListComponent = () => import('../..\\components\\CommentListComponent.vue' /* webpackChunkName: "components/comment-list-component" */).then(c => wrapFunctional(c.default || c))
export const CommentsComponent = () => import('../..\\components\\CommentsComponent.vue' /* webpackChunkName: "components/comments-component" */).then(c => wrapFunctional(c.default || c))
export const FooterComponent = () => import('../..\\components\\FooterComponent.vue' /* webpackChunkName: "components/footer-component" */).then(c => wrapFunctional(c.default || c))
export const HeaderComponent = () => import('../..\\components\\HeaderComponent.vue' /* webpackChunkName: "components/header-component" */).then(c => wrapFunctional(c.default || c))

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
