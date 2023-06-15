import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div>
        {/* header section starts  */}
        <header className="header">
          <a href="https://64893a1e56f52656df5f3b48--glittering-hamster-af20a4.netlify.app/" className="logo">
            <img src={require('./assets/images/juke-logo.png')} />
          </a>
        </header>
        {/* header section ends */}
        {/* home section starts  */}
        <section className="home" id="home">
        </section>
        {/* home section ends */}
        {/* about section starts  */}
        <section className="about" id="about">
          <h1 className="heading"> <span>The Purpose</span> Of The Project</h1>
          <div className="row">
            <div className="image">
              <img src={require('./assets/images/Brandy.jpg')} />
            </div>
            <div className="content">
              <h3>what  makes our App special?</h3>
              <p>Juke is a Music Application with an AI-powered Recommendation System driven by the state-of-the-art LLM(large language model) ChatGpt, where users can explore and discover music that matches their taste.
                Juke was created for music listeners who want to explore and discover related content that fits their tastes. It is designed to provide personalized music recommendations that are tailored to each user's
                individual preferences and can help users find new music that they might not have discovered on their own, its main goal is to help users discover new music and provide an engaging listening experience.
              </p>
              <p>My personal focus was to create a user-friendly UI and ensure that the backend correspond with the frontend</p>
            </div>
          </div>
          <h1 className="heading"> <span>About</span> ME </h1>
          <div className="row">
            <div className="image">
              <img src={require('./assets/images/annah.png')} />
            </div>
            <div className="content">
              <h3>Why I chose to work on this Project?</h3>
              <p>As one of the developers behind Juke, I chose to work on this project because it combines my passion for music and my love for technology. Music has always been a significant part of my life,
                and I find immense joy in singing and listening to various genres and artists.
              </p>
              <p>Creating a music app like Juke was a natural choice for me as it allows me to blend my technical skills with my love for music. I wanted to contribute to a platform that not only provides a seamless music
                streaming experience but also helps users discover new music, connect with others, and enhance their overall musical journey.</p>
              <p>Designing a music app has been a long-held ambition of mine. I've always been fascinated by the power of music to evoke emotions, create memories, and bring people together.
                By working on Juke, gave me the opportunity to shape an app that not only satisfies my own musical cravings but also will brings the same joy and excitement to its users worldwide.</p>
            </div>
          </div>
          <h1 className="heading"> <span>Project</span> Accomplishments </h1>
          <div className="row">
            <div className="image">
              <img src={require('./assets/images/Juke MVP.png')} />
            </div>
            <div className="content">
              <h3>Accomplishments</h3>
              <p>Working on the Juke music app has been an incredible accomplishment for me. Here's a summary of the technologies we used and the features we completed:
                Technologies Used:
                For the frontend, we chose to use HTML5, CSS3, and JavaScript without any additional frameworks. We made this choice because we wanted to solidify our understanding of JavaScript and have complete control over the app's UI/UX design.
                We focused on creating a responsive and intuitive user interface, ensuring that users can seamlessly navigate and interact with Juke across different devices.
                On the backend, we implemented a RESTful API using Python and Django. Django's robust framework provided us with powerful tools and libraries to handle user authentication, database management, and data retrieval efficiently.
                We utilized PostgreSQL as our database system, ensuring scalability and reliability for handling large amounts of music-related data.</p>
              <p>Overview of Completed Features:
                Personalized Recommendations: We successfully implemented a recommendation system that analyzes users' listening patterns, preferences, and global trends to suggest personalized song and artist recommendations. This feature enhances the music discovery experience,
                helping users find new tracks that align with their unique taste.</p>
              <p>Collaborative Playlist Creation: Users can create and share playlists with their friends, family, or other Juke users. Collaborative playlists allow multiple users to contribute their favorite songs, creating a diverse and engaging musical collection.
                This feature promotes social interaction within the Juke community and fosters a sense of music exploration and collaboration.</p>
            </div>
          </div>
          <h1 className="heading"> <span>Project</span> Challenges</h1>
          <div className="row">
            <div className="image">
              <img src={require('./assets/images/challenges.jpg')} />
            </div>
            <div className="content">
              <h3>not an easy journey</h3>
              <p>The Challenge of Remote Collaboration:
                One of the biggest hurdles we faced was coordinating our efforts across different time zones and cultural backgrounds. Effective communication became paramount, and we quickly learned the importance of setting up regular calls,
                using collaborative tools like Slack and Trello, and establishing clear channels for sharing progress and updates. Over time, we developed a rhythm and found ways to bridge the physical distance, fostering a sense of unity and shared purpose.
              </p>
              <p>Understanding User Needs:
                To create a successful music app, we had to gain a deep understanding of the target audience's needs and preferences. Conducting thorough market research, analyzing user feedback, and engaging with music enthusiasts helped us shape Juke's features and design.
                We learned the importance of empathizing with users, refining our ideas based on their input, and constantly iterating to create a user-friendly and intuitive interface.</p>
            </div>
          </div>
          <h1 className="heading"> <span>learning</span> journey </h1>
          <div className="row">
            <div className="image">
              <img src={require('./assets/images/lesson.jpg')} />
            </div>
            <div className="content">
              <h3>What have I Learned?</h3>
              <p>Technical Takeaways:
                Developing Juke provided us with valuable technical takeaways that enhanced our engineering skills. We gained expertise in integrating APIs for music streaming services, understanding data structures for efficient storage and retrieval of music metadata,
                and implementing real-time updates for a seamless user experience. Additionally, we learned about the intricacies of audio playback and how to optimize the app's performance while ensuring a high-quality audio output.
                These technical skills have broadened our understanding of mobile app development and equipped us with a solid foundation for future projects.</p>
              <p>What We Might Do Differently:
                Reflecting on our journey with Juke, there are several aspects we would approach differently if given the chance. Firstly, we would have focused more on creating a robust testing framework from the early stages to minimize the occurrence of bugs and ensure a
                smoother user experience. Additionally, we would have dedicated more time to conduct extensive user testing and gather feedback throughout the development process, allowing us to address any usability issues or feature requests in a more timely manner. Lastly,
                we would have explored different monetization models and strategies to sustain the app's growth and provide additional value to our users.</p>
            </div>
          </div>
        </section>
        {/* about section ends */}
        {/* contact section starts  */}
        <section className="contact" id="contact">
          <div className="row">
            <form action>
              <h3>get in touch</h3>
              <div className="inputBox">
                <span className="fas fa-user" />
                <input type="text" placeholder="name" />
              </div>
              <div className="inputBox">
                <span className="fas fa-envelope" />
                <input type="email" placeholder="email" />
              </div>
              <div className="inputBox">
                <span className="fas fa-phone" />
                <input type="number" placeholder="number" />
              </div>
              <input type="submit" defaultValue="contact now" className="btn" />
            </form>
          </div>
        </section>
        {/* contact section ends */}
        {/* footer section starts  */}
        <section className="footer">
          <div className="share">
            <a href="https://www.linkedin.com/in/annah-nokutheza-mwanza-0266a9270/" className="fab fa-linkedin" />
            <a href="https://twitter.com/AnnahNMwanza" className="fab fa-twitter" />
            <a href="https://github.com/AnnahNokutheza" className="fab fa-github" />
          </div>
          <div className="credit">created by <span><a href>Annah Nokutheza Mwanza</a></span> | 2023 all rights reserved</div>
        </section>
        {/* footer section ends */}
        {/* custom js file link  */}
      </div>
  );
}

export default App;
