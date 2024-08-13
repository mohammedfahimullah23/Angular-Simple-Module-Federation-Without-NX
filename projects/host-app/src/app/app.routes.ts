import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { AsifComponentComponent } from './asif-component/asif-component.component';

const MFEURl = 'http://localhost:4300/remoteEntry.js';

export const routes: Routes = [
  {
    path: 'fahim',
    loadComponent: () => {
      return loadRemoteModule({
        remoteEntry: MFEURl,
        remoteName: 'mfeApp',
        exposedModule: './Fahim'
      }).then(m => m.AppComponent).catch(err => console.log("err",err))
    },
  },
  {
    path: 'asif',
    component: AsifComponentComponent
  }
];
