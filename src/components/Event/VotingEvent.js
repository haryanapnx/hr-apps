import React, { Component } from "react";
import Styled from "styled-components";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconFeather from "react-native-vector-icons/Feather";
import { connect } from "react-redux";
import Text from "../Text";
import Header from "../Header";
import InputText from "../Input/InputText";
import { Row, Col } from "../Grid";
import { get, map } from "lodash";
import {
	View,
	Dimensions,
	TouchableOpacity,
	Image,
	BackHandler,
	ScrollView,
	FlatList,
	ActivityIndicator,
} from "react-native";
import { CheckBox } from "react-native-elements";

const { height, width } = Dimensions.get("window");

const MainView = Styled(View)`
    height: 100%
    width: 100%
    backgroundColor: #fff
`;

const Container = Styled(View)`
    paddingHorizontal: 20px
    marginVertical: 14px
    borderBottomColor: #F7F7F7
    borderBottomWidth: 2px
    paddingBottom: 20px
`;
const BackIcon = Styled(Icon)`
   fontSize: 24 
`;

const ContentView = Styled(TouchableOpacity)`
    flexDirection: row
    paddingHorizontal: 20px
    borderBottomColor: rgba(12, 69, 83, 0.12)
    borderBottomWidth: 1px
    paddingBottom: 11px
    paddingTop: 12px
`;

const LeftContent = Styled(View)`
    width: 20%
    justifyContent: center
`;

const RightContent = Styled(View)`
    width: 80%
    justifyContent: center
`;

const dataDumy = [
	{
		id: 1,
		name: "asdadsa",
	},
	{
		id: 2,
		name: "zxcxz",
	},
	{
		id: 3,
		name: "qwe",
	},
	{
		id: 4,
		name: "iop",
	},
	{
		id: 5,
		name: "klk",
	},
	{
		id: 6,
		name: "ghjg",
	},
	{
		id: 7,
		name: "yhnmju",
	},
	{
		id: 8,
		name: "nmcnzx",
	},
	{
		id: 9,
		name: "oknmks",
	},
];
let tempSelected = [];

class VotingEvent extends Component {
	static navigationOptions = ({ navigation, screenProps }) => {
		return {
			header: <Header showLeftButton screenProps title="Voting Event" />,
		};
	};

	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			email: "",
			error: {
				email: null,
			},
			refresh: [],
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.state.refresh != nextState.refresh;
	}

	onValidate = () => {};

	onChangeValue = () => {};

	selected = (value) => {
		let idx = tempSelected.findIndex((item) => item.id === value.id);
		
		if (idx === -1){ 
			tempSelected.push(value)
		}else {
			tempSelected.splice(idx, 1)
		};
		this.setState({ refresh: tempSelected });
		this.forceUpdate();
	};


	handleAdd = () => {};

	searchSelected(val, nilai) {
		for (const value of nilai) {
			console.log(val, "nilai");
			console.log(value, "nilai2");
			if (value.id === val) {
				return true;
			}
			return false;
		}
	}

	render() {
		const bgWhite = { backgroundColor: "#fff" };
		const bgGrey = { backgroundColor: "rgba(242, 244, 244, 1)" };
		return (
			<MainView>
				<ScrollView>
					<Container>
						<TouchableOpacity
							style={{
								flexDirection: "row",
								height: 36,
								backgroundColor: "#F7F7F7",
								borderColor: "#AFAEA7",
								borderWidth: 1,
								borderRadius: 15,
								justifyContent: "center",
								width: "100%",
							}}
						>
							<LeftContent style={{ width: "10%" }}>
								<Image style={{ height: 20, width: 20 }} source={require("../../../assets/icons/search.png")} />
							</LeftContent>
							<RightContent>
								<Text color="#AFAEA7">Search places</Text>
							</RightContent>
						</TouchableOpacity>
					</Container>
					{dataDumy.map((value, index) => {
						return (
							<View key={index}>
								<ContentView>
									<LeftContent>
										<Image
											style={{ height: 57, width: 57, borderRadius: 33, overflow: "hidden" }}
											source={require("../../../assets/images/d1.jpeg")}
										/>
									</LeftContent>
									<RightContent style={{ width: "80%" }}>
										<CheckBox
											right
											title={value.name}
											checkedIcon="dot-circle-o"
											uncheckedIcon="circle-o"
											checked={this.state.refresh.find((item) => item.id === value.id)}
											onPress={() => this.selected(value)}
										/>
									</RightContent>
								</ContentView>
							</View>
						);
					})}
				</ScrollView>
			</MainView>
		);
	}
}

export default VotingEvent;
