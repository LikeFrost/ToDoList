import React, { useState } from "react";
import { Input, Button, List, Checkbox } from "antd";

export function Step5() {
  const [inputValue, setInputValue] = useState();
  const [todoList, setTodoList] = useState([
    { title: "todo1", isDone: false },
    { title: "todo2", isDone: false },
    { title: "todo3", isDone: false },
  ]);
  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = () => {
    setTodoList((pre) => [...pre, { title: inputValue, isDone: false }]);
  };
  const handleChecked = (index) => {
    let temp = [...todoList];
    temp[index].isDone = !temp[index].isDone;
    setTodoList(temp);
  };
  const handleDelete = (index) => {
    let temp = todoList.filter((a, index_a) => index_a !== index);
    setTodoList(temp);
  };
  return (
    <div>
      <div className="flex">
        <Input className="mr-[10px]" onChange={handleChangeInput} />
        <Button onClick={handleSubmit}>添加</Button>
      </div>
      <List className="m-[10px]">
        {todoList.map((item, index) => (
          <List.Item>
            <div key={index} className="flex justify-between w-[100%]">
              <Checkbox
                className="text-[20px] font-bold"
                onChange={() => handleChecked(index)}
                checked={item.isDone}
              >
                <span
                  className={item.isDone ? "line-through text-gray-500" : ""}
                >
                  {item.title}
                </span>
              </Checkbox>
              <Button danger onClick={() => handleDelete(index)}>
                删除
              </Button>
            </div>
          </List.Item>
        ))}
      </List>
    </div>
  );
}
export const stepCode5 = `import React, { useState } from "react";
import { Input, Button, List, Checkbox } from "antd";

const TodoList = () => {
  const [inputValue, setInputValue] = useState();
  const [todoList, setTodoList] = useState([
    { title: "todo1", isDone: false },
    { title: "todo2", isDone: false },
    { title: "todo3", isDone: false },
  ]);
  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = () => {
    setTodoList((pre) => [...pre, { title: inputValue, isDone: false }]);
  };
  const handleChecked = (index) => {
    let temp = [...todoList];
    temp[index].isDone = !temp[index].isDone;
    setTodoList(temp);
  };
  const handleDelete = (index) => {
    let temp = todoList.filter((a, index_a) => index_a !== index);
    setTodoList(temp);
  };
  return (
    <div>
      <div className="flex">
        <Input className="mr-[10px]" onChange={handleChangeInput} />
        <Button onClick={handleSubmit}>添加</Button>
      </div>
      <List className="m-[10px]">
        {todoList.map((item, index) => (
          <List.Item>
            <div key={index} className="flex justify-between w-[100%]">
              <Checkbox
                className="text-[20px] font-bold"
                onChange={() => handleChecked(index)}
                checked={item.isDone}
              >
                <span
                  className={item.isDone ? "line-through text-gray-500" : ""}
                >
                  {item.title}
                </span>
              </Checkbox>
              <Button danger onClick={() => handleDelete(index)}>
                删除
              </Button>
            </div>
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default TodoList;`;
