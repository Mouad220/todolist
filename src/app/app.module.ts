import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { environment } from "../environments/environment";
import { GoogleSsoDirective } from "./google-sso.directive";

@NgModule({
  declarations: [  GoogleSsoDirective],
  imports: [
  
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  
  ],exports: [
    AngularFireAuthModule,
    GoogleSsoDirective
  
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}