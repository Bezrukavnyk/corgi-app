import {render} from '@testing-library/react'
import InputVariable from './InputVariable'

test('input empty snapshot', () => {
  const input = render(<InputVariable />)
  expect(input).toMatchSnapshot()
})