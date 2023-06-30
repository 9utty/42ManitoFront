import React from "react";
import { Card, Grid, Divider, Image } from "antd";
import Link from "next/link";
import MentorProfile from "@/pages/profiles/components/MentorProfile";
import { FaCrown } from "react-icons/fa";

const { Meta } = Card;
const { useBreakpoint } = Grid;

interface Card {
  image: string;
  userNickName: string;
  count: number;
  rank: number;
}

const RankingCard = (props: Card) => {
  const screens = useBreakpoint();
  const cardWidth = screens.md ? 280 : 140;
  const maxDescriptionLength = screens.md ? 40 : 32;

  return (
    <Link href="../../../profiles/MentorProfile">
      <div>
        {" "}
        <Card
          hoverable
          style={{ width: cardWidth }}
          cover={
            <div>
              <Image
                preview={false}
                alt="example"
                src={props.image}
                height={screens.md ? 260 : 120}
                width={screens.md ? 260 : 120}
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  marginLeft: screens.md ? "10px" : "10px",
                  marginTop: screens.md ? "10px" : "10px",
                }}
              />
              {props.rank <= 3 ? (
                <FaCrown
                  style={{
                    color:
                      props.rank === 1
                        ? "gold"
                        : props.rank === 2
                        ? "silver"
                        : "brown",
                    fontSize: "30px",
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                />
              ) : null}
            </div>
          }
        >
          <div
            style={{
              fontSize: screens.md ? "25px" : "15px",
              color: screens.md ? "#000" : "#000",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
          >
            {props.userNickName}
          </div>
          <div
            style={{
              fontSize: screens.md ? "22px" : "11px",
              color: screens.md ? "#000" : "#000",
              marginBottom: "8px",
            }}
          >
            {`멘토링 ${props.count}`}
          </div>
        </Card>
      </div>
    </Link>
  );
};

export default RankingCard;
