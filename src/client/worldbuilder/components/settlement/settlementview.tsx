import * as React from "react";
import { VUtils } from "../../utils";
import { Settlement } from "./settlement";

interface ISettlementProps {
	Settlement: Settlement;
}

/**
 * The region component, which displays a region with all of its fields in a user-friendly format
 */
export class SettlementView extends React.Component<ISettlementProps, {}> {
	constructor(props: ISettlementProps) {
		super(props);
	}

	public render() {
		const cityDimensions = Math.sqrt(this.props.Settlement.CityMilesSq).toPrecision(3).toLocaleString();
		const countrysideDimensions = Math.sqrt(this.props.Settlement.CountrysideMilesSq).toPrecision(3).toLocaleString();
		const avgVillagePop = Math.floor(this.props.Settlement.CountrysidePopulation / this.props.Settlement.SupportingVillages).toLocaleString();

		return (
			<div className="laff-column">
				<h3>Town Stats</h3>
				<dl>
					<dt>
						Population
					</dt>
					<dd>
						{this.props.Settlement.CityPopulation.toLocaleString()}
					</dd>
					<dt>
						City Area Miles²
					</dt>
					<dd>
						{`${VUtils.prettyPrintRounded(this.props.Settlement.CityMilesSq)} (${cityDimensions}² miles)` }
					</dd>
					<dt>
						Countryside Population
					</dt>
					<dd>
						{this.props.Settlement.CountrysidePopulation.toLocaleString()}
					</dd>
					<dt>
						Countryside Area Miles²
					</dt>
					<dd>
						{`${VUtils.prettyPrintRounded(this.props.Settlement.CountrysideMilesSq)} (${countrysideDimensions}² miles)` }
					</dd>
					<dt>
						Villages
					</dt>
					<dd>
						{ `${this.props.Settlement.SupportingVillages.toLocaleString()} (${avgVillagePop.toLocaleString()} avg people)` }
					</dd>
					<dt>
						Services
					</dt>
					<dd>
						{this.props.Settlement.Services.length.toLocaleString()}
					</dd>
					<dt>
						Total Buildings
					</dt>
					<dd>
						{this.props.Settlement.TotalBuildings.toLocaleString()}
					</dd>
				</dl>
				<h3>Town Professions</h3>
				<dl>
					{ 
						[...VUtils.groupBy(this.props.Settlement.Services, ((service) => service.Name))].sort((a, b) => {
							if (a[0] < b[0]) {
								return -1;
							} else {
								return 1;
							}
						}).map((service) => {
						return (
							<React.Fragment>
								<dt>
									{ service[0] }
								</dt>
								<dd>
									{ service[1].length }
								</dd>
							</React.Fragment>
						);
					})}
				</dl>
			</div>
		);
	}
}
