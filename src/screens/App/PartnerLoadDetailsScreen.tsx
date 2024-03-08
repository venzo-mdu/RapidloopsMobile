import { View, Text, Image, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AssignTruckScreenStyles, PartnerLoadDetailsScreenStyles } from './AppStyles'
import { ICONS } from '../../helpers/custom'

const PartnerLoadDetailsScreen = () => {

    const [driverName, setDriverName] = useState("");
    const [driverMobileNo, setDriverMobileNo] = useState("");
    const [driverLicenceNo, setDriverLicenceNo] = useState("");
    const [consignor, setConsignor] = useState("");
    const [consignee, setConsignee] = useState("");
    const [grossWeight1, setGrossWeight1] = useState("");
    const [grossWeight2, setGrossWeight2] = useState("");
    const [tareWeight1, setTareWeight1] = useState("");
    const [tareWeight2, setTareWeight2] = useState("");
    const [netWeight1, setNetWeight1] = useState("");
    const [netWeight2, setNetWeight2] = useState("");
    const [shipperRefNo, setShipperRefNo] = useState("");
    const [vesselName, setVesselName] = useState("");
    const [eWayBillNo, setEWayBillNo] = useState("");
    const [sellNo, setSellNo] = useState("");
    const [formKKNo, setFormKKNo] = useState("");

  
    return (
        <View style={PartnerLoadDetailsScreenStyles.container}>
            <ScrollView>
                <View style={PartnerLoadDetailsScreenStyles.headingBox}>
                    <Text style={PartnerLoadDetailsScreenStyles.headingTxt}>Create Trip</Text>

                    <Text style={PartnerLoadDetailsScreenStyles.imageTotalBoxRowTopTxt}>*</Text>
                    <View style={PartnerLoadDetailsScreenStyles.imageTotalBoxRow}>
                        <View style={PartnerLoadDetailsScreenStyles.imageTotalBox}>
                            <Image source={ICONS.BLACKBIGCAMERA} style={{width: 22, height: 22}} />
                            <Text style={PartnerLoadDetailsScreenStyles.imageTotalBoxTxt}>SD</Text>
                        </View>

                        <View style={PartnerLoadDetailsScreenStyles.imageTotalBox}>
                            <Image source={ICONS.BLACKBIGCAMERA} style={{width: 22, height: 22}} />
                            <Text style={PartnerLoadDetailsScreenStyles.imageTotalBoxTxt}>LR</Text>
                        </View>
                    </View>
                </View>

                <View style={PartnerLoadDetailsScreenStyles.orSeperationBox}>
                    <View style={PartnerLoadDetailsScreenStyles.orSeperationLine} />
                    <Text style={PartnerLoadDetailsScreenStyles.orSeperationLineTxt}>OR</Text>
                    <View style={PartnerLoadDetailsScreenStyles.orSeperationLine} />
                </View>

                <View style={{marginHorizontal: 16}}>

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Driver *</Text>
                        <TextInput
                            onChangeText={setDriverName}
                            value={driverName}
                            style={PartnerLoadDetailsScreenStyles.textIPTxt}
                            placeholder={"Eg. Bharani Kumar"}
                            placeholderTextColor={"#646464"}
                        />
                    </View>

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Driver mobile number *</Text>
                        <TextInput
                            onChangeText={val => setDriverMobileNo(val.replace(/[^0-9]/g, ''))}
                            value={driverMobileNo}
                            style={PartnerLoadDetailsScreenStyles.textIPTxt}
                            placeholder={"Eg. 7904331455"}
                            placeholderTextColor={"#646464"}
                            keyboardType="phone-pad"
                            inputMode="numeric"
                            maxLength={10}
                        />
                    </View>

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Driver licence number *</Text>
                        <TextInput
                            onChangeText={val => setDriverLicenceNo(val.replace(/[^0-9a-zA-Z]/g, ''))}
                            value={driverLicenceNo}
                            style={PartnerLoadDetailsScreenStyles.textIPTxt}
                            placeholder={"Eg. TN01W2009000768"}
                            placeholderTextColor={"#646464"}
                        />
                    </View>

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Consignor *</Text>
                        <TextInput
                            onChangeText={setConsignor}
                            value={consignor}
                            style={PartnerLoadDetailsScreenStyles.textIPTxt}
                            placeholder={"Eg. Coal Tech Eagle"}
                            placeholderTextColor={"#646464"}
                        />
                    </View>

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Consignee *</Text>
                        <TextInput
                            onChangeText={setConsignee}
                            value={consignee}
                            style={PartnerLoadDetailsScreenStyles.textIPTxt}
                            placeholder={"Eg. Sandur Manganese"}
                            placeholderTextColor={"#646464"}
                        />
                    </View>

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Gross Weight *</Text>
                        <View style={PartnerLoadDetailsScreenStyles.textIPNumberRowBox}>
                            <TextInput
                                onChangeText={setGrossWeight1}
                                value={grossWeight1}
                                style={PartnerLoadDetailsScreenStyles.textIPNumber1Txt}
                                placeholder={"00"}
                                placeholderTextColor={"#646464"}
                            />
                            <View style={PartnerLoadDetailsScreenStyles.textIPNumberSeperatorBox}>
                                <Text style={PartnerLoadDetailsScreenStyles.textIPNumberSeperatorTxt}>.</Text>
                            </View>

                            <TextInput
                                onChangeText={setGrossWeight2}
                                value={grossWeight2}
                                style={PartnerLoadDetailsScreenStyles.textIPNumber2Txt}
                                placeholder={"000"}
                                placeholderTextColor={"#646464"}
                            />
                        </View>
                    </View>

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Tare Weight *</Text>
                        <View style={PartnerLoadDetailsScreenStyles.textIPNumberRowBox}>
                            <TextInput
                                onChangeText={setTareWeight1}
                                value={tareWeight1}
                                style={PartnerLoadDetailsScreenStyles.textIPNumber1Txt}
                                placeholder={"00"}
                                placeholderTextColor={"#646464"}
                            />
                            <View style={PartnerLoadDetailsScreenStyles.textIPNumberSeperatorBox}>
                                <Text style={PartnerLoadDetailsScreenStyles.textIPNumberSeperatorTxt}>.</Text>
                            </View>

                            <TextInput
                                onChangeText={setTareWeight2}
                                value={tareWeight2}
                                style={PartnerLoadDetailsScreenStyles.textIPNumber2Txt}
                                placeholder={"000"}
                                placeholderTextColor={"#646464"}
                            />
                        </View>
                    </View>

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Net Weight *</Text>
                        <View style={PartnerLoadDetailsScreenStyles.textIPNumberRowBox}>
                            <TextInput
                                onChangeText={setNetWeight1}
                                value={netWeight1}
                                style={PartnerLoadDetailsScreenStyles.textIPNumber1Txt}
                                placeholder={"00"}
                                placeholderTextColor={"#646464"}
                            />
                            <View style={PartnerLoadDetailsScreenStyles.textIPNumberSeperatorBox}>
                                <Text style={PartnerLoadDetailsScreenStyles.textIPNumberSeperatorTxt}>.</Text>
                            </View>

                            <TextInput
                                onChangeText={setNetWeight2}
                                value={netWeight2}
                                style={PartnerLoadDetailsScreenStyles.textIPNumber2Txt}
                                placeholder={"000"}
                                placeholderTextColor={"#646464"}
                            />
                        </View>
                    </View>

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Shipper reference number</Text>
                        <TextInput
                            onChangeText={setShipperRefNo}
                            value={shipperRefNo}
                            style={PartnerLoadDetailsScreenStyles.textIPTxt}
                            placeholder={"Eg. LR# - Lorry Receipt"}
                            placeholderTextColor={"#646464"}
                        />
                    </View>

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Vessel name</Text>
                        <TextInput
                            onChangeText={setVesselName}
                            value={vesselName}
                            style={PartnerLoadDetailsScreenStyles.textIPTxt}
                            placeholder={"Eg. Ennore Gems"}
                            placeholderTextColor={"#646464"}
                        />
                    </View>

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>E-Way bill no</Text>
                        <TextInput
                            onChangeText={setEWayBillNo}
                            value={eWayBillNo}
                            style={PartnerLoadDetailsScreenStyles.textIPTxt}
                            placeholder={"Eg. 13146872708"}
                            placeholderTextColor={"#646464"}
                        />
                    </View>

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Sell no</Text>
                        <TextInput
                            onChangeText={setSellNo}
                            value={sellNo}
                            style={PartnerLoadDetailsScreenStyles.textIPTxt}
                            placeholder={"Eg. 480X6"}
                            placeholderTextColor={"#646464"}
                            keyboardType="phone-pad"
                            inputMode="numeric"
                            maxLength={5}
                        />
                    </View>

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Form KK no</Text>
                        <TextInput
                            onChangeText={val => setFormKKNo(val.replace(/[^0-9]/g, ''))}
                            value={formKKNo}
                            style={PartnerLoadDetailsScreenStyles.textIPTxt}
                            placeholder={"Eg. 7455"}
                            placeholderTextColor={"#646464"}
                            keyboardType="phone-pad"
                            inputMode="numeric"
                            maxLength={4}
                        />
                    </View>
                </View>
            </ScrollView>

            <View style={[AssignTruckScreenStyles.assignTruckRowBox, {marginHorizontal: 16}]}>
                <View style={[AssignTruckScreenStyles.cancelTruckBox, {backgroundColor: null}]}>
                <Text style={AssignTruckScreenStyles.cancelTruckBoxTxt}>Cancel</Text>
                </View>
                <View style={AssignTruckScreenStyles.assignTruckBox}>
                <Text style={AssignTruckScreenStyles.assignTruckBoxTxt}>Create Trip</Text>
                </View>
            </View>
        </View>
    )
}

export default PartnerLoadDetailsScreen