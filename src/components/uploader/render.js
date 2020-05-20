const tips = [
    {
        title: '',
        // title() {},
        extra: '',
        // extra() {},
        contents: [
            {
                text: '',
                render() {

                }
            }
        ]
    }
]

export default {
    props: {
        title: String | Function,
        extra: String | Function,
        contents: Array
    },
    methods: {
        renderHeader(h) {
            const childs = []
            childs.push(typeof this.title === 'string' ? this.title : this.title(h))
            if (this.extra) childs.push('(', typeof this.extra === 'string' ? this.extra : this.extra(h), ')')
            return h('h4', childs)
        },
        renderContent(h, { text, render }) {
            if (text) return h('div', [ text ])
            return render(h)
        }
    },
    render(h) {
        const header = this.renderHeader(h)
        const contents = this.contents.map(d => this.renderContent(h, d))

        return h('div', 
            {
                class: [ 'tip' ]
            },
            [
                header,
                h('div', contents)
            ]
        )
    }
}