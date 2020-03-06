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

import MyMissionComponent from "../Components/MyMissionComponent";

import RetirerDemande from "../../../assets/svg-js/RetirerDemande";
import RetirerParticipation from "../../../assets/svg-js/RetirerParticipation";

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
    // Menu
    //
    menuTile: {
        height: hp("6%"),
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "auto",
        marginBottom: "auto",
        width: "100%",
        flexDirection: "row"
    },
    menuIconContainer: {
        paddingLeft: hp("2.8%"),
        paddingRight: hp("2.3%"),
        marginTop: "auto",
        marginBottom: "auto"
    },
    textMenuTile: {
        textAlign: "center",
        marginTop: "auto",
        marginBottom: "auto",
        fontSize: hp("2%")
    },
    //
    // Bottom Container
    //
    bottomContainer: {
        // top: hp("-8%"),
        marginTop: "auto",
        overflow: "hidden",
        backgroundColor: "white"
    },
    bottomText: {
        textAlign: "center",
        fontSize: hp("2.5%"),
        height: hp("3%"),
        marginTop: "auto",
        marginBottom: "auto",
        top: hp("-1%")
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
        MyMissions: [
            {
                id: uuid(),
                date: "12",
                month: "février",
                startHour: "11h",
                endHour: "12h",
                desc: "distrubution de repas",
                societe: "resto du coeur",
                status: true
            },
            {
                id: uuid(),
                date: "12",
                month: "février",
                startHour: "11h",
                endHour: "12h",
                desc: "distrubution de repas",
                societe: "resto du coeur",
                status: false
            }
        ],
        renderTrue: false,
        renderFalse: false,
        which: ""
    };
    OptionRenderer = (id, status) => {
        if (status) {
            this.setState({ renderFalse: false });
            if (id == this.state.which || !this.state.renderTrue)
                this.setState({ renderTrue: !this.state.renderTrue });
            this.setState({ which: id });
            console.log("renderTrue");
            console.log(this.state.renderTrue);
            console.log(this.state.which);
        } else if (!status) {
            this.setState({ renderTrue: false });
            if (id == this.state.which || !this.state.renderFalse)
                this.setState({ renderFalse: !this.state.renderFalse });
            this.setState({ which: id });
            console.log("renderFalse");
            console.log(this.state.renderFalse);
            console.log(this.state.which);
        }
    };
    render() {
        const { MyMissions, renderTrue, renderFalse, which } = this.state;

        const { goBack } = this.props.navigation;
        const Menu = () => {
            if (renderTrue) {
                return (
                    <View>
                        <Divider />
                        <TouchableOpacity
                            style={styles.menuTile}
                            onPress={() =>
                                this.props.navigation.push(
                                    "ChangePasswordProfil"
                                )
                            }
                        >
                            <View style={styles.menuIconContainer}>
                                <RetirerParticipation />
                            </View>
                            <Text style={styles.textMenuTile}>
                                Me retirer de la mission{which}
                            </Text>
                        </TouchableOpacity>
                    </View>
                );
            }
            if (renderFalse) {
                return (
                    <View>
                        <Divider />
                        <TouchableOpacity
                            style={styles.menuTile}
                            onPress={() =>
                                this.props.navigation.push(
                                    "ChangePasswordProfil"
                                )
                            }
                        >
                            <View style={styles.menuIconContainer}>
                                <RetirerDemande />
                            </View>
                            <Text style={styles.textMenuTile}>
                                Retirer ma demande{which}
                            </Text>
                        </TouchableOpacity>
                    </View>
                );
            } else return <View />;
        };

        const Missions = () => {
            if (MyMissions.length == 0) {
                return (
                    <View>
                        <View style={{ paddingBottom: hp("4%") }} />
                        <Text style={styles.subText}>
                            Tu n’as pas encore participé à une mission. Vas dans
                            « Ma recherche de mission » pour trouver une mission
                            autour de toi.
                        </Text>
                        <View style={{ paddingBottom: hp("3%") }} />
                        <Divider
                            style={{ height: 1, backgroundColor: "#DFDFDF" }}
                        />
                    </View>
                );
            } else if (MyMissions.length > 0) {
                const Components = MyMissions.map(keys => {
                    return (
                        <View key={keys.id}>
                            <MyMissionComponent
                                id={keys.id}
                                date={keys.date}
                                month={keys.month}
                                startHour={keys.startHour}
                                endHour={keys.endHour}
                                desc={keys.desc}
                                societe={keys.societe}
                                status={keys.status}
                                OptionRenderer={this.OptionRenderer}
                            />
                        </View>
                    );
                });
                return (
                    <ScrollView style={{ height: "70%", overflow: "hidden" }}>
                        {Components}
                    </ScrollView>
                );
            }
        };

        const Header = () => {
            return (
                <View style={{ height: "10%" }}>
                    <View style={{ paddingBottom: hp("1%") }} />
                    <BackButton
                        text="Recherche"
                        color="black"
                        goBack={goBack}
                    />
                </View>
            );
        };

        return (
            <View style={styles.screenContainer}>
                <Header />
                <View style={styles.mainContainer}>
                    <Text style={styles.title}>Mes participations</Text>
                    <View style={{ paddingBottom: hp("2%") }} />
                    <Divider
                        style={{ height: 1, backgroundColor: "#D94B4B" }}
                    />
                    <Missions />
                </View>
                <View>
                    <Menu />
                </View>
            </View>
        );
    }
}
