let pcs = [{marque:"ASSER",nom:"Respire TC10",type:"fixe",ecran:null,clavier:null,system:{ram:32,cpu:{marque:"INTELLE",nom:"X9 900",score:25000,core:2,frequenceMax:5900,tdp:125},hdd:{capacite:3840,type:"nvme",rpm:null,vitesseTransfert:3000},cg:{marque:"NVADIA",modele:"RTZ 3080",score:20000}},batterie:null,prix:1000},{marque:"ASSER",nom:"Respire TC2",type:"fixe",ecran:null,clavier:null,system:{ram:16,cpu:{marque:"INTELLE",nom:"X3 300",score:12000,core:2,frequenceMax:4200,tdp:65},hdd:{capacite:1024,type:"nvme",rpm:null,vitesseTransfert:3000},cg:{marque:"NVADIA",modele:"RTZ 3030",score:4000}},batterie:null,prix:300},{marque:"ASSER",nom:"Respire TC",type:"fixe",ecran:null,clavier:null,system:{ram:16,cpu:{marque:"AMDé",nom:"B5 5000",score:15000,core:6,frequenceMax:4200,tdp:65},hdd:{capacite:1024,type:"nvme",rpm:null,vitesseTransfert:3000},cg:{marque:"NVADIA",modele:"RTZ 3050",score:6500}},batterie:null,prix:500},{marque:"ASSER",nom:"Swif 15",type:"portable",ecran:{taille:15,type:"TN",dpi:100},clavier:{chiclet:true,retroeclairage:true,type:"azerty",paveNum:false},system:{ram:16,cpu:{marque:"AMDé",nom:"B5 550",score:12000,core:6,frequenceMax:4200,tdp:25},hdd:{capacite:1024,type:"nvme",rpm:null,vitesseTransfert:3000},cg:{marque:"NVADIA",modele:"mtx 350",score:4000}},batterie:{capacite:55,autonomie:6},prix:900},{marque:"ASSER",nom:"Swif 13",type:"portable",ecran:{taille:13,type:"IPS",dpi:100},clavier:{chiclet:true,retroeclairage:true,type:"azerty",paveNum:false},system:{ram:16,cpu:{marque:"AMDé",nom:"B5 550",score:12000,core:6,frequenceMax:4200,tdp:25},hdd:{capacite:1024,type:"nvme",rpm:null,vitesseTransfert:3000},cg:{marque:"NVADIA",modele:"mtx 350",score:4000}},batterie:{capacite:55,autonomie:6},prix:900},{marque:"ASSER",nom:"Swif 14",type:"portable",ecran:{taille:14,type:"IPS",dpi:100},clavier:{chiclet:true,retroeclairage:false,type:"azerty",paveNum:false},system:{ram:16,cpu:{marque:"AMDé",nom:"B3 500",score:7000,core:4,frequenceMax:4000,tdp:15},hdd:{capacite:1024,type:"ssd",rpm:null,vitesseTransfert:300},cg:{marque:"NVADIA",modele:"RTZ 3050",score:6500}},batterie:{capacite:55,autonomie:4},prix:800},{marque:"ROJ",nom:"Flow Z15",type:"portable",ecran:{taille:15,type:"TN",dpi:100},clavier:{chiclet:true,retroeclairage:true,type:"azerty",paveNum:true},system:{ram:32,cpu:{marque:"AMDé",nom:"B9 5000",score:20000,core:10,frequenceMax:4400,tdp:45},hdd:{capacite:3840,type:"mvne",rpm:null,vitesseTransfert:3000},cg:{marque:"NVADIA",modele:"RTZ 3080",score:20000}},batterie:{capacite:65,autonomie:3},prix:1700},{marque:"ROJ",nom:"Flow Z13",type:"portable",ecran:{taille:13,type:"TN",dpi:100},clavier:{chiclet:true,retroeclairage:true,type:"azerty",paveNum:false},system:{ram:16,cpu:{marque:"AMDé",nom:"B7 5000",score:17000,core:8,frequenceMax:4400,tdp:45},hdd:{capacite:2048,type:"mvne",rpm:null,vitesseTransfert:3000},cg:{marque:"NVADIA",modele:"RTZ 3060",score:12000}},batterie:{capacite:55,autonomie:4},prix:1500},{marque:"Azuss",nom:"ZunBook 13",type:"portable",ecran:{taille:13,type:"IPS",dpi:200},clavier:{chiclet:true,retroeclairage:true,type:"azerty",paveNum:false},system:{ram:16,cpu:{marque:"INTELLE",nom:"X7 770Y",score:7500,core:4,frequenceMax:3600,tdp:12},hdd:{capacite:1024,type:"mvne",rpm:null,vitesseTransfert:3000},cg:{marque:"INTELLE",modele:"HD IRIS",score:1500}},batterie:{capacite:55,autonomie:10},prix:1200},{marque:"Azuss",nom:"ZunBook 12",type:"portable",ecran:{taille:12,type:"IPS",dpi:100},clavier:{chiclet:true,retroeclairage:true,type:"azerty",paveNum:false},system:{ram:16,cpu:{marque:"INTELLE",nom:"X5 550Y",score:6500,core:4,frequenceMax:3600,tdp:10},hdd:{capacite:256,type:"mvne",rpm:null,vitesseTransfert:3000},cg:{marque:"INTELLE",modele:"HD IRIS",score:1500}},batterie:{capacite:45,autonomie:8},prix:900},{marque:"Azuss",nom:"VivaBook 15",type:"portable",ecran:{taille:15,type:"TN",dpi:72},clavier:{chiclet:true,retroeclairage:false,type:"azerty",paveNum:true},system:{ram:16,cpu:{marque:"INTELLE",nom:"X5 550",score:7900,core:4,frequenceMax:3600,tdp:25},hdd:{capacite:2048,type:"hdd",rpm:7200,vitesseTransfert:100},cg:{marque:"INTELLE",modele:"HD 9000",score:395}},batterie:{capacite:58,autonomie:4},prix:700},{marque:"Azuss",nom:"VivaBook 14",type:"portable",ecran:{taille:14,type:"TN",dpi:90},clavier:{chiclet:true,retroeclairage:false,type:"azerty",paveNum:false},system:{ram:8,cpu:{marque:"INTELLE",nom:"X3 300",score:5200,core:2,frequenceMax:3400,tdp:15},hdd:{capacite:512,type:"ssd",rpm:null,vitesseTransfert:400},cg:{marque:"INTELLE",modele:"HD 9000",score:395}},batterie:{capacite:45,autonomie:4},prix:700},{marque:"Azuss",nom:"VivaBook 11",type:"portable",ecran:{taille:11,type:"TN",dpi:72},clavier:{chiclet:true,retroeclairage:false,type:"azerty",paveNum:false},system:{ram:4,cpu:{marque:"INTELLE",nom:"ATAUM",score:1250,core:2,frequenceMax:1900,tdp:5},hdd:{capacite:256,type:"mmc",rpm:null,vitesseTransfert:50},cg:{marque:"INTELLE",modele:"HD 9000",score:395}},batterie:{capacite:35,autonomie:5},prix:400}]
		// Get the modal
		var popup = document.getElementById("popupBox");



		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];



		// When the user clicks on <span> (x), close the modal
		span.onclick = function () {
			popup.style.display = "none";
		}
		

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function (event) {
			if (event.target == popup) {
				popup.style.display = "none";
			}
		}
		/*window.onload= function(){
			let list = document.getElementsByClassName("list-items")[0];
			pcs.forEach(e => {
				let elt = '<div class="items">'+e.system.cpu.nom+'frequ: '+e.system.cpu.frequenceMax+'<img src="cpu.jpg" class="icon" /></div>'
				list.innerHTML += elt;
			})
			let array = document.getElementsByClassName("items");

			for(let i=0; i<array.length; i++){
				array[i].onclick = function(){
					popup.style.display = "none";
				}
			}
		}*/
function display(message){
	let filtre = '';
	switch (message){
		case 'proc':
			loadCpu('cpu');
			filtre += '<div class="filtre">Nb coeurs</div>'
			filtre += '<div class="filtre">'
			filtre += '<button type="button" value="2" onclick="filtreNbCore(this)">2</button>'
			filtre += '<button type="button" value="6" onclick="filtreNbCore(this)">6</button>'
			filtre += '<button type="button" value="8" onclick="filtreNbCore(this)">8</button>'
			filtre += '<button type="button" value="10" onclick="filtreNbCore(this)">10</button>'
			filtre += '</div>'
			filtre += '<div class="filtre">Frequence minimum</div>'
			filtre += '<div class="filtre">'
			filtre += '<button type="button" value="3000" onclick="filtreFreq(this)">3GHz</button>'
			filtre += '<button type="button" value="4000" onclick="filtreFreq(this)">4GHz</button>'
			filtre += '<button type="button" value="5000" onclick="filtreFreq(this)">5GHz</button>'
			filtre += '<button type="button" value="6000" onclick="filtreFreq(this)">6GHz</button>'
			filtre += '</div>'
			break;
		case 'ram':
			loadCpu('ram');
			filtre += '<div class="filtre">Quantité de ram</div>'
			filtre += '<div class="filtre">'
			filtre += '<button type="button" value="4" onclick="filtreRam(this)">4Go</button>'
			filtre += '<button type="button" value="8" onclick="filtreRam(this)">8Go</button>'
			filtre += '<button type="button" value="16" onclick="filtreRam(this)">16Go</button>'
			filtre += '<button type="button" value="32" onclick="filtreRam(this)">32Go</button>'
			filtre += '</div>'
			break;
		case 'screen':
			loadCpu('ecran');
			break;
		case 'key':
			break;
		case 'mouse':
			break;
		
		case 'os':
			break;
		case 'usb':
			break;
		case 'gpu':
			loadCpu('cg');
			filtre += '<div class="filtre">Quantité de ram</div>'
			filtre += '<div class="filtre">'
			filtre += '<button type="button" value="4" onclick="filtreRam(this)">4Go</button>'
			filtre += '<button type="button" value="8" onclick="filtreRam(this)">8Go</button>'
			filtre += '<button type="button" value="16" onclick="filtreRam(this)">16Go</button>'
			filtre += '<button type="button" value="32" onclick="filtreRam(this)">32Go</button>'
			filtre += '</div>'
			break;
		case 'power':
			break;
		case 'hdd':
			//loadCpu('hdd');
			break;
	}
	popup.getElementsByClassName('side-filtre')[0].innerHTML = filtre;
    popup.style.display = "block";
}
function loadCpu(composant){
	let list = document.getElementsByClassName("list-items")[0];
	list.innerHTML = '';
	pcs.forEach(e => {
		let elt = '<div class="items">';
		//elt += '<div class="items">'+e.system.cpu.nom+'frequ: '+e.system.cpu.frequenceMax+'<img src="cpu.jpg" class="icon" /></div>'
		if(typeof e.system[composant] === 'object'){
			for (const [key, value] of Object.entries(e.system[composant])) {
				elt += key + ':' + value + '<br/>';
			}
		}else{
			elt += composant + ': ' + e.system[composant] + '<br/>';
		}
		elt += '</div>';
		list.innerHTML += elt;
	})
	let array = document.getElementsByClassName("items");

	for(let i=0; i<array.length; i++){
		array[i].onclick = function(){
			popup.style.display = "none";
		}
	}
}

function filtreNbCore(button){
	alert('Filtre nb cores: ' + button.value);
}
function filtreFreq(button){
	alert('Filtre freq min: ' + button.value);
}
function filtreRam(button){
	alert('Quantité ram: ' + button.value);
}