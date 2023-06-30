import React from "react";
import { Divider, Row, Col } from "antd";
import AppLayout from "../../global/components/AppLayout";
import MentorCard from "../../global/components/MentorCard";
import MenuCategory from "./MenuCategory";

const studyMentors = [
  {
    image:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    userNickName: "멘토1",
    description:
      "멘토1의 소개글입니다. 소개글입니다. 소개글입니다. 소개글입니다.",
    hashtag: ["HTML", "CSS", "JavaScript"],
  },
  {
    image:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    userNickName: "멘토2",
    description:
      "멘토2의 소개글입니다. 소개글입니다. 소개글입니다. 소개글입니다.",
    hashtag: ["Python", "Django"],
  },
  {
    image:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    userNickName: "멘토5",
    description:
      "멘토1의 소개글입니다. 소개글입니다. 소개글입니다. 소개글입니다.",
    hashtag: ["HTML", "CSS", "JavaScript"],
  },
  {
    image:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    userNickName: "멘토6",
    description:
      "멘토2의 소개글입니다. 소개글입니다. 소개글입니다. 소개글입니다.",
    hashtag: ["Python", "Django"],
  },
];

const StudyCategory = () => {
  return (
    <>
      <Row style={{ marginBottom: "20px" }}>
        {studyMentors.map((mentor, index) => (
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={8}
            xxl={6}
            key={index}
            style={{ marginTop: "20px" }}
          >
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <MentorCard
                key={index}
                image={mentor.image}
                userNickName={mentor.userNickName}
                description={mentor.description}
                hashtag={mentor.hashtag}
              />
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default StudyCategory;
