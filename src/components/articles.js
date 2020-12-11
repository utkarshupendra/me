import React from 'react';
import ArticleCard from './articlecard';
import { Col, Container, Row } from 'react-bootstrap';

export default function Home(props) {
    return(<div>
      <Container className="articles">
      <p>Since I am passionate about science and technology, I find a lot of interest in reading and writing about the same. Here are a few articles.</p>
        <Row>
          <Col><ArticleCard id='2' title ='Hash Trees' text='Article on Hash Trees, conceptualized by Ralph Merkle in 1979, but very relevant in current space when every software system is moving to a decentralized and distributed architecture' link='https://www.linkedin.com/pulse/hash-trees-merkle-utkarsh-upendra/'/></Col>
          <Col><ArticleCard id='3' title ='KTables and KStreams' text='Kafka Streams are a great way of building stream processing applications. Built on top of Kafka Producer and Consumer libraries, the Kafka Streams library leverages all the capabilities natively offered by Kafka like horizontal scalability, parallel data processing, fault-tolerance and much more.' link='https://www.linkedin.com/pulse/data-management-internals-kstreams-ktables-utkarsh-upendra/'/></Col>
          <Col><ArticleCard id='4' title ='Hyperloglog revisited' text='Imagine you go to a party and you want to know how many people are at that party, how would you determine that? One way is to use brute force to manually and sequentially count each individual and get the total. But obviously, you don’t want to do that in a party, right? So, what are the other options?' link='https://www.linkedin.com/pulse/understanding-hyperloglog-utkarsh-upendra/'/></Col>
        </Row>
      </Container>
      </div>
    );
}