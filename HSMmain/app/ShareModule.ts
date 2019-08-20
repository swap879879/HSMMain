import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"
import { MatFormFieldModule, MatCardModule, MatSidenavModule, MatTabsModule, MatTableModule, MatButtonModule} from "@angular/material";

@NgModule({
    imports: [CommonModule, MatFormFieldModule, MatCardModule, MatSidenavModule, MatTabsModule, MatTableModule,MatButtonModule],
    declarations:[],
    exports: [CommonModule, MatFormFieldModule, MatCardModule, MatSidenavModule, MatTabsModule, MatTableModule, MatButtonModule]
})

export class ShareModule {

}