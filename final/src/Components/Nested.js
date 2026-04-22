function Nested() {
  return (
    <div className="list">
      <ol>
        <h3>Watched Anime</h3>
        <li>Naruto Shippuden</li>
        <li>Demon Slayer</li>
        <li>Attack On Titan</li>
        <li>Solo Leveling</li>
      </ol>
      <br />
      <ul>
        <h3>Watched TV Shows</h3>
        <li>Friends</li>
        <li>How I Met Your Mother</li>
        <li>Game of Thrones</li>
        <li>Money Heist</li>
      </ul>
    </div>
  );
}

export default Nested;