function App(){
  const x="harini";
  const a=10;
  const b=20;
  const res=true;
  function hello(){
    return "hello world!";
  }
  return(
    <div>
      <h1>Hello {x}</h1>
      <h1>addition: {a+b}</h1>
      <h1>{res?"login":"register"}</h1>
      <h1>{hello()}</h1>
    </div>
  );
}
export default App