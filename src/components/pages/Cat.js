import React from "react"
import NotFound from "./NotFound"
import CatData from "../../data/cats"

export default class Cat extends React.Component {
    render() {
        const id = this.props.params.catId
        const cat = CatData.find( (c) => c.id == id )

        if (!cat) {
            return <NotFound />
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>{cat.manufacturer} {cat.name}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-responsive" src={"../img/"+cat.image} />
                    </div>
                    <div className="col-md-6">
                        <h3>Description</h3>
                        <ul>
                            <li>Year: {cat.year}</li>
                            <li>Color: {cat.color}</li>
                            <li>Owner: {cat.owner}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}