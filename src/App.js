import { useState } from "react";
import './App.css';

export default function App() {
  const [tip, setTip] = useState(null);
  const [tip2, setTip2] = useState(null);
  const [bill, setBill] = useState(null);

  function updateTip(e) {
    setTip(e.target.value);
  }

  function updateTip2(e) {
    setTip2(e.target.value);
  }

  function updateBill(e) {
    setBill(e.target.value);
  }

  function resetAll(e) {
    setBill(0);
    setTip(0);
    setTip2(0);
    console.log("resetdone");
  }

  return (
    <div className="App">
      <div className="Bill">
        <Bill bill={bill} updateBill={updateBill} />
      </div>
      <div className="Service">
        <Service tip={tip} updateTip={updateTip}>
          <p>How did you like the service?</p>
        </Service>
      </div>
      <div className="Service">
        <Service tip={tip2} updateTip={updateTip2}>
          <p>How did your friend like the service?</p>
        </Service>
      </div>
      {bill > 0 && (
        <>
          <div className="Payment">
            <Payment Tip={tip} tip2={tip2} bill={bill} />
          </div>
          <div className="Reset">
            <Reset resetAll={resetAll} />
          </div>
        </>
      )}
    </div>
  );
}

function Bill({ bill, updateBill }) {
  return (
    <div>
      <p>How much was the bill?</p>
      <input type="text" value={bill} onChange={(e) => updateBill(e)} />
    </div>
  );
}

function Service({ children, tip, updateTip }) {
  return (
    <div>
      {children}
      <select value={tip} onChange={(e) => updateTip(e)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Payment({ Tip, bill, tip2 }) {
  return (
    <div>
      <em>
        You pay {Number(bill) + (bill * ((Number(Tip) + Number(tip2)) / 2)) / 100} (${bill} +{" "}
        {(bill * ((Number(Tip) + Number(tip2)) / 2)) / 100})
      </em>
    </div>
  );
}

function Reset({ resetAll }) {
  return (
    <div>
      <button onClick={(e) => resetAll(e)}>Reset</button>
    </div>
  );
}
