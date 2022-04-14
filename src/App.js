import './App.css';
import {Editor, DiaryList} from "./components";

const dummyList = [
  {
    id: 1,
    author: "Kyoo1",
    content: "hi 1",
    emotion: 1,
    created_date: new Date().getTime()
  },
  {
    id: 2,
    author: "Kyoo3",
    content: "hi 3",
    emotion: 2,
    created_date: new Date().getTime()
  },
  {
    id: 3,
    author: "Kyoo3",
    content: "hi 3",
    emotion: 3,
    created_date: new Date().getTime()
  },
]


function App() {
  return (
    <div className="App">
      <Editor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
