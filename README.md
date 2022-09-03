# Tree 시작하며...

> Tree > BiraryTree > Heap > BiraryHeap

- 이진트리가 트리의 일부분이듯 이진힙도 힙의 한부분
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

# HashTable

## Objectives

> 1. 해시테이블은 무엇인가
> 2. 해시 알고리즘은 무엇인가
> 3. 좋은 해시알고리즘을 만드는법
> 4. 해시 테이블에서 충돌이 일어나는 경우
> 5. 해시 테이블에서 충돌을 해결하는 방법

### 해시테이블은 무엇인가?

어디에나 있다. 키-값을 저장하는 곳에 쓰임.
해시테이블의 키는 순서를 가지지 않음.
해시테이블은 값을 찾거나, 새로운 값을 추가하고, 삭제하는 것이 빠르다!

### 해시테이블은 왜 배워야하는가?

데이터 자체가 저장하고 다루기 편하기 때문이다.

- python - Dicionaries
- js - Objects , Maps
- java,go,scala - Maps
- Ruby - hashes

### 해시 알고리즘은 무엇인가

1. 해시테이블을 구현하기 위해서 array를 사용할 것
2. key에 해당하는 value 를 찾기 위해서, key를 valid array indices (유효한 배열 매핑)로 변경한다

### 좋은 해시란?

1. 빨라야한다
2. 균일하게 분배해야된다.
3. 결정론적이어야한다. (입력값이 일정하면 출력값도 일정해야한다)

### 해시 충돌

- 직선탐색법 : 각 자리에 하나만 데이터를 저장하며, 이에따라 해시 인덱스가 충돌시 그 앞을 보게 된다
- 개별체이닝 : 각 자리에 여러개의 데이터를 저장하며, 이에따라 해시 인덱스가 충돌하면 중첩해서 담는다

# Graph

---

> 모든 SNS에 쓰임 (추천사용자, 추천영화)

## Objectives

- 그래프가 뭔지 설명한다
- 그래프의 종류를 비교하고 실제로 use cases를 살펴본다
- 다른 자료구조와 차이점을 살펴본다
- 인접리스트로 그래프를 코딩한다
- 그래프를 순회한다 BFS DFS
- BigO를 안다

## Explain Graph

Node + Connections
트리도 그래프의 일종인데, 트리는 단지 부모(시작점)이 존재한다.
그래프는 부모노드가 존재하지 않고 각 노드는 똑같이 취급되며 서로 다른 방식으로 연결된다.

## Uses for Graphs

- SNS
- Location/Mapping
- Routing Algorithms

## Type of Graphs

- vertex : a node (꼭지점)
- Edge : connection betwwen nodes (간선)
- Weighted/Unweighted : 가중 / 비가중
- Directed/Undirected : 방향 / 무방향

## Graph에서 간선 즉, 정점사이의 관계를 표현하는 방법

1. 인접행렬
2. 인접리스트

### 인접행렬 vs 인접리스트

| 인접 행렬                                         | 인접리스트                       |
| ------------------------------------------------- | -------------------------------- |
| 데이터가 집약적이여서 행렬이 거의 꽉 차 있는 경우 | 간선이 많지 않고 퍼져있는 그래프 |
|                                                   | 간선을 순회하는 반복이 더 빠름   |
| 특정간선이 존재하는 것을 알려고 할 경우           |                                  |
| 공간소모가 큼                                     | 공간소모가 작음                  |

## Graph Traversal uses

- peer to peer networking
- web crawlers
- Finding "closet" matches/recommendations
- shortest path problems
  - GPS Navigation
  - Solving mazes
  - AI

# Dijkstra's Algorithm

- 우선순위 큐
- 가중 그래프
