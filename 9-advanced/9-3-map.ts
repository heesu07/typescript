type Video ={
  title: string;
  author: string;
};
// 매번 바꾸어야 한다면 너무 번거롭다.
// type VideoOptional ={
//   title?: string;
//   author?: string;
//   description?:string;
// };
// type VideoReadOnly ={
//   readonly title?: string;
//   readonly author?: string;
//   readonly description?:string;
// };

type Optional<T> ={
  [P in keyof T]?: T[P] // for - in 
};
type VideoOptional = Optional<Video>; // 위의 VideoOptional 과 같은 역할.
const videoOp: VideoOptional ={
  title : "daniel",
  // age : 22, // age 는 Video 에 없는 타입이므로 안됨
}
type ReadOnly<T> ={
  readonly [P in keyof T] :T[P]; // for - in 
};
type VideoReadOnly = ReadOnly<Video>;
const video_readonly: VideoReadOnly ={
  title: 'Kim',
  author: 'Herry',
}
//video_readonly.title ='nora'; // readonly 이기에 변경 할 수 없다.

// 의에서는 해당 값이 없어도 되며, 아래의 경우 해당값이 null 을 갖을 수 있다는 차이
type Nullable<T> = {[P in keyof T]: T[P] | null };
const nullableVideo : Nullable<Video> ={
  title : 'good morning sunshine',
  author: null,
};
nullableVideo.title = null; // 가능

type Proxy<T> ={
  get(): T;
  set(value:T) void;
};
type Proxify<T>={
  [P in keyof T]: Proxy<T[P]>;
};
