export default function Portfolio() {
  return (
    <div>
      <section id="portfolio">
        <div className="section-title">
          <h2>Portfolio</h2>
        </div>
        {/* most recent work */}
        <div className="section-content box-column">
          <a
            href="https://wheyts-up.herokuapp.com/"
            className="tile large-tile row"
            target="_blank"
            rel="noreferrer"
          >
            <div className="tile-tag">
              <p className="tile-title">Wheyts Up</p>
            </div>
          </a>
          {/* other projects */}
          <div className="box-row">
            <a
              href="https://game-it1.herokuapp.com/"
              className="tile small-tile tile-1 row"
              target="_blank"
              rel="noreferrer"
            >
              <div className="tile-tag">
                <p className="tile-title">Game It</p>
              </div>
            </a>
            <a
              href=" https://jburg1414.github.io/work-day-scheduler/"
              className="tile small-tile tile-1 row"
              target="_blank"
              rel="noreferrer"
            >
              <div className="tile-tag">
                <p className="tile-title">Work Day Scheduler</p>
              </div>
            </a>
            <a
              href=" https://jburg1414.github.io/run-buddy/"
              className="tile small-tile tile-2 row"
              target="_blank"
              rel="noreferrer"
            >
              <div className="tile-tag">
                <p className="tile-title">Run Buddy</p>
              </div>
            </a>
            <a
              href="https://jburg1414.github.io/horiseon-refactation/"
              className="tile small-tile tile-3 row"
              target="_blank"
              rel="noreferrer"
            >
              <div className="tile-tag">
                <p className="tile-title">Horiseon</p>
              </div>
            </a>
            <a
              href="https://jburg1414.github.io/weather-dashboard/"
              className="tile small-tile tile-4 row"
              target="_blank"
              rel="noreferrer"
            >
              <div className="tile-tag">
                <p className="tile-title">Weather Dashboard</p>
              </div>
            </a>
            <a
              href="https://fathomless-chamber-86495.herokuapp.com/"
              className="tile small-tile tile-5 row"
              target="_blank"
              rel="noreferrer"
            >
              <div className="tile-tag">
                <p className="tile-title">Budget Tracker</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
