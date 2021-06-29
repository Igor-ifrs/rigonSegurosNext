import birthday from '../components/util/birthday';
import Container from '../components/container';
import Logo from '../components/svg/logo';
import BtnSaibaMais from '../components/buttons/BtnSaibaMais';

export default function Home() {
    const age = birthday('20/09/1994');
    return (
        <>
            <Container id="home" displayGrid>
                <Logo />
                <div className="home-content">part-1</div>
                <BtnSaibaMais />
            </Container>

            <Container id="contato">
                <h1>contato</h1>
            </Container>
            <Container id="sobre">
                <div>
                    <h1>Com mais de {age} anos de experiência</h1>
                    <p>
                        A <strong>Rigon Corretora de Seguros</strong>, iniciou
                        suas atividades em 20 de outubro de 1994, nos orgulhamos
                        de ter como premissa a satisfação plena de nossos
                        clientes. Nossa estratégia é apoiada no cruzamento do
                        perfil sócio-econômico do cliente com o produto a ser
                        oferecido, o que nos remete a trabalharmos com as
                        maiores e melhores Companhias de Seguros do mercado.
                        Possuímos a convicção de que o Corretor de Seguros deve
                        ser um profissional qualificado e ético, pois, além de
                        ter confiado à si o zelo pelo patrimônio de seus
                        clientes, possui a obrigação de ser um prestador de
                        serviços atualizado, ágil e correto, virtudes essas que
                        são diária e obstinadamente buscadas por nossa empresa.
                        Nosso foco é demonstrar de forma objetiva resultados e
                        benefícios aos nossos clientes, esforçando-se em
                        facilitar todo o processo do seguro, desde sua
                        efetivação até o acompanhamento durante um sinistro e
                        ser prestativos em qualquer momento.
                    </p>
                </div>
            </Container>
        </>
    );
}
