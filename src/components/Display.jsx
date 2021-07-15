import { calcAvgHonor, calcAvgRank, calcSumComp } from "../utils/calc";

function Display({ list }) {
  return (
    <div className="row">
      <div className="col-4 card">
        <div className="card-body">
          <h6>AVG Honor: {calcAvgHonor(list)}</h6>
        </div>
      </div>
      <div className="col-4 card">
        <div className="card-body">
          <h6>AVG Rank: {calcAvgRank(list)}</h6>
        </div>
      </div>
      <div className="col-4 card">
        <div className="card-body">
          <h6>Sum Comp: {calcSumComp(list)}</h6>
        </div>
      </div>
    </div>
  );
}

export default Display;
