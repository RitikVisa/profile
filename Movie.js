import { Component } from "react";

class Movie extends Component {

    constructor() {
        super()
        this.state = {
            movieName: '',
            movieRating: ''
        }
    }
    movieNameChnged = (e) => {
        this.setState({ movieName: e.target.value })
    }
    movieRatingChanged =(e)=>{
        this.setState({movieRating:e.target.value})
    }
    render() {
        return (<div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <input type="text" onChange={this.movieNameChnged} placeholder="Enter movie name" className="form-control" />
                   
                    <input type="text" onChange={this.movieRatingChanged} placeholder="Enter movie rating" className="form-control my-2" />
                </div>
                <div className="col-md-6">
                    <h1>{this.state.movieName}</h1>
                    <h1>{this.state.movieRating}</h1>
                </div>
            </div>
        </div>)
    }

}
export default Movie