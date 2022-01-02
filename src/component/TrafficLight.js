import {useState} from "react";

export default function TrafficLight() {
  const [flag, setFlag] = useState(true);

  function handleClick () {
    setFlag(!flag);
    alert(flag ? "红灯停" : "绿灯行");
  }
  return(
    <div>
      <button onClick = {handleClick}>变成{ flag ? "红灯" : "绿灯" }</button>
      <h1 style = {{
        color: flag ? 'green' : 'red'
      }}>
        { flag ? "绿灯" : "红灯" }
      </h1>
    </div>
  );
}
// true 绿灯，false 红灯