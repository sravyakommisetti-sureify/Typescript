import { describe, test, expect, jest, beforeEach } from "@jest/globals";
import { loginEvent, signupEvent, Status } from "..";

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

beforeEach(() => {
  Object.defineProperty(window, "localStorage", {
    value: localStorageMock,
  });
});

describe("User Signup", () => {
  test("should sign up a user with active status", () => {
    const username = "testUser";
    const password = "testPassword";
    signupEvent(username, password);
    expect(localStorageMock.setItem).toHaveBeenCalledTimes(3);
    expect(localStorageMock.setItem).toHaveBeenCalledWith("username", username);
    expect(localStorageMock.setItem).toHaveBeenCalledWith("password", password);
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      "status",
      Status.Active
    );
  });
});
