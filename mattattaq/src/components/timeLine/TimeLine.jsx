import React from 'react';
import { Container } from 'react-bootstrap';

const timelineEvents = [
  {
    "date": "2018-09-25",
    "title": "Developer Panel talk with Free-Code-Camp-Indy",
    "description": "On a panel as a mid-level developer giving tips on several topics. Open question and answering panel."
  },
  {
    "date": "2018-03-27",
    "title": "Started working at Angie's list",
    "description": "Hired in as a Software Engineer II (SEII) focusing on front-end development. Hoping to grow in my role to include backend."
  },
  {
    "date": "2017-10-19",
    "title": "Started working for Heartland FPG",
    "description": "In charge of email marketing markup in Sales Force Marketing Cloud, converted websites to Wordpress sites hosted through pantheon and version controlled via Lando. Seriously, check out <a href=\"https://docs.devwithlando.io/tutorials/pantheon.html\" target=\"_new\">lando</a>. It imports your database and files so you can use it like git."
  },
  {
    "date": "2017-10-11",
    "title": "Finished Schabel-Realty.com",
    "description": "Responsive website redesign for <a href=\"http://schabel-realty.com/home\">Schabel-Realty.com</a> for the Schabel Property Management Group. Integrated IDX (Internet Data Exchange) to show housing listings with the website, designed logo, new business card design, and colorized a black & white photo to display on the main page."
  },
  {
    "date": "2017-03-01",
    "title": "Redesigned SilverDoorSpa.com",
    "description": "Responsive website redesign for <a href=\"http://silverdoorspa.com/\">Silver Door Spa</a> a spa based out of Carmel, IN. Integrated with service to help clients schedule appointments."
  },
  {
    "date": "2016-11-20",
    "title": "Started working for Rook Security",
    "description": "Started as their Front End Developer helping crystalize designs and update styles on an in-house SOC supplemental security threat application."
  },
  {
    "date": "2016-11-13",
    "title": "Contributed to Open Source Project",
    "description": "Contributed to the <a href=\"http://scout-app.io/dashboard/\">Scout.io app</a> open source project. Used a js library and consumed API data to update donut charts displaying the number of downloads based on operating systems through different versions."
  },
  {
    "date": "2016-10-05",
    "title": "Became a Team Leader",
    "description": "Became the Team Leader of the Developers and Designers in the FreeCodeCamp Indy Meetup. The idea is to make a website to gather our campers. Check out our progress <a href=\"https://github.com/Free-Code-Camp-Indy/free-code-camp-indy.github.io\">here</a>"
  },
  {
    "date": "2016-08-05",
    "title": "Started a blog",
    "description": "Started a <a href=\"https://mattattaqdevblog.wordpress.com/\">developer blog</a> as the result of a FreeCodeCamp meetup."
  },
  {
    "date": "2016-07-05",
    "title": "Joined INDY.js and Node.js",
    "description": "Found out about local meetups in Indianapolis."
  },
  {
    "date": "2016-07-05",
    "title": "Started FreeCodeCamp",
    "description": "At Indy.js I learned about FreeCodeCamp to learn front end skills."
  },
  {
    "date": "2016-06-05",
    "title": "Exhibited at Indy Pop Con",
    "description": "Sold my illustrations, graphic novel, and attended panels."
  },
  {
    "date": "2015-11-05",
    "title": "First public showing of R&tR",
    "description": "At a local convention called INDYpendent Self-publisher's show, participated in panels on self-publishing, giving and taking critique, and character creation."
  },
  {
    "date": "2015-11-05",
    "title": "Published Reggie and the Rabbit",
    "description": "After the success of the indiegogo I was able to publish my comic through both Holon Publishing and Brinkman Printers."
  },
  {
    "date": "2015-11-05",
    "title": "Finished Reggie and the Rabbit",
    "description": "Finished R&tR and self published. Was approached by Holon Publishing, an artist collective and publishing house out of Bloomington."
  },
  {
    "date": "2015-11-05",
    "title": "Joined Holon Publishing as author and illustrator",
    "description": "Joined Holon Publishing and entered publishing deal to distribute R&tR."
  },
  {
    "date": "2015-09-05",
    "title": "Started senior project Reggie and the Rabbit",
    "description": "Set out to create, illustrate, write, and publish my own comic book. Links above in projects."
  },
  {
    "date": "2015-09-05",
    "title": "Started Reggie and the Rabbit Indiegogo",
    "description": "Ran a successful indiegogo campaign to help fund publication."
  },
  {
    "date": "2015-09-05",
    "title": "Started Mattattaq.com",
    "description": "Created my own comic based on WordPress to display my comic and maintained weekly page releases."
  },
  {
    "date": "2015-05-05",
    "title": "Exhibited at Indiana Comic Con",
    "description": "Sold my illustrations, graphic novel, and attended panels."
  },
  {
    "date": "2015-05-05",
    "title": "Started working at Trivas Consulting",
    "description": "Hired as Computer Programmer and Graphic Design Specialist."
  },
  {
    "date": "2015-05-05",
    "title": "Graduated IUPUI",
    "description": "Graduated with a Bachelor's in Informatics."
  },
  {
    "date": "2014-11-05",
    "title": "Exhibited at INDYpendent Self-Publisher's Show",
    "description": "Helped local artists actualize their ideas and sold my new comic It's All Downhill From Here."
  },
  {
    "date": "2014-06-05",
    "title": "Volunteered at Indy Pop Con",
    "description": "Helped run photo booths, managed lines, and helped give guests directions and water if needed."
  },
  {
    "date": "2014-04-05",
    "title": "Volunteered at Indiana Comic Con",
    "description": "Managed lines, helped with celebrity signings, and helped give guests directions and water if needed."
  },
  {
    "date": "2010-01-05",
    "title": "Started College",
    "description": "Started at Indiana University - Purdue University Indianapolis (IUPUI) on New Media."
  },
  {
    "date": "2006-05-05",
    "title": "Graduated High School",
    "description": "Graduated 2006 from James Madison High School."
  }
];

timelineEvents.sort((a, b) => new Date(b.date) - new Date(a.date));

export default function Timeline() {
  return (
    <section id="sec4">
      <Container>
        <header>
          <h2>Work Timeline</h2>
        </header>
        <div id="timeline">
          {timelineEvents.map((event, index) => (
            <div key={event.date} className="tl-block">
              <div className="tl-event">
                <div className={index % 2 === 0 ? 'event-r' : 'event-l'}>
                  <div>
                    <h5>
                      <time dateTime={event.date}>{new Date(event.date).toLocaleString('default', { month: 'long' })}</time> {event.title}
                    </h5>
                    <p dangerouslySetInnerHTML={{ __html: event.description }}></p>
                  </div>
                </div>
              </div>
              {(index === 0 || new Date(event.date).getFullYear() !== new Date(timelineEvents[index - 1].date).getFullYear()) && (
                <div className="tl-block">
                  <div className="tl-year">
                    <div>{new Date(event.date).getFullYear()}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}