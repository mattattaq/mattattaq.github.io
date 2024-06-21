import React from 'react';
import { Container } from 'react-bootstrap';

export default function Timeline() {
  return (
    // TODO: convert this to a series of objects with a type and sort by date
    <section id="sec4">
      <Container>
        <header>
          <h2>Work Timeline</h2>
        </header>
        <div id="timeline">
          <div className="tl-block">
            <div className="tl-event">
              <div className="event-r">
                <div>
                  <h5><time datatime="2018-09-25">September</time> Developer Panel talk with Free-Code-Camp-Indy</h5>
                  <p>On a panel as a mid-level developer giving tips on several topics. Open question and answering panel.</p>
                </div>
              </div>
            </div>
            <div className="tl-block">
              <div className="tl-event">
                <div className="event-l">
                  <div>
                    <h5><time datatime="2018-03-27">March</time> Started working at Angie's list</h5>
                    <p>Hired in as a Software Engineer II (SEII) focusing on front-end development. Hoping to grow in my role to include backend.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-block">
              <div className="tl-year">
                <div>
                  2018
                </div>
              </div>
            </div>
            <div className="tl-block">
              <div className="tl-event">
                <div className="event-r">
                  <div>
                    <h5><time datatime="2017-10-19">October</time> Started working for Heartland FPG</h5>
                    <p>In charge of email marketing markup in Sales Force Marketing Cloud, converted websites to Wordpress sites hosted through pantheon and version controlled via Lando. Seriously, check out <a href="https://docs.devwithlando.io/tutorials/pantheon.html" target="_new">lando</a>. It imports your database and files so you can use it like git.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-block">
              <div className="tl-event">
                <div className="event-l">
                  <div>
                    <h5><time datatime="2017-10-11">October</time> Finished Schabel-Realty.com</h5>
                    <p>Responsive website redesign for <a href="http://schabel-realty.com/home">Schabel-Realty.com</a> for the Schabel Property Managaement Group.
                      Integrated IDX (Internet Data Exhange) to show housing listings with the website, designed logo, new business card design, and colorized a
                      black & white photo to display on the main page.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-block">
              <div className="tl-event">
                <div className="event-r">
                  <div>
                    <h5><time datatime="2017-03-01">March</time> Redesigned SilverDoorSpa.com</h5>
                    <p>Responsive website redesign for <a href="http://silverdoorspa.com/">Silver Door Spa</a> a spa based out of Carmel, IN. Integrated with service to help clients schedule appointments.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-block">
              <div className="tl-year">
                <div>
                  2017
                </div>
              </div>
            </div>
            <div className="tl-block">
              <div className="tl-event">
                <div className="event-l">
                  <div>
                    <h5><time datatime="2016-11-20">November</time> Started working for Rook Security</h5>
                    <p>Started as their Front End Developer helping crystalize designs and update styles on an in-house SOC supplemental security threat application.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tl-block">
              <div className="tl-event">
                <div className="event-r">
                  <div>
                    <h5><time datatime="2016-11-13">November</time> Contributed to Open Source Project</h5>
                    <p>Contributed to the <a href="http://scout-app.io/dashboard/">Scout.io app</a> open source project. Used a js library and consumed API data to update donut charts displaying the number of downloads based on operating systems through different versions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tl-block">
              <div className="tl-event">
                <div className="event-l">
                  <div>
                    <h5><time datatime="2016-10-05">October</time> Became a Team Leader</h5>
                    <p>Became the Team Leader of the Developers and Designers in the FreeCodeCamp Indy Meetup. The idea is to make a website to gather our campers. Check out our progress <a href="https://github.com/Free-Code-Camp-Indy/free-code-camp-indy.github.io">here</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tl-block">
              <div className="tl-event">
                <div className="event-r">
                  <div>
                    <h5><time datatime="2016-08-05">August</time> Started a blog</h5>
                    <p>Started a <a href="https://mattattaqdevblog.wordpress.com/">developer blog</a> as the result of a FreeCodeCamp meetup.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tl-block">
              <div className="tl-event">
                <div className="event-l">
                  <div>
                    <h5><time datatime="2016-11-05">June</time> Joined INDY.js and Node.js</h5>
                    <p>Found out about local meetups in indianapolis.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tl-block">
              <div className="tl-event">
                <div className="event-r">
                  <div>
                    <h5><time datatime="2016-11-05">July</time> Started FreeCodeCamp</h5>
                    <p>At Indy.js I learned about freecodecamp to learn front end skills.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-block">
              <div className="tl-event">
                <div className="event-l">
                  <div>
                    <h5><time datatime="2014-11-05">April</time> Exhibited at INDYpendent Self-Publisher's Show</h5>
                    <p>Helped local artists actualize their ideas and sold my new comic It's All Downhill From Here.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-block">
              <div className="tl-year">
                <div>
                  2016
                </div>
              </div>
            </div>
            <div className="tl-block">
              <div className="tl-event">
                <div className="event-r">
                  <div>
                    <h5><time datatime="2014-11-05">November</time> Exhibited at INDYpendent Self-Publisher's Show</h5>
                    <p>Helped local artists actualize their ideas and sold my new comic It's All Downhill From Here.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-block">
              <div className="tl-event">
                <div className="event-l">
                  <div>
                    <h5><time datatime="2016-11-05">June</time> Exhibited at Indy Pop Con </h5>
                    <p>Sold my illustrations, graphic novel, and attended panels.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-block">
              <div className="tl-event">
                <div className="event-r">
                  <div>
                    <h5><time datatime="2015-11-05">May</time> Graduated IUPUI</h5>
                    <p>Graduated with a Bachelor's in Informatics.</p>
                  </div>
                </div>
              </div>
              <div className="tl-block">
                <div className="tl-event">
                  <div className="event-l">
                    <div>
                      <h5><time datatime="2015-11-05">April</time> Started working at Trivas Consulting</h5>
                      <p>Hired as Computer Programmer and Graphic Design Specialist.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-block">
              <div className="tl-event">
                <div className="event-r">
                  <div>
                    <h5><time datatime="2015-03-15">March</time> Exhibited at Indiana Comic Con </h5>
                    <p>Sold my illustrations, graphic novel, and attended panels.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-block">
              <div className="tl-year">
                <div>
                  2015
                </div>
              </div>
            </div>

            <div className="tl-block">
              <div className="tl-event">
                <div className="event-l">
                  <div>
                    <h5><time datatime="2015-11-05">December</time> First public showing of R&tR</h5>
                    <p>At a local convention called INDYpendent Self-publisher's show, participated in panels on self-publishing, giving and taking critique, and character creation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-block">
              <div className="tl-event">
                <div className="event-r">
                  <div>
                    <h5><time datatime="2015-11-05">December</time> Published Reggie and the Rabbit</h5>
                    <p>After the success of the indiegogo I was able to publish my comic through both Holon Publishing and Brinkman Printers.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-block">
              <div className="tl-event">
                <div className="event-l">
                  <div>
                    <h5><time datatime="2015-11-05">November</time> Finished Reggie and the Rabbit</h5>
                    <p>Finished R&tR and self published. Was approached by Holon Publishing, an artist collective and publishing house out of Bloomington.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-block">
              <div className="tl-event">
                <div className="event-r">
                  <div>
                    <h5><time datatime="2015-11-05">November</time> Joined Holon Publishing as author and illustrator</h5>
                    <p>Joined Holon Publishing and entered publishing deal to distribute R&tR.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tl-block">
              <div className="tl-event">
                <div className="event-l">
                  <div>
                    <h5><time datatime="2015-05-05">September</time> Started senior project Reggie and the Rabbit</h5>
                    <p>Set out to create, illustrate, write, and publish my own comic book. Links above in projects.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-block">
              <div className="tl-event">
                <div className="event-r">
                  <div>
                    <h5><time datatime="2015-05-05">September</time> Started Reggie and the Rabbit Indiegogo</h5>
                    <p>Ran a succcessful indiegogo campaign to help fund publication.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-block">
              <div className="tl-event">
                <div className="event-l">
                  <div>
                    <h5><time datatime="2015-05-05">September</time> Started Mattattaq.com</h5>
                    <p>Created my own comic based on wordpress to display my comic and maintained weekly page releases.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tl-block">
              <div className="tl-event">
                <div className="event-r">
                  <div>
                    <h5><time datatime="2014--05">June</time> Volunteered at Indy Pop Con</h5>
                    <p>Helped run photo booths, managed lines, and helped give guests directions and water if needed.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tl-block">
              <div className="tl-event">
                <div className="event-l">
                  <div>
                    <h5><time datatime="2014--05">April</time> Volunteered at Indiana Comic Con</h5>
                    <p>Managed lines, helped with celebrity signings, and helped give guests directions and water if needed.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tl-block">
              <div className="tl-year">
                <div>
                  2014
                </div>
              </div>
            </div>

            <div className="tl-block">
              <div className="tl-event">
                <div className="event-r">
                  <div>
                    <h5><time datatime="2010-05-05">January</time>Started College</h5>
                    <p>Started at Indiana University - Purdue University Indianapolis(IUPUI) on New Media</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-block">
              <div className="tl-year">
                <div>
                  2010
                </div>
              </div>
            </div>
            <div className="tl-block">
              <div className="tl-event">
                <div className="event-l">
                  <div>
                    <h5><time datatime="2006-05-05">May 05</time>Graduated High School</h5>
                    <p>Gratuated 2006 from James Madison High School</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-block">
              <div className="tl-year">
                <div>
                  2006
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
