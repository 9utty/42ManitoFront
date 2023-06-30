import React, { useState } from "react";
import { Row, Col, Spin, Divider } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import MentorCard from "../global/components/MentorCard";
import { mockUsers } from "../test/mockUsers";
import AppLayout from "../global/components/AppLayout";
import HomeEnroll from "./components/Enroll";

const Manito = () => {
  const [cards, setCards] = useState(mockUsers.slice(0, 12));

  const fetchMoreData = () => {
    if (cards.length >= mockUsers.length) {
      return; // 모든 데이터를 불러왔으면 추가로 더 불러오지 않음
    }
    const nextCards = mockUsers.slice(cards.length, cards.length + 12);
    setCards([...cards, ...nextCards]);
  };

  return (
    <div>
      <AppLayout>
        <InfiniteScroll
          dataLength={cards.length}
          next={fetchMoreData}
          hasMore={cards.length < mockUsers.length}
          loader={
            <div
              className="example"
              style={{ verticalAlign: "middle", alignContent: "center" }}
            >
              <Spin />
            </div>
          }
        >
          <HomeEnroll />
          <Row gutter={[16, 16]}>
            {cards.map((card) => (
              <Col
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={8}
                xxl={6}
                key={card.uId}
              >
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    paddingBottom: "20px",
                  }}
                >
                  <MentorCard
                    image={card.Image}
                    description={card.Description}
                    userNickName={card.NickName}
                    hashtag={card.hashtag}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </InfiniteScroll>
      </AppLayout>
    </div>
  );
};

export default Manito;
