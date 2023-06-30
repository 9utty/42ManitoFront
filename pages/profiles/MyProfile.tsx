import React from "react";
import AppLayout from "../global/components/AppLayout";
import { Image, Grid, Row, Col, Rate, Divider, Button, Statistic } from "antd";
import MuiRate from "../global/components/MuiRate";
import ProfileUpdate from "./components/ProfileSetting";

const { useBreakpoint } = Grid;

interface ProfileProps {
  isMy: boolean;
}

const MyProfile = (props: ProfileProps) => {
  const screens = useBreakpoint();
  const imageSize = screens.xs ? 140 : 200;
  return (
    <AppLayout>
      <Row gutter={[20, 20]}>
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={24}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ marginRight: "20px", flex: 3 }}>
                <div
                  style={{
                    fontSize: screens.xs ? "18px" : "25px",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  닉네임입니다
                </div>
                <Divider />
                <div
                  style={{
                    fontSize: screens.xs ? "15px" : "20px",
                    color: "#000",
                  }}
                >
                  소개글입니다 소개글입니다 소개글입니다
                  소개글입니다소개글입니다 소개글입니다소개글입니다 소개글입니다
                  소개글입니다 소개글입니다소개글입니다 소개글입니다소개글입니다
                  소개글입니다 소개글입니다 소개글입니다소개글입니다
                  소개글입니다
                </div>
              </div>
              <Image
                preview={false}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                height={screens.xs ? 140 : 200}
                width={screens.xs ? 140 : 200}
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  marginLeft: "20px",
                  flex: 1,
                }}
              />
            </div>
          </Col>
        </Row>
        <Divider />
        <Col xs={24} sm={24}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: screens.xs ? "15px" : "20px",
                color: "#000",
                marginRight: "10px",
                marginTop: "3px",
              }}
            >
              Mentor
            </div>
            <MuiRate IsReadOnly={true} Value={2.5} />
          </div>
        </Col>
        <Col xs={24} sm={24}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: screens.xs ? "15px" : "20px",
                color: "#000",
                marginRight: "10px",
                marginTop: "3px",
              }}
            >
              Mentee
            </div>
            <MuiRate IsReadOnly={true} Value={4.5} />
          </div>
        </Col>
        <Divider />
        <Col xs={24} sm={24}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Statistic title="이달의 멘토링" value={42} />
            <Statistic title="멘토링" value={112893} />
          </div>
        </Col>
        <Divider />
      </Row>
      <ProfileUpdate />
    </AppLayout>
  );
};

export default MyProfile;
