import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import TimelineForm from './TimeLineForm'; // Make sure the path is correct

export default function Timeline({ edits }) {
  const [timelineEvents, setTimelineEvents] = useState([]);

  useEffect(() => {
    const fetchTimelineEvents = async () => {
      let response;
      let data;

      try {
        // Attempt to fetch from localhost:3001
        response = await fetch('http://localhost:3001/timeline');
        if (!response.ok) {
          throw new Error('Failed to fetch from localhost');
        }
        data = await response.json();
      } catch (error) {
        console.error('Error fetching from localhost:', error);

        // Fallback to fetching from GitHub Pages URL
        try {
          response = await fetch('https://mattattaq.github.io/timeline.json');
          if (!response.ok) {
            throw new Error('Failed to fetch from GitHub Pages URL');
          }
          data = await response.json();
        } catch (error) {
          console.error('Error fetching timeline data:', error);
          return;
        }
      }

      // Sort the data by date
      const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setTimelineEvents(sortedData);
    };

    fetchTimelineEvents();
  }, []);

  const addEntry = (entry) => {
    setTimelineEvents((prevEvents) => {
      const updatedEvents = [...prevEvents, entry];
      // Sort the updated events by date
      return updatedEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
    });
  };

  return (
    <section id="sec4">
      <Container>
        <header>
          <h2>Work Timeline {!edits && <a href="/#/timeline">edit?</a>}</h2>
        </header>
        {edits && <TimelineForm addEntry={addEntry} />}
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
