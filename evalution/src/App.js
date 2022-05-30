import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination } from "./Components/Pagination";
import { useState } from "react";
import Eye from "../src/Components/eye.svg";
import "./App.css"
function App() {
  const [type, setType] = useState("password");
  const [value, setValue] = useState();
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const rightLogoOnClick = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  return (
    <div className="container">
      <Input
        onChange={onChange}
        type={type}
        size="xl"
        variant="filled"
        rightLogoOnClick={rightLogoOnClick}
        rightLogo={Eye}
        className="img"
      />

      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbxXS9a_MgPIDoLmBYEx0DX6awijSTy81QiA&usqp=CAU"
        alt=""
        borderRadius={100}
        width={150}
        height={150}
        fit="cover"
      />

      <Pagination total={20} selected={0} />
      <hr/>
    </div>
  );
}

export default App;
