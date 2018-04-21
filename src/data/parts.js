const images = require.context('./images', true, /\.png$/)

const parts = {
  heads: [
    {
      id: 1,
      description: 'A robot head with an external antenna for better wireless communication.',
      title: 'Antenna',
      src: images('./head1.png'),
      type: 'heads',
      cost: 125.50
    },
    {
      id: 2,
      description: 'A robot head with a mouth to allow verbal communication',
      title: 'Speaker',
      src: images('./head2.png'),
      cost: 95.00,
      type: 'heads',
      onSale: true
    }
  ],
  arms: [
    {
      id: 1,
      description: 'An arm that allows the robot to pick up items.',
      title: 'Grabber',
      src: images('./arm1.png'),
      type: 'arms',
      cost: 65
    },
    {
      id: 2,
      description: 'An arm with an syringe and needle injector.',
      title: 'Injector',
      src: images('./arm2.png'),
      type: 'arms',
      cost: 70
    }
  ],
  torsos: [
    {
      id: 1,
      description: 'A bulky body with vents for heat distribution.',
      title: 'Bulky 1',
      src: images('./torso1.png'),
      type: 'torsos',
      cost: 95
    },
    {
      id: 2,
      description: 'A bulky body with vents for heat distribution.',
      title: 'Bulky 2',
      src: images('./torso2.png'),
      type: 'torsos',
      cost: 85
    }
  ],
  bases: [
    {
      id: 1,
      description: 'An two legged-base with articulated legs.',
      title: 'Articulated 1',
      src: images('./base1.png'),
      type: 'bases',
      cost: 90
    },
    {
      id: 2,
      description: 'An two legged-base with articulated legs.',
      title: 'Articulated 2',
      src: images('./base2.png'),
      type: 'bases',
      cost: 80
    }
  ]
}

export default parts
