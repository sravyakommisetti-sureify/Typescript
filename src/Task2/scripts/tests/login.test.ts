import { describe, test, expect, jest, beforeEach } from "@jest/globals";
import { loginEvent, Status } from '../index'; 

const windowLocationMock = { href: '' };
Object.defineProperty(window, 'location', {
  value: windowLocationMock,
});

describe('loginEvent function', () => {
  // Mock localStorage methods
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
  };
 
  beforeEach(() => {
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
    });
    windowLocationMock.href = ''; 
  });

  test('should login a user with active status and redirect to dashboard', () => {
    const username = 'testUser';
    const password = 'testPassword';
    localStorageMock.getItem.mockReturnValueOnce(username); 
    localStorageMock.getItem.mockReturnValueOnce(password); 
    localStorageMock.getItem.mockReturnValueOnce(Status.Active); 
    loginEvent(username, password);
    expect(localStorageMock.getItem).toHaveBeenCalledTimes(3);
    expect(windowLocationMock.href).toBe('./dashboard.html');
  });

  test('should display alert for unsuccessful login', () => {
    const username = 'invalidUser';
    const password = 'invalidPassword';
    localStorageMock.getItem.mockReturnValueOnce(username);
    localStorageMock.getItem.mockReturnValueOnce(password);
    localStorageMock.getItem.mockReturnValueOnce(Status.Blocked);
    const originalAlert = window.alert;
    const alertMock = jest.fn();
    window.alert = alertMock;
    loginEvent(username, password);
    expect(localStorageMock.getItem).toHaveBeenCalledTimes(3);
    expect(alertMock).toHaveBeenCalledWith('Login unsucessful');
    window.alert = originalAlert;
  });


});
