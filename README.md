# Angular 정리

model = class , 객체  
view = templete, html viewModel에 연결됨  
viewMdoel = model, properties를 관리하는 뷰의 백엔드 느낌, view와 viewModel은 데이터 바인딩을 통해 연결하며, viewModel의 변경사항은 view에 바로 반영됨  

## * 디렉티브
엘리멘트에 어던 동작을 추가하는 클래스
1. 컴포넌트(Components)—템플릿이 존재하는 디렉티브
2. 어트리뷰트 디렉티브(Attribute directives)—HTML 엘리먼트, 어트리뷰트, 프로퍼티, 컴포넌트의 동작을 변경하는 디렉티브
3. 구조 디렉티브(Structural directives)—조건에 맞는 엘리먼트를 DOM 트리에 추가하거나, 제거, 조작하는 방식으로 DOM 구조를 변형

## - 데코레이터
어노테이션 EX) @NgModule({})

### - @NgModule
    컴포넌트와 디렉티브, 파이프 등 기능이 연관된 구성요소를 하나로 묶어 관리하는 단위, Angular의 모듈 정의

### - @NgModule
	({
		declarations: [
		모듈에 속하는 컴포넌트 삽입, 새로운컴포넌트는 반드시 추가해야 사용가능
		모듈에 속하는 파이프,
		모듈에 속하는 디렉티브

	  ],
	  imports: [ 

		해당 NgModule에서 사용할 모듈
		CardModule,

	  ],
	  providers: [

		삽입할 클래스 해당 NgModule에서 해당 클래스를 참조가 가능해짐

	],
	  bootstrap: [렌더링시 최상위 컴포넌트]
	});

## * 컴포넌트
### - @Component
	컴포넌트는 무조건 NgModule 하나에 declarations 되야함. 안할시 에러발생.
	
	@Component({ 
		selector:"태그",
		templateUrl:"뷰(html등)",
		styleUrls: css[]
	});

### - class
	export class Card {}

## 이벤트

### 이벤트 객체 참조 방법

	<div class="search">
		<input (change)="onChange($event)">   //$event 객체 전달
	</div>

	onChange(e:Event): void {
		console.log(e);
	};

이벤트 작업중 요류가 발생하였다.
에러메세지 : Object is possibly 'null'.

	getValue(e:Event): string {
		return e.target.value;
	}

찾아보니 e.target 객체가 있을지 없을지 모르는데 값(value)을 접근하려 해서 그렇다고 한다.

	getValue(e:Event): string {
	return e.target?.value;
	}

optional Chain을 이용하려 하였지만, Property 'value' does not exist on type 'EventTarget' 라는 새로운 에러가 등장했다.
에러 메세지를 보니 EventTaget 타입에서는 value가 없다는거 같다. 타입스크립트에서 타입이 안맞는다고 튕겨낸것으로 보인다

Angular Guide에서는 e.target을 html element라고 알려줘야 정상 작동 한다고한다.
결국 타입을 맞춤으로써 optional Chain을 이용할 필요가 없어졌다. 

	getValue(e:Event): string {
		return (e.target as HTMLInputElement).value;
	}

## 양방향 바인딩

	@Input() counter: Counter = {
		name:"첫번쨰",
		count:0
	};

	@Output() counterChange = new EventEmitter<Counter>();

	onIncrease(): void {
		console.log(this);
		this.counter.count = this.counter.count * 1;
		this.counter.count += 1 ;
		this.counterChange.emit(this.counter);
	};
  
	<input id={{counter.name}} [(ngModel)]="counter.count">
	<button (click)="onIncrease()">+</button>
