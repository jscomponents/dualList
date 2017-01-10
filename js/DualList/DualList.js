/**
 * 
 * Script para DualList
 * @author Edy Segura, edy@segura.pro.br
 * 
 */
var DualList = function(params) {

	var dualList = this;
	
	if(params && params.listOne && params.listTwo) {
		this.listOne = document.getElementById(params.listOne);
		this.listTwo = document.getElementById(params.listTwo);
		this.params  = params;
	}
	else {
		alert("Parâmetros incorretos para DualList.");
	}
	
	
	this.init = function() {
		this.setButtons(this.params);
		this.setDoubleClick();
	};
	
	
	this.setButtons = function(params) {
		var buttonL2R = document.getElementById(params.left2Right);
		var buttonR2L = document.getElementById(params.right2Left);
		var buttonA2R = document.getElementById(params.all2Right);
		var buttonA2L = document.getElementById(params.all2Left);
		
		try {
			if(buttonL2R) {
				buttonL2R.onclick = function() {
					dualList.left2Right();
					return false;
				}
			}
			
			if(buttonR2L) {
				buttonR2L.onclick = function() {
					dualList.right2Left();
					return false;
				}
			}
			
			if(buttonA2R) {
				buttonA2R.onclick = function() {
					dualList.all2Right();
					return false;
				}
			}
			
			if(buttonA2L) {
				buttonA2L.onclick = function() {
					dualList.all2Left();
					return false;
				}
			}
		} 
		catch(e) {
			this.errorLog(e);
		}
	};
	
	
	this.saveList = function(list, field) {
		if(list && field) {
			for(var i=0; i<list.options.length; i++) {
				var option = list.options[i];
				if(i==0) field.value = option.value;
				else field.value += "|" + option.value;
			}
		}
	};
	
	
	this.all2Right = function() {
		dualList.sourceToTarget(this.listOne, this.listTwo, true);
	};
	
	this.all2Left = function() {
		dualList.sourceToTarget(this.listTwo, this.listOne, true);
	};
	
	this.left2Right = function() {
		dualList.sourceToTarget(this.listOne, this.listTwo, false);
	};
	
	this.right2Left = function() {
		dualList.sourceToTarget(this.listTwo, this.listOne, false);
	};
	
	
	this.setDoubleClick = function() {
		try {
			this.listOne.ondblclick = function() {
				dualList.sourceToTarget(dualList.listOne, dualList.listTwo, false);	
			};
			
			this.listTwo.ondblclick = function() {
				dualList.sourceToTarget(dualList.listTwo, dualList.listOne, false);
			};
		} 
		catch(e) {
			this.errorLog(e);
		}
	};
	
	
	this.sourceToTarget = function(listSource, listTarget, moveAll) {
		if((listSource.selectedIndex == -1 ) && (moveAll == false)) {
			return false;
		}
		
		var newList = [];
		var index   = 0;
		
		for(index=0; index<listTarget.length; index++) {
			var option = listTarget.options[index];
			if(option != null) {
				newList[index] = new Option(option.text, option.value);
			}
		}
		
		for(var i=0; i<listSource.length; i++) {
			var option = listSource.options[i];
			if(option != null && (option.selected || moveAll)) {
				newList[index] = new Option(option.text, option.value);
				index++;
			}
		}
		
		for(var i=0; i<newList.length; i++) {
			var option = newList[i];
			if(option != null) {
				listTarget.options[i] = option;
			}
		}
		
		for(var i=listSource.options.length - 1; i>=0; i--) {
			var option = listSource.options[i];
			if(option != null && (option.selected || moveAll)) {
				listSource.options[i] = null;
			}
		}
	};
	

	this.errorLog = function(e) {
		if(console && console.info) {
			console.info("Error: " + e.message);
		}
	};

};