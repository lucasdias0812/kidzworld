import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicSample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.dooca.store/102683/products/artcars_620x620+fill_ffffff.jpg?v=1681863588" />
      <Card.Body>
        <Card.Title>Carrinho de Brinquedo Hotwheels</Card.Title>
        <Card.Text>
        O Carrinho Básico Hot Wheels é uma escala 1:64, que significa que cada carro mede aproximadamente 1,5 polegadas de comprimento.
        </Card.Text>
        <Button variant="success">Comprar</Button>
      </Card.Body>
    </Card>

  );
}


export default BasicSample;