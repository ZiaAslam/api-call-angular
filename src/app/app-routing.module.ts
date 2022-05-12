import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { CommentComponent } from './comment/comment.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
{
  path:'post',
  component:PostComponent
},
{
  path:'comment',
  component:CommentComponent
},
{
  path:'album',
  component:AlbumComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
