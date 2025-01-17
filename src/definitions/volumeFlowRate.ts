import { Measure, Unit } from './../index';
export type VolumeFlowRateUnits =
  | VolumeFlowRateMetricUnits
  | VolumeFlowRateImperialUnits;
export type VolumeFlowRateSystems = 'metric' | 'imperial';

export type VolumeFlowRateMetricUnits =
  | 'mm3/s'
  | 'cm3/s'
  | 'ml/s'
  | 'cl/s'
  | 'dl/s'
  | 'l/s'
  | 'l/min'
  | 'l/h'
  | 'kl/s'
  | 'kl/min'
  | 'kl/h'
  | 'm3/s'
  | 'm3/min'
  | 'm3/h'
  | 'km3/s';

export type VolumeFlowRateImperialUnits =
  | 'tsp/s'
  | 'Tbs/s'
  | 'in3/s'
  | 'in3/min'
  | 'in3/h'
  | 'fl-oz/s'
  | 'fl-oz/min'
  | 'fl-oz/h'
  | 'cup/s'
  | 'pnt/s'
  | 'pnt/min'
  | 'pnt/h'
  | 'qt/s'
  | 'gal/s'
  | 'gal/min'
  | 'gal/h'
  | 'ft3/s'
  | 'ft3/min'
  | 'ft3/h'
  | 'yd3/s'
  | 'yd3/min'
  | 'yd3/h'
  | 'bbl-oil/s'
  | 'bbl-oil/m'
  | 'bbl-oil/h';

const metric: Record<VolumeFlowRateMetricUnits, Unit> = {
  'mm3/s': {
    name: {
      singular: 'Cubic Millimeter per second',
      plural: 'Cubic Millimeters per second',
    },
    to_anchor: 1 / 1000000,
  },
  'cm3/s': {
    name: {
      singular: 'Cubic Centimeter per second',
      plural: 'Cubic Centimeters per second',
    },
    to_anchor: 1 / 1000,
  },
  'ml/s': {
    name: {
      singular: 'Millilitre per second',
      plural: 'Millilitres per second',
    },
    to_anchor: 1 / 1000,
  },
  'cl/s': {
    name: {
      singular: 'Centilitre per second',
      plural: 'Centilitres per second',
    },
    to_anchor: 1 / 100,
  },
  'dl/s': {
    name: {
      singular: 'Decilitre per second',
      plural: 'Decilitres per second',
    },
    to_anchor: 1 / 10,
  },
  'l/s': {
    name: {
      singular: 'Litre per second',
      plural: 'Litres per second',
    },
    to_anchor: 1,
  },
  'l/min': {
    name: {
      singular: 'Litre per minute',
      plural: 'Litres per minute',
    },
    to_anchor: 1 / 60,
  },
  'l/h': {
    name: {
      singular: 'Litre per hour',
      plural: 'Litres per hour',
    },
    to_anchor: 1 / 3600,
  },
  'kl/s': {
    name: {
      singular: 'Kilolitre per second',
      plural: 'Kilolitres per second',
    },
    to_anchor: 1000,
  },
  'kl/min': {
    name: {
      singular: 'Kilolitre per minute',
      plural: 'Kilolitres per minute',
    },
    to_anchor: 50 / 3,
  },
  'kl/h': {
    name: {
      singular: 'Kilolitre per hour',
      plural: 'Kilolitres per hour',
    },
    to_anchor: 5 / 18,
  },
  'm3/s': {
    name: {
      singular: 'Cubic meter per second',
      plural: 'Cubic meters per second',
    },
    to_anchor: 1000,
  },
  'm3/min': {
    name: {
      singular: 'Cubic meter per minute',
      plural: 'Cubic meters per minute',
    },
    to_anchor: 50 / 3,
  },
  'm3/h': {
    name: {
      singular: 'Cubic meter per hour',
      plural: 'Cubic meters per hour',
    },
    to_anchor: 5 / 18,
  },
  'km3/s': {
    name: {
      singular: 'Cubic kilometer per second',
      plural: 'Cubic kilometers per second',
    },
    to_anchor: 1000000000000,
  },
};

const imperial: Record<VolumeFlowRateImperialUnits, Unit> = {
  'tsp/s': {
    name: {
      singular: 'Teaspoon per second',
      plural: 'Teaspoons per second',
    },
    to_anchor: 1 / 6,
  },
  'Tbs/s': {
    name: {
      singular: 'Tablespoon per second',
      plural: 'Tablespoons per second',
    },
    to_anchor: 1 / 2,
  },
  'in3/s': {
    name: {
      singular: 'Cubic inch per second',
      plural: 'Cubic inches per second',
    },
    to_anchor: 0.55411,
  },
  'in3/min': {
    name: {
      singular: 'Cubic inch per minute',
      plural: 'Cubic inches per minute',
    },
    to_anchor: 0.55411 / 60,
  },
  'in3/h': {
    name: {
      singular: 'Cubic inch per hour',
      plural: 'Cubic inches per hour',
    },
    to_anchor: 0.55411 / 3600,
  },
  'fl-oz/s': {
    name: {
      singular: 'Fluid Ounce per second',
      plural: 'Fluid Ounces per second',
    },
    to_anchor: 1,
  },
  'fl-oz/min': {
    name: {
      singular: 'Fluid Ounce per minute',
      plural: 'Fluid Ounces per minute',
    },
    to_anchor: 1 / 60,
  },
  'fl-oz/h': {
    name: {
      singular: 'Fluid Ounce per hour',
      plural: 'Fluid Ounces per hour',
    },
    to_anchor: 1 / 3600,
  },
  'cup/s': {
    name: {
      singular: 'Cup per second',
      plural: 'Cups per second',
    },
    to_anchor: 8,
  },
  'pnt/s': {
    name: {
      singular: 'Pint per second',
      plural: 'Pints per second',
    },
    to_anchor: 16,
  },
  'pnt/min': {
    name: {
      singular: 'Pint per minute',
      plural: 'Pints per minute',
    },
    to_anchor: 4 / 15,
  },
  'pnt/h': {
    name: {
      singular: 'Pint per hour',
      plural: 'Pints per hour',
    },
    to_anchor: 1 / 225,
  },
  'qt/s': {
    name: {
      singular: 'Quart per second',
      plural: 'Quarts per second',
    },
    to_anchor: 32,
  },
  'gal/s': {
    name: {
      singular: 'Gallon per second',
      plural: 'Gallons per second',
    },
    to_anchor: 128,
  },
  'gal/min': {
    name: {
      singular: 'Gallon per minute',
      plural: 'Gallons per minute',
    },
    to_anchor: 32 / 15,
  },
  'gal/h': {
    name: {
      singular: 'Gallon per hour',
      plural: 'Gallons per hour',
    },
    to_anchor: 8 / 225,
  },
  'ft3/s': {
    name: {
      singular: 'Cubic foot per second',
      plural: 'Cubic feet per second',
    },
    to_anchor: 957.506,
  },
  'ft3/min': {
    name: {
      singular: 'Cubic foot per minute',
      plural: 'Cubic feet per minute',
    },
    to_anchor: 957.506 / 60,
  },
  'ft3/h': {
    name: {
      singular: 'Cubic foot per hour',
      plural: 'Cubic feet per hour',
    },
    to_anchor: 957.506 / 3600,
  },
  'yd3/s': {
    name: {
      singular: 'Cubic yard per second',
      plural: 'Cubic yards per second',
    },
    to_anchor: 25852.7,
  },
  'yd3/min': {
    name: {
      singular: 'Cubic yard per minute',
      plural: 'Cubic yards per minute',
    },
    to_anchor: 25852.7 / 60,
  },
  'yd3/h': {
    name: {
      singular: 'Cubic yard per hour',
      plural: 'Cubic yards per hour',
    },
    to_anchor: 25852.7 / 3600,
  },
  'bbl-oil/s': {
    name: {
      singular: 'Barrel of oil per second',
      plural: 'Barrels of oil per second',
    },
    to_anchor: 5376,
  },
  'bbl-oil/m': {
    name: {
      singular: 'Barrel of oil per minute',
      plural: 'Barrels of oil per minute',
    },
    to_anchor: 5376 / 60,
  },
  'bbl-oil/h': {
    name: {
      singular: 'Barrel of oil per hour',
      plural: 'Barrels of oil per hour',
    },
    to_anchor: 5376 / 3600,
  },
};

const measure: Measure<VolumeFlowRateSystems, VolumeFlowRateUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 33.8140227,
      },
    },
    imperial: {
      metric: {
        ratio: 1 / 33.8140227,
      },
    },
  },
};

export default measure;
