import React, { Component } from "react";
import Styled from "styled-components";
import Ionicons from "react-native-vector-icons/Ionicons";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";

import IconLine from "react-native-vector-icons/SimpleLineIcons";
import IconFeather from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import Text from "../Text";
import Header from "../Header";
import CardPlaces from "../Card/CardPlaces";
import GradientView from "../GradientView";
import { Row, Col } from "../Grid";
import {
	View,
	Dimensions,
	Modal,
	TouchableOpacity,
	Image,
	BackHandler,
	ScrollView,
	FlatList,
	ActivityIndicator,
	StyleSheet,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	map: {
		position: "absolute",
		top: 0,
		width: 150,
		height: 150,
		left: 0,
		right: 0,
		bottom: 0,
	},
	container: {
		flex: 1,
	},
	mapcontainer: {
		flex: 1,
		width: width,
		height: height,
	},
});

const MainView = Styled(View)`
	backgroundColor: rgba(7, 18, 21, 0.48)
  height: 100%
  width: 100%
`;

const Button = Styled(TouchableOpacity)`
    width: 48%
    justifyContent: center
    alignItems: center
    height: 36px
    flexDirection: row
    borderWidth: 1px
    borderColor: rgba(214, 222, 222, 1)
    borderRadius: 15px
`;

const Container = Styled(View)`
    marginHorizontal: 8px
`;

const pictureSource = [
	{
		source: require("../../../assets/images/d1.jpeg"),
		title: "Samsung",
		price: "200000",
		discon: "10",
	},
	{
		source: require("../../../assets/images/d2.jpeg"),
		title: "Oppo",
		price: "200000",
		discon: "10",
	},
	{
		source: require("../../../assets/images/d3.jpeg"),
		title: "Vivo",
		price: "200000",
	},
	{
		source: require("../../../assets/images/d2.jpeg"),
		title: "Oppo",
		price: "200000",
		discon: "10",
	},
	{
		source: require("../../../assets/images/d3.jpeg"),
		title: "Vivo",
		price: "200000",
	},
	{
		source: require("../../../assets/images/d3.jpeg"),
		title: "Vivo",
		price: "200000",
	},
];

class FindLocation extends Component {
	static navigationOptions = ({ navigation, screenProps }) => {
		return {
			header: <Header title="Find Locations" showLeftButton />,
		};
	};

	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			mapRegion: null,
			latitude: 37.78825,
			longitude: -122.4324,
		};
	}

	onRegionChange = (region, latitude, longitude) => {
		this.setState({
			mapRegion: region,
			latitude: latitude || this.state.latitude,
			longitude: longitude || this.state.longitude,
		});
	};

	render() {
		const query = {
			key: "AIzaSyB85-btm3_WgrQf9tNZGjyE21hTTl-lMqU",
			language: "id",
			types: "(cities)",
		};

		return (
			<MainView>
				<ScrollView>
					<View style={{ backgroundColor: "#fff" }}>
						<Container>
							<GooglePlacesAutocomplete
								placeholder="Enter Location"
								minLength={2}
								autoFocus={false}
								fetchDetails
								listViewDisplayed="auto"
								query={query}
								currentLocation={false}
								onPress={(data, details = null) => {
									const region = {
										latitude: details.geometry.location.lat,
										longitude: details.geometry.location.lng,
										latitudeDelta: 0.00922 * 1.5,
										longitudeDelta: 0.00421 * 1.5,
									};
									this.onRegionChange(region, region.latitude, region.longitude);
								}}
							/>

							<View style={styles.container}>
								<MapView
									// style={{ flex: 1, width: 100, height:100 }}
									style={styles.mapcontainer}
									region={this.state.mapRegion}
									onRegionChange={(regions) => {
										this.setState({
											mapRegion: regions,
										});
									}}
									onPress={(e) => {
										const region = {
											latitude: e.nativeEvent.coordinate.latitude,
											longitude: e.nativeEvent.coordinate.longitude,
											latitudeDelta: 0.00922 * 1.5,
											longitudeDelta: 0.00421 * 1.5,
										};
										this.onRegionChange(region, region.latitude, region.longitude);
									}}
								>
									<MapView.Marker
										coordinate={{
											latitude: this.state.latitude,
											longitude: this.state.longitude,
										}}
										title="Lokasi"
										description="Hello"
									/>
								</MapView>
							</View>
							<View
								style={{
									flexDirection: "row",
									height: 42,
									alignItems: "center",
									marginTop: 30,
									borderBottomColor: "#FD8354",
									borderBottomWidth: 2,
								}}
							>
								{/* <TouchableOpacity style={{ width: '90%' }}>
                            <Text>Search friends</Text>
                        </TouchableOpacity> */}
								<View style={{ width: "10%" }}>
									<Image style={{ height: 20, width: 20 }} source={require("../../../assets/icons/search.png")} />
								</View>
							</View>
							<View style={{ paddingVertical: 55, borderBottomColor: "#D6DEDE", borderBottomWidth: 1 }} />
							{/* <View style={{ paddingVertical: 15, borderBottomColor: '#D6DEDE', borderBottomWidth: 1 }}>
                        <Text>Option 1</Text>
                    </View>
                    <View style={{ paddingVertical: 15, borderBottomColor: '#D6DEDE', borderBottomWidth: 1 }}>
                        <Text>Option 2</Text>
                    </View>
                    <View style={{ paddingVertical: 15, borderBottomColor: '#D6DEDE', borderBottomWidth: 1 }}>
                        <Text>Option 3</Text>
                    </View>
                    <View style={{ paddingVertical: 15, borderBottomColor: '#D6DEDE', borderBottomWidth: 1 }}>
                        <Text>Option 4</Text>
                    </View>
                    <View style={{ marginTop: 12, marginBottom: 29, alignItems: 'center' }}>
                      <Text color='rgba(253, 131, 84, 1)' style={{ fontFamily: 'Heebo-Medium' }}>Invite by phone number</Text>
                    </View> */}
						</Container>
					</View>
				</ScrollView>
			</MainView>
		);
	}
}

export default FindLocation;
