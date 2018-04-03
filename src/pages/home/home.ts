import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  bdtask: any=[];

  constructor(public navCtrl: NavController,public alertCtrl: AlertController ) {
    //this.bdtaks=['lavar la ropa'];
  }
   
  
    

    addtask() {
      let prompt = this.alertCtrl.create({
        title: 'Tareas',
        message: "Añade una nueva tarea",
        inputs: [
          {
            name: 'title',
            placeholder: 'Descripcion'
          },
        ],
        buttons: [
          {
            text: 'Cancelar',
            handler: data => {
              
            }
          },
          {
            text: 'Agregar',
            handler: data => {
              this.bdtask.push(data);
            }
          }
        ]
      });
      prompt.present();
  }
  editTask(task){
 
    let prompt = this.alertCtrl.create({
        title: 'Editar tarea',
        inputs: [{
            name: 'title'
        }],
        buttons: [
            {
                text: 'Cancelar'
            },
            {
                text: 'Guardar',
                handler: data => {
                    let index = this.bdtask.indexOf(task);

                    if(index > -1){
                      this.bdtask[index] = data;
                    }
                }
            }
        ]
    });

    prompt.present();      

}
deleteTask(task){
 
  let index = this.bdtask.indexOf(task);

  if(index > -1){
      this.bdtask.splice(index, 1);
  }
}


}
