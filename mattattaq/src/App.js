import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './myjs.js';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import FeaturedProjects from './components/featuredProjects/FeaturedProjects';

function App() {
  return (
    <div className="App" id="wrapper">
      <Header />
      <Profile />
      <FeaturedProjects />
        {/* 
        <section id="sec4">
          <div class="container">
            <header>
            <h1>Work Timeline</h1>
            </header>
            <div id="timeline">
              <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-r">
                      <div>
                        <h3><time datatime="2018-09-25">September</time> Developer Panel talk with Free-Code-Camp-Indy</h3>
                          <p>On a panel as a mid-level developer giving tips on several topics. Open question and answering panel.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-l">
                      <div>
                        <h3><time datatime="2018-03-27">March</time> Started working at Angie's list</h3>
                          <p>Hired in as a Software Engineer II (SEII) focusing on front-end development. Hoping to grow in my role to include backend.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-r">
                      <div>
                        <h3><time datatime="2017-10-19">October</time> Started working for Heartland FPG</h3>
                        <p>In charge of email marketing markup in Sales Force Marketing Cloud, converted websites to Wordpress sites hosted through pantheon and version controlled via Lando. Seriously, check out <a href="https://docs.devwithlando.io/tutorials/pantheon.html" target="_new">lando</a>. It imports your database and files so you can use it like git.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-l">
                      <div>
                        <h3><time datatime="2017-10-11">October</time> Finished Schabel-Realty.com</h3>
                        <p>Responsive website redesign for <a href="http://schabel-realty.com/home">Schabel-Realty.com</a> for the Schabel Property Managaement Group.
                          Integrated IDX (Internet Data Exhange) to show housing listings with the website, designed logo, new business card design, and colorized a
                          black & white photo to display on the main page.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-r">
                      <div>
                        <h3><time datatime="2017-03-01">March</time> Redesigned SilverDoorSpa.com</h3>
                        <p>Responsive website redesign for <a href="http://silverdoorspa.com/">Silver Door Spa</a> a spa based out of Carmel, IN. Integrated with service to help clients schedule appointments.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
                <div class="tl-block">
                  <div class="tl-year">
                    <div>
                      2017
                    </div> <!-- year -->
                  </div> <!-- end tl-year -->
                </div> <!-- end tl-block -->
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-l">
                      <div>
                        <h3><time datatime="2016-11-20">November</time> Started working for Rook Security</h3>
                        <p>Started as their Front End Developer helping crystalize designs and update styles on an in-house SOC supplemental security threat application.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
            
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-r">
                      <div>
                        <h3><time datatime="2016-11-13">November</time> Contributed to Open Source Project</h3>
                        <p>Contributed to the <a href="http://scout-app.io/dashboard/">Scout.io app</a> open source project. Used a js library and consumed API data to update donut charts displaying the number of downloads based on operating systems through different versions.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
            
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-l">
                      <div>
                        <h3><time datatime="2016-10-05">October</time> Became a Team Leader</h3>
                        <p>Became the Team Leader of the Developers and Designers in the FreeCodeCamp Indy Meetup. The idea is to make a website to gather our campers. Check out our progress <a href="https://github.com/Free-Code-Camp-Indy/free-code-camp-indy.github.io">here</a></p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
            
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-r">
                      <div>
                        <h3><time datatime="2016-08-05">August</time> Started a blog</h3>
                        <p>Started a <a href="https://mattattaqdevblog.wordpress.com/">developer blog</a> as the result of a FreeCodeCamp meetup.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
            
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-l">
                      <div>
                        <h3><time datatime="2016-11-05">June</time> Joined INDY.js and Node.js</h3>
                        <p>Found out about local meetups in indianapolis.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
            
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-r">
                      <div>
                        <h3><time datatime="2016-11-05">July</time> Started FreeCodeCamp</h3>
                        <p>At Indy.js I learned about freecodecamp to learn front end skills.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-l">
                      <div>
                        <h3><time datatime="2014-11-05">April</time> Exhibited at INDYpendent Self-Publisher's Show</h3>
                        <p>Helped local artists actualize their ideas and sold my new comic It's All Downhill From Here.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
                <div class="tl-block">
                  <div class="tl-year">
                    <div>
                      2016
                    </div> <!-- year -->
                  </div> <!-- end tl-year -->
                </div> <!-- end tl-block -->
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-r">
                      <div>
                        <h3><time datatime="2014-11-05">November</time> Exhibited at INDYpendent Self-Publisher's Show</h3>
                        <p>Helped local artists actualize their ideas and sold my new comic It's All Downhill From Here.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-l">
                      <div>
                        <h3><time datatime="2016-11-05">June</time> Exhibited at Indy Pop Con </h3>
                        <p>Sold my illustrations, graphic novel, and attended panels.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-r">
                      <div>
                        <h3><time datatime="2015-11-05">May</time> Graduated IUPUI</h3>
                        <p>Graduated with a Bachelor's in Informatics.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                  <div class="tl-block">
                    <div class="tl-event">
                      <div class="event-l">
                        <div>
                          <h3><time datatime="2015-11-05">April</time> Started working at Trivas Consulting</h3>
                          <p>Hired as Computer Programmer and Graphic Design Specialist.</p>
                        </div>
                      </div>
                      </div> <!-- end tl-event -->
                  </div> <!-- end tl-block -->
                </div> <!-- end tl-block -->
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-r">
                      <div>
                        <h3><time datatime="2015-03-15">March</time> Exhibited at Indiana Comic Con </h3>
                        <p>Sold my illustrations, graphic novel, and attended panels.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
                <div class="tl-block">
                  <div class="tl-year">
                    <div>
                      2015
                    </div> <!-- year -->
                  </div> <!-- end tl-year -->
                </div> <!-- end tl-block -->
            
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-l">
                      <div>
                        <h3><time datatime="2015-11-05">December</time> First public showing of R&tR</h3>
                        <p>At a local convention called INDYpendent Self-publisher's show, participated in panels on self-publishing, giving and taking critique, and character creation.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-r">
                      <div>
                        <h3><time datatime="2015-11-05">December</time> Published Reggie and the Rabbit</h3>
                        <p>After the success of the indiegogo I was able to publish my comic through both Holon Publishing and Brinkman Printers.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-l">
                      <div>
                        <h3><time datatime="2015-11-05">November</time> Finished Reggie and the Rabbit</h3>
                        <p>Finished R&tR and self published. Was approached by Holon Publishing, an artist collective and publishing house out of Bloomington.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-r">
                      <div>
                        <h3><time datatime="2015-11-05">November</time> Joined Holon Publishing as author and illustrator</h3>
                        <p>Joined Holon Publishing and entered publishing deal to distribute R&tR.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
            
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-l">
                      <div>
                        <h3><time datatime="2015-05-05">September</time> Started senior project Reggie and the Rabbit</h3>
                        <p>Set out to create, illustrate, write, and publish my own comic book. Links above in projects.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-r">
                      <div>
                        <h3><time datatime="2015-05-05">September</time> Started Reggie and the Rabbit Indiegogo</h3>
                        <p>Ran a succcessful indiegogo campaign to help fund publication.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-l">
                      <div>
                        <h3><time datatime="2015-05-05">September</time> Started Mattattaq.com</h3>
                        <p>Created my own comic based on wordpress to display my comic and maintained weekly page releases.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
            
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-r">
                      <div>
                        <h3><time datatime="2014--05">June</time> Volunteered at Indy Pop Con</h3>
                        <p>Helped run photo booths, managed lines, and helped give guests directions and water if needed.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
            
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-l">
                      <div>
                        <h3><time datatime="2014--05">April</time> Volunteered at Indiana Comic Con</h3>
                        <p>Managed lines, helped with celebrity signings, and helped give guests directions and water if needed.</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
            
                <div class="tl-block">
                  <div class="tl-year">
                    <div>
                      2014
                    </div> <!-- year -->
                  </div> <!-- end tl-year -->
                </div> <!-- end tl-block -->
            
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-r">
                      <div>
                        <h3><time datatime="2010-05-05">January</time>Started College</h3>
                        <p>Started at Indiana University - Purdue University Indianapolis(IUPUI) on New Media</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
                <div class="tl-block">
                  <div class="tl-year">
                    <div>
                      2010
                    </div> <!-- year -->
                  </div> <!-- end tl-year -->
                </div> <!-- end tl-block -->
                <div class="tl-block">
                  <div class="tl-event">
                    <div class="event-l">
                      <div>
                        <h3><time datatime="2006-05-05">May 05</time>Graduated High School</h3>
                        <p>Gratuated 2006 from James Madison High School</p>
                      </div>
                    </div>
                  </div> <!-- end tl-event -->
                </div> <!-- end tl-block -->
                <div class="tl-block">
                  <div class="tl-year">
                    <div>
                      2006
                    </div> <!-- year -->
                  </div> <!-- end tl-year -->
                </div> <!-- end tl-block -->
              </div>
          </div>
        </section>
        <footer>
          <ul id="social">
            <a href="https://www.facebook.com/MattAttaqArt/?fref=ts" target="_blank"><li id="facebook"><i class="fa fa-facebook" aria-hidden="true"></i></li></a>
            <a href="https://twitter.com/MattAttaqComic" target="_blank"><li id="twit"><i class="fa fa-twitter" aria-hidden="true"></i></li></a>
            <a href="https://www.linkedin.com/in/matthew-allbright-b4896749" target="_blank"><li id="linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></li></a>
            <a href="mailto:mattatttaq@gmail.com"><li id="mail"><i class="fa fa-envelope" aria-hidden="true"></i></li></a>
          </ul>
          <p>&copy 2018 Matthew Allbright</p>

        </footer> */}
    </div>
  );
}

export default App;
