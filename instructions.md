# Instructions  

  We are now know how to create functions one argument:
  ```javascript
  function double(number) {
    // number is an argument 
    const sum = number * 2;
    return sum;
  }
  ```
  Now, we are going to create a function with two arguments: `add` function

  ## Steps
  1. Create a function `add` with two arguments `x` & `y` and return its sum.
  ```javascript
  function add(x, y) {
    // x and y are arguments. To have 2 arguments,
    // you separate them with a comma (,)
    const sum = x + y;
    return sum;
  }
  ```
  2. Create variable `added` and assign to function `add` with arguments `(1, 2)`
  ```javascript
  const added = add(1, 2);
  ```
  3. console.log `added` and run code. 

  ```javascript
  console.log(added);
  ```

  Console should look like this: 

  ```
  3
  ```

<details>
<summary>Full Add Function</summary>

```javascript
function add(x, y) {
  // x and y are arguments. To have 2 arguments,
  // you separate them with a comma (,)
  const sum = x + y;
  return sum;
}
const added = add(1, 2);
console.log(added);
```

</details>

## Practice

  1. Create a function `subtract` with two arguments `x` & `y` and return its difference.
  
  2. Create variable `subtracted` and assign to function `subtract` with arguments `(1, 2)`.

  3. console.log `subtracted` and run code. 

  Console should look like this: 

  ```
  3
  -1
  ```
  <details>
<summary>Answer: Subtract Function</summary>

```javascript
// Subtract function
function subtract(x, y) {
  const diff = x - y;
  return diff;
}
const subtracted = subtract(1, 2);
console.log(subtracted);
```

</details>

  ## Practice more
  1. Create a function `divide` with two arguments `x` & `y` and return the quotient.
  
  2. Create variable `divided` and assign to function `divide` with arguments `(1, 2)`.

  3. console.log `divided` and run code. 

  Console should look like this: 

  ```
  3
  -1
  0.5
  ```
<details>
<summary>Answer: Divide Function</summary>

```javascript
// Divide function
function divide(x, y) {
  const quotient = x / y;
  return quotient;
}
const divided = divide(1, 2);
console.log(divided);
```

</details>

  ## Practice even more
  1. Create a function `multiply` with two arguments `x` & `y` and return its product.
  
  2. Create variable `multiplied` and assign to function `multiply` with arguments `(1, 2)`.

  3. console.log `multiplied` and run code.

  Console should look like this: 

  ```
  3
  -1
  0.5
  2
  ```
  
  <details>
<summary>Answer: Multiply Function</summary>

```javascript
// Multiply function
function multiply(x, y) {
  const product = x * y;
  return product;
}
const multiplied = multiply(1, 2);
console.log(multiplied);
```

</details>