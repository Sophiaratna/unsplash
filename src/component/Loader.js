import { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <PulseLoader size={10} color={"#36D7B7"} loading={loading} margin={10} />
    </>
  );
};

export default Loader;
