import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App" id="wrapper">
      <Header />
        {/* 
        <section id="sec2">
          <div class="headImg">
            <div id="coin-flip-cont">
              <div id="coin">
                <div class="front"></div>
                  <div class="back"></div>
              </div>
            </div>
          </div>
          <div class="container">
            <div id="mast">
              <h1>Matthew Allbright - Front End Developer/Artist</h1>
            </div>
            <br>
            <div class="col-2">
              <h3 class="break lite">Welcome to my portfolio website hosted via <i>gh-pages</i>. Here is where I've got a <a href="#sec4"><i>timeline</i></a> of my accomplishments during and after college. It includes my first <a href="#gn"><i>graphic novel</i></a>, various conventions i've been to, and my job history that pertains to being a <i>web developer</i>. I also have examples of projects I've done for myself or work. You'll also find a link to my <a href="#gh"><i>github</i></a> account where I have some code examples.</h3>
              <h3 class="break lite">If you have any questions or comments you can contact me <i><a href="mailto:mattatttaq@gmail.com">here</a></i> or my social media links above.</h3>
            </div>
            <div class="col-3" style="margin-left: 15px;">
              <h1>Technology</h1>
              <!-- <hr> -->
              <h3 class="lite">React, Redux, JavaScript, jQuery, Sass, HTML/CSS, Bootstrap, Foundation, PHP, git</h3>
              <br>
              <H1>Software</H1>
              <!-- <hr> -->
              <h3 class="lite">Adobe Creative Suite, inVision, Visual Studio: Code </h3>
              <br>
              <h1>Familiar With:</h1>
              <!-- <hr> -->
              <h3 class="lite"> Gulp, Brew, Webpack, Node, Wordpress, Drupal, SalesForce Marketing Cloud</h3>
              <!-- <hr> -->
              <!-- creating a scroll to top element -->
            </div>
          </div>
        </section>

        <section id="sec3">
          <div id="toTop"><a href="#wrapper">Scroll to Top</a></div>
          <div class="container">
            <div class="left">
              <h2>Projects</h2>

              <div class="panel">
                <a href="https://mattattaq.github.io/vincent-fults-guitar" target="_blank"><img src="img/vincent.png" alt="Vincent Fults Guitar Website"></a>
                <h1>Vincent Fult's Website</h1>
                <p>My buddy who is a guitar teacher quit his job at Sam Ash to pursue music and wanted to work for himself. I built him a website to help him gather students. The things is he's so popular that his rolodex wass filled nearly instantly! Luckily if he needs it this website will help organize future and current students.</p>
                <h3>
                  <span class="svg svg-html"></span>
                  <span class="svg svg-js"></span>
                  <span class="svg svg-css"></span>
                </h3>
              </div>

              <div class="panel">
                <a href="http://schabel-realty.com/" target="_blank"><img src="img/t3_schabel.png" alt="Schabel Property Management Group"></a>
                <h1>Schabel Property Management Group Website</h1>
                <p>Tasked to upgrade an old site to a more modern mobile responsive site. Also updated the logo and created a graphic that can be used for their business card as well as colorizing a b&w photo to use as their main mast image. <a href="img/schabel_realty_old.png" target="_blank">Here is the old version of the site</a> versus the <a href="img/schabel_realty_new.png" target="_blank">new site</a>.</p>
                <h3>
                  <span class="svg svg-html"></span>
                  <span class="svg svg-css"></span>
                  <span class="svg svg-art"></span>
                </h3>
              </div>

              <div class="panel">
                <a href="http://silverdoorspa.com/" target="_blank"><img src="img/t4_silverdoorspa.png" alt="Silver Door Spa"></a>
                <h1>Silver Door Spa</h1>
                <p>Upgraded website from old php template to custom redesign. Source code can be found on my
                  <a href="https://github.com/mattattaq/mattattaq.github.io/tree/master/silverdoorspa" target="_blank">GitHub</a>.
                </p>
                <h3>
                  <span class="svg svg-html"></span>
                  <span class="svg svg-css"></span>
                  <span class="svg svg-js"></span>
                  <span class="svg svg-github"></span>
                </h3>
              </div>

              

              <div class="panel">
                <a href="https://free-code-camp-indy.github.io/" target="_blank"><img src="img/meetup.png" alt="Free Code Camp Indy"></a>
                <h1>Free Code Camp Indy Meetup Website</h1>
                <p>Team leader of developers and designers for a local meetup group encouraging newbie developers to learn to code. Check out our <a href="https://docs.google.com/document/d/1PBaRWUjsR6IVD2P5Tz7H1N6wzE8awM7oETdUfBA9o1Q/edit?usp=sharing" target="_blank">design document</a>!</p>
                <h3>
                  <span class="svg svg-html"></span>
                  <span class="svg svg-css"></span>
                  <span class="svg svg-js"></span>
                  <span class="svg svg-github"></span>
                </h3>
              </div>

              <div class="panel">
                <a href="http://www.mattattaq.com/" target="_blank"><img src="img/t1_mattattaq.png" alt="My website where I host my comics"></a>
                <h1>MattAttaq.com</h1>
                <p>Starting 2015 in September mattattaq.com featured my comic works from college and beyond.</p>
                <h3>
                  <span class="svg svg-html"></span>
                  <span class="svg svg-css"></span>
                  <span class="svg svg-js"></span>
                  <span class="svg svg-wordpress"></span>
                  <span class="svg svg-art"></span>
                </h3>
              </div>

              <div class="panel" id="gn">
                <a href="https://www.amazon.com/Reggie-Rabbit-Matthew-Albright/dp/0991528271/ref=sr_1_4?ie=UTF8&qid=1469206572&sr=8-4&keywords=reggie+and+the+rabbit" target="_blank"><img src="img/t2_rtr.png" alt="Reggie and the Rabbit Amazon link"></a>
                <h1>Reggie and the Rabbit</h1>
                <p>Here is the amazon link to my first graphic novel Reggie and the Rabbit. This was the product of my senior project at IUPUI.</p>
                <h3>
                  <span class="svg svg-art"></span>
                </h3>
              </div>

              <div class="panel" id="gh">
                <a href="https://github.com/mattattaq" target="_blank"><img src="img/t3_github.png" alt="Github repos"></a>
                <h1>Github Repos</h1>
                <p>Here is where I have some of the templates that I've worked on for work. It also has this profolio website in one of the repos!</p>
                <h3>
                  <span class="svg svg-github"></span>
                  <span class="svg svg-html"></span>
                  <span class="svg svg-css"></span>
                  <span class="svg svg-js"></span>
                </h3>
              </div>

              <div class="panel">
                <a href="rolodorks/index.html" target="_blank"><img src="img/t5_rolodorks.png" alt="RoloDorks card app"></a>
                <h1>Rolodorks <span class="wip">WIP</span></h1>
                <p>Personal project, the problem what I was solving is I had a ton of business cards and wanted to preserve the art. Images saved on imgur and iterated through a json object.</p>
                <h3>
                  <span class="svg svg-react"></span>
                  <span class="svg svg-js"></span>
                  <span class="svg svg-html"></span>
                  <span class="svg svg-css"></span>
                  <span class="svg svg-github"></span>
                </h3>
              </div>

              <div class="panel">
                <a href="https://mattattaqdevblog.wordpress.com/" target="_blank"><img src="img/t6_blog.png" alt="Developer Blog"></a>
                <h1>Developer Blog</h1>
                <p>Was inspired to document my experience in code so as to have a reference in the future.</p>
                <!-- <span class="tech">Tech Used:</span> -->
                <h3>
                  <span class="svg svg-wordpress"></span>
                </h3>
              </div>

              <center><h1>More to come!</h1></center>
            </div>
            <div class="right">
                <center><a class="twitter-timeline"  href="https://twitter.com/MattAttaqComic" data-widget-id="675061151571402752">Tweets by @MattAttaqComic</a></center>
                <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
            </div>
          </div>
        </section>
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
