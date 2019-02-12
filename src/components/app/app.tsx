import * as React from "react";

import { IMessageConsumer } from "src/types";

class App extends React.Component<IMessageConsumer, {}> {
  public render() {
    return (
      <div>
        <h1>Welcome to React with Typescript</h1>
        <p>Message: {this.props.message}</p>
      </div>
    );
  }
}

export default App;
