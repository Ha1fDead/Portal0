import * as React from "react";
import Settlement from "../settlement/settlement";
import SettlementRender from "../settlement/settlementrender";
import { RegionModel } from "./region";

interface IRegionRenderProps extends React.Props<RegionRender> {
	region: RegionModel;
}

/**
 * The region component, which displays a region with all of its fields in a user-friendly format
 */
export default class RegionRender extends React.Component<IRegionRenderProps, {}> {
	constructor(props: IRegionRenderProps) {
		super(props);
	}

	public render() {
		const settlements: Settlement[] = this.props.region.Cities.concat(this.props.region.Towns);
		const farmland = settlements.map((x) => x.CountrysideMilesSq).reduce(this.sum, 0);
		const urbanArea = settlements.map((x) => x.CityMilesSq).reduce(this.sum, 0);
		const cityDwellers = settlements.map((x) => x.CityPopulation).reduce(this.sum, 0);
		const ruralDwellers = settlements.map((x) => x.CountrysidePopulation).reduce(this.sum, 0);

		return (
			<div className="laff-wb-region">
				<div>
					<h3>Region Info</h3>
					<ul>
						<li>
							Age (Years): {this.props.region.Age.toLocaleString()}
						</li>
						<li>
							Area: {this.props.region.AreaSqMiles.toLocaleString()} Miles^2
						</li>
						<li>
							Urban Area: { urbanArea.toPrecision(3) } Miles^2
						</li>
						<li>
							Farmland: { farmland.toPrecision(3) } Miles^2
						</li>
						<li>
							Untamed Wilderness: {(this.props.region.AreaSqMiles - (farmland + urbanArea)).toPrecision(3)} Miles^2
						</li>
					</ul>
					<h3>Population Stats</h3>
					<ul>
						<li>
							People: {this.props.region.Population.toLocaleString()}
						</li>
						<li>
							Avg Population Density: { this.props.region.Population / this.props.region.AreaSqMiles } People / Mi²
						</li>
						<li>
							City Dwellers: { cityDwellers }	({cityDwellers / this.props.region.Population}%)
						</li>
						<li>
							Rural Dwellers: { ruralDwellers } ({ruralDwellers / this.props.region.Population}%)
						</li>
					</ul>
					<h3>Livestock</h3>
					<ul>
						<li>
							Total: {this.props.region.TotalLivestock.toLocaleString()}
						</li>
						<li>
							Fowl: {this.props.region.Fowl.toLocaleString()}
						</li>
						<li>
							Cows, Sheep, &amp; Pigs: {this.props.region.BurdenBeasts.toLocaleString()}
						</li>
					</ul>
				</div>
				<div>
					<h3>Castle Info</h3>
					<ul>
						<li>
							Total Castles: {this.props.region.CastlesTotal.toLocaleString()}
						</li>
						<li>
							Active Castles: {this.props.region.CastlesActive.toLocaleString()}
						</li>
						<li>
							Ruined Castles: {this.props.region.CastlesRuined.toLocaleString()}
						</li>
					</ul>
				</div>
				<div>
					<h3>Settlement Info</h3>
					<ul>
						<li>
							#Cities: {this.props.region.Cities.length.toLocaleString()}
						</li>
						<li>
							#Towns: {this.props.region.Towns.length.toLocaleString()}
						</li>
						<li>
							#Villages: {this.props.region.Villages.length.toLocaleString()}
						</li>
					</ul>
					<SettlementRender Settlements={settlements}></SettlementRender>
				</div>
			</div>
		);
	}

	private sum(a: number, b: number): number {
		return a + b;
	}
}
