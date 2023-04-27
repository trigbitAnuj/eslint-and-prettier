const Func = () => {
  function myFunc(name) {
    console.log(name);
    return name;
  }

  return (
    <>
      <div>Func</div>
      <button
        onClick={() => {
          myFunc('Anuj');
        }}
      >
        Clickme
      </button>
    </>
  );
};
export default Func;
