import React, { useState, useRef } from "react";
import {Editor, DiaryList} from "./components";

function App() {
  const [data, setData] = useState([]);
  const dataID = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataID.current,
    }
    dataID.current += 1;
    setData([newItem, ...data]);
  }

  return (
    <div className="App">
      <Editor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
