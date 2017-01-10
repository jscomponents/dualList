/**
 * 
 * Script para teste do compoente DualList.js
 * @author Edy Segura, edy@segura.pro.br
 * 
 */
var Index = {
	
	init: function() {
		Index.setDualList();
		Index.clearPermissao();
	},
	
	
	clearPermissao: function() {
		var permissao  = document.getElementById("permissao");
		var permissao2 = document.getElementById("permissao2");
		
		if(permissao) {
			permissao.options.length = 0;
		}
		
		if(permissao2) {
			permissao2.options.length = 0;
		}
	},
	
	
	setDualList: function() {
		var dualList1 = new DualList({
			listOne    : "permissao",
			listTwo    : "permissoes",
			left2Right : "left2Right",
			right2Left : "right2Left",
			all2Left   : "all2Left",
			all2Right  : "all2Right"
		});
		dualList1.init();
		
		var dualList2 = new DualList({
			listOne    : "permissao2",
			listTwo    : "permissoes2",
			left2Right : "left2Rightp2",
			right2Left : "right2Leftp2",
			all2Left   : "all2Leftp2",
			all2Right  : "all2Rightp2"
		});
		dualList2.init();
	}
	
};

//inicializacao
window.onload = Index.init;
