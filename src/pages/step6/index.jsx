import React, { useState } from "react";
import { Input, Button, Checkbox, Modal, Form, message, Radio } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export function Step6() {
  const [showModal, setShowModal] = useState(false);
  const [todoList, setTodoList] = useState([
    { title: "todo1", description: "1", color: "#ffffb8", isDone: false },
    { title: "todo2", description: "2", color: "#ffffb8", isDone: false },
    { title: "todo3", description: "3", color: "#ffffb8", isDone: false },
  ]);
  const color = [
    "#ffccc7",
    "#ffd8bf",
    "#ffe7ba",
    "#fff1b8",
    "#ffffb8",
    "#f4ffb8",
    "#d9f7be",
    "#b5f5ec",
    "#bae0ff",
    "#d6e4ff",
    "#efdbff",
    "#ffd6e7",
  ];

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleHideModal = () => {
    setShowModal(false);
  };
  const handleSubmit = (e) => {
    console.log(e);
    setTodoList((pre) => [
      ...pre,
      {
        title: e.title,
        description: e.description,
        color: e.color,
        isDone: false,
      },
    ]);
    message.success("添加成功");
    setShowModal(false);
  };
  const handleChecked = (index) => {
    let temp = [...todoList];
    temp[index].isDone = !temp[index].isDone;
    setTodoList(temp);
  };
  const handleDelete = (index) => {
    let temp = todoList.filter((a, index_a) => index_a !== index);
    setTodoList(temp);
    message.success("删除成功");
  };
  return (
    <div>
      <Button onClick={handleShowModal}>添加</Button>

      <Modal
        title="添加 todo thing"
        open={showModal}
        footer={null}
        onCancel={handleHideModal}
      >
        <Form
          labelCol={{ span: 4 }}
          onFinish={handleSubmit}
          className="mt-[30px]"
        >
          <Form.Item label="Title" name="title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input />
          </Form.Item>
          <Form.Item label="Color" name="color">
            <Radio.Group>
              {color.map((item, index) => (
                <Radio value={item} key={index}>
                  <div
                    className="h-[20px] w-[20px]"
                    style={{ backgroundColor: item }}
                  />
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
          <div className="flex justify-end">
            <Form.Item className="mr-[20px]">
              <Button htmlType="submit">添加</Button>
            </Form.Item>
            <Form.Item>
              <Button onClick={handleHideModal} danger>
                取消
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>

      <div className="m-[10px]">
        {todoList.map((item, index) => (
          <div
            key={index}
            className="flex justify-between my-[10px] p-[10px] w-[30vw] rounded-[5px]"
            style={{ backgroundColor: item.color }}
          >
            <Checkbox
              className="text-[20px] font-bold"
              onChange={() => handleChecked(index)}
              checked={item.isDone}
            >
              <span className={item.isDone ? "line-through text-gray-500" : ""}>
                {item.title}
              </span>
            </Checkbox>
            <Button
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(index)}
              danger
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export const stepCode6 = `import React, { useState } from "react";
import { Input, Button, Checkbox, Modal, Form, message, Radio } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const TodoList = () => {
  const [showModal, setShowModal] = useState(false);
  const [todoList, setTodoList] = useState([
    { title: "todo1", description: "1", color: "#ffffb8", isDone: false },
    { title: "todo2", description: "2", color: "#ffffb8", isDone: false },
    { title: "todo3", description: "3", color: "#ffffb8", isDone: false },
  ]);
  const color = [
    "#ffccc7",
    "#ffd8bf",
    "#ffe7ba",
    "#fff1b8",
    "#ffffb8",
    "#f4ffb8",
    "#d9f7be",
    "#b5f5ec",
    "#bae0ff",
    "#d6e4ff",
    "#efdbff",
    "#ffd6e7",
  ];

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleHideModal = () => {
    setShowModal(false);
  };
  const handleSubmit = (e) => {
    console.log(e);
    setTodoList((pre) => [
      ...pre,
      {
        title: e.title,
        description: e.description,
        color: e.color,
        isDone: false,
      },
    ]);
    message.success("添加成功");
    setShowModal(false);
  };
  const handleChecked = (index) => {
    let temp = [...todoList];
    temp[index].isDone = !temp[index].isDone;
    setTodoList(temp);
  };
  const handleDelete = (index) => {
    let temp = todoList.filter((a, index_a) => index_a !== index);
    setTodoList(temp);
    message.success("删除成功");
  };
  return (
    <div>
      <Button onClick={handleShowModal}>添加</Button>

      <Modal
        title="添加 todo thing"
        open={showModal}
        footer={null}
        onCancel={handleHideModal}
      >
        <Form
          labelCol={{ span: 4 }}
          onFinish={handleSubmit}
          className="mt-[30px]"
        >
          <Form.Item label="Title" name="title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input />
          </Form.Item>
          <Form.Item label="Color" name="color">
            <Radio.Group>
              {color.map((item, index) => (
                <Radio value={item} key={index}>
                  <div
                    className="h-[20px] w-[20px]"
                    style={{ backgroundColor: item }}
                  />
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
          <div className="flex justify-end">
            <Form.Item className="mr-[20px]">
              <Button htmlType="submit">添加</Button>
            </Form.Item>
            <Form.Item>
              <Button onClick={handleHideModal} danger>
                取消
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>

      <div className="m-[10px]">
        {todoList.map((item, index) => (
          <div
            key={index}
            className="flex justify-between my-[10px] p-[10px] w-[30vw] rounded-[5px]"
            style={{ backgroundColor: item.color }}
          >
            <Checkbox
              className="text-[20px] font-bold"
              onChange={() => handleChecked(index)}
              checked={item.isDone}
            >
              <span className={item.isDone ? "line-through text-gray-500" : ""}>
                {item.title}
              </span>
            </Checkbox>
            <Button
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(index)}
              danger
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;`;
