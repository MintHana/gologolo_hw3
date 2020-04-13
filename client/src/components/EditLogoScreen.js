import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";

const GET_LOGO = gql`
    query logo($logoId: String) {
        logo(id: $logoId) {
            _id
            text
            color
            fontSize
            backgroundColor
            borderColor
            borderRadius
            borderWidth
            padding
            margin
        }
    }
`;

const UPDATE_LOGO = gql`
    mutation updateLogo(
        $id: String!,
        $text: String!,
        $color: String!,
        $fontSize: Int!,
        $backgroundColor: String!,
        $borderColor: String!,
        $borderRadius: Int!,
        $borderWidth: Int!,
        $padding: Int!,
        $margin: Int!) {
            updateLogo(
                id: $id,
                text: $text,
                color: $color,
                fontSize: $fontSize,
                backgroundColor: $backgroundColor,
                borderColor: $borderColor,
                borderRadius: $borderRadius,
                borderWidth: $borderWidth,
                padding: $padding,
                margin: $margin
                ) {
                    lastUpdate
                }
        }
`;

var previewText = "";
var previewColor = "";
var previewFontSize= "";
var previewBackgroundColor= "";
var previewBorderColor= "";
var previewBorderRadius= "";
var previewBorderWidth = "";
var previewPadding = "";
var previewMargin= "";

function setDefault(logo)
{
    previewText = logo.text;
    previewColor = logo.color;
    previewFontSize = logo.fontSize;
    previewBackgroundColor = logo.backgroundColor;
    previewBorderColor = logo.borderColor;
    previewBorderRadius = logo.borderRadius;
    previewBorderWidth = logo.borderWidth;
    previewPadding = logo.padding;
    previewMargin = logo.margin;
}

class EditLogoScreen extends Component {

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
        return (
            <Query query={GET_LOGO} variables={{ logoId: this.props.match.params.id }}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;
                    if(this.state == null){
                        setDefault(data.logo);
                        this.setState({text:data.logo.text});
                    }
                    return (
                        <Mutation mutation={UPDATE_LOGO} key={data.logo._id} onCompleted={() => this.props.history.push(`/`)}>
                            {(updateLogo, { loading, error }) => (
                                <div className="container">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4><Link to="/">Home</Link></h4>
                                            <h3 className="panel-title">
                                                Edit Logo
                                        </h3>
                                        </div>
                                        <div className="panel-body" style={{position: 'relative'}}>
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
                                                updateLogo({ variables: { id: data.logo._id, text: text.value, color: color.value, fontSize: parseInt(fontSize.value), backgroundColor: backgroundColor.value, borderColor: borderColor.value, borderRadius: parseInt(borderRadius.value), borderWidth: parseInt(borderWidth.value), padding: parseInt(padding.value), margin: parseInt(margin.value) } });
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
                                                    }} onChange={this.handleTextChange} style = {{width:130+"pt"}} placeholder="Text" defaultValue={data.logo.text} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="color">Color:</label>
                                                    <input type="color" className="form-control" name="color" ref={node => {
                                                        color = node;
                                                    }} onChange={this.handleColorChange} style = {{width:130+"pt"}} placeholder="Color" defaultValue={data.logo.color} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="fontSize">Font Size:</label>
                                                    <input type="text" className="form-control" name="fontSize" ref={node => {
                                                        fontSize = node;
                                                    }} onChange = {this.handleFontSizeChange} style = {{width:130+"pt"}} placeholder="Font Size" defaultValue={data.logo.fontSize} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="backgroundColor">Background Color:</label>
                                                    <input type="color" className="form-control" name="backgroundColor" ref={node => {
                                                        backgroundColor = node;
                                                    }} onChange = {this.handleBackgroundColorChange} style = {{width:130+"pt"}} placeholder="Background Color" defaultValue={data.logo.backgroundColor} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="borderColor">Border Color:</label>
                                                    <input type="color" className="form-control" name="borderColor" ref={node => {
                                                        borderColor = node;
                                                    }} onChange = {this.handleBorderColorChange} style = {{width:130+"pt"}} placeholder="Border Color" defaultValue={data.logo.borderColor} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="borderRadius">Border Radius:</label>
                                                    <input type="number" className="form-control" name="borderRadius" ref={node => {
                                                        borderRadius = node;
                                                    }} onChange = {this.handleBorderRadiusChange} style = {{width:130+"pt"}} placeholder="Border Radius" defaultValue={data.logo.borderRadius} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="borderWidth">Border Width:</label>
                                                    <input type="number" className="form-control" name="borderWidth" ref={node => {
                                                        borderWidth = node;
                                                    }} onChange = {this.handleBorderWidthChange} style = {{width:130+"pt"}} placeholder="Border Width" defaultValue={data.logo.borderWidth} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="padding">Padding:</label>
                                                    <input type="number" className="form-control" name="padding" ref={node => {
                                                        padding = node;
                                                    }} onChange = {this.handlePaddingChange} style = {{width:130+"pt"}} placeholder="Padding" defaultValue={data.logo.padding} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="margin">Margin:</label>
                                                    <input type="number" className="form-control" name="margin" ref={node => {
                                                        margin = node;
                                                    }} onChnage = {this.handleMarginChange} style = {{width:130+"pt"}} placeholder="Margin" defaultValue={data.logo.margin} />
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
                }}
            </Query>
        );
    }
}

export default EditLogoScreen;