import React from 'react'
import { View, Text, TouchableHighlight, Modal } from 'react-native';
import gameRules from '../assets/Settings/gameRules.json'

const RuleModal = (props) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}>
            <View style={props.styles.centeredView}>
                <View style={props.styles.modalView}>
                    <Text>{props.rule}</Text>

                    <Text>{gameRules[props.rule]["description"]}</Text>

                    <TouchableHighlight onPress={() => { props.setModalVisibility(!props.modalVisible); }}>
                        {/* when close is pressed, the modalvisibility becomes not true aka false, therefore dissapears*/}
                        <Text>Close</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    )
}

export default RuleModal