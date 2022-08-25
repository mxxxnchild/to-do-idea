import { json } from 'express'
// import { Parser } from 'webpack'

let works = [
	{ id: '1', name: "Зарядка", status: "выполнено" },
	{ id: '2', name: "Завтрак", status: "выполнено" },
	{ id: '3', name: "Учеба", status: "выполнено" },
	{ id: '4', name: "Тренировка", status: "не выполнено" },
	{ id: '5', name: "Душ", status: "не выполнено" },
	{ id: '6', name: "Сон", status: "не выполнено" }
]

export const getAll = (req, res) => {
	res.status(200).json(works)
}

export const create = (req, res) => {
	// let keys = Object.keys(req.body);
	const newWork = {
		id: String(works.length + 1),
		name: req.body.name,
		status: req.body.status

	}
	res.status(201).json(newWork)
	works.push(newWork)
	console.log(works)
}
export const deleteElem = (req, res) => {
	works = works.filter(s => s.id !== req.params.id)
	res.json({ message: 'work has been deleted' })
	console.log(works)
}