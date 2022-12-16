import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  const buttonHandler = () => {
    console.log('click');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <Button onClick={buttonHandler} primary rounded outline>
          <GoBell />
          Primary!
        </Button>
      </div>
      <div>
        <Button secondary className="mb-5">
          Secondary
        </Button>
      </div>
      <div>
        <Button success rounded>
          <GoDatabase />
          Success
        </Button>
      </div>
      <div>
        <Button warning>Warning</Button>
      </div>
      <div>
        <Button danger outline rounded>
          <GoCloudDownload />
          Danger
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
