import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    console.log('what');
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>asdfasdfa asdfasdf asdfasdfasdf</p>
    </Modal>
  );

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit
        interdum erat sit amet fringilla. Quisque hendrerit accumsan libero ut
        interdum. Etiam a sapien non turpis tincidunt porttitor. Phasellus
        pretium tortor non fringilla lacinia. Fusce leo massa, condimentum in
        iaculis vitae, accumsan vitae quam. Suspendisse quis vulputate odio.
        Morbi vitae mollis tellus, in sodales sapien. Aliquam diam libero,
        consectetur nec mattis in, sagittis tristique libero. Etiam sodales,
        enim in euismod molestie, tortor odio rhoncus orci, sit amet rhoncus
        nibh felis tempus risus. Quisque luctus malesuada malesuada. Quisque
        eget iaculis ipsum. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Donec nec ullamcorper felis,
        nec cursus leo. Donec finibus nulla nec neque dapibus, sit amet dapibus
        nulla eleifend. Praesent a nisl eros. Donec ultrices justo dolor, quis
        tincidunt metus volutpat eget.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit
        interdum erat sit amet fringilla. Quisque hendrerit accumsan libero ut
        interdum. Etiam a sapien non turpis tincidunt porttitor. Phasellus
        pretium tortor non fringilla lacinia. Fusce leo massa, condimentum in
        iaculis vitae, accumsan vitae quam. Suspendisse quis vulputate odio.
        Morbi vitae mollis tellus, in sodales sapien. Aliquam diam libero,
        consectetur nec mattis in, sagittis tristique libero. Etiam sodales,
        enim in euismod molestie, tortor odio rhoncus orci, sit amet rhoncus
        nibh felis tempus risus. Quisque luctus malesuada malesuada. Quisque
        eget iaculis ipsum. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Donec nec ullamcorper felis,
        nec cursus leo. Donec finibus nulla nec neque dapibus, sit amet dapibus
        nulla eleifend. Praesent a nisl eros. Donec ultrices justo dolor, quis
        tincidunt metus volutpat eget.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit
        interdum erat sit amet fringilla. Quisque hendrerit accumsan libero ut
        interdum. Etiam a sapien non turpis tincidunt porttitor. Phasellus
        pretium tortor non fringilla lacinia. Fusce leo massa, condimentum in
        iaculis vitae, accumsan vitae quam. Suspendisse quis vulputate odio.
        Morbi vitae mollis tellus, in sodales sapien. Aliquam diam libero,
        consectetur nec mattis in, sagittis tristique libero. Etiam sodales,
        enim in euismod molestie, tortor odio rhoncus orci, sit amet rhoncus
        nibh felis tempus risus. Quisque luctus malesuada malesuada. Quisque
        eget iaculis ipsum. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Donec nec ullamcorper felis,
        nec cursus leo. Donec finibus nulla nec neque dapibus, sit amet dapibus
        nulla eleifend. Praesent a nisl eros. Donec ultrices justo dolor, quis
        tincidunt metus volutpat eget.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit
        interdum erat sit amet fringilla. Quisque hendrerit accumsan libero ut
        interdum. Etiam a sapien non turpis tincidunt porttitor. Phasellus
        pretium tortor non fringilla lacinia. Fusce leo massa, condimentum in
        iaculis vitae, accumsan vitae quam. Suspendisse quis vulputate odio.
        Morbi vitae mollis tellus, in sodales sapien. Aliquam diam libero,
        consectetur nec mattis in, sagittis tristique libero. Etiam sodales,
        enim in euismod molestie, tortor odio rhoncus orci, sit amet rhoncus
        nibh felis tempus risus. Quisque luctus malesuada malesuada. Quisque
        eget iaculis ipsum. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Donec nec ullamcorper felis,
        nec cursus leo. Donec finibus nulla nec neque dapibus, sit amet dapibus
        nulla eleifend. Praesent a nisl eros. Donec ultrices justo dolor, quis
        tincidunt metus volutpat eget.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit
        interdum erat sit amet fringilla. Quisque hendrerit accumsan libero ut
        interdum. Etiam a sapien non turpis tincidunt porttitor. Phasellus
        pretium tortor non fringilla lacinia. Fusce leo massa, condimentum in
        iaculis vitae, accumsan vitae quam. Suspendisse quis vulputate odio.
        Morbi vitae mollis tellus, in sodales sapien. Aliquam diam libero,
        consectetur nec mattis in, sagittis tristique libero. Etiam sodales,
        enim in euismod molestie, tortor odio rhoncus orci, sit amet rhoncus
        nibh felis tempus risus. Quisque luctus malesuada malesuada. Quisque
        eget iaculis ipsum. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Donec nec ullamcorper felis,
        nec cursus leo. Donec finibus nulla nec neque dapibus, sit amet dapibus
        nulla eleifend. Praesent a nisl eros. Donec ultrices justo dolor, quis
        tincidunt metus volutpat eget.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit
        interdum erat sit amet fringilla. Quisque hendrerit accumsan libero ut
        interdum. Etiam a sapien non turpis tincidunt porttitor. Phasellus
        pretium tortor non fringilla lacinia. Fusce leo massa, condimentum in
        iaculis vitae, accumsan vitae quam. Suspendisse quis vulputate odio.
        Morbi vitae mollis tellus, in sodales sapien. Aliquam diam libero,
        consectetur nec mattis in, sagittis tristique libero. Etiam sodales,
        enim in euismod molestie, tortor odio rhoncus orci, sit amet rhoncus
        nibh felis tempus risus. Quisque luctus malesuada malesuada. Quisque
        eget iaculis ipsum. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Donec nec ullamcorper felis,
        nec cursus leo. Donec finibus nulla nec neque dapibus, sit amet dapibus
        nulla eleifend. Praesent a nisl eros. Donec ultrices justo dolor, quis
        tincidunt metus volutpat eget.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit
        interdum erat sit amet fringilla. Quisque hendrerit accumsan libero ut
        interdum. Etiam a sapien non turpis tincidunt porttitor. Phasellus
        pretium tortor non fringilla lacinia. Fusce leo massa, condimentum in
        iaculis vitae, accumsan vitae quam. Suspendisse quis vulputate odio.
        Morbi vitae mollis tellus, in sodales sapien. Aliquam diam libero,
        consectetur nec mattis in, sagittis tristique libero. Etiam sodales,
        enim in euismod molestie, tortor odio rhoncus orci, sit amet rhoncus
        nibh felis tempus risus. Quisque luctus malesuada malesuada. Quisque
        eget iaculis ipsum. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Donec nec ullamcorper felis,
        nec cursus leo. Donec finibus nulla nec neque dapibus, sit amet dapibus
        nulla eleifend. Praesent a nisl eros. Donec ultrices justo dolor, quis
        tincidunt metus volutpat eget.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit
        interdum erat sit amet fringilla. Quisque hendrerit accumsan libero ut
        interdum. Etiam a sapien non turpis tincidunt porttitor. Phasellus
        pretium tortor non fringilla lacinia. Fusce leo massa, condimentum in
        iaculis vitae, accumsan vitae quam. Suspendisse quis vulputate odio.
        Morbi vitae mollis tellus, in sodales sapien. Aliquam diam libero,
        consectetur nec mattis in, sagittis tristique libero. Etiam sodales,
        enim in euismod molestie, tortor odio rhoncus orci, sit amet rhoncus
        nibh felis tempus risus. Quisque luctus malesuada malesuada. Quisque
        eget iaculis ipsum. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Donec nec ullamcorper felis,
        nec cursus leo. Donec finibus nulla nec neque dapibus, sit amet dapibus
        nulla eleifend. Praesent a nisl eros. Donec ultrices justo dolor, quis
        tincidunt metus volutpat eget.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit
        interdum erat sit amet fringilla. Quisque hendrerit accumsan libero ut
        interdum. Etiam a sapien non turpis tincidunt porttitor. Phasellus
        pretium tortor non fringilla lacinia. Fusce leo massa, condimentum in
        iaculis vitae, accumsan vitae quam. Suspendisse quis vulputate odio.
        Morbi vitae mollis tellus, in sodales sapien. Aliquam diam libero,
        consectetur nec mattis in, sagittis tristique libero. Etiam sodales,
        enim in euismod molestie, tortor odio rhoncus orci, sit amet rhoncus
        nibh felis tempus risus. Quisque luctus malesuada malesuada. Quisque
        eget iaculis ipsum. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Donec nec ullamcorper felis,
        nec cursus leo. Donec finibus nulla nec neque dapibus, sit amet dapibus
        nulla eleifend. Praesent a nisl eros. Donec ultrices justo dolor, quis
        tincidunt metus volutpat eget.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit
        interdum erat sit amet fringilla. Quisque hendrerit accumsan libero ut
        interdum. Etiam a sapien non turpis tincidunt porttitor. Phasellus
        pretium tortor non fringilla lacinia. Fusce leo massa, condimentum in
        iaculis vitae, accumsan vitae quam. Suspendisse quis vulputate odio.
        Morbi vitae mollis tellus, in sodales sapien. Aliquam diam libero,
        consectetur nec mattis in, sagittis tristique libero. Etiam sodales,
        enim in euismod molestie, tortor odio rhoncus orci, sit amet rhoncus
        nibh felis tempus risus. Quisque luctus malesuada malesuada. Quisque
        eget iaculis ipsum. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Donec nec ullamcorper felis,
        nec cursus leo. Donec finibus nulla nec neque dapibus, sit amet dapibus
        nulla eleifend. Praesent a nisl eros. Donec ultrices justo dolor, quis
        tincidunt metus volutpat eget.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit
        interdum erat sit amet fringilla. Quisque hendrerit accumsan libero ut
        interdum. Etiam a sapien non turpis tincidunt porttitor. Phasellus
        pretium tortor non fringilla lacinia. Fusce leo massa, condimentum in
        iaculis vitae, accumsan vitae quam. Suspendisse quis vulputate odio.
        Morbi vitae mollis tellus, in sodales sapien. Aliquam diam libero,
        consectetur nec mattis in, sagittis tristique libero. Etiam sodales,
        enim in euismod molestie, tortor odio rhoncus orci, sit amet rhoncus
        nibh felis tempus risus. Quisque luctus malesuada malesuada. Quisque
        eget iaculis ipsum. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Donec nec ullamcorper felis,
        nec cursus leo. Donec finibus nulla nec neque dapibus, sit amet dapibus
        nulla eleifend. Praesent a nisl eros. Donec ultrices justo dolor, quis
        tincidunt metus volutpat eget.
      </p>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
