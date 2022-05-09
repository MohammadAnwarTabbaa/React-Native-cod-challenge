import React from 'react';
import { Card, Button, Icon } from 'react-native-elements'
import { Text, Linking } from 'react-native'


export default function ArticleCard({ article }) {
    return (
        <Card>
            <Card.Title>{article && article.abstract}</Card.Title>
            <Card.Divider />
            <Card.Image
                style={{ padding: 0 }}
                source={{
                    uri:
                        'https://hot-town-images.s3.amazonaws.com/kwtv/production/2022/January/19/breaking-news.1642620193378.jpeg',
                }}
            />
            <Text style={{ marginTop: 10, marginBottom: 10 }}>
                {article && article.lead_paragraph}
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
                onPress={(e) => {
                    Linking.openURL(article.web_url)
                }}
            />
        </Card>

    );
}
