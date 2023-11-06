import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://bhaz.com.br/wp-content/uploads/2019/12/brinquedos-1024x580.jpg" height={500}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>KidzWorld</h3>
          <p>Qualidade e Segurança na entrega e compra de seu Brinquedo!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://s2-g1.glbimg.com/Wrshk47ggUAZ6cl7whfm3V43a6g=/0x0:1164x873/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/D/D/LZJlehQ4ynBZcUIflkpg/ed04d771-ce14-4188-8c30-e7643d0fff16.jpg" height={500}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>KidzWorld</h3>
          <p>Visite a nossa loja ou adquira pelo site!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.falandodeviagem.com.br/imagens20/LojasKidsLiverpool.png" height={500}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>KidzWorld</h3>
          <p>
            Venha Garanitir o seu Brinquedo de melhor qualidade!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;