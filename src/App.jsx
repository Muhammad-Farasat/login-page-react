import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./Components/Form/Form";

function App() {
  return (
    <>
      <div className="main  100vh">
        <div className="d-flex flex-column justify-content-center align-items-center text-white">
          <h1>Sign in</h1>
          <p className="mt-4">Sign in and start managing your candidates!</p>
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
