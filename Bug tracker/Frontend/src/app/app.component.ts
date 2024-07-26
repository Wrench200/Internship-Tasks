import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReportComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
