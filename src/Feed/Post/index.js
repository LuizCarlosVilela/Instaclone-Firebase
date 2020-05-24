import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './style';

import PostImage from '../PostImage/index';

export default function Post(props){
    return (
        <View style={styles.container}>
            <Text style={styles.description}>{props.description}</Text>
            <PostImage link={props.link}/>
        </View>
    );
}