import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button primary rounded outline>
          Click Me!
        </Button>
      </div>
      <div>
        <Button primary>Buy Now!</Button>
      </div>
      <div>
        <Button warning>Ok</Button>
      </div>
      <div>
        <Button danger>No</Button>
      </div>
      <div>
        <Button secondary rounded>
          Never Show
        </Button>
      </div>
    </div>
  );
}

export default App;
