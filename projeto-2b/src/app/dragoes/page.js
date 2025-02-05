'use client';
import { useSession } from "next-auth/react";
import _ from 'lodash';

const dragoes=[
  {
    'id':1,
    'basico':{
      'nome':'',
      'descricao':''
    },
    'inventario':{
      'armadura':'',
      'apetrecho':''

    },
    'especie':{
      'estatisticas':{
        'forca':35,
        'constituicao':34,
        'destreza':14,
        'inteligencia':6,
        'sabedoria':10,
        'qt_acoes':2

      },
      'tamanho':'Grande',
      'voo':{
        'velocidade':'6',
        'tipo':'pairante',
        'ct_acao':1,
        'manobras':'baixa_estavel',
        'habilidadeS':''

      },
      'batalha':{
        'corpo-corpo':{
          'qt_att':2,
          '1':{
            'nome':'Mordida',
            'descricao':'Mordida capaz de rachar rochas',
            'dano':'3d10_cortante_str',
            'ct_acao': 1,
            'especial':''
          },
          '2':{
            'nome':'Ataque com a Cauda',
            'descricao':'Um ataque com a cauda pesada e pontuda',
            'dano':'4d10_contundente_str',
            'ct_acao': 1,
            'especial':''
          }
        },
        'distancia':{
          'qt_att':1,
          '1':{
            'nome':'Lava derretida',
            'descricao':'Apoz comer e derreter a pedras, lava é espelida como um guspe mortal.',
            'dano':'5d10_calor',
            'ct_acao': 1,
            'especial':'Apos alguns segundos esfria e enrigese'
          }
        },
        'habilidadeS':''
      },
      'basico':{
        'nome':'Gronkel',
        'descricao':'Gronckel tem a pele grossa e impenetrável igual a\
         uma armadura flexível ,a cauda é dura, arredondada e mortal'

      }
      
    },
    'nivel':{
      'nivelA':2,
      '1':{
        'passiva':{
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        },
        'ativa':{
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }

      },
      '2':{
        'ativa':{
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }

      },
      '3':{
        'passiva':{
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }

      },
      '4':{
        'ativa':{
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }

      },
      '5':{
        'pasiva':{
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }

      },
    },
  
  },
  {
    "id": 2,
    "basico": {
      "nome": "",
      "descricao": ""
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 20,
        "constituicao": 18,
        "destreza": 26,
        "inteligencia": 6,
        "sabedoria": 12,
        "qt_acoes": 3
      },
      "tamanho": "Grande",
      "voo": {
        "velocidade": "8",
        "tipo": "Planagem",
        "ct_acao": 1,
        "manobras": "alta_estabilidade",
        "habilidadeS": ""
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 1,
          "1": {
            "nome": "Investida com os Espinhos",
            "descricao": "Avança com suas escamas pontiagudas, causando dano severo.",
            "dano": "3d8_cortante",
            "ct_acao": 1,
            "especial": ""
          }
        },
        "distancia": {
          "qt_att": 2,
          "1": {
            "nome": "Rajada de Fogo",
            "descricao": "Cospe um jato constante  de fogo.",
            "dano": "4d8_fogo",
            "ct_acao": 2,
            "especial": ""
          },
          "2": {
            "nome": "Rajada de Espinhos",
            "descricao": "Cospe uma serie de espinhos.",
            "dano": "2d8_perfurante",
            "ct_acao": 2,
            "especial": ""
          }
        },
        "habilidadeS": ""
      },
      "basico": {
        "nome": "Nader Mortal",
        "descricao": "Conhecido por sua precisão e escamas que servem como armas e defesa."
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        },
        "ativa": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }
      },
      "2": {
        "ativa": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }
      },
      "3": {
        "passiva": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }
      },
      "4": {
        "ativa": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }
      },
      "5": {
        "passiva": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }
      }
    }
  },
  {
    "id": 3,
    "basico": {
      "nome": "",
      "descricao": ""
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 34,
        "constituicao": 20,
        "destreza": 23,
        "inteligencia": 6,
        "sabedoria": 8,
        "qt_acoes": 3
      },
      "tamanho": "Grande",
      "voo": {
        "velocidade": "7",
        "tipo": "Planagem",
        "ct_acao": 1,
        "manobras": "média_estabilidade",
        "habilidadeS": "Voo estando em chamas"
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 2,
          "1": {
            "nome": "Mordida Flamejante",
            "descricao": "Uma mordida poderosa com chamas envolventes.",
            "dano": "2d10_cortante",
            "ct_acao": 1,
            "especial": "1d10_fogo"
          },
          "2": {
            "nome": "Golpe com o corpo",
            "descricao": "Um golpe devastador com suas asas,cauda ou cabeça.",
            "dano": "1d10_contundente",
            "ct_acao": 1,
            "especial": "causa empurrão."
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Rajada de Fogo",
            "descricao": "Expulsa um jato concentrado de fogo intenso.",
            "dano": "4d10_fogo",
            "ct_acao": 2,
            "especial": ""
          }
        },
        "habilidadeS": "Envolver-se em chamas"
      },
      "basico": {
        "nome": "Pesadelo Monstruoso",
        "descricao": "Um dos dragões mais temidos, famoso por envolver seu corpo em fogo."
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        },
        "ativa": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }
      },
      "2": {
        "ativa": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }
      },
      "3": {
        "passiva": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }
      },
      "4": {
        "ativa": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }
      },
      "5": {
        "passiva": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }
      }
    }
  },
  {
    "id": 4,
    "basico": {
      "nome": "",
      "descricao": ""
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 18,
        "constituicao": 16,
        "destreza": 22,
        "inteligencia": 6,
        "sabedoria": 10,
        "qt_acoes": 2
      },
      "tamanho": "Grande",
      "voo": {
        "velocidade": "8",
        "tipo": "Planador",
        "ct_acao": 1,
        "manobras": "media_estabilidade",
        "habilidadeS": ""
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 2,
          "1": {
            "nome": "Mordida Dupla",
            "descricao": "Ambas as cabeças atacam simultaneamente, causando cortes profundos.",
            "dano": "2d8_cortante",
            "ct_acao": 1,
            "especial": "Pode atingir dois alvos diferentes."
          },
          "2": {
            "nome": "Golpe com as Caudas",
            "descricao": "Ambas as caudas chicoteiam os inimigos com força.",
            "dano": "2d8_contundente",
            "ct_acao": 1,
            "especial": "Chance de atordoar por 1 rodada."
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Explosão Inflamável",
            "descricao": "Uma cabeça libera gás enquanto a outra o inflama, causando uma explosão poderosa.",
            "dano": "5d10_fogo",
            "ct_acao": 2,
            "especial": "Área de 3x3, com dano adicional de 1d6 contínuo por 1 rodada."
          }
        },
        "habilidadeS": "Sincronização de ataque"
      },
      "basico": {
        "nome": "Zíper Arrepiante",
        "descricao": "Um dragão de duas cabeças que trabalha em perfeita harmonia, combinando gás e faíscas para ataques devastadores."
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        },
        "ativa": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }
      },
      "2": {
        "ativa": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }
      },
      "3": {
        "passiva": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }
      },
      "4": {
        "ativa": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }
      },
      "5": {
        "passiva": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }
      }
    }
  },
  {
    "id": 5,
    "basico": {
      "nome": "",
      "descricao": ""
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 30,
        "constituicao": 20,
        "destreza": 35,
        "inteligencia": 20,
        "sabedoria": 16,
        "qt_acoes": 4
      },
      "tamanho": "Médio",
      "voo": {
        "velocidade": "12",
        "tipo": "Planador",
        "ct_acao": 1,
        "manobras": "altíssima_estabilidade",
        "habilidadeS": "Alta camuflagem no escuro"
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 1,
          "1": {
            "nome": "Mordida Rápida",
            "descricao": "Um ataque rápido com suas mandíbulas precisas.",
            "dano": "2d6_cortante",
            "ct_acao": 1,
            "especial": ""
          }
        },
        "distancia": {
          "qt_att": 2,
          "1": {
            "nome": "Explosão de Plasma",
            "descricao": "Dispara uma carga de energia de plasma concentrada.",
            "dano": "2Xd10_energia",
            "ct_acao": 1,
            "especial": "Quanto mais carrega mais poderoso"
          },
          "2": {
            "nome": "Rajada de Plasma",
            "descricao": "Libera uma série de ataques de plasma consecutivos.",
            "dano": "1d10_energia por ataque (até 3 ataques)",
            "ct_acao": 3,
            "especial": ""
          }
        },
        "habilidadeS": "Camuflagem , Ecolocalização e Canalização"
      },
      "basico": {
        "nome": "Fúria da Noite",
        "descricao": "Um dragão temido e respeitado, combinando poder destrutivo e furtividade incomparáveis."
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        },
        "ativa": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }
      },
      "2": {
        "ativa": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }
      },
      "3": {
        "passiva": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }
      },
      "4": {
        "ativa": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }
      },
      "5": {
        "passiva": {
          'nome':'',
          'descricao':'',
          'efeito':'',
          'ct_acao':0
        }
      }
    }
  },
  {
    "id": 6,
    "basico": {
      "nome": "",
      "descricao": ""
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 8,
        "constituicao": 10,
        "destreza": 20,
        "inteligencia": 7,
        "sabedoria": 14,
        "qt_acoes": 2
      },
      "tamanho": "Pequeno",
      "voo": {
        "velocidade": "7",
        "tipo": "Planador",
        "ct_acao": 1,
        "manobras": "baixa_estabilidade",
        "habilidadeS": ""
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 1,
          "1": {
            "nome": "Mordida Precisa",
            "descricao": "Ataca rapidamente com sua mandíbula pequena, mas afiada.",
            "dano": "1d6_cortante 1d6_veneno",
            "ct_acao": 1,
            "especial": ""
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Chama Rápida",
            "descricao": "Dispara uma pequena rajada de fogo.",
            "dano": "2d6_fogo",
            "ct_acao": 1,
            "especial": ""
          }
        },
        "habilidadeS": ""
      },
      "basico": {
        "nome": "Terror Terrível",
        "descricao": "Um dragão pequeno, mas astuto, que compensa sua falta de força com agilidade e inteligência."
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "4": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "5": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      }
    }
  },
  {
    "id": 7,
    "basico": {
      "nome": "",
      "descricao": ""
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 28,
        "constituicao": 22,
        "destreza": 30,
        "inteligencia": 8,
        "sabedoria": 12,
        "qt_acoes": 3
      },
      "tamanho": "Grande",
      "voo": {
        "velocidade": "9",
        "tipo": "Planagem",
        "ct_acao": 1,
        "manobras": "alta_estabilidade",
        "habilidadeS": ""
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 3,
          "1": {
            "nome": "Investida de Garras",
            "descricao": "Ataca com suas garras afiadas, desferindo golpes rápidos.",
            "dano": "2d8_cortante",
            "ct_acao": 1,
            "especial": ""
          },
          "2": {
            "nome": "Mordida Poderosa",
            "descricao": "Desfere uma mordida feroz contra o inimigo.",
            "dano": "3d6_cortante",
            "ct_acao": 1,
            "especial": ""
          },
          "3": {
            "nome": "Golpe com a Cauda",
            "descricao": "Gira sua cauda e estoca para acertar os oponentes.",
            "dano": "2d6_perfurante",
            "ct_acao": 1,
            "especial": ""
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Explosão de Fogo",
            "descricao": "Libera uma rajada de fogo em linha reta.",
            "dano": "3d10_fogo",
            "ct_acao": 2,
            "especial": ""
          }
        },
        "habilidadeS": ""
      },
      "basico": {
        "nome": "Ataque Triplo",
        "descricao": "Dragão agressivo e feroz, conhecido por suas múltiplas investidas consecutivas."
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "4": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "5": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      }
    }
  },
  {
    "id": 8,
    "basico": {
      "nome": "",
      "descricao": ""
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 32,
        "constituicao": 24,
        "destreza": 18,
        "inteligencia": 6,
        "sabedoria": 10,
        "qt_acoes": 2
      },
      "tamanho": "Grande",
      "voo": {
        "velocidade": "8",
        "tipo": "Planagem",
        "ct_acao": 1,
        "manobras": "média_estabilidade",
        "habilidadeS": ""
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 1,
          "1": {
            "nome": "Cabeçada Sísmica",
            "descricao": "Ataca com uma cabeçada poderosa, capaz de causar tremores.",
            "dano": "3d8_contundente",
            "ct_acao": 1,
            "especial": ""
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Rajada Sônica",
            "descricao": "Emite um som devastador em um cone de 15 metros.",
            "dano": "4d10_sônico",
            "ct_acao": 2,
            "especial": ""
          }
        },
        "habilidadeS": "Resistência ao som"
      },
      "basico": {
        "nome": "Tambor Trovão",
        "descricao": "Um dragão imponente, conhecido por sua força bruta e habilidades sônicas devastadoras."
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "4": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "5": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      }
    }
  },
  {
    "id": 9,
    "basico": {
      "nome": "",
      "descricao": ""
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 20,
        "constituicao": 30,
        "destreza": 12,
        "inteligencia": 6,
        "sabedoria": 14,
        "qt_acoes": 3
      },
      "tamanho": "Medio",
      "voo": {
        "velocidade": "4",
        "tipo": "Planagem",
        "ct_acao": 1,
        "manobras": "media_estabilidade",
        "habilidadeS": "Cavação subterrânea rápida"
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 2,
          "1": {
            "nome": "Mordida Devastadora",
            "descricao": "Um ataque brutal com suas mandíbulas maciças.",
            "dano": "3d12_cortante",
            "ct_acao": 1,
            "especial": ""
          },
          "2": {
            "nome": "Golpe por Baixo",
            "descricao": "Um poderoso golpe onde ele se esconde e emerge da terra atacando.",
            "dano": "2d10_contundente",
            "ct_acao": 3,
            "especial": "Pode derrubar inimigos no impacto."
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Explosão de Espinhos",
            "descricao": "Lança rochas e destroços nos inimigos.",
            "dano": "3d10_perfurante",
            "ct_acao": 2,
            "especial": ""
          },
          "2": {
            "nome": "Aneis de fogo",
            "descricao": "Lança fogo em formato de anies",
            "dano": "2d10_fogo",
            "ct_acao": 2,
            "especial": ""
          }
        },
        "habilidadeS": "Cavação"
      },
      "basico": {
        "nome": "Morte Murmurante",
        "descricao": "Um dragão ameaçador que domina os túneis subterrâneos com poder esmagador."
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "4": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "5": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      }
    }
  },
  {
    "id": 10,
    "basico": {
      "nome": "",
      "descricao": ""
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 25,
        "constituicao": 20,
        "destreza": 30,
        "inteligencia": 5,
        "sabedoria": 10,
        "qt_acoes": 3
      },
      "tamanho": "Médio",
      "voo": {
        "velocidade": "8",
        "tipo": "Planador",
        "ct_acao": 1,
        "manobras": "alta_estabilidade",
        "habilidadeS": ""
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 1,
          "1": {
            "nome": "Mordida Fantasmagórica",
            "descricao": "Ataque rápido com mandíbulas afiadas.",
            "dano": "2d8_cortante",
            "ct_acao": 1,
            "especial": "Causa dano Tripo se o alvo tiver paralisado"
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Névoa Paralisante",
            "descricao": "Libera uma névoa que paralisa a presa.",
            "dano": "",
            "ct_acao": 2,
            "especial": ""
          }
        },
        "habilidadeS": "Nevoa Paralisante"
      },
      "basico": {
        "nome": "Pesadelo Voador",
        "descricao": "Um Dragão que paralisa os seus oponentes"
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "4": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "5": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      }
    }
  },
  {
    "id": 11,
    "basico": {
      "nome": "",
      "descricao": ""
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 20,
        "constituicao": 25,
        "destreza": 18,
        "inteligencia": 6,
        "sabedoria": 14,
        "qt_acoes": 3
      },
      "tamanho": "Médio",
      "voo": {
        "velocidade": "6",
        "tipo": "Planador",
        "ct_acao": 1,
        "manobras": "média_estabilidade",
        "habilidadeS": "Movimento fluido na água"
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 2,
          "1": {
            "nome": "Mordida Veneso",
            "descricao": "Uma mordia cheia de veneno.",
            "dano": "2d8_perfurante e 3d6 venenoso",
            "ct_acao": 1,
            "especial": "Causa deslocamento de 2 metros"
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Rajada de Vapor",
            "descricao": "Libera vapor quente para causar dano e dificultar a visão.",
            "dano": "4d8_fogo",
            "ct_acao": 2,
            "especial": "Reduz a precisão de inimigos na área"
          }
        },
        "habilidadeS": ""
      },
      "basico": {
        "nome": "Escalderivel",
        "descricao": "Um dragão marinho que solta agua ferrvente"
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "4": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "5": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      }
    }
  },
  {
    "id": 12,
    "basico": {
      "nome": "",
      "descricao": ""
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 25,
        "constituicao": 20,
        "destreza": 30,
        "inteligencia": 6,
        "sabedoria": 18,
        "qt_acoes": 3
      },
      "tamanho": "Médio",
      "voo": {
        "velocidade": "10",
        "tipo": "Planador",
        "ct_acao": 1,
        "manobras": "alta_estabilidade",
        "habilidadeS": "Visão periférica de 360 graus"
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 2,
          "1": {
            "nome": "Chicote de Cauda Flamejante",
            "descricao": "Ataca com a cauda envolta em chamas, causando dano significativo.",
            "dano": "3d8_fogo",
            "ct_acao": 1,
            "especial": ""
          },
          "2": {
            "nome": "Mordida Incandescente",
            "descricao": "Mordida poderosa com a boca em chamas.",
            "dano": "2d10_fogo",
            "ct_acao": 1,
            "especial": ""
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Jato de Fogo (Ventral,Cauda e Boca)",
            "descricao": "Libera uma rajada de fogo pela varias partes do corpo, atingindo múltiplos inimigos.",
            "dano": "4d6_fogo",
            "ct_acao": 2,
            "especial": ""
          }
        },
        "habilidadeS": "Lançar fogo pela boca, cauda e barriga; visão periférica de 360 graus"
      },
      "basico": {
        "nome": "Calda de Fogo",
        "descricao": "Um dragão que libera uma rajada de fogo pela varias partes do corpo"
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "4": {
          "ativa": {
              "nome": "",
              "descricao": "",
              "efeito": "",
              "ct_acao": 0
          }
      },
      "5": {
          "passiva": {
              "nome": "",
              "descricao": "",
              "efeito": "",
              "ct_acao": 0
          }
      }
    }
  },
  {
    "id": 13,
    "basico": {
      "nome": "Tufãomerangue",
      "descricao": "O Tufãomerangue é um dragão da Classe Brasa, conhecido por sua enorme envergadura de asas e habilidade de criar ciclones de fogo. Diferentemente de outros dragões, ele se alimenta de enguias e possui marcas de queimaduras que indicam sua idade e tamanho. :contentReference[oaicite:0]{index=0}"
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 26,
        "constituicao": 24,
        "destreza": 20,
        "inteligencia": 4,
        "sabedoria": 18,
        "qt_acoes": 3
      },
      "tamanho": "Grande",
      "voo": {
        "velocidade": "11",
        "tipo": "Planador",
        "ct_acao": 1,
        "manobras": "média_estabilidade",
        "habilidadeS": "Capacidade de criar ciclones de fogo; imunidade ao efeito de enguias"
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 2,
          "1": {
            "nome": "Asa Cortante",
            "descricao": "Ataca com suas asas afiadas, capazes de cortar árvores durante o voo. :contentReference[oaicite:1]{index=1}",
            "dano": "3d8_cortante",
            "ct_acao": 1,
            "especial": ""
          },
          "2": {
            "nome": "Garras Afiadas",
            "descricao": "Utiliza suas grandes garras para desferir golpes poderosos.",
            "dano": "2d10_cortante",
            "ct_acao": 1,
            "especial": ""
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Ciclone de Fogo",
            "descricao": "Cria um tornado de fogo que incinera tudo em seu caminho.",
            "dano": "4d10_fogo",
            "ct_acao": 2,
            "especial": ""
          }
        },
        "habilidadeS": "Criação de ciclones de fogo; imunidade ao efeito de enguias; promove crescimento de flores após um ciclone"
      },
      "basico": {
        "nome": "Tufãomerangue",
        "descricao": "O Tufãomerangue é um dragão da Classe Brasa, conhecido por sua enorme envergadura de asas e habilidade de criar ciclones de fogo. Diferentemente de outros dragões, ele se alimenta de enguias e possui marcas de queimaduras que indicam sua idade e tamanho. :contentReference[oaicite:0]{index=0}"
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "4": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "5": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      }
    }
  },
  {
    "id": 14,
    "basico": {
      "nome": "Bafo Quente",
      "descricao": "O Bafo Quente é um dragão da Classe Rocha, conhecido por sua aparência semelhante ao Gronkel, mas com características distintas. É um dragão preguiçoso, frequentemente visto dormindo, mas possui habilidades de combate notáveis. :contentReference[oaicite:0]{index=0}"
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 24,
        "constituicao": 26,
        "destreza": 14,
        "inteligencia": 6,
        "sabedoria": 16,
        "qt_acoes": 2
      },
      "tamanho": "Grande",
      "voo": {
        "velocidade": "8",
        "tipo": "Batedor",
        "ct_acao": 1,
        "manobras": "baixa_estabilidade",
        "habilidadeS": "Capacidade de voar apesar de sua aparência pesada"
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 2,
          "1": {
            "nome": "Mordida Poderosa",
            "descricao": "Utiliza suas mandíbulas fortes para desferir uma mordida devastadora.",
            "dano": "3d8_perfurante",
            "ct_acao": 1,
            "especial": ""
          },
          "2": {
            "nome": "Investida Corporal",
            "descricao": "Ataca com seu corpo robusto, causando dano por impacto.",
            "dano": "2d10_contundente",
            "ct_acao": 1,
            "especial": ""
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Explosão Mineral",
            "descricao": "Cospe uma leve explosão de algum minero, causando dano e efeitso varidos temporáriaos.",
            "dano": "4d6_fogo",
            "ct_acao": 2,
            "especial": ""
          }
        },"basico": {
      "nome": "Bafo Quente",
      "descricao": "O Bafo Quente é um dragão da Classe Rocha, conhecido por sua aparência semelhante ao Gronkel, mas com características distintas. É um dragão preguiçoso, frequentemente visto dormindo, mas possui habilidades de combate notáveis. :contentReference[oaicite:0]{index=0}"
    },
        "habilidadeS": "afinidade com minerais"
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "4": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "5": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      }
    }
  },
  {
    "id": 15,
    "basico": {
      "nome": "Destripador Rubro",
      "descricao": "Chifres em forma de alce Cauda em forma de machado Espinhos em forma de rocha"
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 30,
        "constituicao": 28,
        "destreza": 12,
        "inteligencia": 5,
        "sabedoria": 16,
        "qt_acoes": 2
      },
      "tamanho": "Enorme",
      "voo": {
        "velocidade": "10",
        "tipo": "Plandor",
        "ct_acao": 1,
        "manobras": "baixa_estabilidade",
        "habilidadeS": ""
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 2,
          "1": {
            "nome": "Chifres Metálicos",
            "descricao": "Ataca com seus enormes chifres em forma de alce, capazes de derrubar obstáculos com facilidade.",
            "dano": "4d10_contundente",
            "ct_acao": 1,
            "especial": "Pode empurrar o alvo para trás"
          },
          "2": {
            "nome": "Cauda Machado",
            "descricao": "Utiliza a ponta da cauda em forma de machado para desferir golpes poderosos.",
            "dano": "3d8_cortante",
            "ct_acao": 1,
            "especial": "Pode causar sangramento"
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Jato de Lava",
            "descricao": "Cospe lava derretida de sua boca, semelhante a outros dragões da Classe Rocha. ",
            "dano": "5d6_fogo",
            "ct_acao": 2,
            "especial": ""
          }
        },
        "basico": {
          "nome": "Destripador Rubro",
          "descricao": "Chifres em forma de alce Cauda em forma de machado Espinhos em forma de rocha"
        },
        "habilidadeS": "comunicação à distância com outros de sua espécie;"
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "4": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "5": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      }
    }
  },
  {
    "id": 16,
    "basico": {
      "nome": "Estrovão",
      "descricao": "O Estrovão é um dragão da Classe Casca-Grossa, conhecido por sua força física impressionante e habilidades de pulverizar pedregulhos. Possui seis pernas, antebraços grandes com garras e pequenos espinhos nas costas. Suas asas são curtas, e apresenta chifres no queixo e no nariz. Sua coloração inclui costas, asas e braços vermelho-brilhante, barriga branca e pernas azul claro."
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 28,
        "constituicao": 25,
        "destreza": 14,
        "inteligencia": 6,
        "sabedoria": 15,
        "qt_acoes": 2
      },
      "tamanho": "Grande",
      "voo": {
        "velocidade": "6",
        "tipo": "Pairador",
        "ct_acao": 1,
        "manobras": "baixa_estabilidade",
        "habilidadeS": ""
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 2,
          "1": {
            "nome": "Garras Esmagadoras",
            "descricao": "Utiliza suas garras poderosas para desferir golpes esmagadores.",
            "dano": "3d8_contundente",
            "ct_acao": 1,
            "especial": "Pode causar atordoamento no alvo"
          },
          "2": {
            "nome": "Investida de Chifres",
            "descricao": "Ataca com os chifres no queixo e no nariz, perfurando o oponente.",
            "dano": "2d10_perfurante",
            "ct_acao": 1,
            "especial": ""
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Bolas de Fogo",
            "descricao": "Cospe pequenas bolas de fogo em direção ao inimigo.",
            "dano": "4d6_fogo",
            "ct_acao": 2,
            "especial": ""
          }
        }, "basico": {
          "nome": "Estrovão",
          "descricao": "O Estrovão é um dragão da Classe Casca-Grossa, conhecido por sua força física impressionante e habilidades de pulverizar pedregulhos. Possui seis pernas, antebraços grandes com garras e pequenos espinhos nas costas. Suas asas são curtas, e apresenta chifres no queixo e no nariz. Sua coloração inclui costas, asas e braços vermelho-brilhante, barriga branca e pernas azul claro."
        },
        "habilidadeS": ""
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "4": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "5": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      }
    }
  },
  {
    "id": 17,
    "basico": {
      "nome": "Chifre Estrondoso",
      "descricao": "O Chifre Estrondoso é um dragão robusto e forte, pertencente à Classe Rastreadora. Caracteriza-se por seus grandes chifres capazes de quebrar até pedras, além de sua habilidade de cuspir enormes bolas de fogo. Possui uma incrível resistência, suportando ataques de diversas fontes simultaneamente. :contentReference[oaicite:0]{index=0}"
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 25,
        "constituicao": 30,
        "destreza": 15,
        "inteligencia": 9,
        "sabedoria": 16,
        "qt_acoes": 2
      },
      "tamanho": "Grande",
      "voo": {
        "velocidade": "9",
        "tipo": "Planador",
        "ct_acao": 1,
        "manobras": "alta_estabilidade",
        "habilidadeS": "Capacidade de voar a grandes velocidades, apesar de sua robustez."
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 2,
          "1": {
            "nome": "Investida de Chifres",
            "descricao": "Utiliza seus grandes chifres para desferir golpes poderosos que podem quebrar até pedras.",
            "dano": "4d10_contundente",
            "ct_acao": 1,
            "especial": ""
          },
          "2": {
            "nome": "Garras Cortantes",
            "descricao": "Ataca com suas garras afiadas, causando danos significativos ao oponente.",
            "dano": "3d8_cortante",
            "ct_acao": 1,
            "especial": ""
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Bolas de Fogo",
            "descricao": "Cospe enormes bolas de fogo em direção ao inimigo, resultantes de sua habilidade de soltar um fogo com muito gás.",
            "dano": "5d6_fogo",
            "ct_acao": 2,
            "especial": ""
          }
        },
        "habilidadeS": "Incrível resistência,capacidade de rastreamento excepcional."
      },"basico": {
      "nome": "Chifre Estrondoso",
      "descricao": "O Chifre Estrondoso é um dragão robusto e forte, pertencente à Classe Rastreadora. Caracteriza-se por seus grandes chifres capazes de quebrar até pedras, além de sua habilidade de cuspir enormes bolas de fogo. Possui uma incrível resistência, suportando ataques de diversas fontes simultaneamente. :contentReference[oaicite:0]{index=0}"
    },
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "4": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "5": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      }
    }
  },
  {
    "id": 18,
    "basico": {
      "nome": "Corta-Tormenta (Pula Nuvem)",
      "descricao": "O Corta-Tormenta, também conhecido como Pula Nuvem, é um dragão raro e majestoso pertencente às classes Mistério, Fogueira e Afiada. Caracteriza-se por suas quatro asas que, quando em formação de 'X', proporcionam manobras aéreas precisas e ágeis. Possui uma cabeça que lembra a de uma coruja, permitindo visão de 360 graus, e garras dianteiras afiadas em forma de gancho, capazes de abrir fechaduras. Sua saliva é inflamável, permitindo-lhe cuspir mini tornados de fogo. É resistente a cargas elétricas devido ao seu hábito de cortar nuvens de tempestades para proteger seu ninho."
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 22,
        "constituicao": 20,
        "destreza": 28,
        "inteligencia": 15,
        "sabedoria": 12,
        "qt_acoes": 2
      },
      "tamanho": "Grande",
      "voo": {
        "velocidade": "9",
        "tipo": "Planador",
        "ct_acao": 1,
        "manobras": "alta_estabilidade",
        "habilidadeS": "Capacidade de realizar manobras aéreas precisas e ágeis graças às suas quatro asas em formação de 'X'."
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 2,
          "1": {
            "nome": "Garras Cortantes",
            "descricao": "Ataca com suas garras afiadas em forma de gancho, capazes de causar danos significativos.",
            "dano": "3d8_cortante",
            "ct_acao": 1,
            "especial": ""
          },
          "2": {
            "nome": "Mordida Poderosa",
            "descricao": "Utiliza suas presas afiadas para desferir uma mordida devastadora.",
            "dano": "4d6_perfurante",
            "ct_acao": 1,
            "especial": ""
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Tornado de Fogo",
            "descricao": "Cospe um mini tornado de fogo, combinando ar quente e frio para gerar seu poder de fogo.",
            "dano": "5d6_fogo",
            "ct_acao": 2,
            "especial": ""
          }
        },"basico": {
      "nome": "Corta-Tormenta (Pula Nuvem)",
      "descricao": "O Corta-Tormenta, também conhecido como Pula Nuvem, é um dragão raro e majestoso pertencente às classes Mistério, Fogueira e Afiada. Caracteriza-se por suas quatro asas que, quando em formação de 'X', proporcionam manobras aéreas precisas e ágeis. Possui uma cabeça que lembra a de uma coruja, permitindo visão de 360 graus, e garras dianteiras afiadas em forma de gancho, capazes de abrir fechaduras. Sua saliva é inflamável, permitindo-lhe cuspir mini tornados de fogo. É resistente a cargas elétricas devido ao seu hábito de cortar nuvens de tempestades para proteger seu ninho."
    },
        "habilidadeS": "Resistência a cargas elétricas; visão de 360 graus."
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "4": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "5": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      }
    }
  },
  {
    "id": 19,
    "basico": {
      "nome": "Chicote Cortante",
      "descricao": "O Chicote Cortante é um dragão ágil e perigoso da classe Afiada. Seu corpo longo e esguio é coberto por escamas brilhantes e lâminas afiadas que se destacam em sua cauda, usada como uma arma letal. É conhecido por seu ataque com a cauda em forma de chicote, capaz de cortar árvores e infligir feridas profundas em seus inimigos. Este dragão é rápido e prefere emboscadas, utilizando sua agilidade e força para dominar seus oponentes."
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 24,
        "constituicao": 18,
        "destreza": 30,
        "inteligencia": 7,
        "sabedoria": 12,
        "qt_acoes": 3
      },
      "tamanho": "Médio",
      "voo": {
        "velocidade": "10",
        "tipo": "Caçador",
        "ct_acao": 1,
        "manobras": "alta_estabilidade",
        "habilidadeS": "Pode usar sua cauda como uma arma precisa e letal, capaz de desferir cortes poderosos."
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 2,
          "1": {
            "nome": "Golpe de Chicote",
            "descricao": "Usa sua cauda como um chicote para atacar com precisão.",
            "dano": "3d8_cortante",
            "ct_acao": 1,
            "especial": ""
          },
          "2": {
            "nome": "Investida Rápida",
            "descricao": "Avança rapidamente para um ataque surpresa com suas lâminas corporais.",
            "dano": "2d6_cortante",
            "ct_acao": 1,
            "especial": ""
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Projéteis de Escamas",
            "descricao": "Lança escamas afiadas de seu corpo como projéteis.",
            "dano": "4d6_cortante",
            "ct_acao": 2,
            "especial": ""
          }
        },
        "basico": {
          "nome": "Chicote Cortante",
          "descricao": "O Chicote Cortante é um dragão ágil e perigoso da classe Afiada. Seu corpo longo e esguio é coberto por escamas brilhantes e lâminas afiadas que se destacam em sua cauda, usada como uma arma letal. É conhecido por seu ataque com a cauda em forma de chicote, capaz de cortar árvores e infligir feridas profundas em seus inimigos. Este dragão é rápido e prefere emboscadas, utilizando sua agilidade e força para dominar seus oponentes."
        },
        "habilidadeS": "."
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "4": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "5": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      }
    }
  },
  {
    "id": 20,
    "basico": {
      "nome": "Dente Afiado",
      "descricao": "O Dente Afiado é um dragão feroz da classe Afiada, conhecido por suas mandíbulas extremamente poderosas e presas afiadas. Este dragão médio combina velocidade e força, tornando-se um predador temido. Sua aparência intimidadora é complementada por escamas duras e olhos atentos que lhe conferem uma presença marcante."
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 28,
        "constituicao": 22,
        "destreza": 26,
        "inteligencia": 6,
        "sabedoria": 14,
        "qt_acoes": 3
      },
      "tamanho": "Médio",
      "voo": {
        "velocidade": "7",
        "tipo": "Planador",
        "ct_acao": 1,
        "manobras": "média_estabilidade",
        "habilidadeS": ""
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 2,
          "1": {
            "nome": "Mordida Devastadora",
            "descricao": "Ataca com suas mandíbulas poderosas, perfurando a armadura do inimigo.",
            "dano": "3d10_cortante",
            "ct_acao": 1,
            "especial": ""
          },
          "2": {
            "nome": "Golpe com a calda",
            "descricao": "Rasga o inimigo com a calda afiada.",
            "dano": "2d8_cortante",
            "ct_acao": 1,
            "especial": ""
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Bola de fogo",
            "descricao": "Lança sua rejada de fogo",
            "dano": "2d8_fog",
            "ct_acao": 2,
            "especial": ""
          }
        },
        "basico": {
          "nome": "Dente Afiado",
          "descricao": "O Dente Afiado é um dragão feroz da classe Afiada, conhecido por suas mandíbulas extremamente poderosas e presas afiadas. Este dragão médio combina velocidade e força, tornando-se um predador temido. Sua aparência intimidadora é complementada por escamas duras e olhos atentos que lhe conferem uma presença marcante."
        },
        "habilidadeS": ""
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "4": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "5": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      }
    }
  },
  {
    "id": 21,
    "basico": {
      "nome": "Picada Veloz",
      "descricao": "O Picada Veloz é um dragão pequeno e ágil da classe Afiada. Conhecido por seus ataques rápidos e precisos, ele é um mestre em emboscadas e em usar suas presas e ferrões venenosos para incapacitar inimigos. Seu corpo aerodinâmico e asas esguias permitem manobras impressionantes."
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 18,
        "constituicao": 16,
        "destreza": 30,
        "inteligencia": 8,
        "sabedoria": 12,
        "qt_acoes": 3
      },
      "tamanho": "Pequeno",
      "voo": {
        "velocidade": "10",
        "tipo": "Ágil",
        "ct_acao": 1,
        "manobras": "altíssima_estabilidade",
        "habilidadeS": "Não Voa"
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 2,
          "1": {
            "nome": "Picada Envenenada",
            "descricao": "Crava seu ferrão venenoso no inimigo, causando dano contínuo.",
            "dano": "",
            "ct_acao": 1,
            "especial": "Paralisa o alvo"
          },
          "2": {
            "nome": "Mordida",
            "descricao": "Morde o oponente",
            "dano": "2d8_perfurante",
            "ct_acao": 1,
            "especial": ""
          }
        },
        "distancia": {
          "qt_att": 0
          
        },
        "basico": {
          "nome": "Picada Veloz",
          "descricao": "O Picada Veloz é um dragão pequeno e ágil da classe Afiada. Conhecido por seus ataques rápidos e precisos, ele é um mestre em emboscadas e em usar suas presas e ferrões venenosos para incapacitar inimigos. Seu corpo aerodinâmico e asas esguias permitem manobras impressionantes."
        },
        "habilidadeS": "Andar sobre a Agua e paralisia Potente"
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "4": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "5": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      }
    }
  },
  {
    "id": 22,
    "basico": {
      "nome": "",
      "descricao": ""
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 18,
        "constituicao": 22,
        "destreza": 16,
        "inteligencia": 6,
        "sabedoria": 12,
        "qt_acoes": 3
      },
      "tamanho": "Grande",
      "voo": {
        "velocidade": "8",
        "tipo": "Planador",
        "ct_acao": 1,
        "manobras": "alta_estabilidade",
        "habilidadeS": "Protetor reforçado"
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 1,
          "1": {
            "nome": "Investida Blindada",
            "descricao": "Avança com força, utilizando suas placas reforçadas como arma.",
            "dano": "2d8_contundente",
            "ct_acao": 1,
            "especial": ""
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Fogo",
            "descricao": "Uma regade de fogo",
            "dano": "2d6_fogo",
            "ct_acao": 2,
            "especial": ""
          }
        },
        "habilidadeS": ""
      },
      "basico": {
        "nome": "Armadura Asa",
        "descricao": "Um dragão protegido por uma carapaça resistente, especializado em defesa e ataques calculados."
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": ""
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": ""
        }
      },
      "4": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "5": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": ""
        }
      }
    }
  },
  {
    "id": 23,
    "basico": {
      "nome": "",
      "descricao": ""
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 24,
        "constituicao": 20,
        "destreza": 18,
        "inteligencia": 7,
        "sabedoria": 14,
        "qt_acoes": 3
      },
      "tamanho": "Grande",
      "voo": {
        "velocidade": "7",
        "tipo": "Planador",
        "ct_acao": 1,
        "manobras": "alta_estabilidade",
        "habilidadeS": "Controle de substâncias viscosas"
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 1,
          "1": {
            "nome": "Mordida Envolvente",
            "descricao": "Usa suas mandíbulas poderosas para prender o alvo.",
            "dano": "2d10_cortante",
            "ct_acao": 1,
            "especial": ""
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Jato de Âmbar",
            "descricao": "Cospe uma substância pegajosa e endurecida.",
            "dano": "2d6_contundente",
            "ct_acao": 2,
            "especial": ""
          }
        },
        "habilidadeS": "Criar barreiras de âmbar, e controla drgões por Meio do canto"
      },
      "basico": {
        "nome": "Canção da Morte",
        "descricao": "Um dragão letal e hipnotizante que utiliza seu canto para atrair presas e âmbar endurecido como arma e defesa."
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": ""
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": ""
        }
      },
      "4": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "5": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": ""
        }
      }
    }
  },
  {
    "id": 24,
    "basico": {
      "nome": "",
      "descricao": ""
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 28,
        "constituicao": 25,
        "destreza": 16,
        "inteligencia": 10,
        "sabedoria": 12,
        "qt_acoes": 3
      },
      "tamanho": "Grande",
      "voo": {
        "velocidade": "6",
        "tipo": "Batedor",
        "ct_acao": 1,
        "manobras": "média_estabilidade",
        "habilidadeS": "Resistência natural ao calor extremo"
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 1,
          "1": {
            "nome": "Golpe de Cauda",
            "descricao": "Usa sua poderosa cauda para golpear o inimigo.",
            "dano": "2d10_contundente",
            "ct_acao": 1,
            "especial": "Pode derrubar o alvo."
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Bola de fogo",
            "descricao": "Cospe uma esfera de fogo quente em direção ao inimigo.",
            "dano": "3d8_fogo",
            "ct_acao": 2,
            "especial": "Pode copiar o fogo de outros dragões"
          }
        },
        "habilidadeS": "Imunidade a queimaduras"
      },
      "basico": {
        "nome": "Dramilhão",
        "descricao": "Um dragão robusto e resistente, conhecido por sua capacidade de armazenar lava em seu corpo e usá-la como arma."
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": ""
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": ""
        }
      },
      "4": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "5": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": ""
        }
      }
    }
  },
  {
    "id": 25,
    "basico": {
      "nome": "",
      "descricao": ""
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 18,
        "constituicao": 22,
        "destreza": 14,
        "inteligencia": 8,
        "sabedoria": 10,
        "qt_acoes": 3
      },
      "tamanho": "Pequeno",
      "voo": {
        "velocidade": "5",
        "tipo": "Planador",
        "ct_acao": 1,
        "manobras": "alta_estabilidade",
        "habilidadeS": "Criação de nuvens de fumaça"
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 1,
          "1": {
            "nome": "Investida Enfumaçada",
            "descricao": "Avança contra o inimigo em meio a uma nuvem de fumaça.",
            "dano": "2d8_contundente",
            "ct_acao": 1,
            "especial": ""
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Nuvem de Fumaça",
            "descricao": "Libera uma espessa nuvem de fumaça que reduz a visibilidade.",
            "dano": "Nenhum",
            "ct_acao": 1,
            "especial": "Cria uma área de 3x3 onde ataques à distância têm desvantagem."
          }
        },
        "habilidadeS": ""
      },
      "basico": {
        "nome": "Fumaça Fumegante",
        "descricao": "Um dragão furtivo que utiliza nuvens de fumaça para confundir e escapar de inimigos."
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": ""
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": ""
        }
      },
      "4": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "5": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": ""
        }
      }
    }
  },
  {
    "id": 26,
    "basico": {
      "nome": "Rouba-Ossos",
      "descricao": "Um dragão raro da Classe Mistério que se protege cobrindo seu corpo com ossos coletados, formando uma armadura natural."
    },
    "inventario": {
      "armadura": "Armadura de Ossos",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 7,
        "constituicao": 18,
        "destreza": 10,
        "inteligencia": 6,
        "sabedoria": 8,
        "qt_acoes": 3
      },
      "tamanho": "Grande",
      "voo": {
        "velocidade": "10",
        "tipo": "Planador",
        "ct_acao": 1,
        "manobras": "alta_estabilidade",
        "habilidadeS": "Cobertura de ossos para proteção"
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 2,
          "1": {
            "nome": "Mordida",
            "descricao": "Uma mordida poderosa capaz de causar danos significativos.",
            "dano": "2d8_cortante",
            "ct_acao": 1,
            "especial": "."
          },
          "2": {
            "nome": "Golpe de Cauda",
            "descricao": "Um golpe com a cauda reforçada por ossos.",
            "dano": "2d6_contundente",
            "ct_acao": 1,
            "especial": "Pode atordoar o alvo por 1 turno."
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Chamas Ondulantes",
            "descricao": "Libera um fluxo de fogo ondulante em direção ao inimigo.",
            "dano": "3d6_fogo",
            "ct_acao": 2,
            "especial": ""
          }
        },
        "habilidadeS": ""
      },
      "basico": {
        "nome": "Rouba-Ossos",
        "descricao": "Um dragão raro da Classe Mistério que se protege cobrindo seu corpo com ossos coletados, formando uma armadura natural."
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": ""
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": ""
        }
      },
      "4": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "5": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": ""
        }
      }
    }
  },
  {
    "id": 26,
    "basico": {
      "nome": "Transformasa",
      "descricao": "O Transformasa é um dragão camaleônico, capaz de mudar de cor e adaptar sua aparência ao ambiente, tornando-se invisível."
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 15,
        "constituicao": 12,
        "destreza": 25,
        "inteligencia": 14,
        "sabedoria": 10,
        "qt_acoes": 3
      },
      "tamanho": "Médio",
      "voo": {
        "velocidade": "10",
        "tipo": "Planador",
        "ct_acao": 1,
        "manobras": "alta_estabilidade",
        "habilidadeS": "Camuflagem perfeita"
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 1,
          "1": {
            "nome": "Ataque de Camuflagem",
            "descricao": "Ataca furtivamente após se camuflar, pegando o inimigo de surpresa.",
            "dano": "4d8_cortante",
            "ct_acao": 1,
            "especial": "Aumenta o dano se for o primeiro ataque após a camuflagem"
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Rajada de Acido",
            "descricao": "Dispara uma rajada de acido adaptada ao ambiente.",
            "dano": "3d8_acido",
            "ct_acao": 2,
            "especial": ""
          }
        },
        "habilidadeS": "Camuflagem em qualquer ambiente"
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "4": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "5": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      }
    }
  },
  {
    "id": 27,
    "basico": {
      "nome": "Estridente",
      "descricao": "Um dragão do tipo raio, capaz de gerar e controlar eletricidade. Seu corpo é altamente adaptado para tempestades elétricas."
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 25,
        "constituicao": 22,
        "destreza": 30,
        "inteligencia": 18,
        "sabedoria": 14,
        "qt_acoes": 3
      },
      "tamanho": "Médio",
      "voo": {
        "velocidade": "10",
        "tipo": "Planagem",
        "ct_acao": 1,
        "manobras": "alta_estabilidade",
        "habilidadeS": "Controle de eletricidade, dispara raios através de espinhos"
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 1,
          "1": {
            "nome": "Mordida Elétrica",
            "descricao": "Uma mordida acompanhada por uma descarga elétrica.",
            "dano": "2d8_cortante",
            "ct_acao": 1,
            "especial": "1d6_eletrico"
          }
        },
        "distancia": {
          "qt_att": 2,
          "1": {
            "nome": "Rajada Elétrica",
            "descricao": "Dispara uma rajada de eletricidade em um único alvo.",
            "dano": "4d8_eletrico",
            "ct_acao": 2,
            "especial": ""
          },
          "2": {
            "nome": "Chuva de Raios",
            "descricao": "Dispara uma série de raios em área, atingindo múltiplos alvos.",
            "dano": "2d8_eletrico por alvo (máximo 3 alvos)",
            "ct_acao": 3,
            "especial": ""
          }
        },
        "habilidadeS": ""
      },
      "basico": {
        "nome": "Estridente",
        "descricao": "Capaz de gerar poderosos raios e criar escudos elétricos, o Estridente é um dos dragões mais temidos nas tempestades."
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "4": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "5": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      }
    }
  },
  {
    "id": 28,
    "basico": {
      "nome": "Fantasma da Neve",
      "descricao": "Um dragão branco que é altamente adaptado ao frio, utilizando sua camuflagem e habilidades geladas para caçar e sobreviver em ambientes nevados."
    },
    "inventario": {
      "armadura": "",
      "apetrecho": ""
    },
    "especie": {
      "estatisticas": {
        "forca": 25,
        "constituicao": 18,
        "destreza": 30,
        "inteligencia": 14,
        "sabedoria": 16,
        "qt_acoes": 3
      },
      "tamanho": "Médio",
      "voo": {
        "velocidade": "6",
        "tipo": "Planagem",
        "ct_acao": 1,
        "manobras": "alta_estabilidade",
        "habilidadeS": "Camuflagem em ambientes nevados"
      },
      "batalha": {
        "corpo-corpo": {
          "qt_att": 1,
          "1": {
            "nome": "Garras Cortantes",
            "descricao": "Usa suas afiadas garras para cortar e rasgar o inimigo.",
            "dano": "2d8_cortante",
            "ct_acao": 1,
            "especial": ""
          }
        },
        "distancia": {
          "qt_att": 1,
          "1": {
            "nome": "Rajada de Gelo",
            "descricao": "Dispara uma rajada de gelo com grande precisão e força.",
            "dano": "3d8_gelo",
            "ct_acao": 2,
            "especial": "congelamento"
          }
        },
        "habilidadeS": "Deslocamento silencioso sobre neve e gelo"
      }
    },
    "nivel": {
      "nivelA": 1,
      "1": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        },
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "2": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "3": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "4": {
        "ativa": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      },
      "5": {
        "passiva": {
          "nome": "",
          "descricao": "",
          "efeito": "",
          "ct_acao": 0
        }
      }
    }
  }
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  

  

  
  
  
  



]
const dracos=[
              {'nome':'EspecialB','chance':[1,'o']},
              {'nome':'Gronkel','chance':[6,'o']},
              {'nome':'ziper','chance':[1,'o']},
              {'nome':'pesadelo','chance':[3,'o']},
              {'nome':'furia','chance':[3,'o']},
              {'nome':'nader','chance':[3,'o']},
              {'nome':'ziper','chance':[3,'o']},
              {'nome':'pesadelo','chance':[3,'o']},
              {'nome':'furia','chance':[10,'o']},
              {'nome':'nader','chance':[20,'o']},
              {'nome':'ziper','chance':[20,'o']},
              {'nome':'pesadelo','chance':[50,'o']},
              {'nome':'furia','chance':[10,'o']},
              {'nome':'nader','chance':[20,'o']},
              {'nome':'ziper','chance':[20,'o']},
              {'nome':'pesadelo','chance':[50,'o']},
              {'nome':'furia','chance':[10,'o']},
              {'nome':'nader','chance':[20,'o']},
              {'nome':'ziper','chance':[20,'o']},
              {'nome':'pesadelo','chance':[50,'o']},
              {'nome':'furia','chance':[10,'o']},
              {'nome':'nader','chance':[20,'o']},
              {'nome':'ziper','chance':[20,'o']},
              {'nome':'pesadelo','chance':[50,'o']},
              {'nome':'furia','chance':[10,'o']},
              {'nome':'nader','chance':[20,'o']},
              {'nome':'ziper','chance':[20,'o']},
              {'nome':'pesadelo','chance':[50,'o']},
              
            ]


export default function Dragoes() {
  const teste = (dracos)=>{

    const chancesT = _.flatMap(dracos, (value)=>
      (_.repeat(value.nome+' ',value.chance[0]).split(' ').filter((item)=>item!=''))
      
    
  )

  
  return chancesT
  }
  console.log(teste(dracos))

  

 

  return <><p>{dragoes.find(dragao=>dragao.id === 5).especie.voo.velocidade}</p></>;
}
