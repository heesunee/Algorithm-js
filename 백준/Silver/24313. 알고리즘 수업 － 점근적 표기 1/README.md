# [Silver V] 알고리즘 수업 - 점근적 표기 1 - 24313 

[문제 링크](https://www.acmicpc.net/problem/24313) 

### 성능 요약

메모리: 9340 KB, 시간: 92 ms

### 분류

수학

### 제출 일자

2024년 9월 19일 23:57:08

### 문제 설명

<p style="user-select: auto !important;">오늘도 서준이는 점근적 표기 수업 조교를 하고 있다. 아빠가 수업한 내용을 학생들이 잘 이해했는지 문제를 통해서 확인해보자.</p>

<p style="user-select: auto !important;">알고리즘의 소요 시간을 나타내는 O-표기법(빅-오)을 다음과 같이 정의하자.</p>

<p style="user-select: auto !important;">O(<em style="user-select: auto !important;">g</em>(<em style="user-select: auto !important;">n</em>)) = {<em style="user-select: auto !important;">f</em>(<em style="user-select: auto !important;">n</em>) | 모든 <em style="user-select: auto !important;">n</em> ≥ <em style="user-select: auto !important;">n<sub style="user-select: auto !important;">0</sub></em>에 대하여 <em style="user-select: auto !important;">f</em>(<em style="user-select: auto !important;">n</em>) ≤ <em style="user-select: auto !important;">c</em> × <em style="user-select: auto !important;">g</em>(<em style="user-select: auto !important;">n</em>)인 양의 상수 <em style="user-select: auto !important;">c</em>와 <em style="user-select: auto !important;">n<sub style="user-select: auto !important;">0</sub></em>가 존재한다}</p>

<p style="user-select: auto !important;">이 정의는 실제 O-표기법(<a href="https://en.wikipedia.org/wiki/Big_O_notation" style="user-select: auto !important;">https://en.wikipedia.org/wiki/Big_O_notation</a>)과 다를 수 있다.</p>

<p style="user-select: auto !important;">함수 <em style="user-select: auto !important;">f</em>(<em style="user-select: auto !important;">n</em>) = <em style="user-select: auto !important;">a<sub style="user-select: auto !important;">1</sub>n </em>+ <em style="user-select: auto !important;">a<sub style="user-select: auto !important;">0</sub></em>, 양의 정수 <em style="user-select: auto !important;">c</em>, <em style="user-select: auto !important;">n<sub style="user-select: auto !important;">0</sub></em>가 주어질 경우 O(<em style="user-select: auto !important;">n</em>) 정의를 만족하는지 알아보자.</p>

### 입력 

 <p style="user-select: auto !important;">첫째 줄에 함수 <em style="user-select: auto !important;">f</em>(<em style="user-select: auto !important;">n</em>)을 나타내는 정수 <em style="user-select: auto !important;">a<sub style="user-select: auto !important;">1</sub></em>, <em style="user-select: auto !important;">a</em><sub style="user-select: auto !important;"><em style="user-select: auto !important;">0</em></sub>가 주어진다. (0 ≤ |<em style="user-select: auto !important;">a<sub style="user-select: auto !important;">i</sub></em>| ≤ 100)</p>

<p style="user-select: auto !important;">다음 줄에 양의 정수 <em style="user-select: auto !important;">c</em>가 주어진다. (1 ≤ <em style="user-select: auto !important;">c</em> ≤ 100)</p>

<p style="user-select: auto !important;">다음 줄에 양의 정수 <em style="user-select: auto !important;">n<sub style="user-select: auto !important;">0</sub></em>가 주어진다. (1 ≤ <em style="user-select: auto !important;">n<sub style="user-select: auto !important;">0</sub></em> ≤ 100)</p>

### 출력 

 <p style="user-select: auto !important;"><em style="user-select: auto !important;">f</em>(<em style="user-select: auto !important;">n</em>), <em style="user-select: auto !important;">c</em>, <em style="user-select: auto !important;">n<sub style="user-select: auto !important;">0</sub></em>가 O(<em style="user-select: auto !important;">n</em>) 정의를 만족하면 1, 아니면 0을 출력한다.</p>

