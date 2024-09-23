/*
 * Add two numbers. If b is not provided, assign b to 0.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The sum of a and b as a number
 */
export const addTwoNumbers = (a: number, b?: number): number => {
  // if parameter "b" hasn't been entered, set it equal to 0
  if (typeof b == "undefined") {
    b = 0
  }
  return a + b;
};

// /**
//  * Calculates the total sum of an array of numbers.https://chatgpt.com/
//  * @param values - An array of numbers or strings.
//  * @returns The sum of the numbers.
//  */
export const sumArray = (numbers: (number | string)[]): number => {
  // so, this function takes a parameter called "numbers" which takes an array, as indicated by []
  // (number | string) means that the elements of the array can be either numbers or strings
  // iterate through every element of numbers and convert it to an actual number
  const numbers_converted: number[] = numbers.map((item) => Number(item))
  return numbers_converted.reduce((acc, curr) => acc + curr, 0);
};

// Create type "Person" with the following properties:
// - name: string
// - age: number
export type Person = {
  name: string;
  age: number;
};

// Create type "User" which extends "Person" and adds the following properties:
// - type: 'user' (literal type)
export type User = Person & {type: "user"}

// Create type "Admin" which extends "Person" and adds the following properties:
// - isSuperAdmin: boolean
export type Admin = Person & {isSuperAdmin: boolean}

// Create a type "AllPeople" which is a union of "Person", "User", and "Admin"
export type AllPeople = Person | User | Admin;

// Add function "isAdmin" that returns true if "u" is an admin
export const isAdmin = (u: AllPeople): boolean => {
  // check if there's an element in u called "isSuperAdmin"
  // if it exists, return true
  if ("isSuperAdmin" in u) {
    return true;
  }
  else {
    return false;
  }
};

// Add function "isUser" that returns true if "u" is a user
export const isUser = (u: AllPeople): boolean => {
  // check if there's an element in u called "type"
  // if so, return true
  if ("type" in u) {
    return true;
  }
  else {
    return false
  }
};

/**
 * If a "Admin" calls userGreetingMessage, return "Hello, {name}. You are an admin."
 * If a "User" calls userGreetingMessage, return "Hello, {name}. You are a user."
 * If a "Person" calls userGreetingMessage, return "Hello, {name}. You do not have access."
 * @param user - The user to greet
 * @returns A greeting message
 */
export const userGreetingMessage = (u: AllPeople): string => {
  if (isAdmin(u) == true) {
    console.log(u.name)
    return `Hello, ${u.name}. You are an admin.`;
  }
  else if (isUser(u) == true){
    return `Hello, ${u.name}. You are a user.`;
  }
  else {
    return `Hello, ${u.name}. You do not have access.`;
  }
};
