import { useState } from "react";

export default function Calculator() {
  const [Academic, setAcademic] = useState("");
  const [absent, setAbsent] = useState("");
  const [delegation, setDelegation] = useState("");
  const [totalPercentage, settotalPercentage] = useState(0);
  const [futureTotalLectures, setFutureTotalLectures] = useState("");
  const [totalPossibleAbsents, settotalPossibleAbsents] = useState(0);
  function handleSumbit(e) {
    e.preventDefault();
    // const percentage =
    //   100 - (((absent - delegation) / Academic) * 100).toFixed(2);
    settotalPercentage(
      100 - (((absent - delegation) / Academic) * 100).toFixed(2)
    );
    console.log(e);
  }

  function calculateMaxAbsences(e) {
    e.preventDefault();
    const targetPercentage = 90;
    let currentPercentage = totalPercentage;
    let currentTotalAbsent = absent;
    let currentTotalDelegation = delegation;
    while (currentPercentage > targetPercentage) {
      currentTotalAbsent++;
      currentPercentage =
        100 -
        ((currentTotalAbsent - currentTotalDelegation) / futureTotalLectures) *
          100;
      //console.log(currentPercentage);
    }
    //console.log(currentTotalAbsent);
    settotalPossibleAbsents(currentTotalAbsent);
  }

  return (
    <section className="calculator-body">
      <div className="main">
        <form className="interface" onSubmit={handleSumbit}>
          <input
            type="text"
            placeholder="Total Academic days"
            className="present"
            value={Academic}
            onChange={(e) => setAcademic(Number(e.target.value))}
          />
          <input
            type="text"
            placeholder="Absent days"
            className="absent"
            value={absent}
            onChange={(e) => setAbsent(Number(e.target.value))}
          />
          <input
            type="text"
            placeholder="OA Delegation"
            className="delegation"
            value={delegation}
            onChange={(e) => setDelegation(Number(e.target.value))}
          />
          <button onClick={() => handleSumbit}>Calculate</button>
        </form>
        <div className="result">
          <p className="percentage">
            {totalPercentage === 95 || totalPercentage > 90 ? (
              <span>
                {totalPercentage.toFixed(2)}%<br></br> You are good to go! 🚀🦺
              </span>
            ) : totalPercentage < 90 && totalPercentage >= 80 ? (
              <span>
                {totalPercentage.toFixed(2)}%<br></br> Woof! You are just on the
                safe side! 🏳💚
              </span>
            ) : totalPercentage < 70 && totalPercentage > 30 ? (
              <span>
                {totalPercentage.toFixed(2)}% <br></br> 🚩Run for your
                fines!!🚩🚩🚩
              </span>
            ) : totalPercentage < 30 ? (
              <span>
                {totalPercentage.toFixed(2)}%<br></br> Are you for real ?🚩🚩🚩
              </span>
            ) : (
              <span>
                {" "}
                {totalPercentage.toFixed(2)}%<br></br> You are in trouble!🚩
              </span>
            )}
          </p>
        </div>
        <form className="interface" onSubmit={calculateMaxAbsences}>
          <p className="daysLeft-heading">
            <strong>
              Calculate how many holidays you can take before fine.
            </strong>
          </p>
          <input
            type="text"
            placeholder="Future Total Academic days"
            className="present"
            value={futureTotalLectures}
            onChange={(e) => setFutureTotalLectures(Number(e.target.value))}
          />
          <input
            type="text"
            placeholder="Future OA Delegation"
            className="delegation"
            value={delegation}
            onChange={(e) => setDelegation(Number(e.target.value))}
          />
          <button className="absentPossible-btn">Calculate</button>
        </form>
        <div className="result absentPossible-container">
          <p className="absentPossible">
            <span>{totalPossibleAbsents - absent} Absents Possible 🚀🦺</span>
          </p>
        </div>
      </div>
    </section>
  );
}
