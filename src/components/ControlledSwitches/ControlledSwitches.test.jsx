import {render, screen} from '@testing-library/react';
import UseSwitchesCustom from './ControlledSwitches';

describe('UseSwitchesCustom component', ()=>{
    test('component rendering', ()=>{
        const container = render (<UseSwitchesCustom />)
        expect(container).toBe(container)
    })

})