export const Scripts: ModdedBattleScriptsData = {
	inherit: 'gen6',
	init: function () {
		this.modData("Learnsets", "lucario").learnset.meteormash = ["6L1"];
		this.modData("Learnsets", "lucario").learnset.machpunch = ["6L1"];
		this.modData("Learnsets", "houndoom").learnset.toxicspikes = ["6L1"];
		this.modData("Learnsets", "houndoom").learnset.venoshock = ["6L1"];
		this.modData("Learnsets", "houndoom").learnset.hex = ["6L1"];
		this.modData("Learnsets", "audino").learnset.discharge = ["6L1"];
		this.modData("Learnsets", "audino").learnset.voltswitch = ["6L1"];
		this.modData("Learnsets", "audino").learnset.chargebeam = ["6L1"];
		this.modData("Learnsets", "audino").learnset.charge = ["6L1"];
		this.modData("Learnsets", "audino").learnset.zapcannon = ["6L1"];
	},
};
