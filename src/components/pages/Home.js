import React from 'react'
import CatPreview from '../CatPreview'
import CatData from '../../data/cats'

export default class Home extends React.Component {
    render() {
        return (
            <div className='row'>
                { CatData.map( c => {
                    return (
                        <div key={ c.id } className='col-md-3'>
                            <CatPreview { ...c } />
                        </div>
                    )
                } ) }
            </div>
        )
    }
}
