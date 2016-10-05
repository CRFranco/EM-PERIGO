# EM-PERIGO

Solução do exercício 4

Flavius Josephus e 40 amigos rebeldes foram encurralados pelos Romanos. Seus companheiros prefiriram o suicídio à rendição, então eles decidiram formar um círculo e matar cada terceira pessoa e continuar até que não sobre ninguém. Josephus não gostou da ideia de se matar então ele calculou a posição para ser o último homem vivo (ele não cometeu suicídio já que ninguém estava olhando).

Nós vamos variar esse "jogo" de modo que cada segunda pessoa saia do círculo. Claro que haverá mais de 41 pessoas uma vez que agora temos computadores. Você deve calcular a posição segura. Seja cuidadoso pois talvez nós utilizemos o seu programa para calcular o ganhador desta competição!

Entrada

A entrada contém vários casos de teste. Cada caso de teste é composto por um número N que representa o número de participantes desse jogo. Para dificultar as coisas, o formato dele é XYeZ com a seguinte semântica: quando N é escrito em notação decimal, seu primeiro digito é X e seu segundo digito é Y, seguidos por Z zeros. Onde 0 ≤ X, Y ≤ 9, o número de zeros é 0 ≤ Z ≤ 6. Você pode assumir que N > 0. O último caso de teste é a string 00e0.

Saída

Para cada caso de teste exiba uma linha contendo a posição da pessoa que sobreviverá. Considere que os participantes possuem identificações sequenciais de 1 a N e que a contagem começa com a pessoa 1, i.e., a primeira pessoa a sair do círculo é aquela com o número 2. Por exemplo, se houver 5 pessoas no círculo, a eliminação ocorrerá da seguinte maneira: 2, 4, 1, 5 e a pessoa 3 continuará viva.

Exemplo de Entrada -	Exemplo de Saída
05e0                        3
01e1                        5
42e0                        21
66e6                        64891137
00e0



