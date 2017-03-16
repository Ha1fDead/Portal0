import * as React from "react";
import * as ReactDOM from "react-dom";

export interface IAdvancedSettings {
    //region advanced settings
    LivestockPerPerson: number;
    PeoplePerCastle: number;
    PeoplePerRuinedCastle: number;
    PercentageOfLivestockIsFowl: number;
    PercentageOfCastlesInOutskirts: number;
    RegionPopulationDensity: number;

    PeoplePerAcreFarmland: number;
    RegionPeoplePerAcre: number; //30-120

    //city advanced settings
    PeoplePerNobleFamily: number;
    PeoplePerOfficer: number;
    PeoplePerClergy: number;
    ClergyPerPriest: number;

    HouseholdSize: number;
    WarehousesPerBuildingMultiplier: number;
    
    CityPeoplePerAcre: number;
    CityCountrysideRatio: number;
}

export class AdvancedSettings implements IAdvancedSettings {
    //region advanced settings
    LivestockPerPerson: number;
    PeoplePerCastle: number;
    PeoplePerRuinedCastle: number;
    PercentageOfLivestockIsFowl: number;
    PercentageOfCastlesInOutskirts: number;
    RegionPopulationDensity: number;

    PeoplePerAcreFarmland: number;
    RegionPeoplePerAcre: number; //30-120

    //city advanced settings
    PeoplePerNobleFamily: number;
    PeoplePerOfficer: number;
    PeoplePerClergy: number;
    ClergyPerPriest: number;

    HouseholdSize: number;
    WarehousesPerBuildingMultiplier: number;
    
    CityPeoplePerAcre: number;
    CityCountrysideRatio: number;

    constructor() {
        this.LivestockPerPerson = 2.2;
        this.PeoplePerCastle = 50000;
        this.PeoplePerRuinedCastle = 5000000;
        this.PercentageOfLivestockIsFowl = 0.68;
        this.PercentageOfCastlesInOutskirts = 0.25;
        this.RegionPopulationDensity = 30; //30-180

        this.PeoplePerAcreFarmland = 180;
        this.RegionPeoplePerAcre = 30; //30 - 120

        this.PeoplePerNobleFamily = 200;
        this.PeoplePerOfficer = 150;
        this.PeoplePerClergy = 40;
        this.ClergyPerPriest = 25; //25-30

        this.HouseholdSize = 5;
        this.WarehousesPerBuildingMultiplier = 1.4; //1.0 - 1.4
        this.CityPeoplePerAcre = 61;

        this.CityCountrysideRatio = this.CityPeoplePerAcre - this.RegionPeoplePerAcre;
    }
}