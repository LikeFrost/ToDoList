import "./App.css";
import TodoListDemo from "./pages";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#5cdbd3",
          borderRadius: 2,
        },
      }}
    >
      <TodoListDemo />
    </ConfigProvider>
  );
}

export default App;
