import work_2 from "../assets/work-2.png";
import work_5 from "../assets/work-5.png";
import work_1 from "../assets/work-1.png";
import work_3 from "../assets/work-3.png";
import work_6 from "../assets/work-6.png";
import work_7 from "../assets/work-7.png";
import work_8 from "../assets/work-8.png";

export const Portfolio = () => {
  return (
    <section className="section" id="portfolio">
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitle">Most recent work</span>

      <div className="portfolio_container">
        <div className="container">
          {/* ================ PROJECT 1 ================ */}
          <div className="portfolio_project-first">
            <div className="portfolio_project-container">
              <div className="portfolio_project-description">
                <h1>Cou Cou</h1>
                <span>Front-end Developer • UI Designer </span>
                <p>
                  Welcome to "Cou Cou" – your stylish online clothing shop!
                  Powered by React and Tailwind frameworks, we bring you an
                  innovative shopping experience. Explore our curated collection
                  of trendy fashion, carefully crafted to keep you ahead of the
                  fashion curve. With our sleek interface and secure
                  transactions, shopping at "Cou Cou" is effortless.
                </p>
                <div className="portfolio_project-links">
                  <div>
                    <a
                      href="https://cou-cou.pages.dev/"
                      className="button--flex button--small button--link portfolio_button-view"
                    >
                      View More
                      <i className="uil uil-arrow-right button_icon" />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/polinamen132132/Cou-Cou"
                      className="button--flex button--small button--link portfolio_button-view"
                    >
                      Code
                      <i className="uil uil-github button_icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="portfolio_project-img">
                <img src={work_7} style={{ width: "396px", height: "338px" }} />
              </div>
            </div>
          </div>

          {/* ================ PROJECT 2 ================ */}
          <div className="portfolio_project-first">
            <div className="portfolio_project-container">
              <div className="portfolio_project-description">
                <h1>Finsecure</h1>
                <span> UI Designer </span>
                <p>
                  Finsecure is a robust banking app that provides a secure and
                  convenient way to manage your finances. With Finsecure, you
                  can easily access your accounts, make transactions, and stay
                  on top of your financial goals.
                </p>
              </div>
              <div className="portfolio_project-img">
                <img src={work_2} style={{ width: "396px", height: "338px" }} />
              </div>
            </div>
          </div>

          {/* ================ PROJECT 3 ================ */}
          <div className="portfolio_project-second">
            <div className="portfolio_project-container">
              <div className="portfolio_project-description">
                <h1>YouTube Grabber</h1>
                <span>Back-end Developer</span>
                <p>
                  YouTube Grabber is a Telegram bot built with Python, enabling
                  easy downloads of YouTube videos directly to your device. Just
                  send a video link, and receive a link to download a file.
                  Ideal for both mobile and desktop users.
                </p>
                <div className="portfolio_project-links">
                  <div>
                    <a
                      href="https://t.me/YTGrabberBot_bot"
                      className="button--flex button--small button--link portfolio_button-view"
                    >
                      View More
                      <i className="uil uil-arrow-right button_icon" />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/polinamen132132/YTGrabberBot"
                      className="button--flex button--small button--link portfolio_button-view"
                    >
                      Code
                      <i className="uil uil-github button_icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="portfolio_project-img">
                <img src={work_8} style={{ width: "159px", height: "340px" }} />
              </div>
            </div>
          </div>

          {/* ================ PROJECT 3 ================
          <div className="portfolio_project-second">
            <div className="portfolio_project-container">
              <div className="portfolio_project-description">
                <h1>Visio Scan</h1>
                <span>Back-end Developer</span>
                <p>
                  Visio Scan is an intelligent AI bot on Telegram. It uses
                  Python to analyze user-sent images, recognizing text, objects,
                  and patterns. Simply send an image to it, and it will provide
                  you with analysis and insights.
                </p>
                <div className="portfolio_project-links">
                  <div>
                    <a
                      href="https://t.me/ChatChipan_bot"
                      className="button--flex button--small button--link portfolio_button-view"
                    >
                      View More
                      <i className="uil uil-arrow-right button_icon" />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/polinamen132132/Visio-Scan"
                      className="button--flex button--small button--link portfolio_button-view"
                    >
                      Code
                      <i className="uil uil-github button_icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="portfolio_project-img">
                <img src={work_6} style={{ width: "159px", height: "340px" }} />
              </div>
            </div>
          </div> */}

          {/* ================ PROJECT 4================ */}
          <div className="portfolio_project-second">
            <div className="portfolio_project-container">
              <div className="portfolio_project-description">
                <h1>YumDrop</h1>
                <span>UI Designer </span>
                <p>
                  YumDrop makes it easy to order delicious meals from your
                  favorite local restaurants. With a user-friendly interface and
                  lightning-fast delivery service, YumDrop ensures a hassle-free
                  experience, bringing delectable dishes straight to your
                  doorstep.
                </p>
              </div>
              <div className="portfolio_project-img">
                <img src={work_1} style={{ width: "415px", height: "366px" }} />
              </div>
            </div>
          </div>

          {/* ================ PROJECT 5 ================ */}
          <div className="portfolio_project-first">
            <div className="portfolio_project-container">
              <div className="portfolio_project-description">
                <h1>Birthday Beacon</h1>
                <span>Back-end Developer</span>
                <p>
                  Birthday Beacon is a Python bot for Telegram. Store important
                  dates, like birthdays, of friends and family, and get timely
                  reminders. Don't miss celebrating special moments with loved
                  ones.
                </p>
                <div className="portfolio_project-links">
                  <div>
                    <a
                      href="https://t.me/Birthday_Beacon_bot"
                      className="button--flex button--small button--link portfolio_button-view"
                    >
                      View More
                      <i className="uil uil-arrow-right button_icon" />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/polinamen132132/Birthday-Beacon"
                      className="button--flex button--small button--link portfolio_button-view"
                    >
                      Code
                      <i className="uil uil-github button_icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="portfolio_project-img">
                <img src={work_5} style={{ width: "159px", height: "340px" }} />
              </div>
            </div>
          </div>
          {/* ================ PROJECT 6 ================ */}
          <div className="portfolio_project-third">
            <div className="portfolio_project-container">
              <div className="portfolio_project-description">
                <h1>StyleHub</h1>
                <span>UI Designer </span>
                <p>
                  StyleHub is a stylish clothing app that combines fashion
                  inspiration with effortless shopping. With StyleHub, you can
                  explore the latest trends, create your dream outfits, and
                  conveniently order clothes from the comfort of your own home.
                </p>
              </div>
              <div className="portfolio_project-img">
                <img src={work_3} style={{ width: "290px", height: "429px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
