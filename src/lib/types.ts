export type User = {
  id: string;
  name: string;
  username: string;
  avatar?: string;
};

export type Tweet = {
  id: string;
  user: User;
  time: string;
  post: string;
  image?: string;
  views: number;
  likes: number;
  shares: number;
  reTweets: number;
};
