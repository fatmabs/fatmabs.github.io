import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { HeaderComponent } from './header/header.component';



@NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      ProjectsComponent,
      ContactComponent,
      AboutComponent,
      HeaderComponent

  
    ],
    imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule, 
    MatCardModule,
    MatGridListModule,
    MatButtonModule
    

    
    
    ],
    providers: [
    provideAnimationsAsync('noop')
  ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  