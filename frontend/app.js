//import { json } from 'body-parser';

//import { json } from 'express';
new Vue({
	el: '#app',
	data() {
		return {
			works: [],
			name: ''
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
		remove(id) {
			axios.delete(`/api/works/${id}`, id)
				.then((res) => {
					this.works = this.works.filter(s => s.id !== id)
				})
		}
	},
	mounted() {
		axios
			.get('/api/works')
			.then(response => (this.works = response.data));
	}
});