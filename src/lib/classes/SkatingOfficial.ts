import { Player } from './Player';

export enum SkatingOfficialRole {
	jamRefA = 'jamRefA',
	jamRefB = 'jamRefB',
	backPackRef = 'backPackRef',
	frontPackRef = 'frontPackRef',
	outsidePackRef = 'outsidePackRef',
	alternate = 'alternate'
}

export type SkatingOfficialPosition = {
	absolute: { x: number; y: number };
	role: SkatingOfficialRole;
};

export class SkatingOfficial extends Player {
	role: SkatingOfficialRole;

	constructor(x: number, y: number, role: SkatingOfficialRole) {
		super(x, y);
		this.role = role;
	}
}
