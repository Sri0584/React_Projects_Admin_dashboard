import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const FeaturedInfo = () => {
  return (
    <div className="featuredInfo">
      <div className="featuredItem">
        <h1 className="featured-title">Revenue</h1>
        <div className="money">
          <p>
            $2,454
            <span>
              -11.4
              <ArrowDownward className="downward" />
            </span>
          </p>
        </div>
        <p className="featured-info">Compared to last month</p>
      </div>
      <div className="featuredItem">
        <h1 className="featured-title">Sales</h1>
        <div className="money">
          <p>
            4,454
            <span>
              -1.4
              <ArrowDownward className="downward" />
            </span>
          </p>
        </div>
        <p className="featured-info">Compared to last month</p>
      </div>
      <div className="featuredItem">
        <h1 className="featured-title">Cost</h1>
        <div className="money">
          <p>
            $2,023
            <span>
              +2.1
              <ArrowUpward className="upward" />
            </span>
          </p>
        </div>
        <p className="featured-info">Compared to last month</p>
      </div>
    </div>
  );
};

export default FeaturedInfo;
