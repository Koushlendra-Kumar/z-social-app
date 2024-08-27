import {
  BookmarkBorder,
  CalendarMonth,
  ChatBubbleOutline,
  EmojiEmotions,
  FavoriteBorder,
  GifBox,
  Image,
  LocationOn,
  RepeatRounded,
  ShareRounded,
  SignalCellularAltRounded,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { tweets } from "../db/seed";

import type { Tweet } from "../lib/types";

function Feed() {
  return (
    <div>
      <div className="flex justify-around border-b pt-2">
        <div className="border-b-4 border-blue-500 font-bold">For You</div>
        <div>Following</div>
      </div>
      <TweetBox />
      <div>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
    </div>
  );
}

function TweetBox() {
  return (
    <div className="flex items-center justify-start gap-2 border-b pl-2">
      <div className="self-start pt-4">
        <Avatar sx={{ bgcolor: "#3b82f6" }}>K</Avatar>
      </div>
      <div className="w-full space-y-4">
        <input
          type="text"
          placeholder="What's Happening?!"
          className="w-full bg-slate-50 py-4 text-xl text-slate-800 outline-none"
        />
        <div className="flex justify-between pb-4 pr-16">
          <div className="cursor-pointer space-x-2 pt-2 text-blue-500">
            <Image />
            <GifBox />
            <EmojiEmotions />
            <CalendarMonth />
            <LocationOn />
          </div>
          <button
            className="rounded-3xl bg-blue-300 px-4 py-2 font-semibold text-white"
            disabled
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

function Tweet({
  user,
  time,
  post,
  image,
  views,
  likes,
  shares,
  reTweets,
}: Tweet) {
  return (
    <div className="flex max-w-full flex-col border-b p-4">
      <div className="flex gap-2">
        <Avatar
          sx={{ bgcolor: " #3b82f6" }}
          src={user.avatar}
          alt={user.name}
        />
        <div className="flex items-center gap-2">
          <span className="text-base font-bold tracking-tight">
            {user.name}
          </span>
          <span className="text-xs font-semibold text-gray-500">
            @{user.username}
          </span>
          <span className="text-base font-semibold text-gray-500">{time}</span>
          <button className="ml-3 rounded-3xl border border-slate-900 px-2 py-1 font-semibold hover:bg-slate-900 hover:text-slate-50">
            Follow
          </button>
        </div>
      </div>
      <div className="mt-3 md:ml-12 md:mt-0">
        <div>
          <p>{post}</p>
          {image && (
            <img
              src={image}
              alt=""
              className="mt-4 h-fit rounded-3xl object-cover md:w-4/5"
            />
          )}
        </div>
        <div className="my-4 flex items-center justify-between text-sm text-slate-600">
          <div className="flex cursor-pointer items-center justify-center gap-1 hover:text-blue-500">
            <ChatBubbleOutline />
            <span>{shares}K</span>
          </div>
          <div className="flex cursor-pointer items-center justify-center gap-1 hover:text-green-500">
            <RepeatRounded />
            <span>{reTweets}K</span>
          </div>
          <div className="flex cursor-pointer items-center justify-center gap-1 hover:text-red-500">
            <FavoriteBorder />
            <span>{likes}K</span>
          </div>
          <div className="flex cursor-pointer items-center justify-center gap-1 hover:text-blue-500">
            <SignalCellularAltRounded />
            <span>{views}M</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <BookmarkBorder className="cursor-pointer hover:text-blue-500" />
            <ShareRounded className="cursor-pointer hover:text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
