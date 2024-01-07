import "../Design/home.css";
function Tian() {
  return (
    <div>
      <h1 style={styles.title}>ACCOMPLISHMENT</h1>
      <div class="inclination">
        <div class="toTheLeft">
          <img
            alt="Father & Son"
            src="https://talksport.com/wp-content/uploads/sites/5/2021/05/myster.jpeg?strip=all&w=800"
          ></img>
          <p>
            <i>The 1st father and son tag team champions</i>
          </p>
        </div>
        <div class="toTheLeft">
          <img
            alt="Father & Son"
            src="https://cdn.wrestletalk.com/wp-content/uploads/2023/07/damian-priest-rhea-ripley-wwe-womens-world-champion-dominik-mysterio-nxt-north-american-champion-finn-balor-judgment-day-july-19-a.jpg"
          ></img>
          <p>
            <i>The North American Dream</i>
          </p>
        </div>
      </div>
    </div>
  );
}
const styles = {
  title: {
    fontSize: 44,
    fontFamily: "Arial",
    margin: 20,
  },
};
export default Tian;
