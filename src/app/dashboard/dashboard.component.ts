import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Counter } from '../counter/counter';

@Component({
  selector: 'app-dashboardTest',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row
   * @@확인필요@@
   * api문서를 보니 미디어 쿼리를 받아서 동적으로 사이즈를 적용시키는 거 같은데 조금 더 확인을 해봐야 함
   * 마우스 휠을 돌려서 사이즈를 강제로 변경하거나 개발자도구로 사이즈를 바꿔보면 확인가능
   */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 51', cols: 1, rows: 1, child:'a' },
        ];
      }
      return [
        { title: 'Card 31', cols: 2, rows: 1, child:'b' },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
