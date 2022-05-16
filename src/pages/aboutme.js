import React from "react";

export default function AboutMe() {
  return (
    <div>
      {/* About Me Section */}
      <section id="about-me">
        <div className="section-title">
          <h1>About Me</h1>
        </div>
        <div className="section-content box-column">
            <div className="picture">
                <img src="./img/avatar.jpg" alt="Jace Burgess" />
            </div>
          <p>
            Hey my name is Jace Burgess. I am currently enrolled in Coding
            Bootcamp to become a full stack developer. My day job is working on
            heavy equipment although I don't plan on doing that long term which
            is why I'm going through coding bootcamp! I have always been
            interested in computers and technology. I can't wait to keep
            learning more coding languages and how to be a better full stack
            developer. I am excited to learn more about technology in general
            and to be able to expand my knowledge.
          </p>
        </div>
      </section>
    </div>
  );
}
