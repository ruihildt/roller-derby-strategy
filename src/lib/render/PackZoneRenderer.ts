import type { PackManager } from '../classes/PackManager';
import type { TrackGeometry } from '../classes/TrackGeometry';

export class PackZoneRenderer {
	canvas: HTMLCanvasElement;
	highResCanvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;
	highResCtx: CanvasRenderingContext2D;
	trackGeometry: TrackGeometry;
	packManager: PackManager;

	constructor(
		canvas: HTMLCanvasElement,
		ctx: CanvasRenderingContext2D,
		highResCanvas: HTMLCanvasElement,
		highResCtx: CanvasRenderingContext2D,
		trackGeometry: TrackGeometry,
		packManager: PackManager
	) {
		this.canvas = canvas;
		this.ctx = ctx;
		this.highResCanvas = highResCanvas;
		this.highResCtx = highResCtx;
		this.trackGeometry = trackGeometry;
		this.packManager = packManager;
	}

	drawEngagementZone(ctx: CanvasRenderingContext2D): void {
		const packPlayers = this.packManager.players.filter((p) => p.isInPack);
		const rearmost = packPlayers.find((p) => p.isRearmost);
		const foremost = packPlayers.find((p) => p.isForemost);

		if (rearmost && foremost) {
			// Draw engagement zone (20ft behind and ahead of the pack)
			const engagementZonePath = this.trackGeometry.createEngagementZonePath(rearmost, foremost);
			ctx.fillStyle = 'rgba(144, 238, 144, 0.4)'; // Light green with transparency
			ctx.fill(engagementZonePath, 'evenodd');
		}
	}

	drawEngagementZoneHighRes(): void {
		if (!this.highResCanvas) return;
		this.drawEngagementZone(this.highResCtx);
	}
}
