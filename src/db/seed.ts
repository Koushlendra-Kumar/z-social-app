import image1 from "../assets/images/image (1).jpg";
import image2 from "../assets/images/image (2).jpg";
import image3 from "../assets/images/image (3).jpg";
import image4 from "../assets/images/image (1).png";
import image5 from "../assets/images/image (2).png";
import image6 from "../assets/images/image (4).jpg";
import image7 from "../assets/images/image (5).jpg";
import image8 from "../assets/images/image (6).jpg";

import { Tweet, User } from "../lib/types";

export const users: User[] = [
  {
    id: "1",
    name: "koushal",
    username: "koushal_pro",
    avatar: image4,
  },
  {
    id: "2",
    name: "Sudhir Roy",
    username: "mr_sudhir",
    avatar: image3,
  },
];
export const tweets: Tweet[] = [
  {
    id: "1",
    user: users[0],
    time: "2h",
    post: "Minim nostrud commodo duis tempor dolor eu do anim nisi excepteur aliqua. Laboris magna quis ut incididunt cupidatat do minim. Occaecat enim in eiusmod tempor id ad et laboris dolore mollit.",
    image: image1,
    views: 100,
    likes: 10,
    shares: 5,
    reTweets: 2,
  },
  {
    id: "2",
    user: users[1],
    time: "2h",
    post: "Ea elit aliquip minim elit tempor consectetur velit officia sit ut mollit aliquip id ad. In eu amet irure non est id. Duis id cillum magna incididunt pariatur magna culpa commodo in. Non sint in aliquip id velit nulla velit. Labore sint velit incididunt magna labore non nostrud pariatur.",
    image: image2,
    views: 100,
    likes: 10,
    shares: 5,
    reTweets: 2,
  },
  {
    id: "3",
    user: users[0],
    time: "2h",
    post: "Minim nostrud commodo duis tempor dolor eu do anim nisi excepteur aliqua. Laboris magna quis ut incididunt cupidatat do minim. Occaecat enim in eiusmod tempor id ad et laboris dolore mollit.",
    image: image3,
    views: 100,
    likes: 10,
    shares: 5,
    reTweets: 2,
  },
  {
    id: "4",
    user: users[0],
    time: "2h",
    post: "Minim nostrud commodo duis tempor dolor eu do anim nisi excepteur aliqua. Laboris magna quis ut incididunt cupidatat do minim. Occaecat enim in eiusmod tempor id ad et laboris dolore mollit.",
    image: image4,
    views: 100,
    likes: 10,
    shares: 5,
    reTweets: 2,
  },
  {
    id: "5",
    user: users[0],
    time: "2h",
    post: "Minim nostrud commodo duis tempor dolor eu do anim nisi excepteur aliqua. Laboris magna quis ut incididunt cupidatat do minim. Occaecat enim in eiusmod tempor id ad et laboris dolore mollit.",
    image: image5,
    views: 100,
    likes: 10,
    shares: 5,
    reTweets: 2,
  },
  {
    id: "6",
    user: users[0],
    time: "2h",
    post: "Minim nostrud commodo duis tempor dolor eu do anim nisi excepteur aliqua. Laboris magna quis ut incididunt cupidatat do minim. Occaecat enim in eiusmod tempor id ad et laboris dolore mollit.",
    image: image6,
    views: 100,
    likes: 10,
    shares: 5,
    reTweets: 2,
  },
  {
    id: "7",
    user: users[0],
    time: "2h",
    post: "Minim nostrud commodo duis tempor dolor eu do anim nisi excepteur aliqua. Laboris magna quis ut incididunt cupidatat do minim. Occaecat enim in eiusmod tempor id ad et laboris dolore mollit.",
    image: image7,
    views: 100,
    likes: 10,
    shares: 5,
    reTweets: 2,
  },
  {
    id: "8",
    user: users[0],
    time: "2h",
    post: "Minim nostrud commodo duis tempor dolor eu do anim nisi excepteur aliqua. Laboris magna quis ut incididunt cupidatat do minim. Occaecat enim in eiusmod tempor id ad et laboris dolore mollit.",
    image: image8,
    views: 100,
    likes: 10,
    shares: 5,
    reTweets: 2,
  },
];
