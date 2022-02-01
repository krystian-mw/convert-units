import { Measure, Unit } from './../index';
export type TorqueUnits = TorqueSIUnits | TorqueImperialUnits;
export type TorqueSystems = 'SI' | 'imperial';

export type TorqueSIUnits = 'Nm';
export type TorqueImperialUnits = 'lb-ft' | 'kip-ft';

const SI: Record<TorqueSIUnits, Unit> = {
  Nm: {
    name: {
      singular: 'Newton Metre',
      plural: 'Newton Metres',
    },
    to_anchor: 1,
  },
};

const imperial: Record<TorqueImperialUnits, Unit> = {
  'lb-ft': {
    name: {
      singular: 'Pound-foot',
      plural: 'Pound-feet',
    },
    to_anchor: 1,
  },
  'kip-ft': {
    name: {
      singular: 'Kilopound-foot',
      plural: 'Kilopound-feet',
    },
    to_anchor: 1000,
  },
};

const measure: Measure<TorqueSystems, TorqueUnits> = {
  systems: {
    SI,
    imperial,
  },
  anchors: {
    SI: {
      imperial: {
        ratio: 1 / 1.355818,
      },
    },
    imperial: {
      SI: {
        ratio: 1.355818,
      },
    },
  },
};

export default measure;
