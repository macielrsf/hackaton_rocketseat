import * as types from '../constants';

const INITIAL_STATE = {
    loading: false,
    courses: [
        {  
            "name":"Lógica de Programação",
            "description":"Aprenda lógica de programação",
            "powered_by":"Alura",
            "stars":4,
            "posts":[  
                {  
                    "id":1,
                    "date":"2019-11-26T18:00:00-03:00",
                    "title":"Lógica de Programação - Vídeo Aula Completa + Exercícios",
                    "message":"teste",
                    "content_url":"https://www.youtube.com/watch?v=PbRkAwZnQCU"
                },
                {  
                    "id":2,
                    "date":"2019-11-26T18:00:00-03:00",
                    "title":"Lógica de Programação | É importante para programar?",
                    "message":"Nessa vídeo-aula você vai entender se estudar Lógica de Programação antes de aprender a programar é importante… E como fazer isso da melhor forma sem ter que estudar aqueles fluxogramas e pseudocódigos. E ainda… Aprender a MELHOR FORMA de estudar as matérias mais “chatas” enganando seu cérebro e dando uma turbinada na sua motivação para os estudos.",
                    "content_url":"https://youtu.be/8iKa40VA-iQ"
                },
                {  
                    "id":3,
                    "date":"2019-11-26T18:00:00-03:00",
                    "title":"Exercício Prático: Como Melhorar a sua Lógica",
                    "message":"Neste vídeo eu irei mostrar um exercício pouco usado e que irá destravar a sua mente na hora de programar.",
                    "content_url":"https://youtu.be/FK5IVi44wos"
                }
            ]
        },









        {  
            "name":"HTML",
            "description":"Conheça tudo sobre HTML, o que é e como utilizar para criar páginas webs.",
            "powered_by":"Udemy",
            "stars":3,
            "posts":[  
                {  
                    "id":1,
                    "date":"2019-11-26T18:00:00-03:00",
                    "title":"HTML // Dicionário do Programador",
                    "message":"O que é HTML",
                    "content_url":"https://www.youtube.com/watch?v=4dQtz1PpY9A"
                },
                {  
                    "id":2,
                    "date":"2019-11-26T18:00:00-03:00",
                    "title":"Curso de HTML #01 - Estrutura básica e primeiros comandos HTML",
                    "message":"Nesta Primeira aula do curso de HTML, iremos aprender os comandos básicos para criar uma página de Internet.",
                    "content_url":"https://www.youtube.com/watch?v=8dPpZsC6Vg8&list=PLx4x_zx8csUgS5ioRmQVBeGHmKBQEyNXQ"
                },
                {  
                    "id":3,
                    "date":"2019-11-26T18:00:00-03:00",
                    "title":"Curso de HTML #02 - Textos / Listas",
                    "message":"Nesta segunda aula do curso de HTML iremos continuar trabalhando com textos, mais especificamente iremos aprender a usar as listas ordenadas e não ordenadas.",
                    "content_url":"https://www.youtube.com/watch?v=DK1SZOpz2W8"
                }
            ]
        },
        {  
            "name":"Curso Grátis de JavaScript e ECMAScript para iniciantes",
            "description":"Curso de linguagem JavaScript, voltado para iniciantes e para quem quiser aprender mais sobre ECMAScript, a versão padronizada do JS. Em um curso patrocinado pelo Google, o professor Gustavo Guanabara vai ensinar o conteúdo básico",
            "powered_by":"Gustavo Guanabara",
            "stars":5,
            "posts":[  
                {  
                    "id":1,
                    "date":"2019-11-26T18:00:00-03:00",
                    "title":"Curso Grátis de JavaScript Moderno",
                    "message":"",
                    "content_url":"https://www.youtube.com/watch?v=BXqUH86F-kA&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&t=0s"
                },
                {  
                    "id":2,
                    "date":"2019-11-26T18:00:00-03:00",
                    "title":"",
                    "content_url":"https://www.youtube.com/watch?v=BXqUH86F-kA&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&index=2"
                },
                {  
                    "id":3,
                    "date":"2019-11-26T18:00:00-03:00",
                    "title":"Módulo A - Conhecendo o JavaScript",
                    "message":"",
                    "content_url":"https://www.youtube.com/watch?v=uzEhd3Lugik&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&index=3"
                }
            ]
        },

        {  
            "name":"CSS",
            "description":"Conheça tudo sobre CSS, o que é e como utilizar para estilizar páginas webs.",
            "powered_by":"Udemy",
            "stars":3,
            "posts":[  
                {  
                    "id":1,
                    "date":"2019-11-26T18:00:00-03:00",
                    "title":"O que é CSS",
                    "message":"O que é CSS 2019 - Hostinger Brasil",
                    "content_url":"https://www.youtube.com/watch?v=CTjUpZqTJDg"
                },
                {  
                    "id":2,
                    "date":"2019-11-26T18:00:00-03:00",
                    "title":"Curso de CSS3 - Aula 01 - Introdução ao CSS3",
                    "message":"Neste curso você aprenderá os conceitos básicos do CSS e o poder desta nova versão.",
                    "content_url":"https://www.youtube.com/watch?v=FRhM6sMOTfg&list=PLwXQLZ3FdTVGf7GUtiOFLc_9AXO25iIzG"
                },
                {  
                    "id":3,
                    "date":"2019-11-26T18:00:00-03:00",
                    "title":"Curso de CSS3 - Aula 02 - Aplicando CSS e Sintaxe",
                    "message":"NCursos completos de Desenvolvimento Web. 100% vídeo aulas, acesso ilimitado e aprendizado ",
                    "content_url":"https://www.youtube.com/watch?v=JOz8I_EWve8"
                }
            ]
        }



    ]
}

export default (state = INITIAL_STATE, action) => {
    switch ( action.type ) {
        case types.LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        case types.COURSES_LOADED: {
            return {
                ...state,
                courses: action.payload
            }
        }
        default:
            return state;
    }
}
