
// src/components/TwitterFeed.js
import React, { useState, useEffect } from "react";
import TwitterLite from "twitter-lite";
import { TwitterTweetEmbed } from "react-twitter-embed";

const TwitterFeed = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      const client = new TwitterLite({
        subdomain: "api",
        version: "2",
        consumer_key: "0XG5299e6oSESyHvLGIMGmwW3",
        consumer_secret: "kh08Sydpo5hYYr0DCY8i7oJRAbxNkI1NKNpdStVi08ICIwBUOW",
        access_token_key: "3097151617-91Ayf0gu7O81oe6ae3quLPX5cxYkf7pZlkNZ09h",
        access_token_secret: "TPnK7IgPW0TB0m9NemXiyKAlZC6rBRpqi56w7sDhVxEgl",
      });

      try {
        const response = await client.get("tweets/search/recent", {
          query: "ReactJS", // Change this to your desired Twitter query
          max_results: 10,
        });

        setTweets(response.data);
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };

    fetchTweets();
    const intervalId = setInterval(fetchTweets, 60000); // Fetch tweets every 60 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {tweets.map((tweet) => (
        <TwitterTweetEmbed key={tweet.id} tweetId={tweet.id} />
      ))}
    </div>
  );
};

export default TwitterFeed;
