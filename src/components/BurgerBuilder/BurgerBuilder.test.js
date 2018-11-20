import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { BurgerBuilder } from './BurgerBuilder'
import BuildControls  from '../Burger/BuildControls/BuildControls'

configure({ adapter: new Adapter() })

describe('<BurgerBuilder />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder initIngredients={() => {}} />)
  })

  it('should not render <BuildControls /> when not receiving ingredients',
    () => {
      expect(wrapper.find(BuildControls)).toHaveLength(0)
    }
  )

  it('should not render <BuildControls /> when not receiving ingredients',
    () => {
      wrapper.setProps({ ingredients: { salad: 1 } })
      expect(wrapper.find(BuildControls)).toHaveLength(1)
    }
  )
})