// ActivityCell.js
// 用于优惠活动的cell

import React, { Component, PropTypes } from "react";

import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, TouchableHighlight } from "react-native";
import Img from '../common/Img';
const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const cellPadding = 10;
const cellHeight_I5 = 380;
const textHeight = 35;
const cellHeight = cellHeight_I5*screenWidth/640;
const imageHeight = cellHeight - textHeight - cellPadding;
const imageWidth  = screenWidth - 2*cellPadding;
export default class ActivityCell extends Component {
	static propTypes = {
		...View.propTypes,
		imageStyle: Image.propTypes.style,
		textContainer: View.propTypes.style,
		textStyle: Text.propTypes.style,
		title: PropTypes.string,
		source:Image.propTypes.source,
		onPress:PropTypes.func,
	}
	_onPress = ()=>{
		this.props.onPress && this.props.onPress();
	}
	render() {
		const { style, imageStyle, textContainer, textStyle, title } = this.props;
		return (
			<TouchableOpacity
				// underlayColor='white'
				style={[styles.container, style]}
				activeOpacity={1}
				onPress={this._onPress}
			>
				<Img style={[styles.image, imageStyle]}/>

				<View style={[styles.textContainer, textContainer]}>
					<Text style={[styles.text, textStyle]} numberOfLines={1}>{title}</Text>
				</View>

			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: cellHeight,
		// alignItems: 'center',
		// justifyContent: 'center',
    paddingHorizontal:10,
    paddingVertical:10,
		// marginBottom: 10
		backgroundColor: 'white',
	},
	image: {
		width: imageWidth,
		height: imageHeight,
		// backgroundColor: 'rgb(247, 247, 247)',
	},
	textContainer: {
		// position: 'absolute',
		// left: 0,
		// right: 0,
		// bottom: 0,
		height: textHeight,
		// paddingLeft: cellPadding,
		// paddingRight: cellPadding,
		// alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
	},
	text: {
		color: '#333',
	},
});
