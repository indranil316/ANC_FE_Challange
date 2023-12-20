import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div className="w-100 vh-100 d-flex align-items-center justify-content-center">
      <Spinner animation="border" role="status">
        <span className="sr-only"></span>
      </Spinner>
      <p className='mb-0 mx-2'>Loading...</p>
    </div>
  );
};

export default Loading;
