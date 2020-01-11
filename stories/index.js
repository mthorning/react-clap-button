import React from 'react'
import { storiesOf } from '@storybook/react'

import centered from '@storybook/addon-centered'

import ClapButton from '../src'

storiesOf('ClapButton', module)
  .addDecorator(centered)
  .addWithJSX('default', () => <ClapButton count={1} countTotal={12} incrementCount={() => {}} />)
