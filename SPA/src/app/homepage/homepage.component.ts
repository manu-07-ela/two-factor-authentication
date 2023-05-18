import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpWebcamComponent } from '../pop-up-webcam/pop-up-webcam.component';
import { WebcamImage } from 'ngx-webcam';
import { UserController } from 'src/controllers/user.controller';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  title = 'SPA';
  userImage : WebcamImage | undefined;
  imageSetted : boolean = false;
  isVisible = false;

  constructor(private dialog: MatDialog, private userController: UserController) {}



  async ngOnInit() {

    const signUpButton: HTMLElement = document.getElementById('signUp')!;
    const signInButton: HTMLElement = document.getElementById('signIn')!;
    const container: HTMLElement = document.getElementById('container')!;
    
    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });
    
    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });

  }

  openDialog(): void {
    const DialogRef = this.dialog.open(PopUpWebcamComponent)
    const sub = DialogRef.componentInstance.imageSetted.subscribe((image) => {
      this.userImage = image;
      sub.unsubscribe();
      this.imageSetted = true;
      DialogRef.close();
    })
    
  }



  async createUser() {
    const user = {
      email: (<HTMLInputElement>document.getElementById("email")).value,
      password: (<HTMLInputElement>document.getElementById("password")).value,
      name: (<HTMLInputElement>document.getElementById("name")).value,
      image: this.userImage?.imageAsDataUrl
    }
    console.log(user);

    (await this.userController.createUser(user)).subscribe((response) => {
      
    })

    this.imageSetted = false;
    
  }


  async loginUser() {
    const user = {
      email: (<HTMLInputElement>document.getElementById("loginEmail")).value,
      password: (<HTMLInputElement>document.getElementById("loginPassword")).value,
      image: this.userImage?.imageAsBase64
    }
    console.log(user);
    await this.userController.loginUser(user).then((response) => {
      console.log(response);
    })

    this.imageSetted = false;
    
  }

  updateVisibility(event: any) {
    this.isVisible = event.target.checked;
  }

}
