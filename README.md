# Tree 시작하며...

> Tree > BiraryTree > Heap > BiraryHeap

- 이진트리가 트리의 일부분이듯 이진힙도은 힙의 한부분
- 힙은 그 자체로도 유용하지만 우선순위 큐와 같은 다른 데이터 구조를 코딩하는 데도 유용하다.
- 이진힙은 최대힙, 최소힙으로 다시 나뉜다.
- 트리는 한쪽으로 치우친 구조가 나올수 있지만 힙은 한쪽으로 몰린 트리구조는 볼 수 없다.
- 힙은 array로 표현이 가능하다. 보이는 구조를 평면화 하면 된다.

## Tree

## Binary Heap

- 최대 or 최소를 포장하는 이진트리
- 단 하위항목의 크기 대소관계는 보장하지 않음
- input 이 되면 상위의 부모와 비교해서 교체하는 알고리즘이 존재함
- 따라서 root가 최대값으로 유지되면 최대힙, 최소로 유지되면 최소 힙이라고 부름

- Insert : parentIndex = (n + 1) / 2
- delete : leftIndex = 2n + 1 ,
  rightIndex = 2n + 2

- Big O of Birary Heaps
  - insert ,delete - O(log N)
  - seach - O(N)

## Priority Queue

- 우선순위 큐는 각 요소가 그에 해당하는 우선순위를 가지는 데이터
- 더 높은 우선순위를 가진요소가 상위에 올라옴
- 데이터 모음인데 각각의 우선순위가 있는 데이터 모음집
- 우선순위큐는 힙과는 별개
