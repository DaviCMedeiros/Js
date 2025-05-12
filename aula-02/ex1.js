let nome = prompt("Qual é o seu nome? ");
let idade = prompt("Qual é a sua idade? ");
let altura = prompt("Qual é a sua altura? ");
let genero = prompt("Qual é o seu gênero? ");
let estudante = confirm("Você é estudante? ");

alert(`Bem-Vindo, ${nome}! \nSeu Perfil: \nIdade: ${idade} anos \nAltura: ${altura} \nGênero: ${genero} \nEstudante: ${estudante ? "Verdadeiro" : "Falso"}`);