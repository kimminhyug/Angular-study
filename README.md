Angular 정리



model = class , 객체
view = templete, html viewModel에 연결됨
viewMdoel = model, properties를 관리하는 뷰의 백엔드 느낌, view와 viewModel은 데이터 바인딩을 통해 연결하며, viewModel의 변경사항은 view에 바로 반영됨

* 디렉티브
엘리멘트에 어던 동작을 추가하는 클래스
1. 컴포넌트(Components)—템플릿이 존재하는 디렉티브
2. 어트리뷰트 디렉티브(Attribute directives)—HTML 엘리먼트, 어트리뷰트, 프로퍼티, 컴포넌트의 동작을 변경하는 디렉티브
3. 구조 디렉티브(Structural directives)—조건에 맞는 엘리먼트를 DOM 트리에 추가하거나, 제거, 조작하는 방식으로 DOM 구조를 변형

* 데코레이터
어노테이션 EX) @NgModule({})

* @NgModule
    컴포넌트와 디렉티브, 파이프 등 기능이 연관된 구성요소를 하나로 묶어 관리하는 단위, Angular의 모듈 정의

@NgModule({
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
})

BrowserModule	    @angular/platform-browser	브라우저에서 애플리케이션을 실행할 때
CommonModule	    @angular/common	            NgIf, NgFor를 사용할 때
FormsModule                @angular/forms                템플릿 기반 폼을 사용할 때 (NgModel 포함)
ReactiveFormsModule        @angular/forms	반응형 폼을 사용할 때
RouterModule	    @angular/router	RouterLink, .forRoot(), .forChild()를 사용할 때
HttpClientModule	    @angular/common/http	서버와 HTTP 통신을 해야 할 때


* 컴포넌트
1. @Component
컴포넌트는 무조건 NgModule 하나에 declarations 되야함. 안할시 에러발생.
@Component({
    selector:"태그",
    templateUrl:"뷰(html등)",
    styleUrls: ["css"]
})

2. class
export class Card {}
