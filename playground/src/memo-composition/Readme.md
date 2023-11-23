# Use of Composition over React.memo

To stop unnecessary re-renders of the child components we have many options. `Composition` and `React.memo` are two of these.



## Composition

``` javascript
      <MemoComposition>
        <Child color="blue" />
      </MemoComposition> 
```

 `MemoComposition.tsx`

``` javascript
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>
        <h4>Counter: {counter}</h4>
        <button onClick={() => setCounter((counter) => counter + 1)}>
          Increment Counter
        </button>
      </div>
      <div>{children}</div>
    </>
  );
```
**React renders props only if they change**  Since `children` dont change if a State in `MemoComposition` changes

------------------

## Memoization - `React.memo`

`MemoAlone.tsx`

``` javascript
 const [counter, setCounter] = useState(0);

  return (
    <>
      <div>
        <h4>Counter: {counter}</h4>
        <button onClick={() => setCounter((counter) => counter + 1)}>
          Increment Counter
        </button>
      </div>

      <div>
        <MemoedChild color="blue" />
      </div>
    </>
  );
```

This works well if `Child`
1.  renders often
2.  re-renders with same props.
3. is a medium  or big  size UI component

Since `React.memo` only cares about `prevProps` and `nextProps`, if `props` change often then it wont be helpful to use `React.memo`.  

#### Why to avoid- if it doesnot render with same props.

1. Invokes the comparison function to determine whether the previous and next props are equal
2. Because props comparison almost always returns false, React performs the diff of previous and current render results
You gain no performance benefits, have more complex code (than the non-memoized version), and also run the comparison function.


**Although React avoids rendering a memoized component in most situations, you shouldn't count on it to prevent rendering.**