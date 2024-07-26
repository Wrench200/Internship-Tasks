import { Component, createComponent } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReportComponent } from './components/report/report.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReportComponent, ListComponent, CreateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
