import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'branches'
  },
  {
    path: "branches",
    loadChildren: () =>
      import("./branches/branches.module").then(m => m.BranchesModule)
  },
  {
    path: "accounts",
    loadChildren: () =>
      import("./accounts/accounts.module").then(m => m.AccountsModule)
  },
  {
    path: "transactions",
    loadChildren: () =>
      import("./transactions/transactions.module").then(
        m => m.TransactionsModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
