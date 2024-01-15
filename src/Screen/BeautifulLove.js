import { useState } from "react";
import "../Design/home.css";
import NumericInput from "react-numeric-input";
const BeautifulLove = () => {
  const [distance, setDistance] = useState(0);
  const [velocityA, setVelocityA] = useState(0);
  const [velocityB, setVelocityB] = useState(0);
  const [answer, setAnswer] = useState("?");
  const [a1, setA1] = useState(0);
  const [b1, setB1] = useState(0);
  const [c1, setC1] = useState(0);
  const [square, setSquare] = useState(0);
  const [answer1, setAnswer1] = useState("?");
  const [answerSq, setAnswerSq] = useState("?");
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMouseDown2, setIsMouseDown2] = useState(false);
  const onDistanceChange = (num) => {
    setDistance(num);
    return distance;
  };
  const onVelocityAChange = (num) => {
    setVelocityA(num);
    return velocityA;
  };
  const onVelocityBChange = (num) => {
    setVelocityB(num);
    return velocityB;
  };
  const Answer = () => {
    console.log(distance, velocityA + velocityB);
    const add = Number(velocityA) + Number(velocityB);
    let passingTime = distance / add;
    console.log("Passing time: " + passingTime);
    let time = document.getElementById("timer").value;
    let [hour, min] = time.split(":");
    let time2 = document.getElementById("timer2").value;
    let [hour2, min2] = time2.split(":");
    console.log(time, time2);
    let totalHour1 = Number(hour) + min / 60;
    let totalHour2 = Number(hour2) + min2 / 60;
    if (totalHour2 < totalHour1) totalHour2 += 24;
    let currentTime = totalHour2 - totalHour1;
    console.log(totalHour1, totalHour2);
    console.log("CurrentTime: " + currentTime);
    const trueAns = passingTime - currentTime;
    if (trueAns < 0) {
      setAnswer("They have passed each other already.");
    } else if (trueAns < 1) {
      setAnswer(`${trueAns * 60} minutes`);
    } else setAnswer(`${trueAns} hours`);
  };
  const onA1Change = (num) => {
    setA1(num);
    return a1;
  };
  const onB1Change = (num) => {
    setB1(num);
    return b1;
  };
  const onC1Change = (num) => {
    setC1(num);
    return c1;
  };
  const Answer2 = () => {
    setAnswer1((c1 - b1) / a1);
  };
  const TongBinhPhuong = (num) => {
    console.log(num);
    if (num === 0) {
      return 0;
    }
    if (num === 1) {
      return 1;
    }
    return num * num + TongBinhPhuong(num - 1);
  };
  const addLargeNum = (num1, num2) => {
    let len1 = num1.length;
    let len2 = num2.length;
    if (len1 === 0 || len2 === 0) {
      return "0";
    }
    //Tao bien chua so du
    let carried = 0;
    let veryLarge = Math.max(len1, len2);
    console.log(veryLarge);
    //Them so 0 vao dau so de cho bang do dai
    if (len1 < len2) {
      num1 = num1.padStart(len2, "0");
      console.log(len2 - len1);
    } else if (len2 < len1) {
      num2 = num2.padStart(len1, "0");
      console.log(len1 - len2);
    }
    console.log(num1, num2);
    //Tao mang result de chua ket qua sau khi cong
    let results = Array(veryLarge).fill("0");

    for (let i = veryLarge - 1; i >= 0; i--) {
      console.log(`${i}.`);
      let a1 = Number(num1.charAt(i));
      let a2 = Number(num2.charAt(i));
      console.log("a1 = " + a1);
      console.log("a2 = " + a2);
      let res = a1 + a2 + carried;
      let output = res % 10;
      carried = Math.floor(res / 10);
      results.splice(i, 1, output + ""); //Add the output to the array
    }
    if (carried > 0) {
      results.splice(0, 0, carried + "");
    }
    return results.join("");
  };
  return (
    <div class="inclination">
      <div className="App arithmetic">
        <p style={{ margin: 30 }}>
          Two cars, A and B, simultaneously departs Station A and Station B.
          {"\n"}
          Station A and B are{" "}
          <NumericInput
            format={onDistanceChange}
            value={distance}
            min={0}
            step={0.01}
            precision={2}
            size={7}
          />
          km apart from each other. {"\n"}Car A is moving at{" "}
          <NumericInput
            format={onVelocityAChange}
            value={velocityA}
            min={0}
            step={0.01}
            precision={2}
            size={7}
          />
          km/h towards Station B, and car B is moving at{" "}
          <NumericInput
            format={onVelocityBChange}
            value={velocityB}
            min={0}
            step={0.01}
            precision={2}
            size={7}
          />
          km/h towards Station A.{"\n"}
          If both cars departed at{" "}
          <input
            id="timer"
            type="time"
            style={{ marginTop: 10, marginBottom: 10 }}
          ></input>{" "}
          and it is now{" "}
          <input
            id="timer2"
            type="time"
            style={{ marginTop: 10, marginBottom: 10 }}
          ></input>
          , how much longer will both cars pass each other?
        </p>
        <p>
          The answer: <span style={{ fontWeight: "bold" }}>{answer}</span>
        </p>
        <button
          style={{
            ...styles.button,
            ...{ backgroundColor: isMouseDown ? "#e29090" : "#d42424" },
          }}
          className="answerBTN"
          onMouseDown={() => {
            setIsMouseDown(!isMouseDown);
          }}
          onMouseUp={() => {
            setIsMouseDown(!isMouseDown);
          }}
          onClick={() => {
            Answer();
            let time = document.getElementById("timer").value;
            console.log(addLargeNum("3462342352352", "217"));
          }}
        >
          Click here to get the answer
        </button>
      </div>
      <div className="App arithmetic">
        <p>
          <NumericInput
            format={onA1Change}
            value={a1}
            step={1}
            precision={0}
            size={7}
          />
          x +{" "}
          <NumericInput
            format={onB1Change}
            value={b1}
            step={1}
            precision={0}
            size={7}
          />{" "}
          ={" "}
          <NumericInput
            format={onC1Change}
            value={c1}
            step={1}
            precision={0}
            size={7}
          />
        </p>
        <p>x = {answer1}</p>
        <button
          style={{
            ...styles.button,
            ...{ backgroundColor: isMouseDown2 ? "#e29090" : "#d42424" },
          }}
          className="answerBTN"
          onMouseDown={() => {
            setIsMouseDown2(!isMouseDown2);
          }}
          onMouseUp={() => {
            setIsMouseDown2(!isMouseDown2);
          }}
          onClick={() => {
            Answer2();
          }}
        >
          Click here to get the answer
        </button>
      </div>
      <div className="App arithmetic">
        <p>
          Calculate the sum of squares from 1 to{" "}
          <NumericInput
            format={(num) => {
              setSquare(num);
              setAnswerSq(TongBinhPhuong(Number(num)));
              return square;
            }}
            value={square}
            min={0}
            max={100}
            step={1}
            precision={0}
            size={7}
          />
        </p>
        <p>Answer: {answerSq}</p>
      </div>
    </div>
  );
};
const styles = {
  button: {
    margin: 60,
    padding: 20,
    borderRadius: 200,
    color: "white",
    cursor: "pointer",
  },
};
export default BeautifulLove;
