import {Component} from "angular2/core";
// import * as jwt from "angular2-jwt/angular2-jwt";
// or change to below
// import {AuthHttp} from "angular2-jwt/angular2-jwt";

@Component({
  selector: "sd-about",
  moduleId: module.id,
  templateUrl: "/about/components/about.component.html",
  styleUrls: ["/about/components/about.component.css"]
})
export class AboutComponent {
  constructor() {
    // testing code to add the external depenency of jwt
    // console.log(jwt.AuthConfig);
  }
}
