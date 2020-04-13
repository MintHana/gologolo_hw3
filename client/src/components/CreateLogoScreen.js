import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Link } from 'react-router-dom';

const ADD_LOGO = gql`
    mutation AddLogo(
        $text: String!,
        $color: String!,
        $fontSize: Int!,
        $backgroundColor: String!,
        $borderColor: String!,
        $borderRadius: Int!,
        $borderWidth: Int!,
        $padding: Int!,
        $margin: Int!) {
        addLogo(
            text: $text,
            color: $color,
            fontSize: $fontSize,
            backgroundColor: $backgroundColor,
            borderColor: $borderColor,
            borderRadius: $borderRadius,
            borderWidth: $borderWidth,
            padding: $padding,
            margin: $margin) {
            _id
        }
    }
`;

var previewText = "Sample";
var previewColor = "#000000";
var previewFontSize= "30";
var previewBackgroundColor= "#FFFFFF";
var previewBorderColor= "#00FF00";
var previewBorderRadius= "30";
var previewBorderWidth = "30";
var previewPadding = "30";
var previewMargin= "30";

class CreateLogoScreen extends Component {

    handleTextChange = (event) =>{
        previewText = event.target.value;
        this.setState({text:previewText});
    }

    handleColorChange = (event) => {
        previewColor = event.target.value;
        this.setState({color:previewColor});
    }

    handleFontSizeChange = (event) => {
        previewFontSize = event.target.value;
        this.setState({fontSize:previewFontSize});
    }

    handleBackgroundColorChange = (event) => {
        previewBackgroundColor = event.target.value;
        this.setState({backGroundColor:previewBackgroundColor});
    }

    handleBorderColorChange = (event) => {
        previewBorderColor = event.target.value;
        this.setState({borderColor:previewBorderColor});
    }

    handleBorderRadiusChange = (event) =>{
        previewBorderRadius = event.target.value;
        this.setState({borderRadius:previewBorderRadius});
    }

    handleBorderWidthChange = (event) =>{
        previewBorderWidth = event.target.value;
        this.setState({borderWidth:previewBorderWidth});
    }

    handlePaddingChange = (event) => {
        previewPadding = event.target.value;
        this.setState({padding:previewPadding});
    }

    handleMarginChange = (event) => {
        previewMargin = event.target.value;
        this.setState({margin:previewMargin});
    }

    render() {
        let text, color, fontSize, backgroundColor, borderColor, borderRadius, borderWidth, padding, margin;
        if(this.state == null){
            this.setState({text:""});
        }
        return (
            <Mutation mutation={ADD_LOGO} onCompleted={() => this.props.history.push('/')}>
                {(addLogo, { loading, error }) => (
                    <div className="container">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4><Link to="/">Home</Link></h4>
                                <h3 className="panel-title">
                                    Create Logo
                            </h3>
                            </div>
                            <div className="panel-body">
                                <div className="displayLogo">
                                                    <div style = {{
                                                            overflow: 'auto',
                                                            display: 'inline-block',
                                                            position:"absolute",
                                                            width:'min-content',
                                                            left: 250+'px',
                                                            "border-style": "solid",
                                                            color: previewColor,
                                                            fontSize: previewFontSize+"pt",
                                                            backgroundColor: previewBackgroundColor,
                                                            "border-color":previewBorderColor,
                                                            "border-radius":previewBorderRadius+"pt",
                                                            "border-width":previewBorderWidth+"pt",
                                                            padding:previewPadding+"pt",
                                                            margin:previewMargin+"pt"}}>
                                                            {previewText}
                                                        </div>
                                                    </div>  
                                <form onSubmit={e => {
                                    e.preventDefault();
                                    addLogo({ variables: { text: text.value, color: color.value, fontSize: parseInt(fontSize.value), backgroundColor: backgroundColor.value, borderColor: borderColor.value, borderRadius: parseInt(borderRadius.value), borderWidth: parseInt(borderWidth.value), padding: parseInt(padding.value), margin: parseInt(margin.value)} });
                                    text.value = "";
                                    color.value = "";
                                    fontSize.value = "";
                                    backgroundColor.value = "";
                                    borderColor.value = "";
                                    borderRadius.value = "";
                                    borderWidth.value = "";
                                    padding.value = "";
                                    margin.value = "";
                                }}>
                                    <div className="form-group">
                                        <label htmlFor="text">Text:</label>
                                        <input type="text" className="form-control" name="text" ref={node => {
                                            text = node;
                                        }} onChange={this.handleTextChange} style = {{width:130+"pt"}} placeholder="Text" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="color">Color:</label>
                                        <input type="color" className="form-control" name="color" ref={node => {
                                            color = node;
                                        }} onChange={this.handleColorChange} style = {{width:130+"pt"}} placeholder="Color" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fontSize">Font Size:</label>
                                        <input type="number" className="form-control" name="fontSize" ref={node => {
                                            fontSize = node;
                                        }} onChange={this.handleFontSizeChange} style = {{width:130+"pt"}} placeholder="Font Size" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="backgroundColor">Background Color:</label>
                                        <input type="color" className="form-control" name="backgroundColor" ref={node => {
                                            backgroundColor = node;
                                        }} onChange={this.handleBackgroundColorChange} style = {{width:130+"pt"}} placeholder="Background Color" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="borderColor">Border Color:</label>
                                        <input type="color" className="form-control" name="borderColor" ref={node => {
                                            borderColor = node;
                                        }} onChange={this.handleBorderColorChange} style = {{width:130+"pt"}} placeholder="Border Color" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="borderRadius">Border Radius:</label>
                                        <input type="number" className="form-control" name="borderRadius" ref={node => {
                                            borderRadius = node;
                                        }} onChange={this.handleBorderRadiusChange} style = {{width:130+"pt"}} placeholder="Border Radius" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="borderWidth">Border Width:</label>
                                        <input type="number" className="form-control" name="borderWidth" ref={node => {
                                            borderWidth = node;
                                        }} onChange={this.handleBorderWidthChange} style = {{width:130+"pt"}} placeholder="Border Width" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="padding">Padding:</label>
                                        <input type="number" className="form-control" name="padding" ref={node => {
                                            padding = node;
                                        }} onChange={this.handlePaddingChange} style = {{width:130+"pt"}} placeholder="Padding" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="margin">Margin:</label>
                                        <input type="number" className="form-control" name="margin" ref={node => {
                                            margin = node;
                                        }} onChange={this.handleMarginChange} style = {{width:130+"pt"}} placeholder="Margin" />
                                    </div>
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </form>
                                {loading && <p>Loading...</p>}
                                {error && <p>Error :( Please try again</p>}
                            </div>
                        </div>
                    </div>
                )}
            </Mutation>
        );
    }
}

export default CreateLogoScreen;