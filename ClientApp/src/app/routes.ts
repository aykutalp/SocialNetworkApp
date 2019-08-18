import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FriendsComponent } from './friends/friends.component';
import { MessagesComponent } from './messages/messages.component';
import { FriendListComponent } from './friends/friend-list/friend-list.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { FriendDetailComponent } from './friends/friend-detail/friend-detail.component';
import { FriendDetailResolver } from './_resolvers/friend-detail.resolver';
import { FriendListResolver } from './_resolvers/friend-list.resolver';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ProfileEditResolver } from './_resolvers/profile-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ListsResolver } from './_resolvers/lists.resolver';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'friends', component: FriendListComponent, resolve: {users: FriendListResolver}},
            { path: 'friends/:id', component: FriendDetailComponent, resolve: {user: FriendDetailResolver}},
            { path: 'messages', component: MessagesComponent},
            { path: 'lists', component: ListsComponent, resolve: {users: ListsResolver}},
            { path: 'profile/edit', component: EditProfileComponent, 
                resolve: {user: ProfileEditResolver}, canDeactivate: [PreventUnsavedChanges]},

        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];