import { useState } from "react";
import { SketchPicker } from "react-color";

function App() {
  const [Color, setColor] = useState("#414141");
  const [show, setShow] = useState(false);

  function changeBgColor(color) {
    setColor(() => color.hex || color);
  }

  function handelonoff() {
    setShow(!show);
  }
  return (
    <div
      className="w-full h-screen duration-500"
      style={{ backgroundColor: Color }}
    >
      <div class="flex justify-center">
        <h1 class="mb-4 font-extrabold leading-none tracking-tight text-4xl text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          DYNAMIC COLOR PICKER
        </h1>
      </div>

      {show && (
        <div className="flex flex-wrap justify-center py-20">
          <SketchPicker
            disableAlpha={true}
            color={Color}
            onChangeComplete={changeBgColor}
          />
        </div>
      )}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 px-3 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full  text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => changeBgColor("Red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full  text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => changeBgColor("Blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full  text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => changeBgColor("Green")}
          >
            Green
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handelonoff}
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
