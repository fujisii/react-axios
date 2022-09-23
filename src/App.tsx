import "./styles.css";

import AxiosPost from "./axios/post";
import AxiosPut from "./axios/put";
import AxiosDelete from "./axios/delete";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* <AxiosPost /> */}
      {/* <AxiosPut /> */}
      <AxiosDelete />
    </div>
  );
}
