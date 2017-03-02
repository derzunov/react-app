import React from "react";
import { Link } from "react-router";

export default class CatPreview extends React.Component {
    render() {
        return (
            <div className="cat-preview">
                <h3>
                    <Link to={ "/cat/" + this.props.id }>
                        { this.props.name }
                        <small>{ this.props.breed }</small>
                    </Link>
                </h3>
                <img className="img-responsive" src={"img/" + this.props.image} />
            </div>
        );
    }
}