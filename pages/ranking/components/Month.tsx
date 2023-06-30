import React from "react";
import { Divider, Row, Col } from "antd";
import RankingCard from "./RankingCard";
import { FaCrown } from "react-icons/fa";

const MonthlyRanking = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row style={{ marginBottom: "20px", marginTop: "20px" }}>
          <Col span={24}>
            <div style={{ position: "relative" }}>
              <RankingCard
                image={Mentors[0].image}
                userNickName={Mentors[0].userNickName}
                count={442}
                rank={1}
              />
            </div>
          </Col>
        </Row>
      </div>
      <Row style={{ marginBottom: "20px", marginTop: "20px" }}>
        <Col span={12}>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <RankingCard
              image={Mentors[0].image}
              userNickName={Mentors[0].userNickName}
              count={410}
              rank={2}
            />
          </div>
        </Col>
        <Col span={12}>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <RankingCard
              image={Mentors[0].image}
              userNickName={Mentors[0].userNickName}
              count={400}
              rank={3}
            />
          </div>
        </Col>
      </Row>
      <Row style={{ marginBottom: "20px", marginTop: "20px" }}>
        <Col span={24}>
          <div
            style={{
              fontSize: "25px",
              marginLeft: "10px",
              marginRight: "10px",
              color: "#000",
            }}
          >
            4위부터 10위까지
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MonthlyRanking;

const Mentors = [
  {
    image:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    userNickName: "멘토3",
    description:
      "멘토3의 소개글입니다. 소개글입니다. 소개글입니다. 소개글입니다.",
    hashtag: ["DIY", "인테리어", "가드닝"],
  },
  {
    image:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    userNickName: "멘토4",
    description:
      "멘토4의 소개글입니다. 소개글입니다. 소개글입니다. 소개글입니다.",
    hashtag: ["요리", "베이킹"],
  },
  {
    image:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    userNickName: "멘토9",
    description:
      "멘토3의 소개글입니다. 소개글입니다. 소개글입니다. 소개글입니다.",
    hashtag: ["DIY", "인테리어", "가드닝"],
  },
  {
    image:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    userNickName: "멘토10",
    description:
      "멘토4의 소개글입니다. 소개글입니다. 소개글입니다. 소개글입니다.",
    hashtag: ["요리", "베이킹"],
  },
];
