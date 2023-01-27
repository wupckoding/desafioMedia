let students = [
  { name: "Jão", nota1: 6, nota2: 9 },
  { name: "Luiz", nota1: 3, nota2: 4 },
  { name: "Leticia", nota1: 5, nota2: 4 },
];

function average(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

students.forEach((student) => {
  let media = average(student.nota1, student.nota2);
  let message = `A média do(a) aluno(a) ${student.name} é : ${media}`;
  if (media >= 7) {
    message = `${message} 
Parabéns, ${student.name}! Você foi aprovado(a) no concurso! `;
  } else {
    message = `${message}
Não foi dessa vez, ${student.name}! Tente novamente. `;
  }
  alert(message);
});
