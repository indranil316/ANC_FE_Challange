import { Container, Alert } from 'react-bootstrap';

interface ErrorPageProps{
    variation: 'danger' | 'info';
    heading: string;
    text: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({variation, heading, text}) => {
  return (
    <Container className="mt-5">
      <Alert variant={variation}>
        <Alert.Heading>{heading}</Alert.Heading>
        <p>{text}</p>
        <hr />
        <p className="mb-0">Please try again later.</p>
      </Alert>
    </Container>
  );
};

export default ErrorPage;
