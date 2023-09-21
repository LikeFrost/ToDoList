import React, { useEffect, useState } from "react";
import { Steps } from "antd";
import Prism from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-bash";
import "prismjs/themes/prism-tomorrow.css";
import { Step1, stepCode1 } from "./step1";
import { Step2, stepCode2 } from "./step2";
import { Step3, stepCode3 } from "./step3";
import { Step4, stepCode4 } from "./step4";
import { Step5, stepCode5 } from "./step5";
import { Step6, stepCode6 } from "./step6";

const Content = ({ code, language, children }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="flex px-[50px]">
      <div className="w-[50vw]">
        <pre className="max-h-[70vh]">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
      <div className="flex w-[40vw] border-[1px] border-solid border-[#13c2c2] rounded-[5px] p-[20px] ml-[50px] max-h-[70vh] overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

const steps = [
  {
    title: "Step1",
    description: "使用脚手架搭建第一个 React 项目",
    content: <Content code={stepCode1} language="bash" children={<Step1 />} />,
  },
  {
    title: "Step2",
    content: (
      <Content code={stepCode2} language="javascript" children={<Step2 />} />
    ),
    description: "新建 TodoList 组件",
  },
  {
    title: "Step3",
    content: (
      <Content code={stepCode3} language="javascript" children={<Step3 />} />
    ),
    description: "添加输入框并展示 list",
  },
  {
    title: "Step4",
    content: (
      <Content code={stepCode4} language="javascript" children={<Step4 />} />
    ),
    description: "加点样式",
  },
  {
    title: "Step5",
    content: (
      <Content code={stepCode5} language="javascript" children={<Step5 />} />
    ),
    description: "添加交互",
  },
  {
    title: "Step6",
    content: (
      <Content code={stepCode6} language="javascript" children={<Step6 />} />
    ),
    description: "再多一点点",
  },
];

const stepsConfig = steps.map((item) => ({
  key: item.title,
  title: item.title,
  description: item.description,
}));

function TodoListDemo() {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    setCurrent(value);
  };

  return (
    <div>
      <div className="p-[50px] ">
        <Steps current={current} items={stepsConfig} onChange={onChange} />
      </div>
      <div>{steps[current].content}</div>
    </div>
  );
}

export default TodoListDemo;
