interface user {
  uId: number;
  Image: string;
  NickName: string;
  Description: string;
  isStudy: boolean; // false도 생길 수 있음
  hashtag: string[]; // 최대 2개
}

export const mockUsers: user[] = [
  {
    uId: 1,
    Image: "https://i.pravatar.cc/150?img=1",
    NickName: "Alice",
    Description: "안녕하세요. 저는 개발자입니다.",
    isStudy: true,
    hashtag: ["React", "JavaScript"],
  },
  {
    uId: 2,
    Image: "https://i.pravatar.cc/150?img=2",
    NickName: "Bob",
    Description: "반갑습니다. 저는 디자이너입니다.",
    isStudy: false,
    hashtag: ["UI/UX", "프로토타이핑"],
  },
  {
    uId: 3,
    Image: "https://i.pravatar.cc/150?img=3",
    NickName: "Charlie",
    Description: "안녕하세요. 저는 개발자입니다.",
    isStudy: false,
    hashtag: ["React", "TypeScript"],
  },
  {
    uId: 4,
    Image: "https://i.pravatar.cc/150?img=4",
    NickName: "David",
    Description: "반갑습니다. 저는 디자이너입니다.",
    isStudy: true,
    hashtag: ["그래픽디자인", "포토샵"],
  },
  {
    uId: 5,
    Image: "https://i.pravatar.cc/150?img=5",
    NickName: "Emily",
    Description: "안녕하세요. 저는 개발자입니다.",
    isStudy: true,
    hashtag: ["Node.js", "MongoDB"],
  },
  {
    uId: 6,
    Image: "https://i.pravatar.cc/150?img=6",
    NickName: "Frank",
    Description: "반갑습니다. 저는 디자이너입니다.",
    isStudy: false,
    hashtag: ["웹디자인", "그리드"],
  },
  {
    uId: 7,
    Image: "https://i.pravatar.cc/150?img=7",
    NickName: "Grace",
    Description: "안녕하세요. 저는 개발자입니다.",
    isStudy: false,
    hashtag: ["Angular", "RxJS"],
  },
  {
    uId: 8,
    Image: "https://i.pravatar.cc/150?img=8",
    NickName: "Henry",
    Description: "반갑습니다. 저는 디자이너입니다.",
    isStudy: false,
    hashtag: ["일러스트", "스케치"],
  },
  {
    uId: 9,
    Image: "https://i.pravatar.cc/150?img=9",
    NickName: "Isabella",
    Description: "안녕하세요. 저는 개발자입니다.",
    isStudy: true,
    hashtag: ["Vue.js", "Vuex"],
  },
  {
    uId: 10,
    Image: "https://i.pravatar.cc/150?img=10",
    NickName: "Jack",
    Description: "반갑습니다. 저는 디자이너입니다.",
    isStudy: true,
    hashtag: ["디자인시스템", "스타일가이드"],
  },
  {
    uId: 11,
    Image: "https://i.pravatar.cc/150?img=11",
    NickName: "Hack",
    Description: "반갑습니다. 저는 디자이너입니다.",
    isStudy: true,
    hashtag: ["디자인시스템", "스타일가이드"],
  },
  {
    uId: 12,
    Image: "https://i.pravatar.cc/150?img=12",
    NickName: "gulee",
    Description: "반갑습니다. 저는 디자이너입니다.",
    isStudy: true,
    hashtag: ["디자인시스템", "스타일가이드"],
  },
  {
    uId: 13,
    Image: "https://i.pravatar.cc/150?img=13",
    NickName: "asdf",
    Description: "반갑습니다. 저는 디자이너입니다.",
    isStudy: true,
    hashtag: ["디자인시스템", "스타일가이드"],
  },
];
