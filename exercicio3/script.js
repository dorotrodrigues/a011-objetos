// # Exercício 3

// Observe o objeto abaixo e, utilizando o **espalhamento** resolva os exercícios a seguir:

// ```jsx
// const pokemon1 = {
// 	nome: "Bulbasaur",
// 	tipo: "Grama",
// 	nivel: 5
// };
// ```

// a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”

// ```text
// nome: Investida;
// dano: 40;
// tipo: Normal;
// precisao: 100;
// ```

const pokemon1 = {
    	nome: "Bulbasaur",
    	tipo: "Grama",
     	nivel: 5,
        ataques: []
     };

    
    // a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”
    
    // c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;
    
     // d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;

     // e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;
   
    const novoPokemon1 = {...pokemon1}
    novoPokemon1.nome = "Squietle"
    novoPokemon1.tipo = "Água"
    novoPokemon1.ataques.push("Jato de água, com 40 de dano, 100 de precisão e tipo Água.")

    pokemon1.ataques.push("Folha Navalha, com 45 de dano, 100 de precisão e tipo Grama.")

    // f) Imprima os dois objetos no console.

    console.log(pokemon1, novoPokemon1)