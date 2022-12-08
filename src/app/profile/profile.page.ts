import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { FeedService } from "../services/feed.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  profileId: any;
  public personagem: any;

  constructor(private rick: FeedService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get("id");

    this.rick.abrePersonagem(this.profileId).subscribe((data) => {

      this.personagem = data;
      this.personagem = Array.of(this.personagem)
    });


    // this.http
    //   .get("https://rickandmortyapi.com/api/character/" + this.profileId)
    //   .subscribe((res) => {
    //     this.chracter = res;
    //   });
  }
}
