import React from "react";

export function Step3() {
  return (
    <div>
      <input />
      <button>添加</button>
      <li>todo1</li>
      <li>todo2</li>
      <li>……</li>
    </div>
  );
}
export const stepCode3 = `import React from "react";

const TodoList = () => {
  return (
    <div>
      <input />
      <button>添加</button>
      <li>todo1</li>
      <li>todo2</li>
      <li>……</li>
    </div>
  );
}

export default TodoList;`;
