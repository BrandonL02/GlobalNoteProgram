


function main(){
	let fname = isPopulated(document.getElementById('fname').value,'','');
	let DBA = document.getElementById('DBA').value;
	let MID = document.getElementById('MID').value;
	let caseNum = isPopulated(document.getElementById('case#').value,'','Case Number: ');
	let PHONE = document.getElementById('PHONE').value;
	let Solution = document.getElementById('Solution').value;
	let Verified = document.querySelector('#Verified').checked;
	let Secured = document.querySelector('#Secured').checked;
	let Notes = document.getElementById('notes').value;
	let Issue = document.getElementById('issue').value;
	let secMethod = `Secured By: `;
	let relation = isPopulated(document.getElementById('relation').value,'p','');
	let agentId = isPopulated(document.getElementById('agentId').value,'p','');
	
	if(Verified==true){
		Verified=`Verified`
	}else{
		Verified=`Not Verified`
	}
	
	if(Secured==true){
		Secured =`Secured`
	}else{
		Secured=`Not Secured`
	}
	
	document.getElementById("template").value=`MID: ${MID}\nDBA: ${DBA}\nWHO: ${fname}${relation}${Verified}/${Secured}\nINTEGRATION: ${Solution}\nIssue/SOLUTION:\n${Issue}\nWhere you looked: \nExpected results: `;
}


function getAlElems(){
	return document.querySelectorAll("input,textarea")
}

function clearInputs(){
	
	let allElems = getAlElems();
	for(let i = 0; i < allElems.length; i++){

		allElems[i].value=""
		
	}
}

function clearCheckboxes(){
	let checkboxes = document.querySelectorAll('input[type=checkbox]')
	for(let i = 0; i < checkboxes.length; i++){
		
		if(checkboxes[i].id != "showLog"){
			checkboxes[i].checked=false
		}
		
	}
}

function clearForm(){
	clearCheckboxes()
	clearInputs()
}

function copy(id){
	var copyText = document.getElementById(id);
	copyText.select();
	navigator.clipboard.writeText(copyText.value);
	
}



function showHideDiv(x,y){
	
	console.log(document.getElementById(y).id)
	
	if(document.getElementById(y).id == "log"){
		if(document.querySelector(x).checked == true){
			document.getElementById(y).style.display = "flex";
			document.getElementById(y).style.flexWrap = "wrap";
			document.getElementById(y).style.flexDirection = "row";
			document.getElementById(y).style.justifyContent = "center";
			document.getElementById(y).style.alignItems = "center";
		}else{
			document.getElementById(y).style.display = "none";
		}
		
	}else{
		if(document.querySelector(x).checked == true){
		document.getElementById(y).style.display = "block";
		}else{
			document.getElementById(y).style.display = "none";
		}
	}
	
	
}

function isPopulated(x,y,z){
	if(y=='p'){if(x.length > 0){return ` (${x})`}else{return ''}
	}else if(y=='b'){if(x.length > 0){return ` [${x}]`}else{return ''}
	}else{if(x.length > 0){return `${z}${x}`}else{return ''}}
	
	
}

function log(){
	
	document.getElementById('log').innerHTML +=`
	<div class="logItem" onclick="copyClicked(this.innerText)">
		<div>DBA: ${document.getElementById('DBA').value}</div>
		<div>MID: ${document.getElementById('MID').value}</div>
		<div>PHONE: ${document.getElementById('PHONE').value}</div>
		<div>INTEGRATION: ${document.getElementById('Solution').value}</div>
		<pre>${document.getElementById('notes').value}</pre>
	</div>`
	
	
}

function copyLog(){
	var copyText = document.getElementById("log").innerText;
	var border = '\n' + ('-' * 50)
	navigator.clipboard.writeText(copyText) + border;
}

function clearLog(){
	document.getElementById('log').innerHTML = ``;
}


function copyClicked(e){
	navigator.clipboard.writeText(e)
	document.getElementById(y).style.display = "flex";
}
