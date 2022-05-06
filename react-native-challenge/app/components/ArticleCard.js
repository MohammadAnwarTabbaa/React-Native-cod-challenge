import React from 'react';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { View, Text, Image } from 'react-native'


export default function ArticleCard(props) {
    return (
        // <View style={{ top: 500 }}>
        //     <Card
        //         title='HELLO WORLD'
        //         image={require('./icon.png')}
        //         imageStyle={{
        //             width: '200px',
        //             height: '200px',
        //             resizeMode: 'cover',
        //             border: 'red'
        //         }}
        //     >


        //         <Text style={{ marginBottom: 10 }}>
        //             The idea with React Native Elements is more about component structure than actual design.
        //         </Text>
        //         <Button
        //             icon={<Icon name='code' color='#ffffff' />}
        //             buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        //             title='VIEW NOW' />
        //     </Card>
        // </View >
        <Card>
            <Card.Title>HELLO WORLD</Card.Title>
            <Card.Divider />
            <Card.Image
                style={{ padding: 0 }}
                source={{
                    uri:
                        'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                }}
            />
            <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements is more about component
                structure than actual design.
            </Text>
            <Button
                icon={
                    <Icon
                        name="code"
                        color="#ffffff"
                        iconStyle={{ marginRight: 10 }}
                    />
                }
                buttonStyle={{
                    borderRadius: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                }}
                title="Read More"
            />
        </Card>

    );
}
