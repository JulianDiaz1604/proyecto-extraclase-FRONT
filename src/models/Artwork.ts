export interface Artwork{
  tittle: any;
  description: any;
  publicationDate: Date;
  category: any;
  artworkType: any;
}
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
// <title>Register</title>
// </head>
// <body>
// <div fxLayout="row" fxLayoutAlign="space-between stretch" class="topBar">
// <div fxLayout="column" fxFlex="20"></div>
//   <div fxLayout="column" fxFlex="60">
// <div fxLayout="row" fxFlex="100">
// <div fxLayout="column" fxFlex="40"></div>
//   <div fxLayout="column" fxFlex="30">
// <img (click)="goHome()" class="artdly" src="assets/artdlyLogo.png">
//   </div>
//   </div>
//   </div>
//   <div fxLayout="column" fxFlex="20"></div>
//   </div>
//   <div style="height: 60px"></div>
//   <div fxLayout="row" fxLayoutAlign="space-between stretch" class="contentBody">
//   <mat-card class="center" style="width: 80%; height: 90%">
// <div fxLayout="column" fxFlex="50">
// <img class="center" src="assets/register.jpeg">
//   </div>
//   <div fxLayout="column" fxFlex="50">
// <div fxLayout="column" fxFlex="80" class="center" style="width: 100%; padding-left: 30px">
// <div fxLayout="row" fxFlex="12.5" style="font-size: xx-large; padding-top: 15px">
//   Registrate
//   </div>
//   <div fxLayout="row" fxFlex="12.5" style="width: 100%; padding-top: 10px">
//   <input #name placeholder="Nombre" type="text" style="width: 70%" class="input2" required="">
//   </div>
//   <div fxLayout="row" fxFlex="12.5" style="width: 100%; padding-top: 10px">
//   <input #lastname placeholder="Apellido" type="text" style="width: 70%" class="input2" required="">
//   </div>
//   <div fxLayout="row" fxFlex="12.5" style="width: 100%; padding-top: 10px">
//   <input #email placeholder="Correo" type="text" style="width: 70%" class="input2" required="">
//   </div>
//   <div fxLayout="row" fxFlex="12.5" style="width: 100%; padding-top: 10px">
//   <input #nick placeholder="Nick" type="text" style="width: 70%" class="input2" required="">
//   </div>
//   <div fxLayout="row" fxFlex="12.5" style="width: 100%; padding-top: 10px">
//   <input #password placeholder="Contraseña" type="password" style="width: 70%" class="input2" required="">
//   </div>
//   <div fxLayout="row" fxFlex="12.5" style="width: 100%; padding-top: 10px">
//   <input #description placeholder="Describete" type="text" style="width: 70%" class="input2" required="">
//   </div>
//   <div fxLayout="row" fxFlex="12.5" style="width: 100%; padding-top: 10px">
//   <input #birthDate placeholder="Fecha de nacimiento (aaaa-mm-dd)" type="text" style="width: 70%" class="input2" required="">
//   </div>
//   </div>
//   <div fxLayout="row" fxFlex="20">
// <div fxLayout="column" fxFlex="50" style="padding-top: 30px; padding-left: 0px">
// <button (click)="goHome()" class="center2">
//   Cancelar
//   </button>
//   </div>
//   <div fxLayout="column" fxFlex="50" style="padding-top: 30px">
// <button (click)="registerUser(name.value, lastname.value, email.value, nick.value, password.value, description.value, birthDate.value)" class="center2">
// <button (click)="goHome()" class="center2">
//   Continuar
//   </button>
//   </div>
//   </div>
//   </div>
//   </mat-card>
//   </div>
//   </body>
//   </html>
