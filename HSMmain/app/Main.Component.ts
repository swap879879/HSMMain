
import { Component } from '@angular/core';
import { MatInput, MatFormField } from '@angular/material'

@Component({
    
    selector: 'main-component',

    template: `<div class='container'>   <ul>
            <li >
                <a><span>Menu</span></a>
                <nav>
                    <div >
                        <ul >
                            <li>
                                <a routerLink="product" class="gn-icon gn-icon-archive">Archives</a>
                            </li>
                        </ul>

                    </div><!-- /gn-scroller -->
                </nav>

            </li>
        </ul>
</div>
        <header>
            <router-outlet></router-outlet>
            
        </header>

  
  <script>
			new gnMenu( document.getElementById( 'gn-menu' ) );
    </script>
`
    

})
export class MainComponent {
    title = 'DemoApp';
}
