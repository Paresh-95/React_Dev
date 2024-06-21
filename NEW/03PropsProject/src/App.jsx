import "./App.css";
import Card from "./components/Card";
import Sdata from "./components/Sdata";


function App() {

  function ncard(val) {
    return (

      <Card
        key={val.Id}
        imgSrc={val.imgSrc}
        mName={val.mName}
        Ref={val.Ref}
        info2={val.info2}
        YRef={val.YRef}
      />
    );
  }

  return (
    <>
      <div className="heading">
        <h1 className="heading-title">Movies Recommendation</h1>
      </div>
      <div className="align">{Sdata.map(ncard)}</div>
    </>
  );
}

export default App;
