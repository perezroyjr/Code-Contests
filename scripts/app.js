import * as http from './http.js'

const GET_CONTESTS = `https://kontests.net/api/v1/all`
const ulUpdater = document.getElementById('upcoming');

const contestData = async () => {
	const json = await http.sendGETRequest(GET_CONTESTS);
	const date = new Date();
	console.log(json);
	let upcoming = '';
	let expired = '';
	let contestDate;
	let i = 0;
	json.forEach((contest) => {
		 console.log(contest.name, contest.site, contest.start_time);
			contestDate = new Date(contest.start_time);
			

			if(contestDate > date && i === 0){
				i++;
				upcoming +=`<div class="d-flex flex-row justify-content-lg-around mt-5 mb-5 text-center align-items-center ">
							<ul class="list-style flex-column">
								<li class="list-group-item"><h3>${contest.name}</h3></li>
							 	<li class="list-group-item ">${new Date(contest.start_time).toLocaleString()}</li>
							 	<li class="list-group-item">Contest Link: <a href='${contest.url}' target="_blank">${contest.site}</a></li>
							</ul>`;
			 }else if(contestDate > date && i < 4){
			 					i++;
			 					upcoming += 
							`<ul class="list-style flex-column">
								<li class="list-group-item"><h3>${contest.name}</h3></li>
							 	<li class="list-group-item">${new Date(contest.start_time).toLocaleString()}</li>
							 	<li class="list-group-item">Contest Link: <a href='${contest.url}' target="_blank">${contest.site}</a></li>
							 </ul>`;
			 }else if(i === 4){
			 	upcoming += `</div>
			 	<hr class="my-5">`;

			 				i = 0;
			 }
			 console.log(i);

		});

		ulUpdater.innerHTML = upcoming;
		console.log(contestDate.toLocaleString(), date.toLocaleString());
}

window.start = async() => {
	contestData();
}

window.addEventListener('load', start);
