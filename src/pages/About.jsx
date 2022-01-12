import React from "react";
import AboutImage from "../assets/photo.jpeg";
import "../styles/About.css"

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>

      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          at illum odio reiciendis praesentium. Accusamus omnis aut quod.
          Doloribus, distinctio. Cumque necessitatibus obcaecati itaque nesciunt
          saepe dignissimos, eos fugit nulla! Autem, dolor dolorem. Quas
          molestiae architecto amet vitae consequatur? Placeat reprehenderit
          adipisci quod tenetur doloremque dicta sapiente laudantium non
          similique? Adipisci, tempora eaque vero ducimus sunt totam mollitia
          sapiente! Laudantium? Amet, dolor beatae mollitia quisquam quam
          ratione modi. Maiores reiciendis ab, aut est sunt debitis beatae
          placeat, ipsam, dicta sit sapiente excepturi repellat accusamus
          nostrum doloribus delectus aperiam necessitatibus mollitia! Aspernatur
          neque vero corporis. Recusandae consequatur doloremque aperiam a,
          totam voluptatibus quis architecto odio hic porro aliquam molestiae
          perspiciatis itaque quas quam natus veritatis, inventore laborum
          tenetur et sequi iste.
        </p>
      </div>
    </div>
  );
}

export default About;
