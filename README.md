This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



# react-typescript


npx create-react-app react-typescript --template typescript


---

```js

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<Props> = ({ handleChange }) => {


```
  
 - React.FC
    - react functional component
- &lt;Props&gt; 
  - parameters to this function

---


npm install react-redux @types/react-redux   @reduxjs/toolkit

---

useDispatch   -  makes dispatch with each component much easier









---

---






