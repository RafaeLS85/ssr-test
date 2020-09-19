import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegistroComponent } from "./registro/registro.component";


const routes: Routes = [
  { path: "home", component: HomeComponent },

  {
    path: "catalogo",
    loadChildren: () =>
      import(`./catalogo/catalogo.module`).then((m) => m.CatalogoModule),
  },
  {
    path: "usuarios",
    loadChildren: () =>
      import(`./usuarios/usuarios.module`).then((m) => m.UsuariosModule),
  },
  {
    path: "detalle/:id",
    loadChildren: () =>
      import(`./detalle/detalle.module`).then((m) => m.DetalleModule),
  },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
