import './App.css';
import { useState } from 'react';
import saminaAudio from "./audio/samina.m4a";
import gelAudio from "./audio/gel.m4a";
import momAudio from "./audio/mom.m4a";
import classNames from 'classnames';

const gelSummary = `Gel and I work together at Decentology and have known each other for about 4 months now. We are both a part of 
the Blockchain industry and have had tons of fun developing together. One of the cool things about being a developer in a new industry
is that you get to decide what goes and what doesn't. Gel is a big part of helping to include more women in the Blockchain space, and
in this episode, we go over how she does it and what we can all do to help more women feel included in the Web3 space.`;

const saminaSummary = `Samina and I have worked together for about 4 months at Decentology. Samina is a Developer Advocate and has a
very unique perspective on becoming a Computer Scientist as a woman. She describes her own past, how she transitioned out of the
medical field into Computer Science, and how we can encourage other women to understand that Computer Science is a possible major
to pursue.`;

const momSummary = `This is an interview with my mom, Carrie Tucker. She is a Vet Tech at the Cornell emergency hospital, which is 
a top clinic in the United States, as well as a teacher at Westchester Community College. She walks us through a struggle that one of 
her coworkers faces, a deaf individual, in the midst of COVID-19 and the mask era.`;

const App = () => {
  const [summary, setSummary] = useState("");
  return (
    <div className="App">
      <nav>
        <h1>Jacob Tucker's Episodes</h1>
      </nav>

      <div className={classNames({
        nodisplay: summary === "",
        description: true
      })}>
        <h1>Description</h1>
        <p>{summary}</p>
        <button onClick={() => setSummary("")}>Close</button>
      </div>

      <div className="list-of-podcasts">
        <div className="podcast podcast1">
          <h2>Women in Tech</h2>
          <audio controls src={saminaAudio}>Play</audio>
          <h3>ft. Samina Kabir</h3>
          <button onClick={() => setSummary(saminaSummary)}>View Summary</button>
        </div>

        <div className="podcast podcast3">
          <h2 style={{ fontSize: "30px" }}>Masks & Deafness</h2>
          <audio controls src={momAudio}>Play</audio>
          <h3>ft. Carrie Tucker (my mom)</h3>
          <button onClick={() => setSummary(momSummary)}>View Summary</button>
        </div>

        <div className="podcast podcast2">
          <h2>Women in Tech</h2>
          <audio controls src={gelAudio}>Play</audio>
          <h3>ft. Angelica Turla</h3>
          <button onClick={() => setSummary(gelSummary)}>View Summary</button>
        </div>
      </div>
    </div>
  );
}

export default App;
