import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatProgressSpinnerModule,MatCardModule, MatSidenavModule, MatTabsModule, MatTableModule, MatButtonModule} from "@angular/material";

@NgModule({
    imports: [CommonModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSidenavModule, MatTabsModule, MatTableModule, MatButtonModule, FormsModule],
    declarations:[],
    exports: [CommonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatProgressSpinnerModule, MatSidenavModule, MatTabsModule, MatTableModule, MatButtonModule, FormsModule]
})

export class ShareModule {

}