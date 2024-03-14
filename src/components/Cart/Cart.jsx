import PropTypes from "prop-types";
import { totalCredits } from "../../App";

const Cart = ({ crts }) => {
  const crdts = crts.reduce(
    (previousCredit, currentCredit) => previousCredit + currentCredit.credit,
    0
  );
  return (
    <main className="w-11/12 mx-auto lg:w-3/12">
      <div className="bg-sky-50 p-8 rounded-xl">
        <p className="text-[#2F80ED] text-xl font-bold">
          Credit Hour Remaining {totalCredits - crdts} hrs
        </p>
        <div className="divider"></div>
        <div>
          <h2 className="text-xl font-extrabold my-4">Course Name</h2>
          <ul className="font-bold space-y-2">
            {crts.map((cart, idx) => (
              <li key={idx}>{cart.name}</li>
            ))}
          </ul>
        </div>
        <div className="divider"></div>
        <div>
          <h2 className="font-bold text-xl">Total Credit Hour:{crdts}</h2>
        </div>

        <div className="divider"></div>
        <div>
          <h2 className="font-bold text-xl">
            Total Price:{" "}
            {crts.reduce(
              (previousCredit, currentCredit) =>
                previousCredit + currentCredit.price,
              0
            )}{" "}
            USD
          </h2>
        </div>
      </div>
    </main>
  );
};
Cart.propTypes = {
  crts: PropTypes.array,
};
export default Cart;
