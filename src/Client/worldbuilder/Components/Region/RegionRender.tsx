import * as React from "react";
import * as ReactDOM from "react-dom";
import { RegionModel } from "./Region";

interface RegionRenderProps extends React.Props<RegionRender> {
    region: RegionModel;
}

export default class RegionRender extends React.Component<RegionRenderProps, void> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="laff-wb-region">
                <div>
                    <h3>Region Info</h3>
                    <p>
                        <span>
                            Age (Years): {this.props.region.Age.toLocaleString()}
                        </span>
                        <span>
                            Area (Acres): {this.props.region.AreaAcres.toLocaleString()}
                        </span>
                        <span>
                            Population: {this.props.region.Population.toLocaleString()}
                        </span>
                    </p>
                    <h3>Livestock</h3>
                    <p>
                        <span>
                            Total: {this.props.region.TotalLivestock.toLocaleString()}
                        </span>
                        <span>
                            Fowl: {this.props.region.Fowl.toLocaleString()}
                        </span>
                        <span>
                            Cows, Sheep, &amp; Pigs: {this.props.region.BurdenBeasts.toLocaleString()}
                        </span>
                    </p>
                </div>
                <div>
                    <h3>Castle Info</h3>
                    <p>
                        <span>
                            Total Castles: {this.props.region.TotalCastles.toLocaleString()}
                        </span>
                        <span>
                            Active Castles: {this.props.region.ActiveCastles.toLocaleString()}
                        </span>
                        <span>
                            Ruined Castles: {this.props.region.RuinedCastles.toLocaleString()}
                        </span>
                    </p>
                </div>
                <div>
                    <h3>Settlement Info</h3>
                    <p>
                        <span>
                            #Cities: {this.props.region.Cities.length.toLocaleString()}
                        </span>
                        <span>
                            #Towns: {this.props.region.Towns.length.toLocaleString()}
                        </span>
                        <span>
                            #Villages: {this.props.region.Villages.length.toLocaleString()}
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}