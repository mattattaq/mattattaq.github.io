import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Panel from './Panel';
import './featuredProjects.scss';
import vincent from "../../img/vincent.png";
import schabel from '../../img/t3_schabel.png';
import silverDoorSpa from '../../img/t4_silverdoorspa.png';
import meetup from '../../img/meetup.png';
import mattAttaq from '../../img/t1_mattattaq.png';
import rAndTR from '../../img/t2_rtr.png';
import github from '../../img/t3_github.png';
import roloDorks from '../../img/t5_rolodorks.png';
import blog from '../../img/t6_blog.png';
import schabelImg from '../../img/schabel_realty_old.png';
import newShabelImg from '../../img/schabel_realty_new.png';

// TODO: save this in a db somewhere to call and provide to the front-end to demonstrate
// full-stack capabilities
const panelProps = [
    {
        link: 'https://mattattaq.github.io/vincent-fults-guitar',
        img: vincent,
        title: "Vincent Fult\'s Website",
        description: "My buddy who is a guitar teacher quit his job at Sam Ash to pursue music and wanted to work for himself. I built him a website to help him gather students. The things is he's so popular that his rolodex wass filled nearly instantly! Luckily if he needs it this website will help organize future and current students.",
        techIcons: ['svg-html', 'svg-js', 'svg-css']
    },
    {
        link: 'http://schabel-realty.com/',
        img: schabel,
        title: "Schabel Property Management Group",
        description: `Tasked to upgrade an old site to a more modern mobile responsive site. Also updated the logo and created a graphic that can be used for their business card as well as colorizing a b&w photo to use as their main mast image. <a href=${schabelImg} target="_blank">Here is the old version of the site</a> versus the <a href=${newShabelImg} target="_blank">new site</a>.`,
        techIcons: ['svg-html', 'svg-art', 'svg-css']
    },
    {
        link: 'http://silverdoorspa.com/',
        img: silverDoorSpa,
        title: "Silver Door Spa",
        description: 'Upgraded website from old php template to custom redesign. Source code can be found on my <a href="https://github.com/mattattaq/mattattaq.github.io/tree/master/silverdoorspa" target="_blank">GitHub</a>.',
        techIcons: ['svg-html', 'svg-css', 'svg-js', 'svg-github']
    },
    {
        link: 'https://free-code-camp-indy.github.io/',
        img: meetup,
        title: "Free Code Camp Indy Meetup Website",
        description: 'Team leader of developers and designers for a local meetup group encouraging newbie developers to learn to code. Check out our <a href="https://docs.google.com/document/d/1PBaRWUjsR6IVD2P5Tz7H1N6wzE8awM7oETdUfBA9o1Q/edit?usp=sharing" target="_blank">design document</a>!',
        techIcons: ['svg-html', 'svg-css', 'svg-js', 'svg-github']
    },
    {
        link: 'http://www.mattattaq.com/',
        img: mattAttaq,
        title: "MattAttaq.com",
        description: 'Starting 2015 in September mattattaq.com featured my comic works from college and beyond.',
        techIcons: ['svg-html', 'svg-css', 'svg-js', 'svg-github', 'svg-wordpress', 'svg-art']
    },
    {
        link: 'https://www.amazon.com/Reggie-Rabbit-Matthew-Albright/dp/0991528271/ref=sr_1_4?ie=UTF8&qid=1469206572&sr=8-4&keywords=reggie+and+the+rabbit',
        img: rAndTR,
        title: "Reggie and the Rabbit",
        description: 'Here is the amazon link to my first graphic novel Reggie and the Rabbit. This was the product of my senior project at IUPUI.',
        techIcons: ['svg-art']
    },
    {
        link: 'https://github.com/mattattaq',
        img: github,
        title: "Github Repos",
        description: 'Here is where I have some of the templates that I\'ve worked on for work. It also has this profolio website in one of the repos!',
        techIcons: ['svg-github']
    },
    {
        link: 'rolodorks/index.html',
        img: roloDorks,
        title: 'Rolodorks <span className="wip">WIP</span>',
        description: 'Personal project, the problem what I was solving is I had a ton of business cards and wanted to preserve the art. Images saved on imgur and iterated through a json object.',
        techIcons: ['svg-react', 'svg-js', 'svg-css', 'svg-html', 'svg-github']
    },
    {
        link: 'https://mattattaqdevblog.wordpress.com/',
        img: blog,
        title: 'Developer Blog',
        description: 'Was inspired to document my experience in code so as to have a reference in the future.',
        techIcons: ['svg-wordpress']
    }
];

export default function FeaturedProjects() {
    return(
        <section id="sec3">
          <div id="toTop"><a href="#wrapper">Scroll to Top</a></div>
          <Container>
              <Row>
                <Col lg={9} className="left">
                <h4><b>Projects</b></h4>
                {panelProps.map(panel => (
                    <Panel 
                        link={panel.link}
                        img={panel.img}
                        title={panel.title}
                        description={panel.description}
                        techIcons={panel.techIcons}
                        />
                ))}
                
                <center><h1>More to come!</h1></center>
                </Col>
                <Col lg={3} className="right">
                    <center><a className="twitter-timeline"  href="https://twitter.com/MattAttaqComic" data-widget-id="675061151571402752">Tweets by @MattAttaqComic</a></center>
                    <script>{!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs")}</script>
                </Col>
              </Row>
          </Container>
        </section>
    );
}
