import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
@Component({
  selector: "app-angelshield",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./angelshield.component.html",
  host: { class: "product-page" },
})
export class AngelShieldComponent {
  readonly play =
    "https://play.google.com/store/apps/details?id=com.kurt.angelshieldplus";
}
