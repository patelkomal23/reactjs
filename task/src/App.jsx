import React from "react";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center">Task Management</h2>
            <form method="post">
              <input
                type="text"
                className="w-100 mt-5 form-control text-center"
              />
            </form>
          </div>
        </div>
        <div className="container text-center">
          <div className="row mt-3">
            <button className="col btn btn-secondary mx-2 ">Html-css</button>
            <button className="col btn btn-secondary mx-2 ">Bootstrap</button>
            <button className="col btn btn-secondary mx-2 ">React</button>
            <button className="col btn btn-secondary mx-2 ">Node</button>
          </div>
        </div>
        <button className="btn btn-primary mt-4">Add Task</button>
      </div>
    </>
  );
}

export default App;