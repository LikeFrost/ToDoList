import React from "react";
import { Input, Button, List } from "antd";

export function Step4() {
  return (
    <div>
      <div className="flex">
        <Input className="mr-[10px]" />
        <Button>添加</Button>
      </div>
      <List className="m-[10px]">
        <List.Item>
          <div className="text-[20px] font-bold">todo1</div>
        </List.Item>
        <List.Item>
          <div className="text-[20px] font-bold">todo2</div>
        </List.Item>
        <List.Item>
          <div className="text-[20px] font-bold">……</div>
        </List.Item>
      </List>
    </div>
  );
}
export const stepCode4 = `import React from "react";
import { Input, Button, List } from "antd";

const TodoList = () => {
  return (
    <div>
      <div className="flex">
        <Input className="mr-[10px]" />
        <Button>添加</Button>
      </div>
      <List className="m-[10px]">
        <List.Item>
          <div className="text-[20px] font-bold">todo1</div>
        </List.Item>
        <List.Item>
          <div className="text-[20px] font-bold">todo2</div>
        </List.Item>
        <List.Item>
          <div className="text-[20px] font-bold">……</div>
        </List.Item>
      </List>
    </div>
  );
}

export default TodoList;`;
