import React,{useState, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';

import conect from '../bd/connection';

import Post from './Post/index';

export default function Feed(){
    const [feed, setFeed] = useState([]);

    useEffect(()=>{
        conect.ref('feed').on('value', e =>{
            var n = e.val();
            var array = Object.values(n);
            setFeed(array);
        });
    }, []);

    return (
        <View>
            <FlatList
            data={feed}
            keyExtractor={feed => String(feed.id)}
            renderItem={ ({item}) => (
                <Post description={item.description} link={item.image}/>
            )}
            />
        </View>
    );
}

