import { Title } from "../../../components/Title";
import historyPhoto from "../../../assets/history-photo.png";
import flower1 from "../../../assets/history-1.png";
import flower2 from "../../../assets/history-2.png";

export const History = () => {
  return (
    <section id='history' className='home-section'>
      <Title label='nossa história' />
      <div className='flex items-center flex-col min-[950px]:flex-row gap-10 mt-8'>
        <span className='max-w-2xl z-10'>
          <p>Nossa história começou em Campinas em 2017 e já começou com muitas coisas em comum. Eram dois mineiros apaixonados por queijo, que estudaram na mesma escola, se mudaram para SP para fazer faculdade e foram se conhecer somente naquele momento. Tínhamos em comum conhecidos, curso, hobbies, visões de mundo e ideais. Com isso, a conexão entre nós foi rápida, fácil e intensa. Quando mal vimos, já estávamos fazendo todos os planos juntos.</p>
          <p>Logo mudamos para São Paulo, onde ficamos trancados num apartamento pequeno durante uma pandemia terrível, adotamos uma gatinha (a Lilo) e aprendemos ainda mais sobre a vida a dois. </p>
          <p>Ainda na pandemia, viemos para Ouro Branco, em Minas. Inicialmente seria algo temporário, coisa de dois meses, mas já estamos por aqui há quase dois anos. Também adotamos uma cachorrinha (a Jujuba), voltamos a viver num ritmo mais calmo e estamos aproveitando o que temos de bom (e de ruim, rs) na vida do interior, relembrando o quanto gostamos do nosso estado e de estar perto da família.</p>
          <p>Agora, esta história está prestes a ter seu capítulo mais bonito no dia 22 de abril de 2023, quando vamos celebrar o nosso amor, com tudo de belo que já passou e o futuro que nos parece ainda mais incrível!</p>
        </span>
        <img alt='' src={historyPhoto} className='max-w-md w-[100%] min-[950px]:w-[40vw]' />
      </div>
      <img alt='' src={flower1} className='hidden min-[950px]:block absolute w-28 bottom-5 -left-0' />
      <img alt='' src={flower2} className='absolute bottom-5 min-[950px]:-top-12 -right-[4.5rem] w-44 min-[300px]:w-36 sm:w-auto' />
    </section>
  );
};
