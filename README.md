## Big O

https://frontendmasters.com/courses/algorithms/


### Important concepts

* growth is with respect to the input
* Constants are dropped
* Worst case is usually the way we measure,


## Arrays Data Structure


### ArrayBuffer

ArrayBuffer no JavaScript é um objeto genérico usado para armazenar dados de forma estruturada e eficiente. É uma lista de elementos de tamanho fixo onde os elementos são acessados por índices. O ArrayBuffer é útil quando se trabalha com dados binários. Por exemplo, ele é usado para representar dados de arquivos em memória, para manipular dados de imagens na tag canvas ou para lidar com dados de áudio e vídeo.

É um espaço contínou na memória, onde cada elemento é armazenado em uma posição de memória contígua. O ArrayBuffer é um objeto genérico que pode ser usado para criar um buffer de bytes. O ArrayBuffer não pode ser manipulado diretamente, mas pode ser passado para um objeto TypedArray ou DataView que permite acesso e manipulação do ArrayBuffer.


## SEARCH

https://theprimeagen.github.io/fem-algos/lessons/our-first-algorithms/search


```bash
git clone https://github.com/ThePrimeagen/kata-machine.git
cd kata-machine
yarn install
yarn generate

```

### Linear Search

```javascript
export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
}
```

### Binary Search


>| Big O - Tricks
>| :--- |
>| If the input halves at each step, its likely $O(LogN)$ or $O(NlogN)$ |

### The two crystal ball problem

> Given two crystal balls that will break if dropped from high enouth distance, determine the exact spot in which it will break in the most optimized way.


 
## Livros

* The Introduction to Algorithms
* For Programmers Who Dont't Know How To DataStructure And Would Like To Do Other Things Well Too


[Repositório com vários livros](https://github.com/free-educa/books/tree/main/books)
