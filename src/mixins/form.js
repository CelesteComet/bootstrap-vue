import { matches, select, isVisible } from '../utils/dom'

const SELECTOR = 'input, textarea, select'

// @vue/component
export default {
  props: {
    name: {
      type: String
      // default: undefined
    },
    id: {
      type: String
      // default: undefined
    },
    disabled: {
      type: Boolean
    },
    required: {
      type: Boolean,
      default: false
    },
    form: {
      type: String,
      default: null
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.handleAutofocus()
  },
  activated() /* istanbul ignore next */ {
    this.handleAutofocus()
  },
  methods: {
    handleAutofocus() {
      this.$nextTick(() => {
        let el = this.$el
        if (this.autofocus && isVisible(el)) {
          if (!matches(el, SELECTOR)) {
            el = select(SELECTOR, el)
          }
          el && el.focus && el.focus()
        }
      })
    }
  }
}
