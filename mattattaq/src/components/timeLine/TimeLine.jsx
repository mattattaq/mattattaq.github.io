import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

export default function Timeline() {
  const [timelineEvents, setTimelineEvents] = useState([]);

  useEffect(() => {
    const fetchTimelineEvents = async () => {
      try {
        const response = await fetch('https://mattattaq.github.io/timeline.json');
        if (!response.ok) {
          throw new Error('Failed to fetch timeline data');
        }
        const data = await response.json();
        setTimelineEvents(data);
      } catch (error) {
        console.error('Error fetching timeline data:', error);
      }
    };

    fetchTimelineEvents();
  }, []);

  return (
    <section id="sec4">
      <Container>
        <header>
          <h2>Work Timeline  <a href="/#/timeline">edit?</a></h2>
        </header>
        <div id="timeline">
          {timelineEvents.map((event, index) => (
            <div key={event.description} className="tl-block">
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
