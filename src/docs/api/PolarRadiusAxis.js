export default {
  name: 'PolarRadiusAxis',
  props: [
    {
      name: 'angle',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The angle of radial direction line to display axis text.',
    }, {
      name: 'cx',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The x-coordinate of center.',
    }, {
      name: 'cy',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The y-coordinate of center.',
    }, {
      name: 'domain',
      type: 'Array',
      defaultVal: `[0, 'auto']`,
      isOptional: false,
      desc: 'Specify the domain of radius in a polar chart. And the length should be 2. And each element in the array can be a number, \'auto\', \'dataMin\' or \'dataMax\'. If any element of domain is set to be \'auto\', comprehensible scale ticks will be calculated, and the final domain of axis is generated by the ticks.',
      format: [
        `<PolarRadiusAxis domain={['dataMin', 'dataMax']} />`,
        `<PolarRadiusAxis domain={[0, 'dataMax']} />`,
        `<PolarRadiusAxis domain={['auto', 'auto']} />`,
      ],
    }, {
      name: 'label',
      type: 'String | Number | ReactElement | Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'If set a string or a number, default label will be drawed, and the option is content. If set a React element, the option is the custom react element of drawing label. If set a function, the function will be called to render customized label.',
    }, {
      name: 'orientation',
      type: 'String',
      defaultVal: 'right',
      isOptional: false,
      desc: 'The orientation of axis text.',
    }, {
      name: 'axisLine',
      type: 'Bool | Object',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If false set, axis line will not be drawed. If true set, axis line will be drawed which have the props calculated internally. If object set, axis line will be drawed which have the props mergered by the internal calculated props and the option.',
    }, {
      name: 'tick',
      type: 'Bool | Object | Element | Function',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If false set, ticks will not be drawed. If true set, ticks will be drawed which have the props calculated internally. If object set, ticks will be drawed which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom tick element. If set a function, the function will be called to render customized ticks.',
    }, {
      name: 'tickFormatter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The function to formatting tick.',
    }, {
      name: 'tickCount',
      type: 'Number',
      defaultVal: 5,
      isOptional: false,
      desc: 'The number of axis ticks.',
    },
  ],
  examples: [

  ],
};
