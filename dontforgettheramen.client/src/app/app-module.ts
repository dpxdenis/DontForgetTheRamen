import { HttpClientModule } from '@angular/common/http';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SkeletonModule } from 'primeng/skeleton';
import { CheckboxModule } from 'primeng/checkbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ShoppingListComponent } from './shopping-list-component/shopping-list-component';
import { ShoppingListItemComponent } from './shopping-list-item-component/shopping-list-item-component';
import { MessageService } from 'primeng/api';
import { ShoppingListItemAddDialogComponent } from './shopping-list-item-add-dialog-component/shopping-list-item-add-dialog-component';

@NgModule({
  declarations: [
    App,
    ShoppingListComponent,
    ShoppingListItemComponent,
    ShoppingListItemAddDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MenubarModule,
    BadgeModule,
    OverlayBadgeModule,
    AvatarModule,
    AvatarGroupModule,
    InputTextModule,
    CardModule,
    SkeletonModule,
    CheckboxModule,
    FormsModule,
    FloatLabelModule,
    ScrollPanelModule,
    AccordionModule,
    DividerModule,
    ToastModule,
    ButtonModule,
    DialogModule,
    InputNumberModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
      ripple: true,
    }),
    MessageService,
  ],
  bootstrap: [App],
})
export class AppModule {}
