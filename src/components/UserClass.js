import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "DummyData",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/lokeshpandita");
    const json = await data.json();

    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    // const { name } = json;
    return (
      <div className="user-card">
        <h2 className="font-bold">Name: {this.state.userInfo.name}</h2>
        <h2 className="font-bold">
          Joined on: {this.state.userInfo.created_at}
        </h2>
        <h2 className="">AVATAR:</h2>
        <img
          className="img rounded-xl"
          src={this.state.userInfo.avatar_url}
        ></img>
      </div>
    );
  }
}
export default UserClass;
