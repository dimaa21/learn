const App = {
  data() {
    return {
      placeholderString: 'Введіть назву замітки',
      title: 'Список заміток',
      inputValue: '',
      notes: ['Замітка 1']
    }
  },

  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value
    },
    addNewNote() {
      this.notes.push(this.inputValue)
      this.inputValue = ''
    },
    inputKeyPress(event) {
      console.log(event.key)
    }
  }
}

Vue.createApp(App).mount('#app')