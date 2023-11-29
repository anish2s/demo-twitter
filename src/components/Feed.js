import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweetsAsync } from '../features/twitterSlice';

function Feed() {
  const dispatch = useDispatch();
  const { tweets, loading, error } = useSelector((state) => state.twitter);

  console.log(tweets);

  useEffect(() => {
    dispatch(fetchTweetsAsync("933354946111705097"));
  }, [dispatch]);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }


  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />  

      <Post
        // displayName, userName, verified, text, image, avatar
        displayName="Anish Kumar"
        userName="anish"
        verified={true}
        text=" Twitter has a tool which creates embedded widgets, however they don't work out of the box in JSX (React)."
        avatar="https://source.unsplash.com/3tYZjGSBwbk"
        image="https://giphy.com/gifs/kim-novak-tXL4FHPSnVJ0A"
      />

      <Post
        // displayName, userName, verified, text, image, avatar
        displayName="Anish Kumar"
        userName="anish"
        verified={true}
        text="let the trolling begin!"
        avatar="https://source.unsplash.com/3tYZjGSBwbk"
        image="https://media.giphy.com/media/Ze4BXdrjDjygM9Piq0/giphy.gif"
      />
    </div>
  );
}
export default Feed;
