import Contest from './components/Contest.js'
const renderDOM = (html) => document.getElementById('ul').innerHTML = html;

export const updateList = (data) => {
	const {contest} = data;
	renderDOM(
			`${Contest(contest)}`		
		)
}