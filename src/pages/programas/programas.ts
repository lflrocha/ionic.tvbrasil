import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProgramasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-programas',
  templateUrl: 'programas.html',
})
export class ProgramasPage {

  items: Array<{imagem: string, horario: string, texto: string, link: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [];

    this.items.push({
      imagem: 'reporter-brasil.png',
      horario: 'Segunda a sexta, 9h30 e 20h. Sábado, 20h',
      texto: 'Telejornal da TV Brasil, a televisão pública brasileira.' ,
      link: 'http://tvbrasil.ebc.com.br/reporterbrasil'
    });

    this.items.push({
      imagem: 'fique-ligado.png',
      horario: 'Segunda a sexta, 20h30.',
      texto: 'O programa Fique Ligado traz as notícias de tecnologia, cultura brasileira e arte. Produzido pela TV Brasil em São Paulo e transmitido ao vivo para todo o país, o programa é apresentado por Ana Luísa Medici e Gustavo Minari. Em 30 minutos, o telespectador tem contato com as informações do dia num formato leve e dinâmico.',
      link: 'http://tvbrasil.ebc.com.br/fiqueligado'
    });

    this.items.push({
      imagem: 'sem-censura.png',
      horario: 'Segunda a sexta, 17h30.',
      texto: 'Criado em 1985, o Sem Censura tem o compromisso de levar ao telespectador informações sobre o que acontece no Brasil e no mundo, em diferentes áreas da atividade humana. O programa, de alcance nacional, traça um painel cultural brasileiro e mostra suas múltiplas tendências.',
      link: 'http://tvbrasil.ebc.com.br/semcensura'
    });

    this.items.push({
      imagem: 'cenario-economico.png',
      horario: 'Segunda a sexta, 19.',
      texto: 'Comandado por Adalberto Piotto, o programa Cenário Econômico entra ao vivo, de segunda a sexta-feira, às 19 horas, para debater os principais temas da economia do país. Direto dos estúdios da B3, o noticiário mostra didaticamente como a economia afeta o dia a dia das pessoas.',
      link: 'http://tvbrasil.ebc.com.br/cenario-economico'
    });

    this.items.push({
      imagem: 'nos-corredores-do-poder.png',
      horario: 'Segunda a sexta, 18h30.',
      texto: 'Apresentado Roseann Kennedy, de Brasília, Nos Corredores do Poder traz notícias ao vivo do Congresso e do Palácio do Planalto. O programa apresenta um formato inovador ao abordar os principais temas políticos e econômicos do país.',
      link: 'http://tvbrasil.ebc.com.br/noscorredoresdopoder'
    });

    this.items.push({
      imagem: 'stadium.png',
      horario: 'Segunda a sabado, 19h30.',
      texto: 'No ar desde 1977, o Stadium é um programa de esporte em formato de Revista Semanal, que surgiu com foco nos esportes Olímpicos e Paralímpicos. A proposta é ser um programa de debates e entrevistas com participação ao vivo de repórteres, atletas, técnicos e comentaristas.',
      link: 'http://tvbrasil.ebc.com.br/stadium'
    });

    this.items.push({
      imagem: 'conversa-com-roseann.png',
      horario: 'Segunda, 21h15.',
      texto: 'O programa Conversa com Roseann Kennedy recebe, toda segunda-feira, às 21h15, um entrevistado para um diálogo atual e descontraído. “Pode ser um político, um ministro, um juiz. Mas pode entrar, também, uma pessoa comum”, diz ela. “O foco não é política e economia. Queremos falar sobre os temas quentes do momento”, explica.',
      link: 'http://tvbrasil.ebc.com.br/conversa-com-roseann-kennedy'
    });


    this.items.push({
      imagem: 'um-olhar-sobre-o-mundo.png',
      horario: 'Segunda, 21h45.',
      texto: 'Com 40 anos de experiência, 16 dos quais vividos como correspondente internacional em vários países, o jornalista Moisés Rabinovici apresenta o programa “Um olhar sobre o Mundo”, transmitido semanalmente às segundas-feiras pela TV Brasil.',
      link: 'http://tvbrasil.ebc.com.br/umolharsobreomundo'
    });


    this.items.push({
      imagem: 'dialogo-brasil.png',
      horario: 'Segunda, 22h15.',
      texto: 'Estevão Damázio toma a frente do Diálogo Brasil para receber os convidados e debater assuntos que chamam a atenção e são importantes para o país. O formato: durante meia hora, sempre dois entrevistados trazem opiniões diferentes para mostrar que todo tema tem mais de um lado.',
      link: 'http://tvbrasil.ebc.com.br/dialogobrasil'
    });

    this.items.push({
      imagem: 'midia-em-foco.png',
      horario: 'Segunda, 22h45.',
      texto: 'O Mídia em Foco é um programa no estilo documental que acompanha tudo o que envolve os meios de comunicação: a história dos meios, sua influência na sociedade, as novas tendências, a evolução das tecnologias e a convergência das mídias. Os temas são analisados e discutidos por acadêmicos, profissionais e especialistas na área.',
      link: 'http://tvbrasil.ebc.com.br/dialogobrasil'
    });

    this.items.push({
      imagem: 'trilha-de-letras.png',
      horario: 'Terça, 21h15.',
      texto: 'O Trilha de Letras é um programa que associa literatura e informação, com entrevistas conduzidas por Raphael Montes, escritor de romances policiais. A cada episódio um tema norteia o debate do apresentador com os convidados. Além das entrevistas, há também um quadro de recomendações de livros com a jornalista Katy Navarro e outro quadro para ouvir booktubers e produtores relacionados à literatura.',
      link: 'http://tvbrasil.ebc.com.br/trilhadeletras'
    });

    this.items.push({
      imagem: 'recordar-e-tv.png',
      horario: 'Terça, 22h45.',
      texto: 'O Recordar é TV presenteia o espectador com o resgate do que há de melhor no acervo da TVE e TV Brasil: shows inesquecíveis, grandes entrevistas, debates marcantes, musicais e programas especias são revisitados com uma nova roupagem e informações adicionais, a partir da busca de momentos e personalidades que marcaram a cultura brasileira. Afinal, no Recordar é TV, se existe  memória, a fita roda!',
      link: 'http://tvbrasil.ebc.com.br/recordaretv'
    });


    this.items.push({
      imagem: 'estacao-plural.png',
      horario: 'Quarta, 22h15.',
      texto: 'O Estação Plural é um programa de entrevistas e debates diferente. Conta com três participantes fixos, todos ligados ao universo LGBT: a cantora e compositora Ellen Oléria, o jornalista Fernando Oliveira (Fefito) e Mel Gonçalves. Toda semana, eles receberão um convidado para tratar de pautas de comportamento. O objetivo das conversas é construir um debate rico e plural, a partir de óticas singulares. Ao fim de cada episódio, o programa apresenta algum tema ligado ao universo LGBT, mas de interesse ou curiosidade do público, em geral.',
      link: 'http://tvbrasil.ebc.com.br/estacaoplural'
    });

    this.items.push({
      imagem: 'bravos.png',
      horario: ' ',
      texto: 'Bravos! é uma série documental da TV Brasil que conta a história de pessoas de diversas comunidades brasileiras inspiradas pela arte e pelo esporte e que, apesar de todas as dificuldades, conseguiram transformar seus sonhos em realizações através de determinação, espírito de luta e uma forte rede de solidariedade.',
      link: 'http://tvbrasil.ebc.com.br/estacaoplural'
    });

    this.items.push({
      imagem: 'caminhos-da-reportagem.png',
      horario: ' ',
      texto: 'Jornalistas viajam pelo país e pelo mundo atrás de grandes histórias, trazendo ao telespectador uma visão diferente, instigante e complexa de cada um dos assuntos escolhidos.',
      link: 'http://tvbrasil.ebc.com.br/caminhosdareportagem'
    });

    this.items.push({
      imagem: 'samba-na-gamboa.png',
      horario: ' ',
      texto: 'Diogo Nogueira canta e conversa com grandes intérpretes das nova e velha gerações de sambistas brasileiros e ícones da MPB.',
      link: 'http://tvbrasil.ebc.com.br/viralizando'
    });

    this.items.push({
      imagem: 'ao-vivo-entre-amigos.png',
      horario: 'Domingo, 22h',
      texto: 'Programa original da Rádio MEC com redição em parceria com a TV Brasil e transmissão do programa, ao vivo, pela web. O programa conta com um público presente em nossos estúdios e participação da plateia e internautas fazendo perguntas para aos convidados. A apresentação é de João Carino.',
      link: 'http://tvbrasil.ebc.com.br/aovivoentreamigos'
    });

    this.items.push({
      imagem: 'programa-especial.png',
      horario: 'Sábado, 12h',
      texto: 'Programa dedicado à inclusão social de pessoas com deficiência. Com LIBRAS (Língua Brasileira de Sinais), legenda e audiodescrição. Apresentado por Juliana Oliveira, Fernanda Honorato e José Luiz Pacheco.',
      link: 'http://tvbrasil.ebc.com.br/programaespecial'
    });

    this.items.push({
      imagem: 'no-mundo-da-bola.png',
      horario: 'Domingo, 21h',
      texto: 'No Mundo da Bola é uma atração esportiva da TV Brasil, exibida aos domingos, às 21h, que estreou nas telinhas em 16 de junho de 2013. O programa aborda as notícias de destaque do futebol e outros esportes. Com,uma hora de duração, o programa é apresentado por Sergio du Bocage e comentários de Márcio Guedes. O No Mundo da Bola é a versão televisa do programa homônimo, que teve início na década de 1930, na Rádio Nacional do Rio de Janeiro, e fez história no jornalismo esportivo radiofônico.',
      link: 'http://tvbrasil.ebc.com.br/nomundodabola'
    });

  }

  public abrir(link: string): void {
    window.open(link, '_system', 'location=yes');
  }

}
