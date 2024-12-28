// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        nome: { label: "Nome", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const personagens = [
          {
            id: 1,
            'classe':
            {
              'id': 2,
              'descricao': 'Uma Classe com um poder incomensuravel',
              'nome': 'Matador de Deuses',
              'bonus':
                '-6_emp,6_stp',
              'passiva':
              {
                'descricao': 'Não pode ser machucado por Humanos',
                'nome': 'Ser Superior'
              },
              'ativa':
              {
                'descricao': 'Pode negar uma ação de um Dragão',
                'nome': 'Capacidade Infinita'
              },
              'sub':
                {}
            },
            'infoJ':
              { 'nome': 'José', 'senha': 'ol' },
            'infoP':
            {
              'nome': 'Jusefu',
              'familia': {
                "id": 2, "nome": "Juseferson", 'bonus': { 'descricao': "Uma familia de Pessoas Invenciveis", 'habilidade': "Ganha 99 pra todos os status todos os niveis" }, 'chance': [5, 'rgb(255, 153, 0)'],
              }
            },
            'estatisticas': {
              'str': 99,
              'wis': 99,
              'dex': 99,
              'int': 99,
              'con': 99,
              'amp': 99,
              'emp': 99,
              'cha': 99

            },
            'dracos': [

            ],
            'inv': [

            ]

          },
          {
            id: 2,
            'classe':
            {
              'id': 1, 'descricao': 'Uma classe de Pessoas fortes e destemidas, prontas para lutar frente a frente com um dragão',
              'nome':
                'Guerreiro',
              'bonus':
                '-2_Emp,-4_Int,2_Con,2_Con,2_Con',
              'passiva':
              {
                'descricao': 'Soma os Bonus de Str,Con e Dex como Redução de dano(A Rd é Máxima é 4X seu nivel)',
                'nome': 'Resiliencia Viking'
              },
              'ativa':
              {
                'descricao': '1X por Rodada o usuario pode somar um Str, Con, ou dex a um Teste ou dano',
                'nome': 'Fisico descomunal'
              },
              'sub':
                {}
            },
            'infoJ':
              { 'nome': 'Pedro', 'senha': 'Pedroapplek8' },
            'infoP':
            {
              'nome': 'Urias Belchson',
              'familia': {
                "id": 6, "nome": "Belchson", 'bonus': { 'descricao': 'Uma familia não conhecida por sua inteligencia e sim pela engenhoside', 'habilidade': 'Uma parte do corpo é "mecanica"' }, 'chance': [7, 'rgb(250, 0, 0)'],
              }
            },
            'estatisticas': {
              'str': 16,
              'wis': 8,
              'dex': 14,
              'int': 10,
              'con': 15,
              'amp': 8,
              'emp': 13,
              'cha': 13

            },
            'dracos': [

            ],
            'inv': [

            ]

          },
          {
            id: 3,
            'classe':
            {
              'id': 1,
              'nome': 'Guerreiro', 'descricao': 'Uma classe de Pessoas fortes e destemidas, prontas para lutar frente a frente com um dragão',
              'bonus':
                '-2_Emp,-4_Int,2_Con,2_Con,2_Con',
              'passiva':
              {
                'descricao': 'Soma os Bonus de Str,Con e Dex como Redução de dano(A Rd é Máxima é 4X seu nivel)',
                'nome': 'Resiliencia Viking'
              },
              'ativa':
              {
                'descricao': '1X por Rodada o usuario pode somar um Str, Con, ou dex a um Teste ou dano',
                'nome': 'Fisico descomunal'
              },
              'sub':
                {}
            },
            'infoJ':
              { 'nome': 'Lucas', 'senha': 'Lucaslgk10' },
            'infoP':
            {
              'nome': 'Bodil Blorage the Deranged',
              'familia': {
                "id": 7, "nome": "Blorage", 'bonus': { 'descricao': 'A familia dos lideres da tribo dos Bersekers', 'habilidade': 'Almenta em 1 dado o numeros de dados de uma arma, para cada 4 niveis' }, 'chance': [7, 'rgb(250, 0, 0)'],
              }
            },
            'estatisticas': {
              'str': 15,
              'wis': 8,
              'dex': 15,
              'int': 9,
              'con': 15,
              'amp': 8,
              'emp': 13,
              'cha': 13

            },
            'dracos': [

            ],
            'inv': [

            ]

          },

          {
            id: 4,
            'classe':
            {
              'id': 2, 'nome': 'Matador de Dragões', 'descricao': 'Uma classe de Pessios obstinadas e descididas a exterminar os dragões da terra.',
              'bonus':
                '-6_emp,6_stp',
              'passiva':
              {
                'descricao': 'Vantegem em qualquer teste que envolva matar Dragões',
                'nome': 'Dom natural'
              },
              'ativa':
              {
                'descricao': 'Pode negar uma ação de um Dragão(Cooldown vai ser 1.5X o cooldonw da ação cancelada)',
                'nome': 'Capacidade avançada'
              },
              'sub':
                {}
            },
            'infoJ':
              { 'nome': 'Guilherme', 'senha': 'Guilhermemotorolak9' },
            'infoP':
            {
              'nome': 'Volkihar hofferson',
              'familia': {
                "id": 2, "nome": "Hofferson", 'bonus': { 'descricao': "Uma familia de Pessoas fortes e Graciosas", 'habilidade': "Ganha 3 de Dex a cada 2 niveis" }, 'chance': [5, 'rgb(255, 153, 0)'],
              }
            },
            'estatisticas': {
              'str': 15,
              'wis': 15,
              'dex': 15,
              'int': 11,
              'con': 15,
              'amp': 15,
              'emp': 2,
              'cha': 8

            },
            'dracos': [

            ],
            'inv': [

            ]

          },
          {
            id: 5,
            'classe':
            {
              'id': 3, 'nome': 'Cavaleiro', 'descricao': 'Uma classe de Pessoas capazes de se conecatr profundamente a qualquer dragão.',
              'bonus':
                '-2_Str,-2_Con,2_Emp',
              'passiva':
              {
                'descricao': '+2 em qualuquer teste que envolva dragão',
                'nome': 'Ligação Forte'
              },
              'ativa':
              {
                'descricao': '2X por dia O Usuario ou Dragão se estivrem juntos ganham Adv em um teste',
                'nome': 'Trabalho em Equipe'
              },
              'sub':
                {}
            },
            'infoJ':
              { 'nome': 'Pastel', 'senha': 'Pastelxiaomek4' },
            'infoP':
            {
              'nome': 'Luke',
              'familia': {
                "id": 5, "nome": "Ingerman", 'bonus': { 'descricao': 'Uma familia de pessoas estudiosas e empaticas', 'habilidade': 'Ganha 1 ponto de empatia ou inteligencia por nivel' }, 'chance': [7, 'rgb(250, 0, 0)'],
              }
            },
            'estatisticas': {
              'str': 9,
              'wis': 12,
              'dex': 12,
              'int': 15,
              'con': 10,
              'amp': 8,
              'emp': 15,
              'cha': 15

            },
            'dracos': [

            ],
            'inv': [

            ]

          },
          {
            id: 6,
            'classe':
            {
              'id': 3, 'nome': 'Cavaleiro', 'descricao': 'Uma classe de Pessoas capazes de se conecatr profundamente a qualquer dragão.',
              'bonus':
                '-2_Str,-2_Con,2_Emp',
              'passiva':
              {
                'descricao': '+2 em qualuquer teste que envolva dragão',
                'nome': 'Ligação Forte'
              },
              'ativa':
              {
                'descricao': '2X por dia O Usuario ou Dragão se estivrem juntos ganham Adv em um teste',
                'nome': 'Trabalho em Equipe'
              },
              'sub':
                {}
            },
            'infoJ':
              { 'nome': 'Yuri', 'senha': 'Yuripositivok4' },
            'infoP':
            {
              'nome': 'Stico o Pequeno',
              'familia': {
                "id": 8, "nome": "Furane", 'bonus': { 'descricao': "Uma Familia de pessoas obcedas com seus Objetivos", 'habilidade': 'Ganha 1 ponto em uma habiliade da propria escolha por nivel (Menos Apatia e Empatia)' }, 'chance': [3, 'rgb(255, 255, 0)'],
              }
            },
            'estatisticas': {
              'str': 10,
              'wis': 13,
              'dex': 10,
              'int': 15,
              'con': 10,
              'amp': 8,
              'emp': 15,
              'cha': 15

            },
            'dracos': [

            ],
            'inv': [

            ]

          },


        ];
        const user = personagens.find(user => user.infoJ.senha === credentials.password && user.infoJ.nome === credentials.nome)
        return user || null;
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // Armazenando o id e outros dados no JWT
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.classe = user.classe;
        token.infoP = user.infoP;
        token.infoJ = user.infoJ;
        token.estatisticas = user.estatisticas;
        token.dracos = user.dracos;
        token.inventario = user.inventario;
      }
      return token;
    },
    // Passando os dados da sessão
    async session({ session, token }) {
      session.user.id = token.id; 
      session.user.infoP = token.infoP;
      session.user.infoJ = token.infoJ;
      session.user.classe = token.classe;
      session.user.estatisticas = token.estatisticas;
      session.user.dracos = token.dracos;
      session.user.inventario = token.inventario;

      return session;
    }
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
