import { ModifierMapping } from "./enums";
import { ITravelSettings } from "./timedistance";

export class TimeDistanceCalculator {
	constructor() {
		//
	}

	public ComputeDistanceFromTime(timeDays: number, kmPerDay: number): number {
		return timeDays * kmPerDay;
	}

	/**
	 * Determines the slowness or speedup of any Method of Travel given the travel settings
	 * @param details 
	 */
	public ComputeRangeModifier(details: ITravelSettings): number {
		const loadModifier = ModifierMapping.GetLoadModifier(details.Load);
		const paceModifier = ModifierMapping.GetPaceModifier(details.Pace);
		const terrainModifier = ModifierMapping.GetTerrainModifier(details.Terrain);
		const weatherModifier = ModifierMapping.GetWeatherModifier(details.Weather);

		return loadModifier * paceModifier * terrainModifier * weatherModifier;
	}

	public ComputeTimeFromDistance(distanceKm: number, kmPerDay: number): number {
		return distanceKm / kmPerDay;
	}
}
