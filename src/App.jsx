import { useEffect } from "react";

function App() {
  useEffect(() => {
    const csInterface = new window.CSInterface();
  }, []);

  const handleButtonClick = () => {
    const csInterface = new window.CSInterface();
    csInterface.evalScript("addSolidLayer()");
  };

  return (
    <div>
      <h1>After Effects Extension</h1>
      <button onClick={handleButtonClick}>Add Red Solid</button>
    </div>
  );
}

export default App;
