```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: This effect runs only when the component mounts and unmounts.
    console.log('Effect running!');
    return () => {
      // Cleanup function (optional): Runs when the component unmounts or when the effect changes.
      console.log('Effect cleaning up!');
    };
  }, []); // Empty dependency array ensures the effect runs only once.

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```