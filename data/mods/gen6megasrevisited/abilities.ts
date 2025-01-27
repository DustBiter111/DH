export const Abilities: {[k: string]: ModdedAbilityData} = {
// Old Abilities
	aerilate: {
		inherit: true,
		desc: "This Pokemon's Normal-type moves become Flying-type moves and have their power multiplied by 1.3. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Flying type and have 1.3x power.",
		onBasePower(basePower, pokemon, target, move) {
			if (move.aerilateBoosted) return this.chainModify([0x14CD, 0x1000]);
		},
		rating: 4.5,
	},
	aftermath: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {
			if (move.flags['contact'] && !target.hp) {
				this.damage(source.baseMaxhp / 4, source, target, null, true);
			}
		},
	},
	anticipation: {
		inherit: true,
		desc: "On switch-in, this Pokemon is alerted if any opposing Pokemon has an attack that is super effective against this Pokemon, or an OHKO move. Counter, Metal Burst, and Mirror Coat count as attacking moves of their respective types, Hidden Power counts as its determined type, and Judgment, Natural Gift, Techno Blast, and Weather Ball are considered Normal-type moves.",
	},
	contrary: {
		inherit: true,
		desc: "If this Pokemon has a stat stage raised it is lowered instead, and vice versa.",
	},
	damp: {
		inherit: true,
		desc: "While this Pokemon is active, Explosion, Self-Destruct, and the Aftermath Ability are prevented from having an effect.",
		shortDesc: "Prevents Explosion/Self-Destruct/Aftermath while this Pokemon is active.",
	},
	galewings: {
		inherit: true,
		shortDesc: "This Pokemon's Flying-type moves have their priority increased by 1.",
		onModifyPriority(priority, pokemon, target, move) {
			if (move && move.type === 'Flying') return priority + 1;
		},
		rating: 4,
	},
	infiltrator: {
		inherit: true,
		desc: "This Pokemon's moves ignore substitutes and the opposing side's Reflect, Light Screen, Safeguard, and Mist.",
		shortDesc: "Moves ignore substitutes and the foe's Reflect, Light Screen, Safeguard, and Mist.",
	},
	ironbarbs: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {
			if (move.flags['contact']) {
				this.damage(source.baseMaxhp / 8, source, target, null, true);
			}
		},
	},
	liquidooze: {
		inherit: true,
		onSourceTryHeal(damage, target, source, effect) {
			this.debug("Heal is occurring: " + target + " <- " + source + " :: " + effect.id);
			const canOoze = ['drain', 'leechseed'];
			if (canOoze.includes(effect.id)) {
				this.damage(damage, null, null, null, true);
				return 0;
			}
		},
	},
	magicguard: {
		inherit: true,
		onDamage(damage, target, source, effect) {
			if (effect.effectType !== 'Move') return false;
		},
	},
	multitype: {
		inherit: true,
		shortDesc: "If this Pokemon is an Arceus, its type changes to match its held Plate.",
	},
	mummy: {
		inherit: true,
		desc: "Pokemon making contact with this Pokemon have their Ability changed to Mummy. Does not affect the Multitype or Stance Change Abilities.",
	},
	normalize: {
		inherit: true,
		desc: "This Pokemon's moves are changed to be Normal type. This effect comes before other effects that change a move's type.",
		shortDesc: "This Pokemon's moves are changed to be Normal type.",
		onModifyMovePriority: 1,
		onModifyMove(move) {
			if (move.id !== 'struggle' && this.dex.getMove(move.id).type !== 'Normal') {
				move.type = 'Normal';
			}
		},
		rating: -1,
	},
	parentalbond: {
		inherit: true,
		desc: "This Pokemon's damaging moves become multi-hit moves that hit twice. The second hit has its damage halved. Does not affect multi-hit moves or moves that have multiple targets.",
		shortDesc: "This Pokemon's damaging moves hit twice. The second hit has its damage halved.",
		onBasePower(basePower, pokemon, target, move) {
			if (move.multihitType === 'parentalbond' && move.hit > 1) return this.chainModify(0.5);
		},
		rating: 5,
	},
	pixilate: {
		inherit: true,
		desc: "This Pokemon's Normal-type moves become Fairy-type moves and have their power multiplied by 1.3. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Fairy type and have 1.3x power.",
		onBasePower(basePower, pokemon, target, move) {
			if (move.pixilateBoosted) return this.chainModify([0x14CD, 0x1000]);
		},
		rating: 4.5,
	},
	prankster: {
		inherit: true,
		shortDesc: "This Pokemon's non-damaging moves have their priority increased by 1.",
	},
	refrigerate: {
		inherit: true,
		desc: "This Pokemon's Normal-type moves become Ice-type moves and have their power multiplied by 1.3. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Ice type and have 1.3x power.",
		onBasePower(basePower, pokemon, target, move) {
			if (move.refrigerateBoosted) return this.chainModify([0x14CD, 0x1000]);
		},
		rating: 4.5,
	},
	roughskin: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {
			if (move.flags['contact']) {
				this.damage(source.baseMaxhp / 8, source, target, null, true);
			}
		},
	},
	simple: {
		inherit: true,
		desc: "When this Pokemon's stat stages are raised or lowered, the effect is doubled instead.",
	},
	stancechange: {
		inherit: true,
		onBeforeMovePriority: 11,
	},
	weakarmor: {
		inherit: true,
		desc: "If a physical attack hits this Pokemon, its Defense is lowered by 1 stage and its Speed is raised by 1 stage.",
		shortDesc: "If a physical attack hits this Pokemon, Defense is lowered by 1, Speed is raised by 1.",
		onDamagingHit(damage, target, source, move) {
			if (move.category === 'Physical') {
				this.boost({def: -1, spe: 1}, target, target);
			}
		},
		rating: 0.5,
	},
	zenmode: {
		inherit: true,
		desc: "If this Pokemon is a Darmanitan, it changes to Zen Mode if it has 1/2 or less of its maximum HP at the end of a turn. If Darmanitan's HP is above 1/2 of its maximum HP at the end of a turn, it changes back to Standard Mode. If Darmanitan loses this Ability while in Zen Mode, it reverts to Standard Mode immediately.",
	},
	
// New Abilities	
	merciless: {
		shortDesc: "This Pokemon's attacks are critical hits if the target is statused.",
		onModifyCritRatio(critRatio, source, target) {
			if (target && ['psn', 'tox', 'brn', 'frz', 'slp', 'par'].includes(target.status)) return 5;
		},
		name: "Merciless",
		rating: 1.5,
		num: 196,
		gen: 6,
	},
};
