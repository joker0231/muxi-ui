import React from 'react'
import { render } from '@testing-library/react'

import BaseButton from '../index'

describe('BaseButton', () => {
    test('renders the BaseButton component', () => {
        render(<BaseButton label="Hello world!" />)
    })
})
