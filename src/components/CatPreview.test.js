import React from 'react'
import CatPreview from './CatPreview'
import renderer from 'react-test-renderer'

it( 'CatPreview renders correctly', () => {

    const props = {
        name: "Мотя2",
        breed: "Сибирская голубая",
        image: "cat1.png"
    }

    const result = renderer.create(
        <CatPreview { ...props } />
    ).toJSON()
    expect(result).toMatchSnapshot()
} )