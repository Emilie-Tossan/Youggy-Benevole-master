import React from "react";
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import * as Font from "expo-font";
import { Input, Divider } from "react-native-elements";

import BackButton from "../Components/BackButton";
import DateListComponent from "../Components/DateListComponent";

import MapMarker from "../../../assets/svg-js/mapMarker";

import PhotoProfil from "../../../assets/svg-js/photo_profil";

const Device = require("react-native-device-detection");

const styles = StyleSheet.create({
    screenContainer: {
        width: "100%",
        height: "100%"
    },
    mainContainer: {
        width: wp("100%"),
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: wp("8%"),
        paddingRight: wp("8%")
    },
    //
    // Text
    //
    title: {
        color: "#D94B4B",
        textAlign: "center",
        fontSize: hp("3%"),
        fontWeight: "bold"
    },
    subText: {
        textAlign: "center",
        fontSize: hp("2%"),
        fontWeight: "300"
    },
    //
    // Bouton
    //
    bouton: {
        marginLeft: "auto",
        marginRight: "auto",

        height: hp("6%"),
        width: "80%",
        backgroundColor: "#D94B4B",
        borderRadius: 100
    },
    boutonText: {
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: hp("3.2%"),
        fontWeight: "bold",
        textAlign: "center",
        color: "white"
    }
});

export default class App extends React.Component {
    constructor() {
        super();
    }

    static navigationOptions = {
        header: null
    };

    state = {
        fontLoaded: false,
        dateTable: [
            {
                id: 0,
                status: false,
                date: "Mardi 12 février",
                startHour: "10h",
                endHour: "12h"
            },
            {
                id: 1,
                status: false,
                date: "Mardi 12 février",
                startHour: "10h",
                endHour: "12h"
            },
            {
                id: 2,
                status: false,
                date: "Mardi 12 février",
                startHour: "10h",
                endHour: "12h"
            }
        ]
    };

    async componentDidMount() {
        await Font.loadAsync({
            "SF-pro": require("../../../assets/fonts/SF-Pro-Text-Regular.otf"),
            "Montserrat-light": require("../../../assets/fonts/Montserrat-Light.ttf")
        });
        this.setState({ fontLoaded: true });
    }

    StatusHandler = ({ id }) => {
        const { dateTable } = this.state;
        const newTable = dateTable.map(elem => {
            if (elem.id === id) elem.status = !elem.status;
            else elem.status = false;
            return elem;
        });
        this.setState({ dateTable: newTable });
    };

    render() {
        const { goBack } = this.props.navigation;
        const { dateTable } = this.state;

        const DateList = () => {
            const Components = dateTable.map(keys => {
                return (
                    <TouchableOpacity
                        key={keys.id}
                        onPress={() => this.StatusHandler(keys)}
                    >
                        <DateListComponent
                            id={keys.id}
                            status={keys.status}
                            date={keys.date}
                            startHour={keys.startHour}
                            endHour={keys.endHour}
                        />
                    </TouchableOpacity>
                );
            });
            return (
                <ScrollView style={{ height: hp("30%") }}>
                    {Components}
                </ScrollView>
            );
        };
        const Header = () => {
            return (
                <View style={{ height: "10%" }}>
                    <View style={{ paddingBottom: hp("1%") }} />
                    <BackButton text="Retour" color="black" goBack={goBack} />
                </View>
            );
        };

        return (
            <View style={styles.screenContainer}>
                <Header />
                <View style={styles.mainContainer}>
                    <View style={{ paddingBottom: hp("18%") }} />
                    <Text style={styles.title}>Je sélectionne</Text>
                    <View style={{ paddingTop: hp("1%") }} />
                    <Text style={styles.subText}>
                        les jours et les heures durant lesquels je souhaite
                        participer.
                    </Text>
                    <View style={{ paddingTop: hp("5%") }} />
                    <DateList />
                    <View style={{ paddingTop: hp("5%") }} />
                    <TouchableOpacity style={styles.bouton}>
                        <Text style={styles.boutonText}>
                            Je participe{"  "}!
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
