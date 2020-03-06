import React from "react";
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from "react-native";
import { Input, Divider } from "react-native-elements";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import * as Font from "expo-font";

import BackButton from "../Components/BackButton";
import MissionComponent from "../Components/MissionComponent";

import MapMarker from "../../../assets/svg-js/mapMarker";
import Cible from "../../../assets/svg-js/Cible";
import Suivant from "../../../assets/svg-js/suivant";

const Device = require("react-native-device-detection");

import uuid from "uuid/v1";

const styles = StyleSheet.create({
    screenContainer: {
        width: "100%",
        height: "100%"
    },
    mainContainer: {
        width: wp("100%"),
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: wp("4%"),
        paddingRight: wp("4%")
    },
    //
    // Text
    //
    title: {
        fontSize: hp("2.7%"),
        textAlign: "center",
        color: "#D94B4B",
        fontWeight: "bold"
    },
    subText: {
        textAlign: "center",
        color: "grey",
        fontSize: hp("2%")
    },
    //
    // Bottom Container
    //
    bottomContainer: {
        top: hp("-13%"),
        marginTop: "auto",
        overflow: "hidden",
        backgroundColor: "white"
    },
    bottomText: {
        fontSize: hp("2.7%"),
        textAlign: "right",
        color: "#D94B4B",
        fontWeight: "500",

        paddingRight: hp("2%")
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
        Missions: [
            {
                id: uuid(),
                date: "12",
                month: "février",
                startHour: "11h",
                endHour: "12h",
                desc: "distrubution de repas",
                societe: "resto du coeur",
                logo:
                    "https://upload.wikimedia.org/wikipedia/fr/thumb/a/ad/Restos_du_coeur_Logo.svg/1024px-Restos_du_coeur_Logo.svg.png"
            }
        ]
    };

    render() {
        const { Missions } = this.state;

        Navigation = () => {
            this.props.navigation.navigate("MissionDesc");
        };

        const BottomContainer = () => {
            return (
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        marginLeft: "auto",
                        height: hp("5%")
                    }}
                    onPress={() => this.props.navigation.navigate("MyMissions")}
                >
                    <View>
                        <Text style={styles.bottomText}>
                            Mes participations{" "}
                        </Text>
                    </View>
                    <View style={{ width: hp("3%"), top: hp("1%") }}>
                        <Suivant color="#D94B4B" />
                    </View>
                </TouchableOpacity>
            );
        };

        const MissionsList = () => {
            if (Missions.length == 0)
                return (
                    <View style={{ top: hp("-3%") }}>
                        <View style={{ paddingBottom: hp("2%") }} />
                        <Text style={styles.subText}>
                            Désolé, il n'y a pas encore de missions disponible
                            dans ce secteur. Réessaie demain pour trouver ta
                            mission !
                        </Text>
                        <View style={{ paddingBottom: hp("3%") }} />
                        <Divider
                            style={{ height: 1, backgroundColor: "#DFDFDF" }}
                        />
                    </View>
                );
            if (Missions.length > 0) {
                const Components = Missions.map(keys => {
                    return (
                        <View key={keys.id}>
                            <MissionComponent
                                id={keys.id}
                                date={keys.date}
                                month={keys.month}
                                startHour={keys.startHour}
                                endHour={keys.endHour}
                                desc={keys.desc}
                                societe={keys.societe}
                                logo={keys.logo}
                                navigation={Navigation}
                            />
                        </View>
                    );
                });
                return (
                    <ScrollView
                        style={{
                            height: "65%",
                            overflow: "hidden",
                            top: hp("-3%")
                        }}
                    >
                        {Components}
                    </ScrollView>
                );
            }
        };

        const AddressInput = () => {
            return (
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate("GeolocAnimation")
                        }
                        style={{ width: hp("5%"), top: hp("-2.5%") }}
                    >
                        <Cible
                            width={"100%"}
                            style={{ position: "absolute", top: "55%" }}
                        />
                        <MapMarker width={"40%"} style={{ left: "30%" }} />
                    </TouchableOpacity>
                    <View>
                        <Input
                            placeholder="J'entre une adresse"
                            inputStyle={{
                                marginLeft: 3,
                                fontSize: hp("2%")
                            }}
                            inputContainerStyle={{
                                borderBottomColor: "#E5E5E5",
                                width: wp("81%"),
                                left: hp("-1%"),
                                marginLeft: "auto",
                                marginRight: "auto"
                            }}
                            containerStyle={{
                                width: "100%",
                                marginLeft: "auto",
                                marginRight: "auto"
                            }}
                        />
                    </View>
                </View>
            );
        };

        return (
            <View style={styles.screenContainer}>
                <View style={styles.mainContainer}>
                    <View style={{ paddingBottom: hp("8%") }} />
                    <Text style={styles.title}>Ma recherche de missions</Text>
                    <View style={{ paddingBottom: hp("2%") }} />
                    <Divider
                        style={{ height: 1, backgroundColor: "#D94B4B" }}
                    />
                    <View style={{ paddingBottom: hp("2%") }} />
                    <AddressInput />

                    <MissionsList />
                </View>
                <View style={styles.bottomContainer}>
                    <BottomContainer />
                </View>
            </View>
        );
    }
}
