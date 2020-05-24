import React from 'react';
import {Image} from 'react-native';

import styles from './style';

export default function PostImage( props ){
    let pic = {
        uri: props.link
    };
    return(
        <Image source={pic} style={styles.Image}/>
    );
}