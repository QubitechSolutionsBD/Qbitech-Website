import React from "react";
//img import
import cover from "../../assets/banner-image-2.jpg";
import LiveEvent from "./LiveEvent";
//svg import

const LiveEvents = () => {
  const events = [
    {
      cover: cover,
      title: "How we Helped a Spaning Fashion Brand With EPR Implementation",
      techs: ["AI", "IT", "Soft Dev", "AI", "IT", "Soft Dev", "AI"],
      details:
        "We have delivered successful ERP implementation to various enterprises around the world. This blog is about our work with a fashion brand from Spain.",
    },
    {
      cover: cover,
      title: "How we Helped a Spaning Fashion Brand With EPR Implementation",
      techs: ["AI", "IT", "Soft Dev", "AI", "IT", "Soft Dev", "AI"],
      details:
        "We have delivered successful ERP implementation to various enterprises around the world. This blog is about our work with a fashion brand from Spain.",
    },
    {
      cover: cover,
      title: "How we Helped a Spaning Fashion Brand With EPR Implementation",
      techs: ["AI", "IT", "Soft Dev", "AI", "IT", "Soft Dev", "AI"],
      details:
        "We have delivered successful ERP implementation to various enterprises around the world. This blog is about our work with a fashion brand from Spain.",
    },
    {
      cover: cover,
      title: "How we Helped a Spaning Fashion Brand With EPR Implementation",
      techs: ["AI", "IT", "Soft Dev", "AI", "IT", "Soft Dev", "AI"],
      details:
        "We have delivered successful ERP implementation to various enterprises around the world. This blog is about our work with a fashion brand from Spain.",
    },
    {
      cover: cover,
      title: "How we Helped a Spaning Fashion Brand With EPR Implementation",
      techs: ["AI", "IT", "Soft Dev", "AI", "IT", "Soft Dev", "AI"],
      details:
        "We have delivered successful ERP implementation to various enterprises around the world. This blog is about our work with a fashion brand from Spain.",
    },
    {
      cover: cover,
      title: "How we Helped a Spaning Fashion Brand With EPR Implementation",
      techs: ["AI", "IT", "Soft Dev", "AI", "IT", "Soft Dev", "AI"],
      details:
        "We have delivered successful ERP implementation to various enterprises around the world. This blog is about our work with a fashion brand from Spain.",
    },
    {
      cover: cover,
      title: "How we Helped a Spaning Fashion Brand With EPR Implementation",
      techs: ["AI", "IT", "Soft Dev", "AI", "IT", "Soft Dev", "AI"],
      details:
        "We have delivered successful ERP implementation to various enterprises around the world. This blog is about our work with a fashion brand from Spain.",
    },
    {
      cover: cover,
      title: "How we Helped a Spaning Fashion Brand With EPR Implementation",
      techs: ["AI", "IT", "Soft Dev", "AI", "IT", "Soft Dev", "AI"],
      details:
        "We have delivered successful ERP implementation to various enterprises around the world. This blog is about our work with a fashion brand from Spain.",
    },
    {
      cover: cover,
      title: "How we Helped a Spaning Fashion Brand With EPR Implementation",
      techs: ["AI", "IT", "Soft Dev", "AI", "IT", "Soft Dev", "AI"],
      details:
        "We have delivered successful ERP implementation to various enterprises around the world. This blog is about our work with a fashion brand from Spain.",
    },
    {
      cover: cover,
      title: "How we Helped a Spaning Fashion Brand With EPR Implementation",
      techs: ["AI", "IT", "Soft Dev", "AI", "IT", "Soft Dev", "AI"],
      details:
        "We have delivered successful ERP implementation to various enterprises around the world. This blog is about our work with a fashion brand from Spain.",
    },
    {
      cover: cover,
      title: "How we Helped a Spaning Fashion Brand With EPR Implementation",
      techs: ["AI", "IT", "Soft Dev", "AI", "IT", "Soft Dev", "AI"],
      details:
        "We have delivered successful ERP implementation to various enterprises around the world. This blog is about our work with a fashion brand from Spain.",
    },
    {
      cover: cover,
      title: "How we Helped a Spaning Fashion Brand With EPR Implementation",
      techs: ["AI", "IT", "Soft Dev", "AI", "IT", "Soft Dev", "AI"],
      details:
        "We have delivered successful ERP implementation to various enterprises around the world. This blog is about our work with a fashion brand from Spain.",
    },
  ];
  return (
    <div className="blog__liveEvents">
      {events.map((data) => (
        <LiveEvent data={data} />
      ))}
    </div>
  );
};

export default LiveEvents;
