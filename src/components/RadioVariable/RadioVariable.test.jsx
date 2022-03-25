import {render, screen} from '@testing-library/react'
import RadioVariable from './RadioVariable'

test('rendering without props', () => {
   render(<RadioVariable/>)
   expect(screen.getByText(/some/i)).toBeInTheDocument();
})