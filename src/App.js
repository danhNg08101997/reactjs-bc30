import Databinding from "./Databinding/Databinding";
import DemoClass from "./Components/DemoClass";
import DemoFunction from "./Components/DemoFunction";
import Home from "./Components/Home/Home";
import HandleEvent from "./HandleEvent/HandleEvent";
import DemoState from "./State/DemoState";
import StyleRender from "./StyleRender/StyleRender";
import BaiTapState from "./State/BaiTapState";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import BaiTapRenderWithMap from "./RenderWithMap/BaiTapRenderWithMap";
import BaiTapThuKinh from "./RenderWithMap/BaiTapThuKinh";

//component
function App() {
  return (
    <div className="App">
      {/* <DemoClass /> */}
      {/* <DemoFunction /> */}
      {/* <DemoFunction></DemoFunction> */}
      {/* <Home/> */}
      {/* <Databinding /> */}
      {/* <HandleEvent /> */}
      {/* <DemoState /> */}
      {/* <StyleRender /> */}
      {/* <BaiTapState /> */}
      {/* <RenderWithMap/> */}
      {/* <BaiTapRenderWithMap /> */}
      <BaiTapThuKinh />
    </div>
  );
}

export default App;
