import React from 'react';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {CardItem, Card, Left, Body} from 'native-base';
import {WingBlank} from '@ant-design/react-native';
import {Row, Col} from '../Grid';

const LoaderCard = ({count = 1}) => {
  let counter = [];
  for (let i = 0; i < count; i++) {
    counter.push(i);
  }

  return (
    <>
      {counter.map((item, i) => (
        <WingBlank key={i}>
          <Card padder>
            <CardItem bordered>
              <Body>
                <Row>
                  <Col size={12}>
                    <ShimmerPlaceHolder
                      width={300}
                      height={100}
                      autoRun={true}
                    />
                  </Col>
                </Row>
              </Body>
            </CardItem>
            <CardItem style={{justifyContent: 'flex-end'}} footer bordered>
              <Left>
                <ShimmerPlaceHolder autoRun={true} />
              </Left>
            </CardItem>
          </Card>
        </WingBlank>
      ))}
    </>
  );
};

export default LoaderCard;
