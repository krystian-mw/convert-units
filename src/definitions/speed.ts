import { Measure, Unit } from './../index';
export type SpeedUnits = SpeedMetricUnits | SpeedImperialUnits;
export type SpeedSystems = 'metric' | 'imperial';

export type SpeedMetricUnits = 'cm/s' | 'm/s' | 'km/h';
export type SpeedImperialUnits = 'mph' | 'knot' | 'in/s' | 'ft/s' | 'ft/min';

const metric: Record<SpeedMetricUnits, Unit> = {
  'cm/s': {
    name: {
      singular: 'Centimeter per second',
      plural: 'Centimeters per second',
    },
    to_anchor: 27.7778,
  },
  'm/s': {
    name: {
      singular: 'Metre per second',
      plural: 'Metres per second',
    },
    to_anchor: 3.6,
  },
  'km/h': {
    name: {
      singular: 'Kilometre per hour',
      plural: 'Kilometres per hour',
    },
    to_anchor: 1,
  },
};

const imperial: Record<SpeedImperialUnits, Unit> = {
  mph: {
    name: {
      singular: 'Mile per hour',
      plural: 'Miles per hour',
    },
    to_anchor: 1,
  },
  knot: {
    name: {
      singular: 'Knot',
      plural: 'Knots',
    },
    to_anchor: 1.150779,
  },
  'in/s': {
    name: {
      singular: 'Inch per second',
      plural: 'Inches per second',
    },
    to_anchor: 17.6,
  },
  'ft/s': {
    name: {
      singular: 'Foot per second',
      plural: 'Feet per second',
    },
    to_anchor: 0.681818,
  },
  'ft/min': {
    name: {
      singular: 'Foot per minute',
      plural: 'Feet per minute',
    },
    to_anchor: 0.0113636,
  },
};

const measure: Measure<SpeedSystems, SpeedUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 1 / 1.609344,
      },
    },
    imperial: {
      metric: {
        ratio: 1.609344,
      },
    },
  },
};

export default measure;
