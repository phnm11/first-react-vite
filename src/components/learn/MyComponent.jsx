import './style.css'

const MyComponent = () => {
  // const name = "nam";
  // const name = 24;
  // const name = true;
  // const name = undefined;
  // const name = null;

  const name = [1, 2, 3]
  // const name = {
  //   name: "nam",
  //   age: 12
  // }
  return (
    <>
      <div>{JSON.stringify(name)} React</div>
      <div>{console.log("HELLO")}</div>
      <div className="child"
        style={{ borderRadius: "10px" }}>child</div>
    </>
  );
}

export default MyComponent;