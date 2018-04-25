import React from 'react'
import Label from '../../src/ui/label/label.jsx'
import renderer from 'react-test-renderer'

describe('UI testing...', () => {
  it('First Test', () => {
    const component = renderer.create(<Label></Label>)
    expect(component.toJSON()).toMatchSnapshot()
  })
});