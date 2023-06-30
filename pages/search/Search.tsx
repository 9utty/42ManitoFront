import AppLayout from "../global/components/AppLayout";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { mockUsers } from "../test/mockUsers";
import MentorCard from "../global/components/MentorCard";
import { Row, Col, Spin, Divider } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

interface User {
  uId: number;
  Image: string;
  NickName: string;
  Description: string;
  isStudy: boolean;
  hashtag: string[];
}

const Search = () => {
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMoreResults, setHasMoreResults] = useState(true);
  const [offset, setOffset] = useState(0);
  const limit = 12;

  const { query } = useRouter().query;
  const queryStr = String(query);

  useEffect(() => {
    setOffset(0);
    setHasMoreResults(true);
  }, [queryStr]);

  useEffect(() => {
    setLoading(true);
    const filteredResults = mockUsers.filter((user) => {
      const { NickName, Description, hashtag } = user;
      return (
        NickName.includes(queryStr) ||
        Description.includes(queryStr) ||
        hashtag.includes(queryStr)
      );
    });
    setSearchResults(filteredResults.slice(0, limit));
    setOffset(limit);
    setLoading(false);
  }, [queryStr, limit]);

  const fetchMoreData = () => {
    // TODO : APIServer 요청
    if (!hasMoreResults) {
      return;
    }
    setLoading(true);
    const filteredResults = mockUsers.filter((user) => {
      const { NickName, Description, hashtag } = user;
      return (
        NickName.includes(queryStr) ||
        Description.includes(queryStr) ||
        hashtag.includes(queryStr)
      );
    });
    const nextResults = filteredResults.slice(offset, offset + limit);
    if (nextResults.length < limit) {
      setHasMoreResults(false);
    }
    setSearchResults([...searchResults, ...nextResults]);
    setOffset(offset + limit);
    setLoading(false);
  };

  return (
    <AppLayout>
      {loading ? (
        <Spin />
      ) : (
        <>
          <div
            style={{
              color: "#000",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              fontSize: "20px",
            }}
          >
            검색어: {query}
          </div>
          <Divider />

          {hasMoreResults && (
            <div
              style={{
                textAlign: "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              {loading ? <Spin /> : null}
            </div>
          )}
          <InfiniteScroll
            dataLength={searchResults.length}
            next={fetchMoreData}
            hasMore={hasMoreResults}
            loader={
              <div
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                {loading ? <Spin /> : null}
              </div>
            }
          >
            <Row gutter={[16, 16]}>
              {searchResults.length > 0 ? (
                searchResults.map((user) => (
                  <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={8}
                    xxl={6}
                    key={user.uId}
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
                        key={user.uId}
                        image={user.Image}
                        description={user.Description}
                        userNickName={user.NickName}
                        hashtag={user.hashtag}
                      />
                    </div>
                  </Col>
                ))
              ) : (
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#000",
                    paddingLeft: "10px",
                  }}
                >
                  {query} : 검색결과를 찾을 수 없습니다.
                </div>
              )}
            </Row>
          </InfiniteScroll>
        </>
      )}
    </AppLayout>
  );
};

export default Search;
