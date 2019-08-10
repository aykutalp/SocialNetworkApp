import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule, TabsModule, BsDatepickerModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxGalleryModule } from 'ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';
import { TimeAgoPipe } from 'time-ago-pipe';

import { AuthService } from './services/auth.service';
import { ErrorInterceptorProvider } from './services/error.interceptor';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FriendsComponent } from './friends/friends.component';
import { MessagesComponent } from './messages/messages.component';
import { FriendListComponent } from './friends/friend-list/friend-list.component';
import { FriendCardComponent } from './friends/friend-card/friend-card.component';
import { FriendDetailComponent } from './friends/friend-detail/friend-detail.component';
import { ListsComponent } from './lists/lists.component';
import { FriendDetailResolver } from './_resolvers/friend-detail.resolver';
import { FriendListResolver } from './_resolvers/friend-list.resolver';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ProfileEditResolver } from './_resolvers/profile-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { PhotoEditorComponent } from './profile/photo-editor/photo-editor.component';



export function tokenGetter(){
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      FriendsComponent,
      MessagesComponent,
      FriendListComponent,
      FriendCardComponent,
      FriendDetailComponent,
      ListsComponent,
      EditProfileComponent,
      PhotoEditorComponent,
      TimeAgoPipe
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      NgxGalleryModule,
      FileUploadModule,
      TabsModule.forRoot(),
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })
   ],
   providers: [
      AuthService,
      PreventUnsavedChanges,
      ErrorInterceptorProvider,
      FriendDetailResolver,
      FriendListResolver,
      ProfileEditResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
