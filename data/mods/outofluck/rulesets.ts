export const Formats: {[k: string]: FormatData} = {
	outofluck: {
		effectType: 'Rule',
		name: 'Out of Luck',
		desc: 'h',
		onBegin() {
			onAnyInvulnerabilityPriority: 1,
		onAnyInvulnerability(target, source, move) {
			if (move && (source === this.effectData.target || target === this.effectData.target)) return 0;
		},
		onAnyAccuracy(accuracy, target, source, move) {
			if (move && (source === this.effectData.target || target === this.effectData.target)) {
				return true;
			}
			return accuracy;
		},
		},
	},
};
