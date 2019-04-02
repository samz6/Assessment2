import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import App from "../pages/app";
import Room from "../pages/Room";
import Room_Count from "../pages/Room_Count";

describe("With Enzyme", () => {
  it("Room should render", () => {
    const room = shallow(
      <Room
        room={{}}
        checkHandler={() => {}}
        roomCountChangeHandler={() => {}}
      />
    );
    expect(room).toMatchSnapshot();
  });
});
