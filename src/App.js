import BugList from "./components/BugList";
import CreateBug from "./components/CreateBug";

function App() {
  return (
    <div>
      <h1>Bug tracker</h1>
      <BugList />
      <CreateBug />
    </div>
  );
}

export default App;
