import {render, screen} from '@testing-library/react'
import SelectCustom from './SelectCustom'

test('rendering without props SelectCustom', () => {
   render(<SelectCustom/>)
   expect(screen.getByText(/some/i)).toBeInTheDocument();
})