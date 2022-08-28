//import { json } from 'body-parser';

//import { json } from 'express';
new Vue({
	el: '#app',
	data() {
		return {
			works: [],
			name: '',
		};
	},
	methods: {
		createServer() {
			if (this.name !== '') {
				const bodyParameters = {
					name: this.name,
					status: 'создано'
				};

				axios.post('/api/works', bodyParameters)
					.then((res) => {
						this.works.push(res.data)
					});
				this.name = ''
			}
		},
		UpdateWorkName(newName, id) {

			console.log(newName)
			axios.put(`/api/works/${id}`, { id: id, name: newName })
				.then((res) => {
					this.works = this.works.map(elem => {
						if (id === elem.id) {
							elem.name = newName
						}
						return elem
					})
				})
		},
		remove(id) {
			axios.delete(`/api/works/${id}`, id)
				.then((res) => {
					this.works = this.works.filter(s => s.id !== id)
				})
		},
		toggleEditMode(id) {
			this.works = this.works.map(el => {
				if (el.id === id) {
					el.editMode = !el.editMode
					el.newName = el.name
					return el
				} else {
					return el
				}
			})
		},
	},
	mounted() {
		axios
			.get('/api/works')
			.then(response => (this.works = response.data));
	}
});