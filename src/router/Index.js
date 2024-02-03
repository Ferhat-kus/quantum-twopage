import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

import AnalysisResultPage from '../pages/AnalysisResultPage/Index';
import analysisCategoriesPage from '../pages/analysisCategoriesPage/Index'

export default class Index extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='AnalysisResultPage'>
                    <Stack.Screen
                        name="AnalysisResultPage"
                        options={{headerShown:false }}
                        component={AnalysisResultPage} />
                    <Stack.Screen
                        name="analysisCategoriesPage"
                        options={{headerShown:false }}
                        component={analysisCategoriesPage} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({})