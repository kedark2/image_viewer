import React, {Component} from "react";
import "./style.css";

class ImageViewer extends Component{
	constructor(){
		super()
		this.state={
			imageCollection:[],
			count:1,
		}
		this.handlePrevious = this.handlePrevious.bind(this)
		this.handleNext = this.handleNext.bind(this)
	}
	componentDidMount(){
		fetch("https://api.imgflip.com/get_memes")
			.then(response => response.json())
			.then(response => {
				const {memes} = response.data
				this.setState( {imageCollection : memes } )
					console.log({memes})
			})
	}
	handlePrevious(){
		if(this.state.count > 1){
			this.setState(prevState=>{
				return{ 
					count : prevState.count - 1
				}
			})
		}
	}
	handleNext(){
		if(this.state.count < this.state.imageCollection.length){
			this.setState(prevState=>{
				return{
					count: prevState.count + 1
				}
			})
		}
	}
	render(){
		const images = this.state.imageCollection.map((image)=> {
				return(<img key={image.id} src={image.url} alt="images" className="image"/>)
			})

		return(
			<div className="container">
				<h1>Image Viewer</h1>
				<button className="previousButton" onClick={this.handlePrevious}>Previous</button>
				<button className="nextButton" onClick={this.handleNext}>Next</button>
				<div className="imageHolder">
					{images[this.state.count]}
				</div>
			</div>
		)
	}
}
export default ImageViewer;