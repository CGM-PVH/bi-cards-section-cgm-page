import painelDiariasAtivo from '../assets/cards BI - ativos/painel diarias - ativo.jpg'
import painelDiariasInativo from '../assets/cards BI - inativos/painel diarias - inativo.jpg'

import painelObrasAtivo from '../assets/cards BI - ativos/painel obras - ativo.jpg';
import painelObrasInativo from '../assets/cards BI - inativos/painel obras - inativo.jpg';

import painelEPontoAtivo from '../assets/cards BI - ativos/painel e-ponto - ativo.jpg';
import painelEPontoInativo from '../assets/cards BI - inativos/painel e-ponto - inativo.jpg';

import painelSupFundoAtivo from '../assets/cards BI - ativos/painel sup fundo - ativo.jpg';
import painelSupFundoInativo from '../assets/cards BI - inativos/painel sup fundo - inativo.jpg';

const cardsData = {
    "painelDiarias": {
        isActive: false,
        cardImage: {
            url1: painelDiariasAtivo,
            alt1: 'Painel diárias - banner - ativo ',
            url2: painelDiariasInativo,
            alt2: 'Painel diárias - banner - inativo '
        },
        linkURL: '#'
    },
    "painelObras": {
        isActive: true,
        cardImage: {
            url1: painelObrasAtivo,
            alt1: 'Painel obras - banner - ativo',
            url2: painelObrasInativo,
            alt2: 'Painel obras - banner - inativo '
        },
        linkURL: 'https://bi-obras-cgm-pvh.vercel.app/'
    },
    "painelEPonto": {
        isActive: false,
        cardImage: {
            url1: painelEPontoAtivo,
            alt1: 'Painel e-ponto - banner - ativo',
            url2: painelEPontoInativo,
            alt2: 'Painel e-ponto - banner - inativo '
        },
        linkURL: '#'
    },
    "painelSupFundo": {
        isActive: false,
        cardImage: {
            url1: painelSupFundoAtivo,
            alt1: 'Painel suprimento de fundo - banner - ativo',
            url2: painelSupFundoInativo,
            alt2: 'Painel suprimento de fundo - banner - inativo '
        },
        linkURL: '#'
    },
}

export default cardsData;